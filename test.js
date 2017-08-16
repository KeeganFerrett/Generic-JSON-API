var debug   = require('debug')('JSON-API:test');
var factory = require('./lib/JSON-API');

var express = require('express');
var app = express();

app.get('/', function(req, res){
  debug('Running Factory Data Object Creator');
  var jsonData = factory.newData({
    forceArray: false
  });

  jsonData.links()
    .addSelf("./")
    .addFirst("/some/path")
    .addLast("/push/me/to/the/edge")
    .addPrev("/all/my/friends")
    .addNext("/are/dead");

  jsonData.meta()
    .addAttributes({ "copyright": "Copyright 2015 Example Corp." })
    .addAttributes({ "authors": ["Yehuda Katz", "Steve Klabnik", "Dan Gebhardt", "Tyler Kellen"] });

  jsonData.addResource("1", "person")
    .addAttributes({ name: "Keegan" })
    .addAttributes({ surname: "Ferrett" })
    .addAttributes({ email: "keegan.ferrett@gmail.com", number: "079 622 6583" });

  jsonData.addResource("2", "person")
    .addAttributes({ name: "Jason" })
    .addAttributes({ surname: "vH" })
    .addAttributes({ email: "something.something@gmail.com", number: "000 000 0000" });

  res.send(jsonData.toObject());
});

app.listen(3000);
