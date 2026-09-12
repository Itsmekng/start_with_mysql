const {Sequelize } = require('sequelize');

const sequelize = new Sequelize('testDB','root','admin',{
    host:"localhost",
    dialect:'mysql'
});

(async () => {
    try{
        await sequelize.authenticate();
        console.log("Connect to the database")
    }catch(err){
        console.log(err)
    }
})()

module.exports = sequelize;
































// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'admin',
//     database:'testDB'
// });

// connection.connect((err) =>{
//     if(err){
//         console.log(err)
//         return;
//     }

//     try{
//         const createUser = `create table if not exists Users(
//                                 id INT AUTO_INCREMENT PRIMARY KEY,
//                                 name VARCHAR(20),
//                                 email VARCHAR(30)
//                             )`;
//         const Buses = `create table if not exists Buses(
//                             id INT AUTO_INCREMENT PRIMARY KEY,
//                             busNumber INT,
//                             totalSeats INT,
//                             availableSeats INT
//                         )`;
//         const Booking = `create table if not exists Booking(
//                             id INT AUTO_INCREMENT PRIMARY KEY,
//                             seatNumber INT
//                         )`;
//         const payment = `create table if not exists Payment(
//                             id INT AUTO_INCREMENT PRIMARY KEY,
//                             amountPaid INT,
//                             paymentStatus BOOLEAN
//                         )`;

//         connection.execute(createUser);
//         connection.execute(Buses);
//         connection.execute(Booking);
//         connection.execute(payment);

//     }catch(err){
//         console.log(err)
//     }

// })

// module.exports = connection;