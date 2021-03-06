'use strict';

var fs = require('fs'),
	path = require('path');

var configController = {
	path: path.join(process.cwd(), '/gulpit-conf.js'),

	check: function() {
		// Return the path of the file if it exists or return false
		try {
			fs.statSync(this.path);
			return this.path;

		} catch(e) {
			return false;
		}
	}
};

module.exports = configController;
