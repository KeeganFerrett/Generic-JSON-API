# Generic-JSON-API
## An easy was to build standard JSON-API responses
Generic-JSON-API provides an inerfance to build valid JSON-API resoponses, without having to worry about the interal structure of JSON-API. The goal of the project is to be able to build any possible JSON-API response, providing objects for data, error, and meta top-level members. To find out more about JSON-API please click [here](http://jsonapi.org/format/) to checkout the specification and examples.

## Usage
Generic-JSON-API will one day provide functions to build the three top-level member objects. The module acts as a factory, providing the  functions to create objects to build each of the top level members. Currently, the only top member supported is `data`, but the remaining two will follow.

```var JSONAPI = require('generic-json-api');
 
	var dataMember = JSONAPI.newData();
	
	var errorMember = JSONAPI.newError(); //Not yet supported
	
	var metaMember = JSONAPI.newMeta(); //Not yet supported
```

Each memeber constructor can take in an optional object of options to help force the JSON-API object to be formed a certain way. If not object is passed, the function will assign default values.

```javascript
	var dataMember = JSONAPI.newData( { forceArray: true } );
```

### Data Construction Options
* forceArray (Boolean)
   Used to indicate whether or not the resources in a data member should be force to be an array, even if no resources are given. Default is false.