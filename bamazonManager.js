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
		callback(err);
	}
	//console.log('connected');
});

//start program
console.log('Please select from the following by typing 1,2,3 or 4.\n 1) View Products for Sale\n 2) View Low Inventory\n 3) Add to Inventory\n 4) Add New Product');
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

function numberThree(){
    con.query('SELECT * FROM products', function(err, result){
      if (err){
        throw (err);
      }else{
        console.log('\nProducts:');
        for (var i = 0; i < result.length; i++) {
          console.log(result[i].ProductName);
        }
    }

    console.log('\n**Please select which product you would like to add inventory to and then enter the number of units to be added(ex: 4)**');
    prompt.get(['Product','Add'], function(err, result){
      if(err){
        throw (err);
      }
    else{
      con.query()
      console.log(result.Product);
      console.log(result.Add);
    }

    });
  });
}

function numberFour(){
    con.query('SELECT * FROM products', function(err, result){
      if (err){
        throw (err);
      }else{
    }
  });
}
