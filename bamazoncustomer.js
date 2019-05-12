var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require('colors');
var Table = require('cli-table');
           
var headlineDivider = "\n" + "~~~~~~~~~~~~~~~~~~~~~~~".bgCyan.black  + "\n";
var divider = "\n" + "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" + "\n";

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password123",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;  
//   console.log("Connected as id:", connection.threadId);
 
  console.log(headlineDivider + "||".bgCyan.black + "      Welcome      ".green.bold + "||".bgCyan.black + "\n" + 
  "||".bgCyan.black +"        to         ".green.bold + "||".bgCyan.black + "\n" + 
  "||".bgCyan.black + "      BAMAZON      ".green.bold + "||".bgCyan.black + headlineDivider);
});

// var productArr = [];

function displayTable() {
    var table = new Table({
        // head: ['DEALS OF THE MONTH'.bold],
        head: ['ID'.bold.cyan, 'Product Name'.bold.green, 'Department'.bold.green, 'Price'.bold.green, 'Stock Quantity'.bold.green],
    });
    connection.query("SELECT * FROM products", function(error, res) {
      if (error) throw error;
      for (i = 0; i < res.length; i++) {
        table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        //   console.log("id number: " + res[i].id +"\n"+"product name: "+ res[i].product_name + "\n" + "price: $" + res[i].price + divider),
        //   productArr.push("id number: " + res[i].id +"\n"+"product name: "+ res[i].product_name + "\n"+ "price: $" + res[i].price + divider)
       
    }
    console.log(table.toString());
    console.log(divider);

    PickProduct()
    });
  };
  displayTable();

    
function PickProduct() {
    inquirer
      .prompt({
        name: "PickID",
        type: "number",
        message: "\n" + "Please type ID number to add your product in the cart: " + "\n",
        // choices: productArr
      },{
        name: "quantity",
        type: "number",
        message: "\n" + "How many would you like to purchase?" + "\n",
        // choices: productArr
    })
      .then(function(answer) {
       
      connection.end();})}
