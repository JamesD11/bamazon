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
	//console.log('connected');
});


console.log('Please select from the following by typing 1,2,3 or 4.\n 1) View Products for Sale\n 2) View Low Inventory\n 3) Add to Inventory\n 4) Add New Product');
prompt.get(['Number'], function(err, result){
  if(err){
    throw (err);
  }
else{
    switch(result.Number){
        case '1'://if input[0] = my-tweets call twitter() function
            console.log('Number 1 working!');
            numberOne();
            break;
        case '2':
            console.log('Number 2 working!');
            break;
        case '3':
            console.log('Number 3 working!');
            break;
        case '4':
            console.log('Number 4 working!');
            break;
            }
  }
});

function numberOne(){
    con.query('SELECT * FROM products', function(err, result){
      if (err){
        throw (err);
      }else{
        for (var i = 0; i < result.length; i++) {
        console.log(result[i].ItemID + '  ' + result[i].ProductName + ' - Department: ' + result[i].DepartmentName +
        '---$' + result[i].Price + '--- Total: ' + result[i].StockQuantity);
      }
    }
  });
}
