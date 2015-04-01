var fs = require('fs');
var path = require('path');

var filteredLS = function (dir, fileExt, callback) {

  fs.readdir(dir, function (err, list) {
    if (err) { return callback(err) };

    list = list.filter(function (file) {
      return path.extname(file) === "." + fileExt;
    })

    return callback(null, list);
  });
};

module.exports = filteredLS;
