var debug = require('debug')('JSON-API:lib:resource');

debug('Creating Resource Class');
//Used to create a top-level meber data JSON String
class Resource {

  constructor(_id, _type) {
    this.body = {
      id: _id,
      type: _type
    }
  }

  //Adds attributes to the resource object
  addAttributes(_attr) {
    if (this.body.attributes === undefined) {
      this.body.attributes = {};
    }

    for (var property in _attr) {
      this.body.attributes[property] = _attr[property];
    }
    return this;
  }

  //Returns fully compliant JSON-API string
  toObject() {
    return this.body;
  }
}

debug('Exporting Resource Class');
module.exports = Resource;
