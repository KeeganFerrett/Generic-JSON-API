# Generic-JSON-API
## An easy was to build standard JSON-API responses
Generic-JSON-API provides an inerfance to build valid JSON-API resoponses, without having to worry about the interal structure of JSON-API. The goal of the project is to be able to build any possible JSON-API response, providing objects for data, error, and meta top-level members. To find out more about JSON-API please click [here](http://jsonapi.org/format/) to checkout the specification and examples.

## Usage
Generic-JSON-API provides functions to build the three top-level member objects. 

### Data Options
* forceArray (Boolean)

   Used to indicate whether or not the resources in a data member should be force to be an array, even if no resources are given. Default is false.