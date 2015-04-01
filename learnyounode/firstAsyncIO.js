var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) { return console.error(err) };

  var linesCount = data.split("\n").length - 1;
  console.log(linesCount);
});
