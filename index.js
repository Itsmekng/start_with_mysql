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

    console.log("Mysql is connected")

    const firstQuery = `create table student(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(30)
    )`

    connection.execute(firstQuery,(err) =>{
        if(err){
            console.log(err)
        }

        console.log("Table is created")
    });
})

app.get("/",(req,res) =>{
    res.send("hello world")
});

const port = 3000;

app.listen(port,() =>{
    console.log("Server started");
});