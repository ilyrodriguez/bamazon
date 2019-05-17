create database bamazon_db;
use bamazon_db;

create table products (
	id integer not null auto_increment,
	product_name varchar(100) not null,
    department_name varchar(50) not null,
    price decimal(5,2) not null,
    stock_quantity integer not null,
    primary key (id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mens Wallet - Genuine Leather", "Accessories", 15.99, 25),
("Gerber Truss Multi-Tool", "Hand Tools", 25.70, 33),
("Fire HD 8 Tablet", "Electronics", 59.99, 64),
("Ring Video Doorbell 2 with Echo Dot", "Electronics", 169.00, 80),
("Women's Water Shoes", "Shoes", 33.99, 18),
("Stainless Steel Mixing Bowls", "Kitchen and Dining",21.23, 45),
("Car Seat Protector", "Car Accessories", 17.99, 42),
("Microfiber Cleaning Cloths", "Household Supplies", 11.27, 24),
(" 2 Packs Throw Pillow Inserts", "Bedding", 14.44, 16),
("'The Tuscan Child' - Book", "Books", 12.99, 58);
