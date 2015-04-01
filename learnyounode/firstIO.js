var fs = require('fs');
var filepath = process.argv[2];
var buf = fs.readFileSync(filepath);
var contents = buf.toString();
var count = contents.split("\n").length - 1;

console.log(count);
