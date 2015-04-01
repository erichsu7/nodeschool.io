var http = require("http");
var bl = require("bl");

var urls = process.argv.splice(2, 3);
var responses = [];
var count = 0;

function printResults () {
  for (var i = 0; i < responses.length; i++) {
    console.log(responses[i]);
  }
}

function httpGet (index) {
  http.get(urls[index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {return console.error(err)};

      responses[index] = data.toString();
      count++;

      if (count == urls.length) {
        printResults();
      }
    }))
  })
}

for (var i = 0; i < urls.length; i++) {
  httpGet(i);
}
