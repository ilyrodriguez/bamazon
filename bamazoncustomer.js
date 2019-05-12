var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password123",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome")
  displayTable();
});

function displayTable() {
    connection.query("SELECT * FROM products", function(error, results) {
      if (error) throw error;
      for (i = 0; i < results.length; i++) {
          console.log("id number: " + results[i].id +"\n"+"product name: "+ results[i].product_name + "\n"+"price: " + results[i].price + line);
  
      }
  
    //   purchase();
      connection.end();
    });
  };
// function start() {
//     inquirer
//       .prompt({
//         name: "Welcome",
//         type: "list",
//         message: "Welcome to BAMAZON!" + "\n" + "Please pick a product to purchase: ",
//         choices: ["POST", "BID", "EXIT"]
//       })
//       .then(function(answer) {
//         // based on their answer, either call the bid or the post functions
//         if (answer.postOrBid === "POST") {
//           postAuction();
//         }
//         else if(answer.postOrBid === "BID") {
//           bidAuction();
//         } else{
//           connection.end();
//         }
//       });
  }