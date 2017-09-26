var DataObject    = require('./data');
var ErrorObject   = require('./error');
var MetaObject    = require('./meta');

module.exports.newData = function(_options) {
  if (_options == undefined) {
    _options = {};
  }
  return new DataObject(_options);
}
