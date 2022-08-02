const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Warehouse extends Model {}

Warehouse.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        warehouse_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        //timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'warehouse'
    }
);

module.exports = Warehouse;
