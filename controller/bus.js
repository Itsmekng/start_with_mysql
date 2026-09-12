const db = require('../utils/db.js');
const Buses = require('../model/Buses.js')
const { Op } = require('sequelize')

const addBus = async (req,res) =>{

    try{
        const { busNumber , totalSeats , availableSeats } = req.body;
        
        const buses = await Buses.create({busNumber,totalSeats,availableSeats});

        if(!buses){
            return res.status(400).json({
                Message: "Bus not add",
                status: true
            })
        }
        
        return res.status(200).json({
            Message: buses,
            status: true
        })
    }catch(err){
        return res.status(400).json({
            message:err,
            status:false
        })
    }
}

const getAvailableBus = async (req,res) =>{
    try{

        const buses = await Buses.findAll({
            where:{
                totalSeats: { [Op.gte]: req.params.seats }
            }
        })

        if(!buses){
           return res.status(200).json({
            data: "Buses not found",
            status: true
        }); 
        }

        return res.status(200).json({
            data: buses,
            status: true
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