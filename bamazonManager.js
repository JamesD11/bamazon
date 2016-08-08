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


console.log('Please select from the following by typing 1,2,3 or 4.\n 1) View Products for Sale\n 2) View Low Inventory\n 3) Add to Inventory\n 4) Add New Product');
// switch(input[0]){
//     case "my-tweets"://if input[0] = my-tweets call twitter() function
//         twitter();
//         break;
//     case "do-what-it-says":
//         noEntry();
//         break;
//     case "spotify-this-song":
//         	spotify(input[1]);
//         break;
//     case "movie-this":
//         if(input[1]){
//         	request();
//         }else{
//         	input[1]= "Mr. Nobdy";
//         	request();
//         }
//         break;
// }
