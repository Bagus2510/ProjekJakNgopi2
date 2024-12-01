import { Sequelize } from "sequelize";

const db = new Sequelize('akunuser', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;