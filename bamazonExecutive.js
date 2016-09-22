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
		console.log('\n\n ** START THE SERVER YOU BIG DUMMY ** \n');
		callback(err);
	}else{
	console.log('connected');
  }
});
