import { DataTypes } from "sequelize";
import sequelize from "../database.js"

const EPI = sequelize.define('EPI', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: sequelize.literal("nextval('seq_epi_id')")
    },
    nome: {
        type: DataTypes.STRING
    },
    validade: {
        type: DataTypes.STRING,
        // allowNull: false,

    },
    qualidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroCA:{
        type: DataTypes.STRING,
        // allowNull:false
    }
}, {
    createdAt: false, updatedAt: false, tableName: 'EPI'
})

export { EPI }