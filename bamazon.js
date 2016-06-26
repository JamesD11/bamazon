var mysql= require('mysql');
var prompt= require('prompt');


var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'bamazon',
	port: 8889
});

con.connect(function (err){
	if (err){
		callback(err);
	}
	console.log('connected');
});

con.query('Select ItemID,ProductName,DepartmentName,Price FROM products',function(err,result){
	if (err){
		throw (err);
	}else{
		console.log('Welcome to Bamazon, home of the Bamazon, the greatest fictional sporting goods store of all time');
		var results= result;
		for (var i = 0; i < results.length; i++) {

			console.log('We have: ' + results[i].ProductName + ' in ' + results[i].DepartmentName + ' for $' + results[i].Price);
		}
	}


var order= function(){
 	console.log('Please enter what you would like to purchase.');//if you have more items than...
 		prompt.start();
 		prompt.get(['ProductName','quantity'], function(err, result){
 			if(err){
 				throw (err);
 			}else{
 				con.query('SELECT * FROM products', function(err, list){
 					if (err){
 						throw (err);
 					}else{
 						for (var i = 0; i < list.length; i++) {
 							if(list[i].StockQuantity > result.quantity && list[i].ProductName === result.ProductName){
 								console.log('You owe: $' + result.quantity * list[i].Price);



 								break;

 							}else if( list[i].StockQuantity < result.quantity){
 								console.log('This request exceeds stock capacity! Try again.');
 								order();
 								break;

 								//var newQuant= function(){
 								//	con.query('UPDATE products SET StockQuantity= ' + listStockQuantity)
 								}

 						    }
 						}

 				})
 			}
 			//console.log('You ordered: ' + result.quantity + ' ' + result.ProductName);

 		});
 	 	}
 	 	order();

 	 });
//cant get this to run for some reason trying to update the DB
var quant= function(){
 	con.query('UPDATE products SET StockQuantity=' (result.StockQuantity - result.quantity) + 'WHERE ProductName ="' + result.ProductName + '"', function(err, newList){
 	if(err){
 		throw (err);
 		}
 	console.log('table ammended');
 	});
 	quant();
 								}
