//dependencies
var mysql= require('mysql');
var prompt= require('prompt');


//set up connection with db
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
	}
	//console.log('connected');
});

//start program
console.log('\nPlease select from the following by typing 1,2,3 or 4.\n 1) View Products for Sale\n 2) View Low Inventory\n 3) Add to Inventory\n 4) Add New Product');
//get user input
prompt.get(['Number'], function(err, result){
  if(err){
    throw (err);
  }
else{
    switch(result.Number){//switch statement to determine action based on user input
        case '1':
            numberOne();
            //console.log('Number 1 working');
            break;
        case '2':
            numberTwo();
            //console.log('Number 2 working!');
            break;
        case '3':
            numberThree();
            //console.log('Number 3 working!');
            break;
        case '4':
            numberFour();
            //console.log('Number 4 working!');
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

function numberTwo(){
    con.query('SELECT * FROM products', function(err, result){
      if (err){
        throw (err);
      }else{
        for (var i = 0; i < result.length; i++) {
          if(result[i].StockQuantity < 5){
            console.log('The following have low inventory: ' + result[i].ProductName + ' ' + result[i].StockQuantity);
          }//else{
            //console.log('No low inventory');
          //}
        }
    }
  });
}

// set global variable? scope issue with second part
function numberThree(){
  setTimeout(function change(){

    console.log('\n**Please select which product ID you would like to update inventory for and then enter the total number of units(ex: 4)**');
    prompt.get(['itemID','total'], function(err, result){
      if(err){
        throw (err);
      }
      con.query('UPDATE products SET StockQuantity= "' + result.total + '"' + 'WHERE itemID= "' + result.itemID + '"');
			if(err){
				throw (err);
			}else{
			console.log('Worked!');
			console.log(result.itemID);
      console.log(result.total);
    }

    });
  },900);
	numberOne();
}

function numberFour(){
	setTimeout(function change(){

		    console.log('\n**Please add a product to the database');
		    prompt.get(['ProductName','DepartmentName','Price','StockQuantity'], function(err, result){
		      if(err){
		        throw (err);
		      }
		      con.query('INSERT INTO products (ProductName,DepartmentName,Price,StockQuantity) VALUES ()');
					if(err){
						throw (err);
					}else{
					console.log('Worked!');
					console.log(result.ProductName);
		      console.log(result.DepartmentName);
					console.log(result.Price);
					console.log(result.StockQuantity);
		    	}
				});
		  },900);
			numberOne();

}
