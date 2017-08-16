var debug         = require('debug')('JSON-API:lib:creator');
var DataObject    = require('./data');
var ErrorObject   = require('./error');
var MetaObject    = require('./meta');

module.exports.newData = function(_options) {
  debug('Returning new Data Object');
  return new DataObject(_options);
}
