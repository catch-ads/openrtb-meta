/** GENERATED FILE : SHOULD NOT BE EDITED */
    export class BidRequest {
    	private id : string;
    	private test : EnumTest;
    	private at : EnumAuctionType;
    	private tmax : integer;
    	private wseat : string[];
    	private allimps : EnumAllImp;
    	private cur : EnumIso4217[];
    	private bcat : EnumContentCategory[];
    	private badv : string[];
    	
    	private imp : Imp[];
    	private site : Site;
    	private app : App;
    	private device : Device;
    	private user : User;
    	private regs : Regs;
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getTest() : EnumTest{
    		return this.test
    	}
    	 
    	setTest(test : EnumTest){
    	 	  		this.test = test;
    	 	  		return this;
    	}
    	getAt() : EnumAuctionType{
    		return this.at
    	}
    	 
    	setAt(at : EnumAuctionType){
    	 	  		this.at = at;
    	 	  		return this;
    	}
    	getTmax() : integer{
    		return this.tmax
    	}
    	 
    	setTmax(tmax : integer){
    	 	  		this.tmax = tmax;
    	 	  		return this;
    	}
    	getWseat(): string[] {
    		 	return this.wseat
    		 }
    	 
    	setWseat(wseat : string[]){
    		this.wseat = wseat;
    		return this;
    	}
    	getAllimps() : EnumAllImp{
    		return this.allimps
    	}
    	 
    	setAllimps(allimps : EnumAllImp){
    	 	  		this.allimps = allimps;
    	 	  		return this;
    	}
    	getCur(): EnumIso4217[] {
    		 	return this.cur
    		 }
    	 
    	setCur(cur : EnumIso4217[]){
    		this.cur = cur;
    		return this;
    	}
    	getBcat(): EnumContentCategory[] {
    		 	return this.bcat
    		 }
    	 
    	setBcat(bcat : EnumContentCategory[]){
    		this.bcat = bcat;
    		return this;
    	}
    	getBadv(): string[] {
    		 	return this.badv
    		 }
    	 
    	setBadv(badv : string[]){
    		this.badv = badv;
    		return this;
    	}
    	
    	getImp(): Imp[] {
    		return this.imp
    	}
    	
    	setImp(imp : Imp[]){
    	 	  this.imp = imp;
    	 	  return this;
    	 }
    	getSite() : Site{
    	 	return this.site
    	}
    	
    	setSite(site : Site){
    	 	  		 this.site = site;
    	 	  		 return this;
    	}
    	getApp() : App{
    	 	return this.app
    	}
    	
    	setApp(app : App){
    	 	  		 this.app = app;
    	 	  		 return this;
    	}
    	getDevice() : Device{
    	 	return this.device
    	}
    	
    	setDevice(device : Device){
    	 	  		 this.device = device;
    	 	  		 return this;
    	}
    	getUser() : User{
    	 	return this.user
    	}
    	
    	setUser(user : User){
    	 	  		 this.user = user;
    	 	  		 return this;
    	}
    	getRegs() : Regs{
    	 	return this.regs
    	}
    	
    	setRegs(regs : Regs){
    	 	  		 this.regs = regs;
    	 	  		 return this;
    	}
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.test !== 'undefined'){
     				 		json["test"] = this.test;
     				 	}
    			if(typeof this.at !== 'undefined'){
     				 		json["at"] = this.at;
     				 	}
    			if(typeof this.tmax !== 'undefined'){
     				 		json["tmax"] = this.tmax;
     				 	}
    			if(typeof this.wseat !== 'undefined'){
     				 		json["wseat"] = [];
     				 		this.wseat.map(function(e){
     				 			json["wseat"].push(e);
     				 		});
     				 	}
    			if(typeof this.allimps !== 'undefined'){
     				 		json["allimps"] = this.allimps;
     				 	}
    			if(typeof this.cur !== 'undefined'){
     				 		json["cur"] = [];
     				 		this.cur.map(function(e){
     				 			json["cur"].push(e);
     				 		});
     				 	}
    			if(typeof this.bcat !== 'undefined'){
     				 		json["bcat"] = [];
     				 		this.bcat.map(function(e){
     				 			json["bcat"].push(e);
     				 		});
     				 	}
    			if(typeof this.badv !== 'undefined'){
     				 		json["badv"] = [];
     				 		this.badv.map(function(e){
     				 			json["badv"].push(e);
     				 		});
     				 	}
    			if(typeof this.imp !== 'undefined'){
    				this.imp = [];
    				this.imp.map(function(e){
    					json["imp"].push(e.toJSON());
    				});
    			}
    			if(typeof this.site !== 'undefined'){
    				json["site"] = this.site.toJSON();
    			}
    			if(typeof this.app !== 'undefined'){
    				json["app"] = this.app.toJSON();
    			}
    			if(typeof this.device !== 'undefined'){
    				json["device"] = this.device.toJSON();
    			}
    			if(typeof this.user !== 'undefined'){
    				json["user"] = this.user.toJSON();
    			}
    			if(typeof this.regs !== 'undefined'){
    				json["regs"] = this.regs.toJSON();
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["test"] !== 'undefined'){
    	 			 this.test = json["test"];
    	 		}else{
    	 			delete this.test;
    	 		}
    	 		if(typeof json["at"] !== 'undefined'){
    	 			 this.at = json["at"];
    	 		}else{
    	 			delete this.at;
    	 		}
    	 		if(typeof json["tmax"] !== 'undefined'){
    	 			 this.tmax = json["tmax"];
    	 		}else{
    	 			delete this.tmax;
    	 		}
    	 		if(typeof json["wseat"] !== 'undefined'){
    	 			 this.wseat = json["wseat"];
    	 		}else{
    	 			delete this.wseat;
    	 		}
    	 		if(typeof json["allimps"] !== 'undefined'){
    	 			 this.allimps = json["allimps"];
    	 		}else{
    	 			delete this.allimps;
    	 		}
    	 		if(typeof json["cur"] !== 'undefined'){
    	 			 this.cur = json["cur"];
    	 		}else{
    	 			delete this.cur;
    	 		}
    	 		if(typeof json["bcat"] !== 'undefined'){
    	 			 this.bcat = json["bcat"];
    	 		}else{
    	 			delete this.bcat;
    	 		}
    	 		if(typeof json["badv"] !== 'undefined'){
    	 			 this.badv = json["badv"];
    	 		}else{
    	 			delete this.badv;
    	 		}
    	 		if(typeof json["imp"] !== 'undefined'){
    	 			if(typeof this.imp !== 'undefined'){
    	 				this.imp.length = 0
    	 			}else{
    	 				this.imp = [];
    	 			}
    	 			var self = this;
    	 			json["imp"].map(function(e){
    	 				self.imp.push(new Imp().fromJSON(e))
    	 			});	 			
    	 		}else{
    	 			delete this.imp;
    	 		}
    	 		if(typeof json["site"] !== 'undefined'){
    	 			if(typeof this.site !== 'undefined'){
    	 				this.site.fromJSON(json);
    	 			}else{
    	 				this.site = new Site().fromJSON(json["site"]);
    	 			}
    	 		}else{
    	 			delete this.site;
    	 		}
    	 		if(typeof json["app"] !== 'undefined'){
    	 			if(typeof this.app !== 'undefined'){
    	 				this.app.fromJSON(json);
    	 			}else{
    	 				this.app = new App().fromJSON(json["app"]);
    	 			}
    	 		}else{
    	 			delete this.app;
    	 		}
    	 		if(typeof json["device"] !== 'undefined'){
    	 			if(typeof this.device !== 'undefined'){
    	 				this.device.fromJSON(json);
    	 			}else{
    	 				this.device = new Device().fromJSON(json["device"]);
    	 			}
    	 		}else{
    	 			delete this.device;
    	 		}
    	 		if(typeof json["user"] !== 'undefined'){
    	 			if(typeof this.user !== 'undefined'){
    	 				this.user.fromJSON(json);
    	 			}else{
    	 				this.user = new User().fromJSON(json["user"]);
    	 			}
    	 		}else{
    	 			delete this.user;
    	 		}
    	 		if(typeof json["regs"] !== 'undefined'){
    	 			if(typeof this.regs !== 'undefined'){
    	 				this.regs.fromJSON(json);
    	 			}else{
    	 				this.regs = new Regs().fromJSON(json["regs"]);
    	 			}
    	 		}else{
    	 			delete this.regs;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Imp {
    	private id : string;
    	private displaymanager : string;
    	private displaymanagerserver : string;
    	private instl : EnumInterstitial;
    	private tagid : string;
    	private bidfloor : integer;
    	private bidfloorcur : EnumIso4217;
    	private iframebuster : string[];
    	
    	private banner : Banner;
    	private video : Video;
    	private native : Native;
    	private pmp : Pmp;
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getDisplaymanager() : string{
    		return this.displaymanager
    	}
    	 
    	setDisplaymanager(displaymanager : string){
    	 	  		this.displaymanager = displaymanager;
    	 	  		return this;
    	}
    	getDisplaymanagerserver() : string{
    		return this.displaymanagerserver
    	}
    	 
    	setDisplaymanagerserver(displaymanagerserver : string){
    	 	  		this.displaymanagerserver = displaymanagerserver;
    	 	  		return this;
    	}
    	getInstl() : EnumInterstitial{
    		return this.instl
    	}
    	 
    	setInstl(instl : EnumInterstitial){
    	 	  		this.instl = instl;
    	 	  		return this;
    	}
    	getTagid() : string{
    		return this.tagid
    	}
    	 
    	setTagid(tagid : string){
    	 	  		this.tagid = tagid;
    	 	  		return this;
    	}
    	getBidfloor() : integer{
    		return this.bidfloor
    	}
    	 
    	setBidfloor(bidfloor : integer){
    	 	  		this.bidfloor = bidfloor;
    	 	  		return this;
    	}
    	getBidfloorcur() : EnumIso4217{
    		return this.bidfloorcur
    	}
    	 
    	setBidfloorcur(bidfloorcur : EnumIso4217){
    	 	  		this.bidfloorcur = bidfloorcur;
    	 	  		return this;
    	}
    	getIframebuster(): string[] {
    		 	return this.iframebuster
    		 }
    	 
    	setIframebuster(iframebuster : string[]){
    		this.iframebuster = iframebuster;
    		return this;
    	}
    	
    	getBanner() : Banner{
    	 	return this.banner
    	}
    	
    	setBanner(banner : Banner){
    	 	  		 this.banner = banner;
    	 	  		 return this;
    	}
    	getVideo() : Video{
    	 	return this.video
    	}
    	
    	setVideo(video : Video){
    	 	  		 this.video = video;
    	 	  		 return this;
    	}
    	getNative() : Native{
    	 	return this.native
    	}
    	
    	setNative(native : Native){
    	 	  		 this.native = native;
    	 	  		 return this;
    	}
    	getPmp() : Pmp{
    	 	return this.pmp
    	}
    	
    	setPmp(pmp : Pmp){
    	 	  		 this.pmp = pmp;
    	 	  		 return this;
    	}
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.displaymanager !== 'undefined'){
     				 		json["displaymanager"] = this.displaymanager;
     				 	}
    			if(typeof this.displaymanagerserver !== 'undefined'){
     				 		json["displaymanagerserver"] = this.displaymanagerserver;
     				 	}
    			if(typeof this.instl !== 'undefined'){
     				 		json["instl"] = this.instl;
     				 	}
    			if(typeof this.tagid !== 'undefined'){
     				 		json["tagid"] = this.tagid;
     				 	}
    			if(typeof this.bidfloor !== 'undefined'){
     				 		json["bidfloor"] = this.bidfloor;
     				 	}
    			if(typeof this.bidfloorcur !== 'undefined'){
     				 		json["bidfloorcur"] = this.bidfloorcur;
     				 	}
    			if(typeof this.iframebuster !== 'undefined'){
     				 		json["iframebuster"] = [];
     				 		this.iframebuster.map(function(e){
     				 			json["iframebuster"].push(e);
     				 		});
     				 	}
    			if(typeof this.banner !== 'undefined'){
    				json["banner"] = this.banner.toJSON();
    			}
    			if(typeof this.video !== 'undefined'){
    				json["video"] = this.video.toJSON();
    			}
    			if(typeof this.native !== 'undefined'){
    				json["native"] = this.native.toJSON();
    			}
    			if(typeof this.pmp !== 'undefined'){
    				json["pmp"] = this.pmp.toJSON();
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["displaymanager"] !== 'undefined'){
    	 			 this.displaymanager = json["displaymanager"];
    	 		}else{
    	 			delete this.displaymanager;
    	 		}
    	 		if(typeof json["displaymanagerserver"] !== 'undefined'){
    	 			 this.displaymanagerserver = json["displaymanagerserver"];
    	 		}else{
    	 			delete this.displaymanagerserver;
    	 		}
    	 		if(typeof json["instl"] !== 'undefined'){
    	 			 this.instl = json["instl"];
    	 		}else{
    	 			delete this.instl;
    	 		}
    	 		if(typeof json["tagid"] !== 'undefined'){
    	 			 this.tagid = json["tagid"];
    	 		}else{
    	 			delete this.tagid;
    	 		}
    	 		if(typeof json["bidfloor"] !== 'undefined'){
    	 			 this.bidfloor = json["bidfloor"];
    	 		}else{
    	 			delete this.bidfloor;
    	 		}
    	 		if(typeof json["bidfloorcur"] !== 'undefined'){
    	 			 this.bidfloorcur = json["bidfloorcur"];
    	 		}else{
    	 			delete this.bidfloorcur;
    	 		}
    	 		if(typeof json["iframebuster"] !== 'undefined'){
    	 			 this.iframebuster = json["iframebuster"];
    	 		}else{
    	 			delete this.iframebuster;
    	 		}
    	 		if(typeof json["banner"] !== 'undefined'){
    	 			if(typeof this.banner !== 'undefined'){
    	 				this.banner.fromJSON(json);
    	 			}else{
    	 				this.banner = new Banner().fromJSON(json["banner"]);
    	 			}
    	 		}else{
    	 			delete this.banner;
    	 		}
    	 		if(typeof json["video"] !== 'undefined'){
    	 			if(typeof this.video !== 'undefined'){
    	 				this.video.fromJSON(json);
    	 			}else{
    	 				this.video = new Video().fromJSON(json["video"]);
    	 			}
    	 		}else{
    	 			delete this.video;
    	 		}
    	 		if(typeof json["native"] !== 'undefined'){
    	 			if(typeof this.native !== 'undefined'){
    	 				this.native.fromJSON(json);
    	 			}else{
    	 				this.native = new Native().fromJSON(json["native"]);
    	 			}
    	 		}else{
    	 			delete this.native;
    	 		}
    	 		if(typeof json["pmp"] !== 'undefined'){
    	 			if(typeof this.pmp !== 'undefined'){
    	 				this.pmp.fromJSON(json);
    	 			}else{
    	 				this.pmp = new Pmp().fromJSON(json["pmp"]);
    	 			}
    	 		}else{
    	 			delete this.pmp;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Banner {
    	private w : integer;
    	private h : integer;
    	private wmax : integer;
    	private hmax : integer;
    	private wmin : integer;
    	private hmin : integer;
    	private id : string;
    	private btype : integer[];
    	private battr : integer[];
    	private pos : integer;
    	private mines : string[];
    	private topframe : integer;
    	private expdir : integer[];
    	private api : integer[];
    	
    	private ext : Any;
    	 		
    	getW() : integer{
    		return this.w
    	}
    	 
    	setW(w : integer){
    	 	  		this.w = w;
    	 	  		return this;
    	}
    	getH() : integer{
    		return this.h
    	}
    	 
    	setH(h : integer){
    	 	  		this.h = h;
    	 	  		return this;
    	}
    	getWmax() : integer{
    		return this.wmax
    	}
    	 
    	setWmax(wmax : integer){
    	 	  		this.wmax = wmax;
    	 	  		return this;
    	}
    	getHmax() : integer{
    		return this.hmax
    	}
    	 
    	setHmax(hmax : integer){
    	 	  		this.hmax = hmax;
    	 	  		return this;
    	}
    	getWmin() : integer{
    		return this.wmin
    	}
    	 
    	setWmin(wmin : integer){
    	 	  		this.wmin = wmin;
    	 	  		return this;
    	}
    	getHmin() : integer{
    		return this.hmin
    	}
    	 
    	setHmin(hmin : integer){
    	 	  		this.hmin = hmin;
    	 	  		return this;
    	}
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getBtype(): integer[] {
    		 	return this.btype
    		 }
    	 
    	setBtype(btype : integer[]){
    		this.btype = btype;
    		return this;
    	}
    	getBattr(): integer[] {
    		 	return this.battr
    		 }
    	 
    	setBattr(battr : integer[]){
    		this.battr = battr;
    		return this;
    	}
    	getPos() : integer{
    		return this.pos
    	}
    	 
    	setPos(pos : integer){
    	 	  		this.pos = pos;
    	 	  		return this;
    	}
    	getMines(): string[] {
    		 	return this.mines
    		 }
    	 
    	setMines(mines : string[]){
    		this.mines = mines;
    		return this;
    	}
    	getTopframe() : integer{
    		return this.topframe
    	}
    	 
    	setTopframe(topframe : integer){
    	 	  		this.topframe = topframe;
    	 	  		return this;
    	}
    	getExpdir(): integer[] {
    		 	return this.expdir
    		 }
    	 
    	setExpdir(expdir : integer[]){
    		this.expdir = expdir;
    		return this;
    	}
    	getApi(): integer[] {
    		 	return this.api
    		 }
    	 
    	setApi(api : integer[]){
    		this.api = api;
    		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.w !== 'undefined'){
     				 		json["w"] = this.w;
     				 	}
    			if(typeof this.h !== 'undefined'){
     				 		json["h"] = this.h;
     				 	}
    			if(typeof this.wmax !== 'undefined'){
     				 		json["wmax"] = this.wmax;
     				 	}
    			if(typeof this.hmax !== 'undefined'){
     				 		json["hmax"] = this.hmax;
     				 	}
    			if(typeof this.wmin !== 'undefined'){
     				 		json["wmin"] = this.wmin;
     				 	}
    			if(typeof this.hmin !== 'undefined'){
     				 		json["hmin"] = this.hmin;
     				 	}
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.btype !== 'undefined'){
     				 		json["btype"] = [];
     				 		this.btype.map(function(e){
     				 			json["btype"].push(e);
     				 		});
     				 	}
    			if(typeof this.battr !== 'undefined'){
     				 		json["battr"] = [];
     				 		this.battr.map(function(e){
     				 			json["battr"].push(e);
     				 		});
     				 	}
    			if(typeof this.pos !== 'undefined'){
     				 		json["pos"] = this.pos;
     				 	}
    			if(typeof this.mines !== 'undefined'){
     				 		json["mines"] = [];
     				 		this.mines.map(function(e){
     				 			json["mines"].push(e);
     				 		});
     				 	}
    			if(typeof this.topframe !== 'undefined'){
     				 		json["topframe"] = this.topframe;
     				 	}
    			if(typeof this.expdir !== 'undefined'){
     				 		json["expdir"] = [];
     				 		this.expdir.map(function(e){
     				 			json["expdir"].push(e);
     				 		});
     				 	}
    			if(typeof this.api !== 'undefined'){
     				 		json["api"] = [];
     				 		this.api.map(function(e){
     				 			json["api"].push(e);
     				 		});
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["w"] !== 'undefined'){
    	 			 this.w = json["w"];
    	 		}else{
    	 			delete this.w;
    	 		}
    	 		if(typeof json["h"] !== 'undefined'){
    	 			 this.h = json["h"];
    	 		}else{
    	 			delete this.h;
    	 		}
    	 		if(typeof json["wmax"] !== 'undefined'){
    	 			 this.wmax = json["wmax"];
    	 		}else{
    	 			delete this.wmax;
    	 		}
    	 		if(typeof json["hmax"] !== 'undefined'){
    	 			 this.hmax = json["hmax"];
    	 		}else{
    	 			delete this.hmax;
    	 		}
    	 		if(typeof json["wmin"] !== 'undefined'){
    	 			 this.wmin = json["wmin"];
    	 		}else{
    	 			delete this.wmin;
    	 		}
    	 		if(typeof json["hmin"] !== 'undefined'){
    	 			 this.hmin = json["hmin"];
    	 		}else{
    	 			delete this.hmin;
    	 		}
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["btype"] !== 'undefined'){
    	 			 this.btype = json["btype"];
    	 		}else{
    	 			delete this.btype;
    	 		}
    	 		if(typeof json["battr"] !== 'undefined'){
    	 			 this.battr = json["battr"];
    	 		}else{
    	 			delete this.battr;
    	 		}
    	 		if(typeof json["pos"] !== 'undefined'){
    	 			 this.pos = json["pos"];
    	 		}else{
    	 			delete this.pos;
    	 		}
    	 		if(typeof json["mines"] !== 'undefined'){
    	 			 this.mines = json["mines"];
    	 		}else{
    	 			delete this.mines;
    	 		}
    	 		if(typeof json["topframe"] !== 'undefined'){
    	 			 this.topframe = json["topframe"];
    	 		}else{
    	 			delete this.topframe;
    	 		}
    	 		if(typeof json["expdir"] !== 'undefined'){
    	 			 this.expdir = json["expdir"];
    	 		}else{
    	 			delete this.expdir;
    	 		}
    	 		if(typeof json["api"] !== 'undefined'){
    	 			 this.api = json["api"];
    	 		}else{
    	 			delete this.api;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Video {
    	private mimes : string[];
    	private minduration : integer;
    	private maxduration : integer;
    	private protocol : EnumVideoBidResponseProtocol;
    	private protocols : EnumVideoBidResponseProtocol[];
    	private w : integer;
    	private h : integer;
    	private startdelay : integer;
    	private linearity : integer;
    	private sequence : integer;
    	private battr : EnumCreativeAttribute[];
    	private maxextended : integer;
    	private minbitrate : integer;
    	private maxbitrate : integer;
    	private boxingallowed : integer;
    	private playbackmethod : integer;
    	private delivery : EnumContentDeliveryMethod[];
    	private pos : integer;
    	private api : EnumApiFramework[];
    	private companiontype : EnumVastCompanionType[];
    	
    	private companionad : Banner[];
    	private ext : Any;
    	 		
    	getMimes(): string[] {
    		 	return this.mimes
    		 }
    	 
    	setMimes(mimes : string[]){
    		this.mimes = mimes;
    		return this;
    	}
    	getMinduration() : integer{
    		return this.minduration
    	}
    	 
    	setMinduration(minduration : integer){
    	 	  		this.minduration = minduration;
    	 	  		return this;
    	}
    	getMaxduration() : integer{
    		return this.maxduration
    	}
    	 
    	setMaxduration(maxduration : integer){
    	 	  		this.maxduration = maxduration;
    	 	  		return this;
    	}
    	getProtocol() : EnumVideoBidResponseProtocol{
    		return this.protocol
    	}
    	 
    	setProtocol(protocol : EnumVideoBidResponseProtocol){
    	 	  		this.protocol = protocol;
    	 	  		return this;
    	}
    	getProtocols(): EnumVideoBidResponseProtocol[] {
    		 	return this.protocols
    		 }
    	 
    	setProtocols(protocols : EnumVideoBidResponseProtocol[]){
    		this.protocols = protocols;
    		return this;
    	}
    	getW() : integer{
    		return this.w
    	}
    	 
    	setW(w : integer){
    	 	  		this.w = w;
    	 	  		return this;
    	}
    	getH() : integer{
    		return this.h
    	}
    	 
    	setH(h : integer){
    	 	  		this.h = h;
    	 	  		return this;
    	}
    	getStartdelay() : integer{
    		return this.startdelay
    	}
    	 
    	setStartdelay(startdelay : integer){
    	 	  		this.startdelay = startdelay;
    	 	  		return this;
    	}
    	getLinearity() : integer{
    		return this.linearity
    	}
    	 
    	setLinearity(linearity : integer){
    	 	  		this.linearity = linearity;
    	 	  		return this;
    	}
    	getSequence() : integer{
    		return this.sequence
    	}
    	 
    	setSequence(sequence : integer){
    	 	  		this.sequence = sequence;
    	 	  		return this;
    	}
    	getBattr(): EnumCreativeAttribute[] {
    		 	return this.battr
    		 }
    	 
    	setBattr(battr : EnumCreativeAttribute[]){
    		this.battr = battr;
    		return this;
    	}
    	getMaxextended() : integer{
    		return this.maxextended
    	}
    	 
    	setMaxextended(maxextended : integer){
    	 	  		this.maxextended = maxextended;
    	 	  		return this;
    	}
    	getMinbitrate() : integer{
    		return this.minbitrate
    	}
    	 
    	setMinbitrate(minbitrate : integer){
    	 	  		this.minbitrate = minbitrate;
    	 	  		return this;
    	}
    	getMaxbitrate() : integer{
    		return this.maxbitrate
    	}
    	 
    	setMaxbitrate(maxbitrate : integer){
    	 	  		this.maxbitrate = maxbitrate;
    	 	  		return this;
    	}
    	getBoxingallowed() : integer{
    		return this.boxingallowed
    	}
    	 
    	setBoxingallowed(boxingallowed : integer){
    	 	  		this.boxingallowed = boxingallowed;
    	 	  		return this;
    	}
    	getPlaybackmethod() : integer{
    		return this.playbackmethod
    	}
    	 
    	setPlaybackmethod(playbackmethod : integer){
    	 	  		this.playbackmethod = playbackmethod;
    	 	  		return this;
    	}
    	getDelivery(): EnumContentDeliveryMethod[] {
    		 	return this.delivery
    		 }
    	 
    	setDelivery(delivery : EnumContentDeliveryMethod[]){
    		this.delivery = delivery;
    		return this;
    	}
    	getPos() : integer{
    		return this.pos
    	}
    	 
    	setPos(pos : integer){
    	 	  		this.pos = pos;
    	 	  		return this;
    	}
    	getApi(): EnumApiFramework[] {
    		 	return this.api
    		 }
    	 
    	setApi(api : EnumApiFramework[]){
    		this.api = api;
    		return this;
    	}
    	getCompaniontype(): EnumVastCompanionType[] {
    		 	return this.companiontype
    		 }
    	 
    	setCompaniontype(companiontype : EnumVastCompanionType[]){
    		this.companiontype = companiontype;
    		return this;
    	}
    	
    	getCompanionad(): Banner[] {
    		return this.companionad
    	}
    	
    	setCompanionad(companionad : Banner[]){
    	 	  this.companionad = companionad;
    	 	  return this;
    	 }
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.mimes !== 'undefined'){
     				 		json["mimes"] = [];
     				 		this.mimes.map(function(e){
     				 			json["mimes"].push(e);
     				 		});
     				 	}
    			if(typeof this.minduration !== 'undefined'){
     				 		json["minduration"] = this.minduration;
     				 	}
    			if(typeof this.maxduration !== 'undefined'){
     				 		json["maxduration"] = this.maxduration;
     				 	}
    			if(typeof this.protocol !== 'undefined'){
     				 		json["protocol"] = this.protocol;
     				 	}
    			if(typeof this.protocols !== 'undefined'){
     				 		json["protocols"] = [];
     				 		this.protocols.map(function(e){
     				 			json["protocols"].push(e);
     				 		});
     				 	}
    			if(typeof this.w !== 'undefined'){
     				 		json["w"] = this.w;
     				 	}
    			if(typeof this.h !== 'undefined'){
     				 		json["h"] = this.h;
     				 	}
    			if(typeof this.startdelay !== 'undefined'){
     				 		json["startdelay"] = this.startdelay;
     				 	}
    			if(typeof this.linearity !== 'undefined'){
     				 		json["linearity"] = this.linearity;
     				 	}
    			if(typeof this.sequence !== 'undefined'){
     				 		json["sequence"] = this.sequence;
     				 	}
    			if(typeof this.battr !== 'undefined'){
     				 		json["battr"] = [];
     				 		this.battr.map(function(e){
     				 			json["battr"].push(e);
     				 		});
     				 	}
    			if(typeof this.maxextended !== 'undefined'){
     				 		json["maxextended"] = this.maxextended;
     				 	}
    			if(typeof this.minbitrate !== 'undefined'){
     				 		json["minbitrate"] = this.minbitrate;
     				 	}
    			if(typeof this.maxbitrate !== 'undefined'){
     				 		json["maxbitrate"] = this.maxbitrate;
     				 	}
    			if(typeof this.boxingallowed !== 'undefined'){
     				 		json["boxingallowed"] = this.boxingallowed;
     				 	}
    			if(typeof this.playbackmethod !== 'undefined'){
     				 		json["playbackmethod"] = this.playbackmethod;
     				 	}
    			if(typeof this.delivery !== 'undefined'){
     				 		json["delivery"] = [];
     				 		this.delivery.map(function(e){
     				 			json["delivery"].push(e);
     				 		});
     				 	}
    			if(typeof this.pos !== 'undefined'){
     				 		json["pos"] = this.pos;
     				 	}
    			if(typeof this.api !== 'undefined'){
     				 		json["api"] = [];
     				 		this.api.map(function(e){
     				 			json["api"].push(e);
     				 		});
     				 	}
    			if(typeof this.companiontype !== 'undefined'){
     				 		json["companiontype"] = [];
     				 		this.companiontype.map(function(e){
     				 			json["companiontype"].push(e);
     				 		});
     				 	}
    			if(typeof this.companionad !== 'undefined'){
    				this.companionad = [];
    				this.companionad.map(function(e){
    					json["companionad"].push(e.toJSON());
    				});
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["mimes"] !== 'undefined'){
    	 			 this.mimes = json["mimes"];
    	 		}else{
    	 			delete this.mimes;
    	 		}
    	 		if(typeof json["minduration"] !== 'undefined'){
    	 			 this.minduration = json["minduration"];
    	 		}else{
    	 			delete this.minduration;
    	 		}
    	 		if(typeof json["maxduration"] !== 'undefined'){
    	 			 this.maxduration = json["maxduration"];
    	 		}else{
    	 			delete this.maxduration;
    	 		}
    	 		if(typeof json["protocol"] !== 'undefined'){
    	 			 this.protocol = json["protocol"];
    	 		}else{
    	 			delete this.protocol;
    	 		}
    	 		if(typeof json["protocols"] !== 'undefined'){
    	 			 this.protocols = json["protocols"];
    	 		}else{
    	 			delete this.protocols;
    	 		}
    	 		if(typeof json["w"] !== 'undefined'){
    	 			 this.w = json["w"];
    	 		}else{
    	 			delete this.w;
    	 		}
    	 		if(typeof json["h"] !== 'undefined'){
    	 			 this.h = json["h"];
    	 		}else{
    	 			delete this.h;
    	 		}
    	 		if(typeof json["startdelay"] !== 'undefined'){
    	 			 this.startdelay = json["startdelay"];
    	 		}else{
    	 			delete this.startdelay;
    	 		}
    	 		if(typeof json["linearity"] !== 'undefined'){
    	 			 this.linearity = json["linearity"];
    	 		}else{
    	 			delete this.linearity;
    	 		}
    	 		if(typeof json["sequence"] !== 'undefined'){
    	 			 this.sequence = json["sequence"];
    	 		}else{
    	 			delete this.sequence;
    	 		}
    	 		if(typeof json["battr"] !== 'undefined'){
    	 			 this.battr = json["battr"];
    	 		}else{
    	 			delete this.battr;
    	 		}
    	 		if(typeof json["maxextended"] !== 'undefined'){
    	 			 this.maxextended = json["maxextended"];
    	 		}else{
    	 			delete this.maxextended;
    	 		}
    	 		if(typeof json["minbitrate"] !== 'undefined'){
    	 			 this.minbitrate = json["minbitrate"];
    	 		}else{
    	 			delete this.minbitrate;
    	 		}
    	 		if(typeof json["maxbitrate"] !== 'undefined'){
    	 			 this.maxbitrate = json["maxbitrate"];
    	 		}else{
    	 			delete this.maxbitrate;
    	 		}
    	 		if(typeof json["boxingallowed"] !== 'undefined'){
    	 			 this.boxingallowed = json["boxingallowed"];
    	 		}else{
    	 			delete this.boxingallowed;
    	 		}
    	 		if(typeof json["playbackmethod"] !== 'undefined'){
    	 			 this.playbackmethod = json["playbackmethod"];
    	 		}else{
    	 			delete this.playbackmethod;
    	 		}
    	 		if(typeof json["delivery"] !== 'undefined'){
    	 			 this.delivery = json["delivery"];
    	 		}else{
    	 			delete this.delivery;
    	 		}
    	 		if(typeof json["pos"] !== 'undefined'){
    	 			 this.pos = json["pos"];
    	 		}else{
    	 			delete this.pos;
    	 		}
    	 		if(typeof json["api"] !== 'undefined'){
    	 			 this.api = json["api"];
    	 		}else{
    	 			delete this.api;
    	 		}
    	 		if(typeof json["companiontype"] !== 'undefined'){
    	 			 this.companiontype = json["companiontype"];
    	 		}else{
    	 			delete this.companiontype;
    	 		}
    	 		if(typeof json["companionad"] !== 'undefined'){
    	 			if(typeof this.companionad !== 'undefined'){
    	 				this.companionad.length = 0
    	 			}else{
    	 				this.companionad = [];
    	 			}
    	 			var self = this;
    	 			json["companionad"].map(function(e){
    	 				self.companionad.push(new Banner().fromJSON(e))
    	 			});	 			
    	 		}else{
    	 			delete this.companionad;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Native {
    	private request : string;
    	private ver : string;
    	private api : EnumApiFramework[];
    	private battr : EnumCreativeAttribute[];
    	
    	private ext : Any;
    	 		
    	getRequest() : string{
    		return this.request
    	}
    	 
    	setRequest(request : string){
    	 	  		this.request = request;
    	 	  		return this;
    	}
    	getVer() : string{
    		return this.ver
    	}
    	 
    	setVer(ver : string){
    	 	  		this.ver = ver;
    	 	  		return this;
    	}
    	getApi(): EnumApiFramework[] {
    		 	return this.api
    		 }
    	 
    	setApi(api : EnumApiFramework[]){
    		this.api = api;
    		return this;
    	}
    	getBattr(): EnumCreativeAttribute[] {
    		 	return this.battr
    		 }
    	 
    	setBattr(battr : EnumCreativeAttribute[]){
    		this.battr = battr;
    		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.request !== 'undefined'){
     				 		json["request"] = this.request;
     				 	}
    			if(typeof this.ver !== 'undefined'){
     				 		json["ver"] = this.ver;
     				 	}
    			if(typeof this.api !== 'undefined'){
     				 		json["api"] = [];
     				 		this.api.map(function(e){
     				 			json["api"].push(e);
     				 		});
     				 	}
    			if(typeof this.battr !== 'undefined'){
     				 		json["battr"] = [];
     				 		this.battr.map(function(e){
     				 			json["battr"].push(e);
     				 		});
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["request"] !== 'undefined'){
    	 			 this.request = json["request"];
    	 		}else{
    	 			delete this.request;
    	 		}
    	 		if(typeof json["ver"] !== 'undefined'){
    	 			 this.ver = json["ver"];
    	 		}else{
    	 			delete this.ver;
    	 		}
    	 		if(typeof json["api"] !== 'undefined'){
    	 			 this.api = json["api"];
    	 		}else{
    	 			delete this.api;
    	 		}
    	 		if(typeof json["battr"] !== 'undefined'){
    	 			 this.battr = json["battr"];
    	 		}else{
    	 			delete this.battr;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Site {
    	private id : string;
    	private name : string;
    	private domain : string;
    	private cat : EnumContentCategory[];
    	private sectioncat : EnumContentCategory[];
    	private pagecat : EnumContentCategory[];
    	private page : string;
    	private ref : string;
    	private search : string;
    	private mobile : integer;
    	private privacypolicy : integer;
    	private keywords : string;
    	
    	private publisher : Publisher;
    	private content : Content;
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getName() : string{
    		return this.name
    	}
    	 
    	setName(name : string){
    	 	  		this.name = name;
    	 	  		return this;
    	}
    	getDomain() : string{
    		return this.domain
    	}
    	 
    	setDomain(domain : string){
    	 	  		this.domain = domain;
    	 	  		return this;
    	}
    	getCat(): EnumContentCategory[] {
    		 	return this.cat
    		 }
    	 
    	setCat(cat : EnumContentCategory[]){
    		this.cat = cat;
    		return this;
    	}
    	getSectioncat(): EnumContentCategory[] {
    		 	return this.sectioncat
    		 }
    	 
    	setSectioncat(sectioncat : EnumContentCategory[]){
    		this.sectioncat = sectioncat;
    		return this;
    	}
    	getPagecat(): EnumContentCategory[] {
    		 	return this.pagecat
    		 }
    	 
    	setPagecat(pagecat : EnumContentCategory[]){
    		this.pagecat = pagecat;
    		return this;
    	}
    	getPage() : string{
    		return this.page
    	}
    	 
    	setPage(page : string){
    	 	  		this.page = page;
    	 	  		return this;
    	}
    	getRef() : string{
    		return this.ref
    	}
    	 
    	setRef(ref : string){
    	 	  		this.ref = ref;
    	 	  		return this;
    	}
    	getSearch() : string{
    		return this.search
    	}
    	 
    	setSearch(search : string){
    	 	  		this.search = search;
    	 	  		return this;
    	}
    	getMobile() : integer{
    		return this.mobile
    	}
    	 
    	setMobile(mobile : integer){
    	 	  		this.mobile = mobile;
    	 	  		return this;
    	}
    	getPrivacypolicy() : integer{
    		return this.privacypolicy
    	}
    	 
    	setPrivacypolicy(privacypolicy : integer){
    	 	  		this.privacypolicy = privacypolicy;
    	 	  		return this;
    	}
    	getKeywords() : string{
    		return this.keywords
    	}
    	 
    	setKeywords(keywords : string){
    	 	  		this.keywords = keywords;
    	 	  		return this;
    	}
    	
    	getPublisher() : Publisher{
    	 	return this.publisher
    	}
    	
    	setPublisher(publisher : Publisher){
    	 	  		 this.publisher = publisher;
    	 	  		 return this;
    	}
    	getContent() : Content{
    	 	return this.content
    	}
    	
    	setContent(content : Content){
    	 	  		 this.content = content;
    	 	  		 return this;
    	}
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.name !== 'undefined'){
     				 		json["name"] = this.name;
     				 	}
    			if(typeof this.domain !== 'undefined'){
     				 		json["domain"] = this.domain;
     				 	}
    			if(typeof this.cat !== 'undefined'){
     				 		json["cat"] = [];
     				 		this.cat.map(function(e){
     				 			json["cat"].push(e);
     				 		});
     				 	}
    			if(typeof this.sectioncat !== 'undefined'){
     				 		json["sectioncat"] = [];
     				 		this.sectioncat.map(function(e){
     				 			json["sectioncat"].push(e);
     				 		});
     				 	}
    			if(typeof this.pagecat !== 'undefined'){
     				 		json["pagecat"] = [];
     				 		this.pagecat.map(function(e){
     				 			json["pagecat"].push(e);
     				 		});
     				 	}
    			if(typeof this.page !== 'undefined'){
     				 		json["page"] = this.page;
     				 	}
    			if(typeof this.ref !== 'undefined'){
     				 		json["ref"] = this.ref;
     				 	}
    			if(typeof this.search !== 'undefined'){
     				 		json["search"] = this.search;
     				 	}
    			if(typeof this.mobile !== 'undefined'){
     				 		json["mobile"] = this.mobile;
     				 	}
    			if(typeof this.privacypolicy !== 'undefined'){
     				 		json["privacypolicy"] = this.privacypolicy;
     				 	}
    			if(typeof this.keywords !== 'undefined'){
     				 		json["keywords"] = this.keywords;
     				 	}
    			if(typeof this.publisher !== 'undefined'){
    				json["publisher"] = this.publisher.toJSON();
    			}
    			if(typeof this.content !== 'undefined'){
    				json["content"] = this.content.toJSON();
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["name"] !== 'undefined'){
    	 			 this.name = json["name"];
    	 		}else{
    	 			delete this.name;
    	 		}
    	 		if(typeof json["domain"] !== 'undefined'){
    	 			 this.domain = json["domain"];
    	 		}else{
    	 			delete this.domain;
    	 		}
    	 		if(typeof json["cat"] !== 'undefined'){
    	 			 this.cat = json["cat"];
    	 		}else{
    	 			delete this.cat;
    	 		}
    	 		if(typeof json["sectioncat"] !== 'undefined'){
    	 			 this.sectioncat = json["sectioncat"];
    	 		}else{
    	 			delete this.sectioncat;
    	 		}
    	 		if(typeof json["pagecat"] !== 'undefined'){
    	 			 this.pagecat = json["pagecat"];
    	 		}else{
    	 			delete this.pagecat;
    	 		}
    	 		if(typeof json["page"] !== 'undefined'){
    	 			 this.page = json["page"];
    	 		}else{
    	 			delete this.page;
    	 		}
    	 		if(typeof json["ref"] !== 'undefined'){
    	 			 this.ref = json["ref"];
    	 		}else{
    	 			delete this.ref;
    	 		}
    	 		if(typeof json["search"] !== 'undefined'){
    	 			 this.search = json["search"];
    	 		}else{
    	 			delete this.search;
    	 		}
    	 		if(typeof json["mobile"] !== 'undefined'){
    	 			 this.mobile = json["mobile"];
    	 		}else{
    	 			delete this.mobile;
    	 		}
    	 		if(typeof json["privacypolicy"] !== 'undefined'){
    	 			 this.privacypolicy = json["privacypolicy"];
    	 		}else{
    	 			delete this.privacypolicy;
    	 		}
    	 		if(typeof json["keywords"] !== 'undefined'){
    	 			 this.keywords = json["keywords"];
    	 		}else{
    	 			delete this.keywords;
    	 		}
    	 		if(typeof json["publisher"] !== 'undefined'){
    	 			if(typeof this.publisher !== 'undefined'){
    	 				this.publisher.fromJSON(json);
    	 			}else{
    	 				this.publisher = new Publisher().fromJSON(json["publisher"]);
    	 			}
    	 		}else{
    	 			delete this.publisher;
    	 		}
    	 		if(typeof json["content"] !== 'undefined'){
    	 			if(typeof this.content !== 'undefined'){
    	 				this.content.fromJSON(json);
    	 			}else{
    	 				this.content = new Content().fromJSON(json["content"]);
    	 			}
    	 		}else{
    	 			delete this.content;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class App {
    	private id : string;
    	private name : string;
    	private bundle : string;
    	private domain : string;
    	private storeurl : string;
    	private cat : EnumContentCategory[];
    	private sectioncat : EnumContentCategory[];
    	private pagecat : EnumContentCategory[];
    	private ver : string;
    	private privacypolicy : integer;
    	private paid : integer;
    	private keywords : string;
    	
    	private user : Publisher;
    	private content : Content;
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getName() : string{
    		return this.name
    	}
    	 
    	setName(name : string){
    	 	  		this.name = name;
    	 	  		return this;
    	}
    	getBundle() : string{
    		return this.bundle
    	}
    	 
    	setBundle(bundle : string){
    	 	  		this.bundle = bundle;
    	 	  		return this;
    	}
    	getDomain() : string{
    		return this.domain
    	}
    	 
    	setDomain(domain : string){
    	 	  		this.domain = domain;
    	 	  		return this;
    	}
    	getStoreurl() : string{
    		return this.storeurl
    	}
    	 
    	setStoreurl(storeurl : string){
    	 	  		this.storeurl = storeurl;
    	 	  		return this;
    	}
    	getCat(): EnumContentCategory[] {
    		 	return this.cat
    		 }
    	 
    	setCat(cat : EnumContentCategory[]){
    		this.cat = cat;
    		return this;
    	}
    	getSectioncat(): EnumContentCategory[] {
    		 	return this.sectioncat
    		 }
    	 
    	setSectioncat(sectioncat : EnumContentCategory[]){
    		this.sectioncat = sectioncat;
    		return this;
    	}
    	getPagecat(): EnumContentCategory[] {
    		 	return this.pagecat
    		 }
    	 
    	setPagecat(pagecat : EnumContentCategory[]){
    		this.pagecat = pagecat;
    		return this;
    	}
    	getVer() : string{
    		return this.ver
    	}
    	 
    	setVer(ver : string){
    	 	  		this.ver = ver;
    	 	  		return this;
    	}
    	getPrivacypolicy() : integer{
    		return this.privacypolicy
    	}
    	 
    	setPrivacypolicy(privacypolicy : integer){
    	 	  		this.privacypolicy = privacypolicy;
    	 	  		return this;
    	}
    	getPaid() : integer{
    		return this.paid
    	}
    	 
    	setPaid(paid : integer){
    	 	  		this.paid = paid;
    	 	  		return this;
    	}
    	getKeywords() : string{
    		return this.keywords
    	}
    	 
    	setKeywords(keywords : string){
    	 	  		this.keywords = keywords;
    	 	  		return this;
    	}
    	
    	getUser() : Publisher{
    	 	return this.user
    	}
    	
    	setUser(user : Publisher){
    	 	  		 this.user = user;
    	 	  		 return this;
    	}
    	getContent() : Content{
    	 	return this.content
    	}
    	
    	setContent(content : Content){
    	 	  		 this.content = content;
    	 	  		 return this;
    	}
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.name !== 'undefined'){
     				 		json["name"] = this.name;
     				 	}
    			if(typeof this.bundle !== 'undefined'){
     				 		json["bundle"] = this.bundle;
     				 	}
    			if(typeof this.domain !== 'undefined'){
     				 		json["domain"] = this.domain;
     				 	}
    			if(typeof this.storeurl !== 'undefined'){
     				 		json["storeurl"] = this.storeurl;
     				 	}
    			if(typeof this.cat !== 'undefined'){
     				 		json["cat"] = [];
     				 		this.cat.map(function(e){
     				 			json["cat"].push(e);
     				 		});
     				 	}
    			if(typeof this.sectioncat !== 'undefined'){
     				 		json["sectioncat"] = [];
     				 		this.sectioncat.map(function(e){
     				 			json["sectioncat"].push(e);
     				 		});
     				 	}
    			if(typeof this.pagecat !== 'undefined'){
     				 		json["pagecat"] = [];
     				 		this.pagecat.map(function(e){
     				 			json["pagecat"].push(e);
     				 		});
     				 	}
    			if(typeof this.ver !== 'undefined'){
     				 		json["ver"] = this.ver;
     				 	}
    			if(typeof this.privacypolicy !== 'undefined'){
     				 		json["privacypolicy"] = this.privacypolicy;
     				 	}
    			if(typeof this.paid !== 'undefined'){
     				 		json["paid"] = this.paid;
     				 	}
    			if(typeof this.keywords !== 'undefined'){
     				 		json["keywords"] = this.keywords;
     				 	}
    			if(typeof this.user !== 'undefined'){
    				json["user"] = this.user.toJSON();
    			}
    			if(typeof this.content !== 'undefined'){
    				json["content"] = this.content.toJSON();
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["name"] !== 'undefined'){
    	 			 this.name = json["name"];
    	 		}else{
    	 			delete this.name;
    	 		}
    	 		if(typeof json["bundle"] !== 'undefined'){
    	 			 this.bundle = json["bundle"];
    	 		}else{
    	 			delete this.bundle;
    	 		}
    	 		if(typeof json["domain"] !== 'undefined'){
    	 			 this.domain = json["domain"];
    	 		}else{
    	 			delete this.domain;
    	 		}
    	 		if(typeof json["storeurl"] !== 'undefined'){
    	 			 this.storeurl = json["storeurl"];
    	 		}else{
    	 			delete this.storeurl;
    	 		}
    	 		if(typeof json["cat"] !== 'undefined'){
    	 			 this.cat = json["cat"];
    	 		}else{
    	 			delete this.cat;
    	 		}
    	 		if(typeof json["sectioncat"] !== 'undefined'){
    	 			 this.sectioncat = json["sectioncat"];
    	 		}else{
    	 			delete this.sectioncat;
    	 		}
    	 		if(typeof json["pagecat"] !== 'undefined'){
    	 			 this.pagecat = json["pagecat"];
    	 		}else{
    	 			delete this.pagecat;
    	 		}
    	 		if(typeof json["ver"] !== 'undefined'){
    	 			 this.ver = json["ver"];
    	 		}else{
    	 			delete this.ver;
    	 		}
    	 		if(typeof json["privacypolicy"] !== 'undefined'){
    	 			 this.privacypolicy = json["privacypolicy"];
    	 		}else{
    	 			delete this.privacypolicy;
    	 		}
    	 		if(typeof json["paid"] !== 'undefined'){
    	 			 this.paid = json["paid"];
    	 		}else{
    	 			delete this.paid;
    	 		}
    	 		if(typeof json["keywords"] !== 'undefined'){
    	 			 this.keywords = json["keywords"];
    	 		}else{
    	 			delete this.keywords;
    	 		}
    	 		if(typeof json["user"] !== 'undefined'){
    	 			if(typeof this.user !== 'undefined'){
    	 				this.user.fromJSON(json);
    	 			}else{
    	 				this.user = new Publisher().fromJSON(json["user"]);
    	 			}
    	 		}else{
    	 			delete this.user;
    	 		}
    	 		if(typeof json["content"] !== 'undefined'){
    	 			if(typeof this.content !== 'undefined'){
    	 				this.content.fromJSON(json);
    	 			}else{
    	 				this.content = new Content().fromJSON(json["content"]);
    	 			}
    	 		}else{
    	 			delete this.content;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Publisher {
    	private id : string;
    	private name : string;
    	private cat : EnumContentCategory[];
    	private domain : string;
    	
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getName() : string{
    		return this.name
    	}
    	 
    	setName(name : string){
    	 	  		this.name = name;
    	 	  		return this;
    	}
    	getCat(): EnumContentCategory[] {
    		 	return this.cat
    		 }
    	 
    	setCat(cat : EnumContentCategory[]){
    		this.cat = cat;
    		return this;
    	}
    	getDomain() : string{
    		return this.domain
    	}
    	 
    	setDomain(domain : string){
    	 	  		this.domain = domain;
    	 	  		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.name !== 'undefined'){
     				 		json["name"] = this.name;
     				 	}
    			if(typeof this.cat !== 'undefined'){
     				 		json["cat"] = [];
     				 		this.cat.map(function(e){
     				 			json["cat"].push(e);
     				 		});
     				 	}
    			if(typeof this.domain !== 'undefined'){
     				 		json["domain"] = this.domain;
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["name"] !== 'undefined'){
    	 			 this.name = json["name"];
    	 		}else{
    	 			delete this.name;
    	 		}
    	 		if(typeof json["cat"] !== 'undefined'){
    	 			 this.cat = json["cat"];
    	 		}else{
    	 			delete this.cat;
    	 		}
    	 		if(typeof json["domain"] !== 'undefined'){
    	 			 this.domain = json["domain"];
    	 		}else{
    	 			delete this.domain;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Content {
    	private id : string;
    	private episode : integer;
    	private title : string;
    	private series : string;
    	private season : string;
    	private url : string;
    	private cat : EnumContentCategory[];
    	private videoquality : EnumVideoQuality;
    	private context : EnumContentContext;
    	private contentrating : string;
    	private userrating : string;
    	private qamediarating : EnumQagMediaRating;
    	private keywords : string;
    	private livestream : integer;
    	private sourcerelationship : integer;
    	private len : integer;
    	private language : EnumIso639_1a2;
    	private embeddable : integer;
    	
    	private producer : Producer;
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getEpisode() : integer{
    		return this.episode
    	}
    	 
    	setEpisode(episode : integer){
    	 	  		this.episode = episode;
    	 	  		return this;
    	}
    	getTitle() : string{
    		return this.title
    	}
    	 
    	setTitle(title : string){
    	 	  		this.title = title;
    	 	  		return this;
    	}
    	getSeries() : string{
    		return this.series
    	}
    	 
    	setSeries(series : string){
    	 	  		this.series = series;
    	 	  		return this;
    	}
    	getSeason() : string{
    		return this.season
    	}
    	 
    	setSeason(season : string){
    	 	  		this.season = season;
    	 	  		return this;
    	}
    	getUrl() : string{
    		return this.url
    	}
    	 
    	setUrl(url : string){
    	 	  		this.url = url;
    	 	  		return this;
    	}
    	getCat(): EnumContentCategory[] {
    		 	return this.cat
    		 }
    	 
    	setCat(cat : EnumContentCategory[]){
    		this.cat = cat;
    		return this;
    	}
    	getVideoquality() : EnumVideoQuality{
    		return this.videoquality
    	}
    	 
    	setVideoquality(videoquality : EnumVideoQuality){
    	 	  		this.videoquality = videoquality;
    	 	  		return this;
    	}
    	getContext() : EnumContentContext{
    		return this.context
    	}
    	 
    	setContext(context : EnumContentContext){
    	 	  		this.context = context;
    	 	  		return this;
    	}
    	getContentrating() : string{
    		return this.contentrating
    	}
    	 
    	setContentrating(contentrating : string){
    	 	  		this.contentrating = contentrating;
    	 	  		return this;
    	}
    	getUserrating() : string{
    		return this.userrating
    	}
    	 
    	setUserrating(userrating : string){
    	 	  		this.userrating = userrating;
    	 	  		return this;
    	}
    	getQamediarating() : EnumQagMediaRating{
    		return this.qamediarating
    	}
    	 
    	setQamediarating(qamediarating : EnumQagMediaRating){
    	 	  		this.qamediarating = qamediarating;
    	 	  		return this;
    	}
    	getKeywords() : string{
    		return this.keywords
    	}
    	 
    	setKeywords(keywords : string){
    	 	  		this.keywords = keywords;
    	 	  		return this;
    	}
    	getLivestream() : integer{
    		return this.livestream
    	}
    	 
    	setLivestream(livestream : integer){
    	 	  		this.livestream = livestream;
    	 	  		return this;
    	}
    	getSourcerelationship() : integer{
    		return this.sourcerelationship
    	}
    	 
    	setSourcerelationship(sourcerelationship : integer){
    	 	  		this.sourcerelationship = sourcerelationship;
    	 	  		return this;
    	}
    	getLen() : integer{
    		return this.len
    	}
    	 
    	setLen(len : integer){
    	 	  		this.len = len;
    	 	  		return this;
    	}
    	getLanguage() : EnumIso639_1a2{
    		return this.language
    	}
    	 
    	setLanguage(language : EnumIso639_1a2){
    	 	  		this.language = language;
    	 	  		return this;
    	}
    	getEmbeddable() : integer{
    		return this.embeddable
    	}
    	 
    	setEmbeddable(embeddable : integer){
    	 	  		this.embeddable = embeddable;
    	 	  		return this;
    	}
    	
    	getProducer() : Producer{
    	 	return this.producer
    	}
    	
    	setProducer(producer : Producer){
    	 	  		 this.producer = producer;
    	 	  		 return this;
    	}
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.episode !== 'undefined'){
     				 		json["episode"] = this.episode;
     				 	}
    			if(typeof this.title !== 'undefined'){
     				 		json["title"] = this.title;
     				 	}
    			if(typeof this.series !== 'undefined'){
     				 		json["series"] = this.series;
     				 	}
    			if(typeof this.season !== 'undefined'){
     				 		json["season"] = this.season;
     				 	}
    			if(typeof this.url !== 'undefined'){
     				 		json["url"] = this.url;
     				 	}
    			if(typeof this.cat !== 'undefined'){
     				 		json["cat"] = [];
     				 		this.cat.map(function(e){
     				 			json["cat"].push(e);
     				 		});
     				 	}
    			if(typeof this.videoquality !== 'undefined'){
     				 		json["videoquality"] = this.videoquality;
     				 	}
    			if(typeof this.context !== 'undefined'){
     				 		json["context"] = this.context;
     				 	}
    			if(typeof this.contentrating !== 'undefined'){
     				 		json["contentrating"] = this.contentrating;
     				 	}
    			if(typeof this.userrating !== 'undefined'){
     				 		json["userrating"] = this.userrating;
     				 	}
    			if(typeof this.qamediarating !== 'undefined'){
     				 		json["qamediarating"] = this.qamediarating;
     				 	}
    			if(typeof this.keywords !== 'undefined'){
     				 		json["keywords"] = this.keywords;
     				 	}
    			if(typeof this.livestream !== 'undefined'){
     				 		json["livestream"] = this.livestream;
     				 	}
    			if(typeof this.sourcerelationship !== 'undefined'){
     				 		json["sourcerelationship"] = this.sourcerelationship;
     				 	}
    			if(typeof this.len !== 'undefined'){
     				 		json["len"] = this.len;
     				 	}
    			if(typeof this.language !== 'undefined'){
     				 		json["language"] = this.language;
     				 	}
    			if(typeof this.embeddable !== 'undefined'){
     				 		json["embeddable"] = this.embeddable;
     				 	}
    			if(typeof this.producer !== 'undefined'){
    				json["producer"] = this.producer.toJSON();
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["episode"] !== 'undefined'){
    	 			 this.episode = json["episode"];
    	 		}else{
    	 			delete this.episode;
    	 		}
    	 		if(typeof json["title"] !== 'undefined'){
    	 			 this.title = json["title"];
    	 		}else{
    	 			delete this.title;
    	 		}
    	 		if(typeof json["series"] !== 'undefined'){
    	 			 this.series = json["series"];
    	 		}else{
    	 			delete this.series;
    	 		}
    	 		if(typeof json["season"] !== 'undefined'){
    	 			 this.season = json["season"];
    	 		}else{
    	 			delete this.season;
    	 		}
    	 		if(typeof json["url"] !== 'undefined'){
    	 			 this.url = json["url"];
    	 		}else{
    	 			delete this.url;
    	 		}
    	 		if(typeof json["cat"] !== 'undefined'){
    	 			 this.cat = json["cat"];
    	 		}else{
    	 			delete this.cat;
    	 		}
    	 		if(typeof json["videoquality"] !== 'undefined'){
    	 			 this.videoquality = json["videoquality"];
    	 		}else{
    	 			delete this.videoquality;
    	 		}
    	 		if(typeof json["context"] !== 'undefined'){
    	 			 this.context = json["context"];
    	 		}else{
    	 			delete this.context;
    	 		}
    	 		if(typeof json["contentrating"] !== 'undefined'){
    	 			 this.contentrating = json["contentrating"];
    	 		}else{
    	 			delete this.contentrating;
    	 		}
    	 		if(typeof json["userrating"] !== 'undefined'){
    	 			 this.userrating = json["userrating"];
    	 		}else{
    	 			delete this.userrating;
    	 		}
    	 		if(typeof json["qamediarating"] !== 'undefined'){
    	 			 this.qamediarating = json["qamediarating"];
    	 		}else{
    	 			delete this.qamediarating;
    	 		}
    	 		if(typeof json["keywords"] !== 'undefined'){
    	 			 this.keywords = json["keywords"];
    	 		}else{
    	 			delete this.keywords;
    	 		}
    	 		if(typeof json["livestream"] !== 'undefined'){
    	 			 this.livestream = json["livestream"];
    	 		}else{
    	 			delete this.livestream;
    	 		}
    	 		if(typeof json["sourcerelationship"] !== 'undefined'){
    	 			 this.sourcerelationship = json["sourcerelationship"];
    	 		}else{
    	 			delete this.sourcerelationship;
    	 		}
    	 		if(typeof json["len"] !== 'undefined'){
    	 			 this.len = json["len"];
    	 		}else{
    	 			delete this.len;
    	 		}
    	 		if(typeof json["language"] !== 'undefined'){
    	 			 this.language = json["language"];
    	 		}else{
    	 			delete this.language;
    	 		}
    	 		if(typeof json["embeddable"] !== 'undefined'){
    	 			 this.embeddable = json["embeddable"];
    	 		}else{
    	 			delete this.embeddable;
    	 		}
    	 		if(typeof json["producer"] !== 'undefined'){
    	 			if(typeof this.producer !== 'undefined'){
    	 				this.producer.fromJSON(json);
    	 			}else{
    	 				this.producer = new Producer().fromJSON(json["producer"]);
    	 			}
    	 		}else{
    	 			delete this.producer;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Producer {
    	private id : string;
    	private name : string;
    	private cat : EnumContentCategory[];
    	private domain : string;
    	
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getName() : string{
    		return this.name
    	}
    	 
    	setName(name : string){
    	 	  		this.name = name;
    	 	  		return this;
    	}
    	getCat(): EnumContentCategory[] {
    		 	return this.cat
    		 }
    	 
    	setCat(cat : EnumContentCategory[]){
    		this.cat = cat;
    		return this;
    	}
    	getDomain() : string{
    		return this.domain
    	}
    	 
    	setDomain(domain : string){
    	 	  		this.domain = domain;
    	 	  		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.name !== 'undefined'){
     				 		json["name"] = this.name;
     				 	}
    			if(typeof this.cat !== 'undefined'){
     				 		json["cat"] = [];
     				 		this.cat.map(function(e){
     				 			json["cat"].push(e);
     				 		});
     				 	}
    			if(typeof this.domain !== 'undefined'){
     				 		json["domain"] = this.domain;
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["name"] !== 'undefined'){
    	 			 this.name = json["name"];
    	 		}else{
    	 			delete this.name;
    	 		}
    	 		if(typeof json["cat"] !== 'undefined'){
    	 			 this.cat = json["cat"];
    	 		}else{
    	 			delete this.cat;
    	 		}
    	 		if(typeof json["domain"] !== 'undefined'){
    	 			 this.domain = json["domain"];
    	 		}else{
    	 			delete this.domain;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Device {
    	private ua : string;
    	private dnt : integer;
    	private lmt : integer;
    	private ip : string;
    	private ipv6 : string;
    	private devicetype : EnumDeviceType;
    	private make : string;
    	private model : string;
    	private os : string;
    	private osv : string;
    	private hwv : string;
    	private h : integer;
    	private w : integer;
    	private ppi : integer;
    	private pxratio : float;
    	private js : integer;
    	private flashver : integer;
    	private language : EnumIso639_1a2;
    	private carrier : string;
    	private connectiontype : EnumConnectionType;
    	private ifa : string;
    	private didsha1 : string;
    	private didmd5 : string;
    	private dpidsha1 : string;
    	private macsha1 : string;
    	private macmd5 : string;
    	
    	private geo : Geo;
    	private ext : Any;
    	 		
    	getUa() : string{
    		return this.ua
    	}
    	 
    	setUa(ua : string){
    	 	  		this.ua = ua;
    	 	  		return this;
    	}
    	getDnt() : integer{
    		return this.dnt
    	}
    	 
    	setDnt(dnt : integer){
    	 	  		this.dnt = dnt;
    	 	  		return this;
    	}
    	getLmt() : integer{
    		return this.lmt
    	}
    	 
    	setLmt(lmt : integer){
    	 	  		this.lmt = lmt;
    	 	  		return this;
    	}
    	getIp() : string{
    		return this.ip
    	}
    	 
    	setIp(ip : string){
    	 	  		this.ip = ip;
    	 	  		return this;
    	}
    	getIpv6() : string{
    		return this.ipv6
    	}
    	 
    	setIpv6(ipv6 : string){
    	 	  		this.ipv6 = ipv6;
    	 	  		return this;
    	}
    	getDevicetype() : EnumDeviceType{
    		return this.devicetype
    	}
    	 
    	setDevicetype(devicetype : EnumDeviceType){
    	 	  		this.devicetype = devicetype;
    	 	  		return this;
    	}
    	getMake() : string{
    		return this.make
    	}
    	 
    	setMake(make : string){
    	 	  		this.make = make;
    	 	  		return this;
    	}
    	getModel() : string{
    		return this.model
    	}
    	 
    	setModel(model : string){
    	 	  		this.model = model;
    	 	  		return this;
    	}
    	getOs() : string{
    		return this.os
    	}
    	 
    	setOs(os : string){
    	 	  		this.os = os;
    	 	  		return this;
    	}
    	getOsv() : string{
    		return this.osv
    	}
    	 
    	setOsv(osv : string){
    	 	  		this.osv = osv;
    	 	  		return this;
    	}
    	getHwv() : string{
    		return this.hwv
    	}
    	 
    	setHwv(hwv : string){
    	 	  		this.hwv = hwv;
    	 	  		return this;
    	}
    	getH() : integer{
    		return this.h
    	}
    	 
    	setH(h : integer){
    	 	  		this.h = h;
    	 	  		return this;
    	}
    	getW() : integer{
    		return this.w
    	}
    	 
    	setW(w : integer){
    	 	  		this.w = w;
    	 	  		return this;
    	}
    	getPpi() : integer{
    		return this.ppi
    	}
    	 
    	setPpi(ppi : integer){
    	 	  		this.ppi = ppi;
    	 	  		return this;
    	}
    	getPxratio() : float{
    		return this.pxratio
    	}
    	 
    	setPxratio(pxratio : float){
    	 	  		this.pxratio = pxratio;
    	 	  		return this;
    	}
    	getJs() : integer{
    		return this.js
    	}
    	 
    	setJs(js : integer){
    	 	  		this.js = js;
    	 	  		return this;
    	}
    	getFlashver() : integer{
    		return this.flashver
    	}
    	 
    	setFlashver(flashver : integer){
    	 	  		this.flashver = flashver;
    	 	  		return this;
    	}
    	getLanguage() : EnumIso639_1a2{
    		return this.language
    	}
    	 
    	setLanguage(language : EnumIso639_1a2){
    	 	  		this.language = language;
    	 	  		return this;
    	}
    	getCarrier() : string{
    		return this.carrier
    	}
    	 
    	setCarrier(carrier : string){
    	 	  		this.carrier = carrier;
    	 	  		return this;
    	}
    	getConnectiontype() : EnumConnectionType{
    		return this.connectiontype
    	}
    	 
    	setConnectiontype(connectiontype : EnumConnectionType){
    	 	  		this.connectiontype = connectiontype;
    	 	  		return this;
    	}
    	getIfa() : string{
    		return this.ifa
    	}
    	 
    	setIfa(ifa : string){
    	 	  		this.ifa = ifa;
    	 	  		return this;
    	}
    	getDidsha1() : string{
    		return this.didsha1
    	}
    	 
    	setDidsha1(didsha1 : string){
    	 	  		this.didsha1 = didsha1;
    	 	  		return this;
    	}
    	getDidmd5() : string{
    		return this.didmd5
    	}
    	 
    	setDidmd5(didmd5 : string){
    	 	  		this.didmd5 = didmd5;
    	 	  		return this;
    	}
    	getDpidsha1() : string{
    		return this.dpidsha1
    	}
    	 
    	setDpidsha1(dpidsha1 : string){
    	 	  		this.dpidsha1 = dpidsha1;
    	 	  		return this;
    	}
    	getMacsha1() : string{
    		return this.macsha1
    	}
    	 
    	setMacsha1(macsha1 : string){
    	 	  		this.macsha1 = macsha1;
    	 	  		return this;
    	}
    	getMacmd5() : string{
    		return this.macmd5
    	}
    	 
    	setMacmd5(macmd5 : string){
    	 	  		this.macmd5 = macmd5;
    	 	  		return this;
    	}
    	
    	getGeo() : Geo{
    	 	return this.geo
    	}
    	
    	setGeo(geo : Geo){
    	 	  		 this.geo = geo;
    	 	  		 return this;
    	}
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.ua !== 'undefined'){
     				 		json["ua"] = this.ua;
     				 	}
    			if(typeof this.dnt !== 'undefined'){
     				 		json["dnt"] = this.dnt;
     				 	}
    			if(typeof this.lmt !== 'undefined'){
     				 		json["lmt"] = this.lmt;
     				 	}
    			if(typeof this.ip !== 'undefined'){
     				 		json["ip"] = this.ip;
     				 	}
    			if(typeof this.ipv6 !== 'undefined'){
     				 		json["ipv6"] = this.ipv6;
     				 	}
    			if(typeof this.devicetype !== 'undefined'){
     				 		json["devicetype"] = this.devicetype;
     				 	}
    			if(typeof this.make !== 'undefined'){
     				 		json["make"] = this.make;
     				 	}
    			if(typeof this.model !== 'undefined'){
     				 		json["model"] = this.model;
     				 	}
    			if(typeof this.os !== 'undefined'){
     				 		json["os"] = this.os;
     				 	}
    			if(typeof this.osv !== 'undefined'){
     				 		json["osv"] = this.osv;
     				 	}
    			if(typeof this.hwv !== 'undefined'){
     				 		json["hwv"] = this.hwv;
     				 	}
    			if(typeof this.h !== 'undefined'){
     				 		json["h"] = this.h;
     				 	}
    			if(typeof this.w !== 'undefined'){
     				 		json["w"] = this.w;
     				 	}
    			if(typeof this.ppi !== 'undefined'){
     				 		json["ppi"] = this.ppi;
     				 	}
    			if(typeof this.pxratio !== 'undefined'){
     				 		json["pxratio"] = this.pxratio;
     				 	}
    			if(typeof this.js !== 'undefined'){
     				 		json["js"] = this.js;
     				 	}
    			if(typeof this.flashver !== 'undefined'){
     				 		json["flashver"] = this.flashver;
     				 	}
    			if(typeof this.language !== 'undefined'){
     				 		json["language"] = this.language;
     				 	}
    			if(typeof this.carrier !== 'undefined'){
     				 		json["carrier"] = this.carrier;
     				 	}
    			if(typeof this.connectiontype !== 'undefined'){
     				 		json["connectiontype"] = this.connectiontype;
     				 	}
    			if(typeof this.ifa !== 'undefined'){
     				 		json["ifa"] = this.ifa;
     				 	}
    			if(typeof this.didsha1 !== 'undefined'){
     				 		json["didsha1"] = this.didsha1;
     				 	}
    			if(typeof this.didmd5 !== 'undefined'){
     				 		json["didmd5"] = this.didmd5;
     				 	}
    			if(typeof this.dpidsha1 !== 'undefined'){
     				 		json["dpidsha1"] = this.dpidsha1;
     				 	}
    			if(typeof this.macsha1 !== 'undefined'){
     				 		json["macsha1"] = this.macsha1;
     				 	}
    			if(typeof this.macmd5 !== 'undefined'){
     				 		json["macmd5"] = this.macmd5;
     				 	}
    			if(typeof this.geo !== 'undefined'){
    				json["geo"] = this.geo.toJSON();
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["ua"] !== 'undefined'){
    	 			 this.ua = json["ua"];
    	 		}else{
    	 			delete this.ua;
    	 		}
    	 		if(typeof json["dnt"] !== 'undefined'){
    	 			 this.dnt = json["dnt"];
    	 		}else{
    	 			delete this.dnt;
    	 		}
    	 		if(typeof json["lmt"] !== 'undefined'){
    	 			 this.lmt = json["lmt"];
    	 		}else{
    	 			delete this.lmt;
    	 		}
    	 		if(typeof json["ip"] !== 'undefined'){
    	 			 this.ip = json["ip"];
    	 		}else{
    	 			delete this.ip;
    	 		}
    	 		if(typeof json["ipv6"] !== 'undefined'){
    	 			 this.ipv6 = json["ipv6"];
    	 		}else{
    	 			delete this.ipv6;
    	 		}
    	 		if(typeof json["devicetype"] !== 'undefined'){
    	 			 this.devicetype = json["devicetype"];
    	 		}else{
    	 			delete this.devicetype;
    	 		}
    	 		if(typeof json["make"] !== 'undefined'){
    	 			 this.make = json["make"];
    	 		}else{
    	 			delete this.make;
    	 		}
    	 		if(typeof json["model"] !== 'undefined'){
    	 			 this.model = json["model"];
    	 		}else{
    	 			delete this.model;
    	 		}
    	 		if(typeof json["os"] !== 'undefined'){
    	 			 this.os = json["os"];
    	 		}else{
    	 			delete this.os;
    	 		}
    	 		if(typeof json["osv"] !== 'undefined'){
    	 			 this.osv = json["osv"];
    	 		}else{
    	 			delete this.osv;
    	 		}
    	 		if(typeof json["hwv"] !== 'undefined'){
    	 			 this.hwv = json["hwv"];
    	 		}else{
    	 			delete this.hwv;
    	 		}
    	 		if(typeof json["h"] !== 'undefined'){
    	 			 this.h = json["h"];
    	 		}else{
    	 			delete this.h;
    	 		}
    	 		if(typeof json["w"] !== 'undefined'){
    	 			 this.w = json["w"];
    	 		}else{
    	 			delete this.w;
    	 		}
    	 		if(typeof json["ppi"] !== 'undefined'){
    	 			 this.ppi = json["ppi"];
    	 		}else{
    	 			delete this.ppi;
    	 		}
    	 		if(typeof json["pxratio"] !== 'undefined'){
    	 			 this.pxratio = json["pxratio"];
    	 		}else{
    	 			delete this.pxratio;
    	 		}
    	 		if(typeof json["js"] !== 'undefined'){
    	 			 this.js = json["js"];
    	 		}else{
    	 			delete this.js;
    	 		}
    	 		if(typeof json["flashver"] !== 'undefined'){
    	 			 this.flashver = json["flashver"];
    	 		}else{
    	 			delete this.flashver;
    	 		}
    	 		if(typeof json["language"] !== 'undefined'){
    	 			 this.language = json["language"];
    	 		}else{
    	 			delete this.language;
    	 		}
    	 		if(typeof json["carrier"] !== 'undefined'){
    	 			 this.carrier = json["carrier"];
    	 		}else{
    	 			delete this.carrier;
    	 		}
    	 		if(typeof json["connectiontype"] !== 'undefined'){
    	 			 this.connectiontype = json["connectiontype"];
    	 		}else{
    	 			delete this.connectiontype;
    	 		}
    	 		if(typeof json["ifa"] !== 'undefined'){
    	 			 this.ifa = json["ifa"];
    	 		}else{
    	 			delete this.ifa;
    	 		}
    	 		if(typeof json["didsha1"] !== 'undefined'){
    	 			 this.didsha1 = json["didsha1"];
    	 		}else{
    	 			delete this.didsha1;
    	 		}
    	 		if(typeof json["didmd5"] !== 'undefined'){
    	 			 this.didmd5 = json["didmd5"];
    	 		}else{
    	 			delete this.didmd5;
    	 		}
    	 		if(typeof json["dpidsha1"] !== 'undefined'){
    	 			 this.dpidsha1 = json["dpidsha1"];
    	 		}else{
    	 			delete this.dpidsha1;
    	 		}
    	 		if(typeof json["macsha1"] !== 'undefined'){
    	 			 this.macsha1 = json["macsha1"];
    	 		}else{
    	 			delete this.macsha1;
    	 		}
    	 		if(typeof json["macmd5"] !== 'undefined'){
    	 			 this.macmd5 = json["macmd5"];
    	 		}else{
    	 			delete this.macmd5;
    	 		}
    	 		if(typeof json["geo"] !== 'undefined'){
    	 			if(typeof this.geo !== 'undefined'){
    	 				this.geo.fromJSON(json);
    	 			}else{
    	 				this.geo = new Geo().fromJSON(json["geo"]);
    	 			}
    	 		}else{
    	 			delete this.geo;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Geo {
    	private lat : float;
    	private lon : float;
    	private type : EnumLocationType;
    	private country : EnumIso3166_1a3;
    	private region : EnumIso3166_2;
    	private regionfips104 : EnumFips10_4;
    	private metro : EnumGoogleMetroCode;
    	private city : EnumUnct;
    	private zip : string;
    	private utcoffset : integer;
    	
    	private ext : Any;
    	 		
    	getLat() : float{
    		return this.lat
    	}
    	 
    	setLat(lat : float){
    	 	  		this.lat = lat;
    	 	  		return this;
    	}
    	getLon() : float{
    		return this.lon
    	}
    	 
    	setLon(lon : float){
    	 	  		this.lon = lon;
    	 	  		return this;
    	}
    	getType() : EnumLocationType{
    		return this.type
    	}
    	 
    	setType(type : EnumLocationType){
    	 	  		this.type = type;
    	 	  		return this;
    	}
    	getCountry() : EnumIso3166_1a3{
    		return this.country
    	}
    	 
    	setCountry(country : EnumIso3166_1a3){
    	 	  		this.country = country;
    	 	  		return this;
    	}
    	getRegion() : EnumIso3166_2{
    		return this.region
    	}
    	 
    	setRegion(region : EnumIso3166_2){
    	 	  		this.region = region;
    	 	  		return this;
    	}
    	getRegionfips104() : EnumFips10_4{
    		return this.regionfips104
    	}
    	 
    	setRegionfips104(regionfips104 : EnumFips10_4){
    	 	  		this.regionfips104 = regionfips104;
    	 	  		return this;
    	}
    	getMetro() : EnumGoogleMetroCode{
    		return this.metro
    	}
    	 
    	setMetro(metro : EnumGoogleMetroCode){
    	 	  		this.metro = metro;
    	 	  		return this;
    	}
    	getCity() : EnumUnct{
    		return this.city
    	}
    	 
    	setCity(city : EnumUnct){
    	 	  		this.city = city;
    	 	  		return this;
    	}
    	getZip() : string{
    		return this.zip
    	}
    	 
    	setZip(zip : string){
    	 	  		this.zip = zip;
    	 	  		return this;
    	}
    	getUtcoffset() : integer{
    		return this.utcoffset
    	}
    	 
    	setUtcoffset(utcoffset : integer){
    	 	  		this.utcoffset = utcoffset;
    	 	  		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.lat !== 'undefined'){
     				 		json["lat"] = this.lat;
     				 	}
    			if(typeof this.lon !== 'undefined'){
     				 		json["lon"] = this.lon;
     				 	}
    			if(typeof this.type !== 'undefined'){
     				 		json["type"] = this.type;
     				 	}
    			if(typeof this.country !== 'undefined'){
     				 		json["country"] = this.country;
     				 	}
    			if(typeof this.region !== 'undefined'){
     				 		json["region"] = this.region;
     				 	}
    			if(typeof this.regionfips104 !== 'undefined'){
     				 		json["regionfips104"] = this.regionfips104;
     				 	}
    			if(typeof this.metro !== 'undefined'){
     				 		json["metro"] = this.metro;
     				 	}
    			if(typeof this.city !== 'undefined'){
     				 		json["city"] = this.city;
     				 	}
    			if(typeof this.zip !== 'undefined'){
     				 		json["zip"] = this.zip;
     				 	}
    			if(typeof this.utcoffset !== 'undefined'){
     				 		json["utcoffset"] = this.utcoffset;
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["lat"] !== 'undefined'){
    	 			 this.lat = json["lat"];
    	 		}else{
    	 			delete this.lat;
    	 		}
    	 		if(typeof json["lon"] !== 'undefined'){
    	 			 this.lon = json["lon"];
    	 		}else{
    	 			delete this.lon;
    	 		}
    	 		if(typeof json["type"] !== 'undefined'){
    	 			 this.type = json["type"];
    	 		}else{
    	 			delete this.type;
    	 		}
    	 		if(typeof json["country"] !== 'undefined'){
    	 			 this.country = json["country"];
    	 		}else{
    	 			delete this.country;
    	 		}
    	 		if(typeof json["region"] !== 'undefined'){
    	 			 this.region = json["region"];
    	 		}else{
    	 			delete this.region;
    	 		}
    	 		if(typeof json["regionfips104"] !== 'undefined'){
    	 			 this.regionfips104 = json["regionfips104"];
    	 		}else{
    	 			delete this.regionfips104;
    	 		}
    	 		if(typeof json["metro"] !== 'undefined'){
    	 			 this.metro = json["metro"];
    	 		}else{
    	 			delete this.metro;
    	 		}
    	 		if(typeof json["city"] !== 'undefined'){
    	 			 this.city = json["city"];
    	 		}else{
    	 			delete this.city;
    	 		}
    	 		if(typeof json["zip"] !== 'undefined'){
    	 			 this.zip = json["zip"];
    	 		}else{
    	 			delete this.zip;
    	 		}
    	 		if(typeof json["utcoffset"] !== 'undefined'){
    	 			 this.utcoffset = json["utcoffset"];
    	 		}else{
    	 			delete this.utcoffset;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class User {
    	private id : string;
    	private buyerid : string;
    	private yob : integer;
    	private gender : string;
    	private keywords : string;
    	private customdata : string;
    	
    	private geo : Geo;
    	private data : Data[];
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getBuyerid() : string{
    		return this.buyerid
    	}
    	 
    	setBuyerid(buyerid : string){
    	 	  		this.buyerid = buyerid;
    	 	  		return this;
    	}
    	getYob() : integer{
    		return this.yob
    	}
    	 
    	setYob(yob : integer){
    	 	  		this.yob = yob;
    	 	  		return this;
    	}
    	getGender() : string{
    		return this.gender
    	}
    	 
    	setGender(gender : string){
    	 	  		this.gender = gender;
    	 	  		return this;
    	}
    	getKeywords() : string{
    		return this.keywords
    	}
    	 
    	setKeywords(keywords : string){
    	 	  		this.keywords = keywords;
    	 	  		return this;
    	}
    	getCustomdata() : string{
    		return this.customdata
    	}
    	 
    	setCustomdata(customdata : string){
    	 	  		this.customdata = customdata;
    	 	  		return this;
    	}
    	
    	getGeo() : Geo{
    	 	return this.geo
    	}
    	
    	setGeo(geo : Geo){
    	 	  		 this.geo = geo;
    	 	  		 return this;
    	}
    	getData(): Data[] {
    		return this.data
    	}
    	
    	setData(data : Data[]){
    	 	  this.data = data;
    	 	  return this;
    	 }
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.buyerid !== 'undefined'){
     				 		json["buyerid"] = this.buyerid;
     				 	}
    			if(typeof this.yob !== 'undefined'){
     				 		json["yob"] = this.yob;
     				 	}
    			if(typeof this.gender !== 'undefined'){
     				 		json["gender"] = this.gender;
     				 	}
    			if(typeof this.keywords !== 'undefined'){
     				 		json["keywords"] = this.keywords;
     				 	}
    			if(typeof this.customdata !== 'undefined'){
     				 		json["customdata"] = this.customdata;
     				 	}
    			if(typeof this.geo !== 'undefined'){
    				json["geo"] = this.geo.toJSON();
    			}
    			if(typeof this.data !== 'undefined'){
    				this.data = [];
    				this.data.map(function(e){
    					json["data"].push(e.toJSON());
    				});
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["buyerid"] !== 'undefined'){
    	 			 this.buyerid = json["buyerid"];
    	 		}else{
    	 			delete this.buyerid;
    	 		}
    	 		if(typeof json["yob"] !== 'undefined'){
    	 			 this.yob = json["yob"];
    	 		}else{
    	 			delete this.yob;
    	 		}
    	 		if(typeof json["gender"] !== 'undefined'){
    	 			 this.gender = json["gender"];
    	 		}else{
    	 			delete this.gender;
    	 		}
    	 		if(typeof json["keywords"] !== 'undefined'){
    	 			 this.keywords = json["keywords"];
    	 		}else{
    	 			delete this.keywords;
    	 		}
    	 		if(typeof json["customdata"] !== 'undefined'){
    	 			 this.customdata = json["customdata"];
    	 		}else{
    	 			delete this.customdata;
    	 		}
    	 		if(typeof json["geo"] !== 'undefined'){
    	 			if(typeof this.geo !== 'undefined'){
    	 				this.geo.fromJSON(json);
    	 			}else{
    	 				this.geo = new Geo().fromJSON(json["geo"]);
    	 			}
    	 		}else{
    	 			delete this.geo;
    	 		}
    	 		if(typeof json["data"] !== 'undefined'){
    	 			if(typeof this.data !== 'undefined'){
    	 				this.data.length = 0
    	 			}else{
    	 				this.data = [];
    	 			}
    	 			var self = this;
    	 			json["data"].map(function(e){
    	 				self.data.push(new Data().fromJSON(e))
    	 			});	 			
    	 		}else{
    	 			delete this.data;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Data {
    	private id : string;
    	private name : string;
    	
    	private segment : Segment[];
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getName() : string{
    		return this.name
    	}
    	 
    	setName(name : string){
    	 	  		this.name = name;
    	 	  		return this;
    	}
    	
    	getSegment(): Segment[] {
    		return this.segment
    	}
    	
    	setSegment(segment : Segment[]){
    	 	  this.segment = segment;
    	 	  return this;
    	 }
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.name !== 'undefined'){
     				 		json["name"] = this.name;
     				 	}
    			if(typeof this.segment !== 'undefined'){
    				this.segment = [];
    				this.segment.map(function(e){
    					json["segment"].push(e.toJSON());
    				});
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["name"] !== 'undefined'){
    	 			 this.name = json["name"];
    	 		}else{
    	 			delete this.name;
    	 		}
    	 		if(typeof json["segment"] !== 'undefined'){
    	 			if(typeof this.segment !== 'undefined'){
    	 				this.segment.length = 0
    	 			}else{
    	 				this.segment = [];
    	 			}
    	 			var self = this;
    	 			json["segment"].map(function(e){
    	 				self.segment.push(new Segment().fromJSON(e))
    	 			});	 			
    	 		}else{
    	 			delete this.segment;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Segment {
    	private id : string;
    	private name : string;
    	private value : string;
    	
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getName() : string{
    		return this.name
    	}
    	 
    	setName(name : string){
    	 	  		this.name = name;
    	 	  		return this;
    	}
    	getValue() : string{
    		return this.value
    	}
    	 
    	setValue(value : string){
    	 	  		this.value = value;
    	 	  		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.name !== 'undefined'){
     				 		json["name"] = this.name;
     				 	}
    			if(typeof this.value !== 'undefined'){
     				 		json["value"] = this.value;
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["name"] !== 'undefined'){
    	 			 this.name = json["name"];
    	 		}else{
    	 			delete this.name;
    	 		}
    	 		if(typeof json["value"] !== 'undefined'){
    	 			 this.value = json["value"];
    	 		}else{
    	 			delete this.value;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Regs {
    	private coppa : integer;
    	
    	private ext : Any;
    	 		
    	getCoppa() : integer{
    		return this.coppa
    	}
    	 
    	setCoppa(coppa : integer){
    	 	  		this.coppa = coppa;
    	 	  		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.coppa !== 'undefined'){
     				 		json["coppa"] = this.coppa;
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["coppa"] !== 'undefined'){
    	 			 this.coppa = json["coppa"];
    	 		}else{
    	 			delete this.coppa;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Pmp {
    	private private_auction : integer;
    	
    	private deals : Deal[];
    	private ext : Any;
    	 		
    	getPrivate_auction() : integer{
    		return this.private_auction
    	}
    	 
    	setPrivate_auction(private_auction : integer){
    	 	  		this.private_auction = private_auction;
    	 	  		return this;
    	}
    	
    	getDeals(): Deal[] {
    		return this.deals
    	}
    	
    	setDeals(deals : Deal[]){
    	 	  this.deals = deals;
    	 	  return this;
    	 }
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.private_auction !== 'undefined'){
     				 		json["private_auction"] = this.private_auction;
     				 	}
    			if(typeof this.deals !== 'undefined'){
    				this.deals = [];
    				this.deals.map(function(e){
    					json["deals"].push(e.toJSON());
    				});
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["private_auction"] !== 'undefined'){
    	 			 this.private_auction = json["private_auction"];
    	 		}else{
    	 			delete this.private_auction;
    	 		}
    	 		if(typeof json["deals"] !== 'undefined'){
    	 			if(typeof this.deals !== 'undefined'){
    	 				this.deals.length = 0
    	 			}else{
    	 				this.deals = [];
    	 			}
    	 			var self = this;
    	 			json["deals"].map(function(e){
    	 				self.deals.push(new Deal().fromJSON(e))
    	 			});	 			
    	 		}else{
    	 			delete this.deals;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Deal {
    	private id : string;
    	private bidfloor : float;
    	private bidfloorcur : EnumIso4217;
    	private at : integer;
    	private wseat : string[];
    	private wadomain : string[];
    	
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getBidfloor() : float{
    		return this.bidfloor
    	}
    	 
    	setBidfloor(bidfloor : float){
    	 	  		this.bidfloor = bidfloor;
    	 	  		return this;
    	}
    	getBidfloorcur() : EnumIso4217{
    		return this.bidfloorcur
    	}
    	 
    	setBidfloorcur(bidfloorcur : EnumIso4217){
    	 	  		this.bidfloorcur = bidfloorcur;
    	 	  		return this;
    	}
    	getAt() : integer{
    		return this.at
    	}
    	 
    	setAt(at : integer){
    	 	  		this.at = at;
    	 	  		return this;
    	}
    	getWseat(): string[] {
    		 	return this.wseat
    		 }
    	 
    	setWseat(wseat : string[]){
    		this.wseat = wseat;
    		return this;
    	}
    	getWadomain(): string[] {
    		 	return this.wadomain
    		 }
    	 
    	setWadomain(wadomain : string[]){
    		this.wadomain = wadomain;
    		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.bidfloor !== 'undefined'){
     				 		json["bidfloor"] = this.bidfloor;
     				 	}
    			if(typeof this.bidfloorcur !== 'undefined'){
     				 		json["bidfloorcur"] = this.bidfloorcur;
     				 	}
    			if(typeof this.at !== 'undefined'){
     				 		json["at"] = this.at;
     				 	}
    			if(typeof this.wseat !== 'undefined'){
     				 		json["wseat"] = [];
     				 		this.wseat.map(function(e){
     				 			json["wseat"].push(e);
     				 		});
     				 	}
    			if(typeof this.wadomain !== 'undefined'){
     				 		json["wadomain"] = [];
     				 		this.wadomain.map(function(e){
     				 			json["wadomain"].push(e);
     				 		});
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["bidfloor"] !== 'undefined'){
    	 			 this.bidfloor = json["bidfloor"];
    	 		}else{
    	 			delete this.bidfloor;
    	 		}
    	 		if(typeof json["bidfloorcur"] !== 'undefined'){
    	 			 this.bidfloorcur = json["bidfloorcur"];
    	 		}else{
    	 			delete this.bidfloorcur;
    	 		}
    	 		if(typeof json["at"] !== 'undefined'){
    	 			 this.at = json["at"];
    	 		}else{
    	 			delete this.at;
    	 		}
    	 		if(typeof json["wseat"] !== 'undefined'){
    	 			 this.wseat = json["wseat"];
    	 		}else{
    	 			delete this.wseat;
    	 		}
    	 		if(typeof json["wadomain"] !== 'undefined'){
    	 			 this.wadomain = json["wadomain"];
    	 		}else{
    	 			delete this.wadomain;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class BidResponse {
    	private id : string;
    	private bidid : string;
    	private cur : EnumIso4217;
    	private customdata : string;
    	private nbr : integer;
    	
    	private seatbid : SeatBid[];
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getBidid() : string{
    		return this.bidid
    	}
    	 
    	setBidid(bidid : string){
    	 	  		this.bidid = bidid;
    	 	  		return this;
    	}
    	getCur() : EnumIso4217{
    		return this.cur
    	}
    	 
    	setCur(cur : EnumIso4217){
    	 	  		this.cur = cur;
    	 	  		return this;
    	}
    	getCustomdata() : string{
    		return this.customdata
    	}
    	 
    	setCustomdata(customdata : string){
    	 	  		this.customdata = customdata;
    	 	  		return this;
    	}
    	getNbr() : integer{
    		return this.nbr
    	}
    	 
    	setNbr(nbr : integer){
    	 	  		this.nbr = nbr;
    	 	  		return this;
    	}
    	
    	getSeatbid(): SeatBid[] {
    		return this.seatbid
    	}
    	
    	setSeatbid(seatbid : SeatBid[]){
    	 	  this.seatbid = seatbid;
    	 	  return this;
    	 }
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.bidid !== 'undefined'){
     				 		json["bidid"] = this.bidid;
     				 	}
    			if(typeof this.cur !== 'undefined'){
     				 		json["cur"] = this.cur;
     				 	}
    			if(typeof this.customdata !== 'undefined'){
     				 		json["customdata"] = this.customdata;
     				 	}
    			if(typeof this.nbr !== 'undefined'){
     				 		json["nbr"] = this.nbr;
     				 	}
    			if(typeof this.seatbid !== 'undefined'){
    				this.seatbid = [];
    				this.seatbid.map(function(e){
    					json["seatbid"].push(e.toJSON());
    				});
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["bidid"] !== 'undefined'){
    	 			 this.bidid = json["bidid"];
    	 		}else{
    	 			delete this.bidid;
    	 		}
    	 		if(typeof json["cur"] !== 'undefined'){
    	 			 this.cur = json["cur"];
    	 		}else{
    	 			delete this.cur;
    	 		}
    	 		if(typeof json["customdata"] !== 'undefined'){
    	 			 this.customdata = json["customdata"];
    	 		}else{
    	 			delete this.customdata;
    	 		}
    	 		if(typeof json["nbr"] !== 'undefined'){
    	 			 this.nbr = json["nbr"];
    	 		}else{
    	 			delete this.nbr;
    	 		}
    	 		if(typeof json["seatbid"] !== 'undefined'){
    	 			if(typeof this.seatbid !== 'undefined'){
    	 				this.seatbid.length = 0
    	 			}else{
    	 				this.seatbid = [];
    	 			}
    	 			var self = this;
    	 			json["seatbid"].map(function(e){
    	 				self.seatbid.push(new SeatBid().fromJSON(e))
    	 			});	 			
    	 		}else{
    	 			delete this.seatbid;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class SeatBid {
    	private seat : string;
    	private group : integer;
    	
    	private bid : Bid[];
    	private ext : Any;
    	 		
    	getSeat() : string{
    		return this.seat
    	}
    	 
    	setSeat(seat : string){
    	 	  		this.seat = seat;
    	 	  		return this;
    	}
    	getGroup() : integer{
    		return this.group
    	}
    	 
    	setGroup(group : integer){
    	 	  		this.group = group;
    	 	  		return this;
    	}
    	
    	getBid(): Bid[] {
    		return this.bid
    	}
    	
    	setBid(bid : Bid[]){
    	 	  this.bid = bid;
    	 	  return this;
    	 }
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.seat !== 'undefined'){
     				 		json["seat"] = this.seat;
     				 	}
    			if(typeof this.group !== 'undefined'){
     				 		json["group"] = this.group;
     				 	}
    			if(typeof this.bid !== 'undefined'){
    				this.bid = [];
    				this.bid.map(function(e){
    					json["bid"].push(e.toJSON());
    				});
    			}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["seat"] !== 'undefined'){
    	 			 this.seat = json["seat"];
    	 		}else{
    	 			delete this.seat;
    	 		}
    	 		if(typeof json["group"] !== 'undefined'){
    	 			 this.group = json["group"];
    	 		}else{
    	 			delete this.group;
    	 		}
    	 		if(typeof json["bid"] !== 'undefined'){
    	 			if(typeof this.bid !== 'undefined'){
    	 				this.bid.length = 0
    	 			}else{
    	 				this.bid = [];
    	 			}
    	 			var self = this;
    	 			json["bid"].map(function(e){
    	 				self.bid.push(new Bid().fromJSON(e))
    	 			});	 			
    	 		}else{
    	 			delete this.bid;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Bid {
    	private id : string;
    	private impid : string;
    	private price : float;
    	private adid : string;
    	private nurl : string;
    	private adm : string;
    	private adomain : string[];
    	private bundle : string;
    	private iurl : string;
    	private cid : string;
    	private crid : string;
    	private cat : EnumContentCategory[];
    	private attr : EnumCreativeAttribute[];
    	private dealid : string;
    	private h : integer;
    	private w : integer;
    	
    	private ext : Any;
    	 		
    	getId() : string{
    		return this.id
    	}
    	 
    	setId(id : string){
    	 	  		this.id = id;
    	 	  		return this;
    	}
    	getImpid() : string{
    		return this.impid
    	}
    	 
    	setImpid(impid : string){
    	 	  		this.impid = impid;
    	 	  		return this;
    	}
    	getPrice() : float{
    		return this.price
    	}
    	 
    	setPrice(price : float){
    	 	  		this.price = price;
    	 	  		return this;
    	}
    	getAdid() : string{
    		return this.adid
    	}
    	 
    	setAdid(adid : string){
    	 	  		this.adid = adid;
    	 	  		return this;
    	}
    	getNurl() : string{
    		return this.nurl
    	}
    	 
    	setNurl(nurl : string){
    	 	  		this.nurl = nurl;
    	 	  		return this;
    	}
    	getAdm() : string{
    		return this.adm
    	}
    	 
    	setAdm(adm : string){
    	 	  		this.adm = adm;
    	 	  		return this;
    	}
    	getAdomain(): string[] {
    		 	return this.adomain
    		 }
    	 
    	setAdomain(adomain : string[]){
    		this.adomain = adomain;
    		return this;
    	}
    	getBundle() : string{
    		return this.bundle
    	}
    	 
    	setBundle(bundle : string){
    	 	  		this.bundle = bundle;
    	 	  		return this;
    	}
    	getIurl() : string{
    		return this.iurl
    	}
    	 
    	setIurl(iurl : string){
    	 	  		this.iurl = iurl;
    	 	  		return this;
    	}
    	getCid() : string{
    		return this.cid
    	}
    	 
    	setCid(cid : string){
    	 	  		this.cid = cid;
    	 	  		return this;
    	}
    	getCrid() : string{
    		return this.crid
    	}
    	 
    	setCrid(crid : string){
    	 	  		this.crid = crid;
    	 	  		return this;
    	}
    	getCat(): EnumContentCategory[] {
    		 	return this.cat
    		 }
    	 
    	setCat(cat : EnumContentCategory[]){
    		this.cat = cat;
    		return this;
    	}
    	getAttr(): EnumCreativeAttribute[] {
    		 	return this.attr
    		 }
    	 
    	setAttr(attr : EnumCreativeAttribute[]){
    		this.attr = attr;
    		return this;
    	}
    	getDealid() : string{
    		return this.dealid
    	}
    	 
    	setDealid(dealid : string){
    	 	  		this.dealid = dealid;
    	 	  		return this;
    	}
    	getH() : integer{
    		return this.h
    	}
    	 
    	setH(h : integer){
    	 	  		this.h = h;
    	 	  		return this;
    	}
    	getW() : integer{
    		return this.w
    	}
    	 
    	setW(w : integer){
    	 	  		this.w = w;
    	 	  		return this;
    	}
    	
    	getExt() : Any{
    	 	return this.ext
    	}
    	
    	setExt(ext : Any){
    	 	  		 this.ext = ext;
    	 	  		 return this;
    	}
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			if(typeof this.id !== 'undefined'){
     				 		json["id"] = this.id;
     				 	}
    			if(typeof this.impid !== 'undefined'){
     				 		json["impid"] = this.impid;
     				 	}
    			if(typeof this.price !== 'undefined'){
     				 		json["price"] = this.price;
     				 	}
    			if(typeof this.adid !== 'undefined'){
     				 		json["adid"] = this.adid;
     				 	}
    			if(typeof this.nurl !== 'undefined'){
     				 		json["nurl"] = this.nurl;
     				 	}
    			if(typeof this.adm !== 'undefined'){
     				 		json["adm"] = this.adm;
     				 	}
    			if(typeof this.adomain !== 'undefined'){
     				 		json["adomain"] = [];
     				 		this.adomain.map(function(e){
     				 			json["adomain"].push(e);
     				 		});
     				 	}
    			if(typeof this.bundle !== 'undefined'){
     				 		json["bundle"] = this.bundle;
     				 	}
    			if(typeof this.iurl !== 'undefined'){
     				 		json["iurl"] = this.iurl;
     				 	}
    			if(typeof this.cid !== 'undefined'){
     				 		json["cid"] = this.cid;
     				 	}
    			if(typeof this.crid !== 'undefined'){
     				 		json["crid"] = this.crid;
     				 	}
    			if(typeof this.cat !== 'undefined'){
     				 		json["cat"] = [];
     				 		this.cat.map(function(e){
     				 			json["cat"].push(e);
     				 		});
     				 	}
    			if(typeof this.attr !== 'undefined'){
     				 		json["attr"] = [];
     				 		this.attr.map(function(e){
     				 			json["attr"].push(e);
     				 		});
     				 	}
    			if(typeof this.dealid !== 'undefined'){
     				 		json["dealid"] = this.dealid;
     				 	}
    			if(typeof this.h !== 'undefined'){
     				 		json["h"] = this.h;
     				 	}
    			if(typeof this.w !== 'undefined'){
     				 		json["w"] = this.w;
     				 	}
    			if(typeof this.ext !== 'undefined'){
    				json["ext"] = this.ext.toJSON();
    			}
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 		if(typeof json["id"] !== 'undefined'){
    	 			 this.id = json["id"];
    	 		}else{
    	 			delete this.id;
    	 		}
    	 		if(typeof json["impid"] !== 'undefined'){
    	 			 this.impid = json["impid"];
    	 		}else{
    	 			delete this.impid;
    	 		}
    	 		if(typeof json["price"] !== 'undefined'){
    	 			 this.price = json["price"];
    	 		}else{
    	 			delete this.price;
    	 		}
    	 		if(typeof json["adid"] !== 'undefined'){
    	 			 this.adid = json["adid"];
    	 		}else{
    	 			delete this.adid;
    	 		}
    	 		if(typeof json["nurl"] !== 'undefined'){
    	 			 this.nurl = json["nurl"];
    	 		}else{
    	 			delete this.nurl;
    	 		}
    	 		if(typeof json["adm"] !== 'undefined'){
    	 			 this.adm = json["adm"];
    	 		}else{
    	 			delete this.adm;
    	 		}
    	 		if(typeof json["adomain"] !== 'undefined'){
    	 			 this.adomain = json["adomain"];
    	 		}else{
    	 			delete this.adomain;
    	 		}
    	 		if(typeof json["bundle"] !== 'undefined'){
    	 			 this.bundle = json["bundle"];
    	 		}else{
    	 			delete this.bundle;
    	 		}
    	 		if(typeof json["iurl"] !== 'undefined'){
    	 			 this.iurl = json["iurl"];
    	 		}else{
    	 			delete this.iurl;
    	 		}
    	 		if(typeof json["cid"] !== 'undefined'){
    	 			 this.cid = json["cid"];
    	 		}else{
    	 			delete this.cid;
    	 		}
    	 		if(typeof json["crid"] !== 'undefined'){
    	 			 this.crid = json["crid"];
    	 		}else{
    	 			delete this.crid;
    	 		}
    	 		if(typeof json["cat"] !== 'undefined'){
    	 			 this.cat = json["cat"];
    	 		}else{
    	 			delete this.cat;
    	 		}
    	 		if(typeof json["attr"] !== 'undefined'){
    	 			 this.attr = json["attr"];
    	 		}else{
    	 			delete this.attr;
    	 		}
    	 		if(typeof json["dealid"] !== 'undefined'){
    	 			 this.dealid = json["dealid"];
    	 		}else{
    	 			delete this.dealid;
    	 		}
    	 		if(typeof json["h"] !== 'undefined'){
    	 			 this.h = json["h"];
    	 		}else{
    	 			delete this.h;
    	 		}
    	 		if(typeof json["w"] !== 'undefined'){
    	 			 this.w = json["w"];
    	 		}else{
    	 			delete this.w;
    	 		}
    	 		if(typeof json["ext"] !== 'undefined'){
    	 			if(typeof this.ext !== 'undefined'){
    	 				this.ext.fromJSON(json);
    	 			}else{
    	 				this.ext = new Any().fromJSON(json["ext"]);
    	 			}
    	 		}else{
    	 			delete this.ext;
    	 		}
    	 	return this;
    	 }
    }
    export class Any {
    	
    	 		
    	
    	 		
    	
    	 		
    	toJSON(){
    		var json = {};
    			return json;
    		
    	}
    	
    	fromJSON(json : any){
    	 	return this;
    	 }
    }
    
    export enum EnumInterstitial {
    	FULL_SCREEN = 0,
    	NOT_INTERSTITIAL = 1
    }
    
    
    export enum EnumTest {
    	LIVE_MODE = 0,
    	TEST_MODE = 1
    }
    
    
    export enum EnumAuctionType {
    	FIRST_PRICE = 0,
    	SECOND_PRICE = 2
    }
    
    
    export enum EnumAllImp {
    	NO_UNKNOWN = 0,
    	YES = 1
    }
    
    
    export enum EnumBannerAdType {
    	XHTML_TEXT_AD = 1,
    	XHTML_BANNER_AD = 2,
    	JAVASCRIPT_AD = 3,
    	IFRAME = 4
    }
    
    
    export enum EnumCreativeAttribute {
    	AUDIO_AD_AUTO_PLAY = 1,
    	AUDIO_ADUSER_INITIATED = 2,
    	EXPANDABLE_AUTOMATIC = 3,
    	EXPANDABLE_USER_CLICK = 4,
    	EXPANDABLE_USER_ROLLOVER = 5,
    	IN_BANNER_VIDEO_AD_AUTO_PLAY = 6,
    	IN_BANNER_VIDEO_AD_USER_INITIATED = 7,
    	POP = 8,
    	PROVOCATIVE = 9,
    	ANIMATION = 10,
    	SURVEYS = 11,
    	TEXT_ONLY = 12,
    	USER_INTERACTIVE = 13,
    	ALERT_STYLE = 14,
    	HAS_AUDIO_ON_OFF_BUTTON = 15,
    	AD_CAN_BE_SKIPPED = 16
    }
    
    
    export enum EnumAdPosition {
    	UNKNOWN = 0,
    	ABOVE_THE_FOLD = 1,
    	INITIALLY_VISIBLE = 2,
    	BELOW_THE_FOLD = 3,
    	HEADER = 4,
    	FOOTER = 5,
    	SIDEBAR = 6,
    	FULL_SCREEN = 7
    }
    
    
    export enum EnumExpandableDirection {
    	LEFT = 1,
    	RIGHT = 2,
    	UP = 3,
    	DOWN = 4,
    	FULL_SCREEN = 5
    }
    
    
    export enum EnumApiFramework {
    	VPAID_1_0 = 1,
    	VPAID_2_0 = 2,
    	MRAID_1 = 3,
    	ORMMA = 4,
    	MRAID_2 = 5
    }
    
    
    export enum EnumVideoLinearity {
    	IN_STREAM = 1,
    	OVERLAY = 2
    }
    
    
    export enum EnumVideoBidResponseProtocol {
    	VAST_1_0 = 1,
    	VAST_2_0 = 2,
    	VAST_3_0 = 3,
    	VAST_1_0_WRAPPER = 4,
    	VAST_2_0_WRAPPER = 5,
    	VAST_3_0_WRAPPER = 6
    }
    
    
    export enum EnumVideoPlaybackMethod {
    	AUTO_PLAY_SOUND_ON = 1,
    	AUTO_PLAY_SOUND_OFF = 2,
    	CLICK_TO_PLAY = 3,
    	MOUSE_OVER = 4
    }
    
    
    export enum EnumVideoStartDelay {
    	PRE_ROLL = 0,
    	GENERIC_MID_ROLL = -1,
    	GENERIC_POST_ROLL = -2
    }
    
    
    export enum EnumVideoQuality {
    	UNKNOWN = 0,
    	PROFESSIONALLY_PRODUCED = 1,
    	PROSUMER = 2,
    	USER_GENERATED = 3
    }
    
    
    export enum EnumVastCompanionType {
    	STATIC = 1,
    	HTML = 2,
    	IFRAME = 3
    }
    
    
    export enum EnumContentDeliveryMethod {
    	STREAMING = 1,
    	PROGRESSIVE = 2
    }
    
    
    export enum EnumContentContext {
    	VIDEO = 1,
    	GAME = 2,
    	MUSIC = 3,
    	APPLICATION = 4,
    	TEXT = 5,
    	OTHER = 6,
    	UNKNOWN = 7
    }
    
    
    export enum EnumQagMediaRating {
    	ALL_AUDIENCES = 1,
    	EVERYONE_OVER_12 = 2,
    	MATURE_AUDIENCES = 3
    }
    
    
    export enum EnumLocationType {
    	GPS = 1,
    	IP = 2,
    	USER_PROVIDED = 3
    }
    
    
    export enum EnumDeviceType {
    	MOBILE = 1,
    	PC = 2,
    	TV = 3,
    	PHONE = 4,
    	TABLET = 5,
    	CONNECTED_DEVICE = 6,
    	SET_TOP_BOX = 7
    }
    
    
    export enum EnumConnectionType {
    	UNKNOWN = 0,
    	ETHERNET = 1,
    	WIFI = 2,
    	CELLULAR_NETWORK_UNKNOWN_GENERATION = 3,
    	CELLULAR_NETWORK_2G = 4,
    	CELLULAR_NETWORK_3G = 5,
    	CELLULAR_NETWORK_4G = 6
    }
    
    
    export enum EnumNoBidReason {
    	UNKOWN_ERROR = 0,
    	TECHNICAL_ERROR = 1,
    	INVALID_REQUEST = 2,
    	KNOWN_WEB_SPIDER = 3,
    	SUSPECTED_NON_HUMAN_TRAFFIC = 4,
    	PROXY_IP = 5,
    	UNSUPPORTED_DEVICE = 6,
    	BLOCKED_PUBLISHER = 7,
    	UNMATCHED_USER = 8
    }
    
    export type EnumContentCategory = string;
    export type EnumFips10_4 = string;
    export type EnumGoogleMetroCode = string;
    export type EnumIso3166_2 = string;
    export type EnumIso3166_1a3 = string;
    export type EnumIso4217 = string;
    export type EnumIso639_1a2 = string;
    export type EnumUnct = string;
    export type integer = number;
    export type float = number;
    
    export class Builder {
    	bidRequest(json?) : BidRequest {
    		var result = new BidRequest();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	imp(json?) : Imp {
    		var result = new Imp();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	banner(json?) : Banner {
    		var result = new Banner();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	video(json?) : Video {
    		var result = new Video();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	native(json?) : Native {
    		var result = new Native();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	site(json?) : Site {
    		var result = new Site();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	app(json?) : App {
    		var result = new App();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	publisher(json?) : Publisher {
    		var result = new Publisher();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	content(json?) : Content {
    		var result = new Content();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	producer(json?) : Producer {
    		var result = new Producer();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	device(json?) : Device {
    		var result = new Device();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	geo(json?) : Geo {
    		var result = new Geo();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	user(json?) : User {
    		var result = new User();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	data(json?) : Data {
    		var result = new Data();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	segment(json?) : Segment {
    		var result = new Segment();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	regs(json?) : Regs {
    		var result = new Regs();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	pmp(json?) : Pmp {
    		var result = new Pmp();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	deal(json?) : Deal {
    		var result = new Deal();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	bidResponse(json?) : BidResponse {
    		var result = new BidResponse();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	seatBid(json?) : SeatBid {
    		var result = new SeatBid();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	bid(json?) : Bid {
    		var result = new Bid();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    	any(json?) : Any {
    		var result = new Any();
    		if(typeof json !== 'undefined'){
    			result.fromJSON(json);
    		}
    		return result;
    	}
    	 
    }
    
    export const build = new Builder();
    
    export declare module json {
    	interface BidRequest {
    		id : string;
    		test : EnumTest;
    		at : EnumAuctionType;
    		tmax : integer;
    		wseat : string[];
    		allimps : EnumAllImp;
    		cur : EnumIso4217[];
    		bcat : EnumContentCategory[];
    		badv : string[];
    		
    		imp : Imp[];
    		site : Site;
    		app : App;
    		device : Device;
    		user : User;
    		regs : Regs;
    		ext : Any;
    	}
    	
    	interface Imp {
    		id : string;
    		displaymanager : string;
    		displaymanagerserver : string;
    		instl : EnumInterstitial;
    		tagid : string;
    		bidfloor : integer;
    		bidfloorcur : EnumIso4217;
    		iframebuster : string[];
    		
    		banner : Banner;
    		video : Video;
    		native : Native;
    		pmp : Pmp;
    		ext : Any;
    	}
    	
    	interface Banner {
    		w : integer;
    		h : integer;
    		wmax : integer;
    		hmax : integer;
    		wmin : integer;
    		hmin : integer;
    		id : string;
    		btype : integer[];
    		battr : integer[];
    		pos : integer;
    		mines : string[];
    		topframe : integer;
    		expdir : integer[];
    		api : integer[];
    		
    		ext : Any;
    	}
    	
    	interface Video {
    		mimes : string[];
    		minduration : integer;
    		maxduration : integer;
    		protocol : EnumVideoBidResponseProtocol;
    		protocols : EnumVideoBidResponseProtocol[];
    		w : integer;
    		h : integer;
    		startdelay : integer;
    		linearity : integer;
    		sequence : integer;
    		battr : EnumCreativeAttribute[];
    		maxextended : integer;
    		minbitrate : integer;
    		maxbitrate : integer;
    		boxingallowed : integer;
    		playbackmethod : integer;
    		delivery : EnumContentDeliveryMethod[];
    		pos : integer;
    		api : EnumApiFramework[];
    		companiontype : EnumVastCompanionType[];
    		
    		companionad : Banner[];
    		ext : Any;
    	}
    	
    	interface Native {
    		request : string;
    		ver : string;
    		api : EnumApiFramework[];
    		battr : EnumCreativeAttribute[];
    		
    		ext : Any;
    	}
    	
    	interface Site {
    		id : string;
    		name : string;
    		domain : string;
    		cat : EnumContentCategory[];
    		sectioncat : EnumContentCategory[];
    		pagecat : EnumContentCategory[];
    		page : string;
    		ref : string;
    		search : string;
    		mobile : integer;
    		privacypolicy : integer;
    		keywords : string;
    		
    		publisher : Publisher;
    		content : Content;
    		ext : Any;
    	}
    	
    	interface App {
    		id : string;
    		name : string;
    		bundle : string;
    		domain : string;
    		storeurl : string;
    		cat : EnumContentCategory[];
    		sectioncat : EnumContentCategory[];
    		pagecat : EnumContentCategory[];
    		ver : string;
    		privacypolicy : integer;
    		paid : integer;
    		keywords : string;
    		
    		user : Publisher;
    		content : Content;
    		ext : Any;
    	}
    	
    	interface Publisher {
    		id : string;
    		name : string;
    		cat : EnumContentCategory[];
    		domain : string;
    		
    		ext : Any;
    	}
    	
    	interface Content {
    		id : string;
    		episode : integer;
    		title : string;
    		series : string;
    		season : string;
    		url : string;
    		cat : EnumContentCategory[];
    		videoquality : EnumVideoQuality;
    		context : EnumContentContext;
    		contentrating : string;
    		userrating : string;
    		qamediarating : EnumQagMediaRating;
    		keywords : string;
    		livestream : integer;
    		sourcerelationship : integer;
    		len : integer;
    		language : EnumIso639_1a2;
    		embeddable : integer;
    		
    		producer : Producer;
    		ext : Any;
    	}
    	
    	interface Producer {
    		id : string;
    		name : string;
    		cat : EnumContentCategory[];
    		domain : string;
    		
    		ext : Any;
    	}
    	
    	interface Device {
    		ua : string;
    		dnt : integer;
    		lmt : integer;
    		ip : string;
    		ipv6 : string;
    		devicetype : EnumDeviceType;
    		make : string;
    		model : string;
    		os : string;
    		osv : string;
    		hwv : string;
    		h : integer;
    		w : integer;
    		ppi : integer;
    		pxratio : float;
    		js : integer;
    		flashver : integer;
    		language : EnumIso639_1a2;
    		carrier : string;
    		connectiontype : EnumConnectionType;
    		ifa : string;
    		didsha1 : string;
    		didmd5 : string;
    		dpidsha1 : string;
    		macsha1 : string;
    		macmd5 : string;
    		
    		geo : Geo;
    		ext : Any;
    	}
    	
    	interface Geo {
    		lat : float;
    		lon : float;
    		type : EnumLocationType;
    		country : EnumIso3166_1a3;
    		region : EnumIso3166_2;
    		regionfips104 : EnumFips10_4;
    		metro : EnumGoogleMetroCode;
    		city : EnumUnct;
    		zip : string;
    		utcoffset : integer;
    		
    		ext : Any;
    	}
    	
    	interface User {
    		id : string;
    		buyerid : string;
    		yob : integer;
    		gender : string;
    		keywords : string;
    		customdata : string;
    		
    		geo : Geo;
    		data : Data[];
    		ext : Any;
    	}
    	
    	interface Data {
    		id : string;
    		name : string;
    		
    		segment : Segment[];
    		ext : Any;
    	}
    	
    	interface Segment {
    		id : string;
    		name : string;
    		value : string;
    		
    		ext : Any;
    	}
    	
    	interface Regs {
    		coppa : integer;
    		
    		ext : Any;
    	}
    	
    	interface Pmp {
    		private_auction : integer;
    		
    		deals : Deal[];
    		ext : Any;
    	}
    	
    	interface Deal {
    		id : string;
    		bidfloor : float;
    		bidfloorcur : EnumIso4217;
    		at : integer;
    		wseat : string[];
    		wadomain : string[];
    		
    		ext : Any;
    	}
    	
    	interface BidResponse {
    		id : string;
    		bidid : string;
    		cur : EnumIso4217;
    		customdata : string;
    		nbr : integer;
    		
    		seatbid : SeatBid[];
    		ext : Any;
    	}
    	
    	interface SeatBid {
    		seat : string;
    		group : integer;
    		
    		bid : Bid[];
    		ext : Any;
    	}
    	
    	interface Bid {
    		id : string;
    		impid : string;
    		price : float;
    		adid : string;
    		nurl : string;
    		adm : string;
    		adomain : string[];
    		bundle : string;
    		iurl : string;
    		cid : string;
    		crid : string;
    		cat : EnumContentCategory[];
    		attr : EnumCreativeAttribute[];
    		dealid : string;
    		h : integer;
    		w : integer;
    		
    		ext : Any;
    	}
    	
    	interface Any {
    		
    	}
    }

