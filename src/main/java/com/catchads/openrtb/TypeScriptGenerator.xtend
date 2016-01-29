package com.catchads.openrtb

import org.eclipse.emf.common.util.URI
import org.eclipse.emf.ecore.EAttribute
import org.eclipse.emf.ecore.EClass
import org.eclipse.emf.ecore.EObject
import org.eclipse.emf.ecore.EPackage
import org.eclipse.emf.ecore.resource.Resource
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl
import org.eclipse.xtext.generator.JavaIoFileSystemAccess
import org.eclipse.xtext.resource.generic.XMLEncodingProvider
import org.eclipse.xtext.resource.impl.ResourceServiceProviderRegistryImpl
import org.eclipse.emf.ecore.EEnum
import org.eclipse.emf.ecore.EDataType
import org.eclipse.emf.ecore.EReference

public class TypeScriptGenerator {
  static String ECORE_FILENAME="src/main/java/com/catchads/openrtb/openrtb-2.3.ecore";
  static String OUTPUT_DIR="languages/typescript/";
  static String TYPESCRIPT_FILE = "OpenRtb.ts";
  
  def static void main(String[] args) {
    new TypeScriptGenerator().generate(ECORE_FILENAME)
  }

  def generate(String file) {
    doEMFSetup
    var ResourceServiceProviderRegistryImpl registry = new ResourceServiceProviderRegistryImpl();
    var JavaIoFileSystemAccess fsa = new JavaIoFileSystemAccess(registry,new XMLEncodingProvider());
   	fsa.setOutputPath(OUTPUT_DIR);
   	
    val resourceSet = new ResourceSetImpl
    val resource = resourceSet.getResource(URI.createURI(file), true)
    for (content : resource.contents) {
      if(content instanceof EPackage){
      	fsa.generateFile(TYPESCRIPT_FILE,generateCode(content))
      }
    }
  }

  def dispatch generateCode(EPackage pkg) '''
  	/** GENERATED FILE : SHOULD NOT BE EDITED */
    «FOR content : pkg.eContents»
     	«generateCode(content)»
    «ENDFOR»
  '''

 def dispatch generateCode(EObject eObj) '''
 '''
 
  def dispatch generateCode(EEnum eenum) '''
  	
  	export enum «eenum.name» {
  		«FOR l : eenum.ELiterals SEPARATOR ','»
  		 	«l.name» = «l.value»
  		 «ENDFOR»
  	}
  	
 '''
 
  def dispatch generateCode(EDataType dt) '''
  	«IF dt.name == "string"»
  	«ELSEIF dt.name == "any"»
  	«ELSE»
  		export type «dt.name» = «dt.instanceTypeName»;
  	«ENDIF»
 '''
 

 
 def dispatch generateCode(EClass kls) '''
 	export class «kls.name» {
 		«FOR attr : kls.EAttributes»
 			«generateDeclaration(attr)»
 		«ENDFOR»
 		
 		«FOR ref : kls.EReferences»
 		 	«generateDeclaration(ref)»
 		«ENDFOR»
 		 		
 		«FOR attr : kls.EAttributes»
 		 	«generateGetters(attr)»
 		«ENDFOR»
 		
 		
 		 		
 		toJSON(){
 			var json = {};
 				«FOR attr : kls.EAttributes»
 					if(typeof this.«attr.name» !== 'undefined'){
 				 		«IF attr.upperBound == 1»
 				 			json["«attr.name»"] = this.«attr.name»;
 				 		«ELSE»
 				 		 json["«attr.name»"] = [];
 				 		 this.«attr.name».map(function(e){
 				 		 	json["«attr.name»"].push(e);
 				 		 });
 				 		«ENDIF»
 				 	}
 				«ENDFOR»
 				«FOR ref : kls.EReferences»
 				 	if(typeof this.«ref.name» !== 'undefined'){
 				 		«IF ref.upperBound == 1»
 				 			json["«ref.name»"] = this.«ref.name».toJSON();
 				 		«ELSE»
 				 			this.«ref.name» = [];
 				 			this.«ref.name».map(function(e){
 				 				json["«ref.name»"].push(e.toJSON());
 				 			});
 				 		«ENDIF»
 				 	}
 				 «ENDFOR»
 				return json;
 			
 		}
 		
 		fromJSON(json : any){
 		 		«FOR attr : kls.EAttributes»
 		 			if(typeof json["«attr.name»"] !== 'undefined'){
 		 				 this.«attr.name» = json["«attr.name»"];
 		 			}else{
 		 				delete this.«attr.name»;
 		 			}
 		 		«ENDFOR»
 		 		«FOR ref : kls.EReferences»
 		 		 	if(typeof json["«ref.name»"] !== 'undefined'){
 		 		 		«IF ref.upperBound == 1»
 		 		 		if(typeof this.«ref.name» !== 'undefined'){
 		 		 			this.«ref.name».fromJSON(json);
 		 		 		}else{
 		 		 			this.«ref.name» = new «ref.EType.name»().fromJSON(json["«ref.name»"]);
 		 		 		}
 		 		 		«ELSE»
 		 		 		if(typeof this.«ref.name» !== 'undefined'){
 		 		 			this.«ref.name».length = 0
 		 		 		}else{
 		 		 			this.«ref.name» = [];
 		 		 		}
 		 		 		var self = this;
 		 		 		json["«ref.name»"].map(function(e){
 		 		 			self.«ref.name».push(new «ref.EType.name»().fromJSON(e))
 		 		 		});	 			
 		 		 		«ENDIF»
 		 		 	}else{
 		 		 		delete this.«ref.name»;
 		 		 	}
 		 		 «ENDFOR»
 		 	return this;
 		 }
 	}
 '''
 
 def dispatch generateDeclaration(EAttribute attr) '''
 	«IF attr.upperBound == 1»
 		private «attr.name» : «attr.EType.name»;
 	«ELSE»
 		private «attr.name» : «attr.EType.name»[];
 	«ENDIF»
 '''
 
  def dispatch generateDeclaration(EReference ref) '''
 	«IF ref.upperBound == 1»
 		private «ref.name» : «ref.EType.name»;
 	«ELSE»
 		private «ref.name» : «ref.EType.name»[];
 	«ENDIF»
 '''

 def dispatch generateGetters(EAttribute attr) '''
 	 get«attr.name.toFirstUpper»(){
 	 	return this.«attr.name»
 	 }
 	 
 	 «IF attr.upperBound == 1»
 	 	set«attr.name.toFirstUpper»(«attr.name» : «attr.EType.name»){
 	  		 this.«attr.name» = «attr.name»;
 	  		 return this;
 	 	}
 	 «ELSE»
 	 	set«attr.name.toFirstUpper»(«attr.name» : «attr.EType.name»[]){
 	 	 	  this.«attr.name» = «attr.name»;
 	 	 	  return this;
 	 	 }
 	 «ENDIF»
 '''
 

  def doEMFSetup() {
    Resource.Factory.Registry.INSTANCE.extensionToFactoryMap.put("ecore", new XMIResourceFactoryImpl);
   	
  }


}