const db = require('../utils/db.js');

const addBus = (req,res) =>{

    try{
        const { busNumber , totalSeats , availableSeats } = req.body;
        
        const insertQuery = `insert into Buses (busNumber,totalSeats,availableSeats) values (?,?,?)`;
        
        db.execute(insertQuery,[busNumber,totalSeats,availableSeats]);
        
        return res.status(200).json({
            Message: "Bus added",
            status: true
        })
    }catch(err){
        return res.status(400).json({
            message:err,
            status:false
        })
    }
}

const getAvailableBus = (req,res) =>{
    try{
        const getQuery = `select * from buses where availableSeats >= ?`;
        
        const Data = db.execute(getQuery,[req.params.seats],(err,data) =>{
            return res.status(200).json({
                data: data,
                status: true
            })
        });
        
    }catch(err){
        return res.status(200).json({
            message: err,
            status:false
        })
    }
}

module.exports = {
    addBus,getAvailableBus
}