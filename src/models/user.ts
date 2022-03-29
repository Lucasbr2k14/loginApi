import sequelize from "./conection/sequelize"
import { DataTypes } from "sequelize"

const User = sequelize.define("Users", {
    name:{
        type: DataTypes.STRING,
        allowNull:false        
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull:false
    },
    gender: {
        type:DataTypes.STRING,
        allowNull:true
    },
    token:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    }
})

export default User
// User.sync({force:true})
// User.drop()
