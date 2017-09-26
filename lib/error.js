//Used to create a top-level meber data JSON String
class Error {
  //Add jsonapi top-level member to JSON object
  jsonapi() {
    return this;
  }

  //Add links top-level member to JSON object
  links() {
    return this;
  }

  //Add meta top-level member to JSON object
  meta() {
    return this;
  }

  //Returns fully compliant JSON-API string
  toString() {
    return "I am a error class";
  }
}

module.exports = Error;
