var fs = require('fs');
var path = require('path');

module.exports = function (filepath, filterExtension, callback) {
	var filteredList = [];

	fs.readdir(filepath, function(err, list) {
		if (err) {
			return callback(err);
		}
		
		for (var i = 0; i < list.length; i++) {
			var filename = list[i];
			if (path.extname(filename) == "." + filterExtension) {
				filteredList.push(filename);
			}
		}
		
		return callback(null, filteredList);
	});
}