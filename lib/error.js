var debug = require('debug')('JSON-API:lib:error');

debug('Creating Error Class');
//Used to create a top-level meber data JSON String
class Error {
  //Add jsonapi top-level member to JSON object
  jsonapi() {
    debug('Not yet implemented (jsonapi)');
    return this;
  }

  //Add links top-level member to JSON object
  links() {
    debug('Not yet implemented (links)');
    return this;
  }

  //Add meta top-level member to JSON object
  meta() {
    debug('Not yet implemented (included)');
    return this;
  }

  //Returns fully compliant JSON-API string
  toString() {
    debug('Not yet implemented');
    return "I am a error class";
  }
}

debug('Exporting Error Class');
module.exports = Error;
