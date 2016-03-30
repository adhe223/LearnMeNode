var fs = require('fs');

fs.readFile(process.argv[2], function (err, fileContents) {
	var numNewLines = fileContents.toString().split('\n').length - 1;
	console.log(numNewLines);
});
