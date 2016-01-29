# openrtb-meta

The openrtb-meta projet provides a ecore meta model 
definition of the openrtb-2.3 specification.

From this metamodel xtend generators are used to generate
code in various programming languages to manipulate the 
openrtb objects.

Currently generators are provided only for the typescript language.
 
Typescript
 
Usage exemple
```typescript
import * as Rtb from "./openrtb/OpenRtb";

var bidRequest = new Rtb.BidRequest().fromJSON({
    "id": "80ce30c53c16e6ede735f123ef6e32361bfc7b22",
    "at": 1, "cur": [ "USD" ],
    "imp": [
        {
            "id": "1", "bidfloor": 0.03,
            "banner": {
                "h": 250, "w": 300, "pos": 0
            }
        }
    ],
    "site": {
        "id": "102855",
        "cat": [ "IAB3-1" ],
        "domain": "www.foobar.com",
        "page": "http://www.foobar.com/1234.html ",
        "publisher": {
            "id": "8953", "name": "foobar.com",
            "cat": [ "IAB3-1" ],
            "domain": "foobar.com"
        }
    },
    "device": {
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
        "ip": "123.145.167.10"
    },
    "user": {
        "id": "55816b39711f9b5acf3b90e313ed29e51665623f"
    }
});

console.log(bidRequest.toJSON());
```
