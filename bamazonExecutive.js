var mysql= require('mysql');
var prompt= require('prompt');


var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'bamazon',
	port: 8889 // Using MAMP
});


con.connect(function (err){
	if (err){
		callback(err);
	}
	console.log('connected');
});
