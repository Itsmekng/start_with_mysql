const db = require('../utils/db.js')

const addUser = (req, res) =>{

    try{
        const {name , email} = req.body;
        
        const insertQuery = `insert into Users (name,email) values (?,?)`;
        
        db.execute(insertQuery,[name,email]);
        
        return res.status(200).json({
            message: "User added",
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
        const getQuery = `select * from Users`
        
        db.execute(getQuery,(err,data) =>{
            if(err){
                console.log(err);
            }
            
            return res.status(200).json({
                data: data,
                status: true
            })
        });

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