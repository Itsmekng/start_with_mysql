const db = require('../utils/db.js')
const Users = require('../model/Users.js')
const addUser = async (req, res) =>{

    try{
        const {name , email} = req.body;
        
        const user = await Users.create({name,email})

        if(!user){
            return res.status(400).json({
            message: "User not added",
            status:false
        })
        }

        return res.status(200).json({
            message: user,
            status: true
        })
    }catch(err){
        return res.status(400).json({
            message: err.message,
            status:false
        })
    }

}

const getUser = async (req,res) =>{
    try{
        
        const user = await Users.findAll();

        if(!user){
            return res.status(400).json({
                message: "Users not found",
                status:false
        });
        }

        return res.status(200).json({
            data: user,
            status: true
        })

    }catch(err){
        return res.status(400).json({
            message: err.message,
            status:false
        });
    }
}

module.exports = {
    addUser , getUser
}