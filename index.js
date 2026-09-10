const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'testDB'
});

connection.connect((err) =>{
    if(err){
        console.log(err)
        return;
    }

    try{
        const createUser = `create table Users(
                                id INT AUTO_INCREMENT PRIMARY KEY,
                                name VARCHAR(20),
                                email VARCHAR(30)
                            )`;
        const Buses = `create table Buses(
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            busNumber INT,
                            totalSeats INT,
                            availableSeats INT
                        )`;
        const Booking = `create table Booking(
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            seatNumber INT
                        )`;
        const payment = `create table Payment(
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            amountPaid INT,
                            paymentStatus BOOLEAN
                        )`;

        connection.execute(createUser);
        connection.execute(Buses);
        connection.execute(Booking);
        connection.execute(payment);

    }catch(err){
        console.log(err)
    }

})

app.get("/",(req,res) =>{
    res.send("hello world")
});

const port = 3000;

app.listen(port,() =>{
    console.log("Server started");
});