var factory = require('./lib/JSON-API');

var express = require('express');
var app = express();

app.get('/', function(req, res){
  var jsonData = factory.newData();

  jsonData.links()
    .self("./")
    .first("/some/path")
    .last("/push/me/to/the/edge")
    .prev("/all/my/friends")
    .next("/are/dead");

  jsonData.meta()
    .addAttributes({ "copyright": "Copyright 2015 Example Corp." })
    .addAttributes({ "authors": ["Yehuda Katz", "Steve Klabnik", "Dan Gebhardt", "Tyler Kellen"] });

  jsonData.addResource("1", "person")
    .addAttributes({ name: 1})
    .addAttributes({ surname: "Ferrett" })
    .addAttributes({ email: "keegan.ferrett@gmail.com", number: "079 622 6583" });

  jsonData.resource("2", "person")
    .attribute({ name: "Jason" })
    .attribute({ surname: "vH" })
    .attribute({ email: "something.something@gmail.com", number: "000 000 0000" });

    jsonData.resource("3", "person")

  res.send(jsonData.toObject());
});

app.listen(3000);
