var express = require('express');
var path= require('path');
var logger = require('morgan');
var http = require('http');
var routes = require('./routes/index');
var app = express();

app.use( '/static', express.static( __dirname+'/src/js' ));
app.set( 'view engine' , 'pug' );
app.set( 'views' ,  __dirname+ '/src/views' );

app.use(logger('dev'));

app.use('/',routes);

app.use(function (req , res , next){
	var  err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function (err, req , res , next ){
	res.status(err.status || 500);
	res.render('error' , {
		message: err.message,
		error : err 
	});
});

var server = http.createServer(app);
server.listen(3000);
server.on('listning' , function() {
	console.log('Server Listning on port 3000');
});

server.on('error' , function(error) {
	switch (error.code) {
		case 'EACCES':
			console.error('Port 3000 requires elevated privilages');
			process.exit(1); 
			break;
		case 'EADDRINUSE':
				console.error('Port 3000 is already in use');
				process.exit(1); 
				break;
		
		default:
			throw error;
	}
});
