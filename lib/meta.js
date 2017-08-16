var debug = require('debug')('JSON-API:lib:meta');

debug('Creating Meta Class');
//Used to create a top-level meber data JSON String
class Meta {
  constructor() {
    this.body = { meta: {} };
  }

  addAttributes(_attr) {
    if (this.body.meta === undefined) {
      this.body.meta = {};
    }

    for (var property in _attr) {
      this.body.meta[property] = _attr[property];
    }
    return this;
  }

  getMeta() {
    return this.body.meta;
  }

  //Returns fully compliant JSON-API string
  toObject() {
    return this.body;
  }
}

debug('Exporting Meta Class');
module.exports = Meta;
