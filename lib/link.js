var debug           = require('debug')('JSON-API:lib:link');
var ResourceObject  = require('./resource');

debug('Creating Link Class');
//Used to create a top-level meber data JSON String
class Link {
  constructor() {
    this.body = { };
  }

  addSelf(_self) {
    this.body.self = _self;
    return this;
  }

  addFirst(_first) {
    this.body.first = _first;
    return this;
  }

  addLast(_last) {
    this.body.last = _last;
    return this;
  }

  addPrev(_prev) {
    this.body.prev = _prev;
    return this;
  }

  addNext(_next) {
    this.body.next = _next;
    return this;
  }

  //Returns fully compliant JSON-API string
  toObject() {
    return this.body;
  }
}

debug('Exporting Link Class');
module.exports = Link;
