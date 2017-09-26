# Generic-JSON-API
![downloads](https://img.shields.io/npm/dt/generic-json-api.svg?style=flat)
![version](https://img.shields.io/npm/v/generic-json-api.svg?style=flat)
## An easy was to build standard JSON-API responses
Generic-JSON-API provides an inerfance to build valid JSON-API resoponses, without having to worry about the interal structure of JSON-API. The goal of the project is to be able to build any possible JSON-API response, providing objects for data, error, and meta top-level members. To find out more about JSON-API please click [here](http://jsonapi.org/format/) to checkout the specification and examples.

## Usage
Generic-JSON-API will one day provide functions to build the three top-level member objects. The module acts as a factory, providing the  functions to create objects to build each of the top level members. Currently, the only top member supported is `data`, but the remaining two will follow. This library follows a monadic structure, allowing the user to string functions together.

```javascript
	var JSONAPI = require('generic-json-api');
 
	var dataMember = JSONAPI.newData();
	
	var errorMember = JSONAPI.newError(); //Not yet supported
	
	var metaMember = JSONAPI.newMeta(); //Not yet supported
```

Each member constructor can take in an optional object of options to help force the JSON-API object to be formed a certain way. If not object is passed, the function will assign default values.

```javascript
	var dataMember = JSONAPI.newData( { forceArray: true } );
```

### Data Construction Options
* `forceArray` (Boolean)

Used to indicate whether or not the resources in a data member should be force to be an array, even if no resources are given. Default is false.

### Data Member Usage
To begin you will first need to create and save a new data object.
```javascript
	var JSONAPI = require('generic-json-api');
 
	var dataMember = JSONAPI.newData();
```
Next you may want to add a resource. To do this, call the `resource(id, type)` function which will return a new resource object which is saved in the `dataMember` object. To add an attribute to the resource, call the `attribute(object)` function, which will return the same resource object, allowing the user to chain functions.
```javascript
	var resource = dataMember.resource("1", "person");
	resource.attribute({ name: "Bob" });
	//OR
	dataMember.resource("2", "person")
		  .attribute({ name: "Alice" })
		  .attribute({ email: "alice@email.com", votes: 3 });
```
The `attribute(object)` function can accept any input, provided its in a valid JSON object (arrays, nested objetcs, etc). For a full list of functions that the `resource` object provides, please see the full [wiki](https://github.com/KeeganFerrett/Generic-JSON-API/wiki).

A meta member can be added to the `dataMember` object in a simpiler way as before.
```javascript
	dataMember.meta()
		  .attribute({ "copyright": "Copyright 2015 Example Corp." })
		  .attribute({ "authors": ["Yehuda Katz", "Steve Klabnik", "Dan Gebhardt", "Tyler Kellen"] });
```
For a full list of functions that the `meta` object provides, please see the full [wiki](https://github.com/KeeganFerrett/Generic-JSON-API/wiki).
The `data` object supports the rest of the standard top-level members (with the exception of error as per the json api specification), such as jsonapi, links, and included. Please see the [wiki](https://github.com/KeeganFerrett/Generic-JSON-API/wiki) for the full list.

To return the final, valid, JSON-API object, simply call the `toObject()` function.
```javascript
	var response = dataMember.toObject();
```