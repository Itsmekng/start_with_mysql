const { Sequelize , DataTypes } = require('sequelize');
const sequelize = require('../utils/db.js');

const Payments = sequelize.define("Payment", {
    id:{
        type: DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull:false
    },

    paymentStatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    amountPaid:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = Payments