import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const UlasanTanjakan13 = db.define('ulasantanjakan13', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc_review: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
});

export default UlasanTanjakan13;