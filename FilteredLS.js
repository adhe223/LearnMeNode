var fs = require('fs');
var path = require('path');

var extension = process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	for (var i = 0; i < list.length; i++) {
		var filename = list[i];
		if (path.extname(filename) == "." + extension) {
			console.log(filename);
		}
	}
});