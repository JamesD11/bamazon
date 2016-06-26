var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'bamazon',
	port: 8889
});

var showAll = function(){
con.query('SELECT * FROM products', function(err, list){
  if (err){
    throw (err);
  }else{
    console.log(list);
    }
  });
};

showAll();
