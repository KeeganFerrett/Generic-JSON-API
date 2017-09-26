var debug = require('debug')('JSON-API:lib:resource');

debug('Creating Resource Class');
//Used to create a resource for the data member
class Resource {

  constructor(_id, _type) {
    this.body = {
      id: _id,
      type: _type,
      attributes: {}
    }
  }

  /**
    @NOTE This function is old and has been renamed, but is being saved
    because it is being used in other projects and we don't want to
    refactor everything just yet.
  */
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

  //Adds attributes to the resource object
  attribute(_attr) {
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
