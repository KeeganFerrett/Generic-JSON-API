//Used to create a links member
class Link {
  constructor() {
    this.body = { };
  }

  self(_self) {
    this.body.self = _self;
    return this;
  }

  first(_first) {
    this.body.first = _first;
    return this;
  }

  last(_last) {
    this.body.last = _last;
    return this;
  }

  prev(_prev) {
    this.body.prev = _prev;
    return this;
  }

  next(_next) {
    this.body.next = _next;
    return this;
  }

  //Returns fully compliant JSON-API object
  toObject() {
    return this.body;
  }

}

module.exports = Link;
