var connect = require('connect');
var compiler = require('connect-compiler')
var static = require('serve-static');

var server = connect();

server.use(
	compiler({
		app		: 'app',
		dest : 'public'
	})
	);

server.use(	static(__dirname + '/public'));

server.listen(3000);

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");