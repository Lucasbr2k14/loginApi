import { Sequelize } from "sequelize"

const sequelize = new Sequelize("servidorNode", "User", "Password", {
    host:"localhost",
    dialect:"mysql"
})

export default sequelize
