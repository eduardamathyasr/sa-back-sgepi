import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import { Funcionario } from "./Funcionario.js";
import { EPI } from "./EPI.js";

const Movimentacao = sequelize.define('Movimentação', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: sequelize.literal("nextval('seq_movimentacao_id')")
    },
    data: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false, tableName: 'Movimentação'
})

Movimentacao.belongsTo(Funcionario, { foreignKey: 'funcionarioId' });
Movimentacao.belongsTo(EPI, { foreignKey: 'epiId' });
Funcionario.hasMany(Movimentacao, { foreignKey: 'funcionarioId' });
EPI.hasMany(Movimentacao, { foreignKey: 'epiId' });



export { Movimentacao }