const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');

class DepartamentoModel extends Model {}

DepartamentoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Departamento',
    tableName: 'departamentos',
    schema: 'public',
    timestamps: false, // Si no necesitas createdAt y updatedAt
  }
);

module.exports = DepartamentoModel;
