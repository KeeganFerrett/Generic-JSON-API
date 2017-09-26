var debug           = require('debug')('JSON-API:lib:data');
var ResourceObject  = require('./resource');
var LinkObject      = require('./link');
var MetaObject      = require('./meta');

debug('Creating Data Class');
//Used to create a top-level member data JSON String
class Data {

  constructor(_options) {
    if (_options.forceArray == null) { this.forceArray = false; }
    else { this.forceArray == _options.forceArray; }
    this.body = {
      data: null
    };
    this.resources = [];
  }

  //Add jsonapi top-level member to JSON object
  jsonapi() {
    debug('Not yet implemented (jsonapi)');
    return this;
  }

  //Add links top-level member to JSON object
  links() {
    var links = new LinkObject();
    this.body.links = links.toObject();
    return links;
  }

  //Add included top-level member to JSON object
  included() {
    debug('Not yet implemented (included)');
    return this;
  }

  //Add meta top-level member to JSON object
  meta() {
    var meta = new MetaObject();
    this.body.meta = meta.getMeta();
    return meta;
  }

  //Add resource to the data top-level member
  /**
    @NOTE This function is old and pointless, but is being saved because it is
    being used in other projects and we don't want to refactor just yet.
  */
  addResource(_id, _type) {
    var newResource = new ResourceObject(_id, _type);
    this.resources.push(newResource);
    return newResource;
  }

  //Add resource to the data top-level member
  resource(_id, _type) {
    var newResource = new ResourceObject(_id, _type);
    this.resources.push(newResource);
    return newResource;
  }

  //Returns fully compliant JSON-API object
  toObject() {
    if (this.forceArray || this.resources.length > 1) {
      this.body.data = [];
      for (var x in this.resources) {
        this.body.data.push(this.resources[x].toObject());
      }
    } else if ( this.resources.length === 1 ) {
      this.body.data = this.resources[0].toObject();
    }
    return this.body;
  }

}

debug('Exporting Data Class');
module.exports = Data;
