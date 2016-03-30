var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(err,list) {
	if (err) {
		console.log('There was an error in mymodule');
	}
	
	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
});