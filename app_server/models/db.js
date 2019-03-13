var mongoose = require('mongoose');

var gracefulShutdown;

var dbURI = 'mongodb://localhost/Loc8r';

var readLine = require('readline');
if (process.plataform === "win32"){
	var rl = readLine.createInterface ({
		input: process.stdin,
		output: process.stdout
	});
	rl.on ('SIGINT', function(){
		process.emit ('SIGINT');
	});
}

mongoose.connect(dbURI,{useMongoClient: true});

mongoose.connection.on('connected', function(){
	console.log('Mongoose conectado para ' + dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose erro na conexao: ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose desconectado');
});

gracefulShutdown = function (msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose desconectado atraves de ' + msg);
		callback();
	});
};

//Para reinicios do nodemon
process.once('SIGUSR2',function(){
	gracefulShutdown('nodemon reiniciado', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});

//Para o encerramento da aplicacao
process.on('SIGINT',function(){
	gracefulShutdown('Encerramento app', function(){
		process.exit(0);
	});
});

//Para o encerramento da aplicacao no Heroku
process.on('SIGTERM',function(){
	gracefulShutdown('Encerramento app Heroku', function(){
		process.exit(0);
	});
});

require('./locations');