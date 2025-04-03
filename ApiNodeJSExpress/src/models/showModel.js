const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
const DepartamentoModel = require('./departamentoModel.js'); // Importar el modelo de departamentos

class ShowModel extends Model {}

ShowModel.init(
  {
    // Propiedades del show
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    weblink:{
      type:DataTypes.STRING,
    },
    image:{
      type: DataTypes.STRING,
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      references: {
        model: DepartamentoModel, // Referencia al modelo de departamentos
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // Si se borra el departamento, deja este campo en null
    },
  },
  {
    sequelize,
    modelName: 'Show', // Nombre del modelo
    tableName: 'shows', // Nombre de la tabla en la base de datos
  }
);

// Definir la relación
ShowModel.belongsTo(DepartamentoModel, { foreignKey: 'id_departamento' });
DepartamentoModel.hasMany(ShowModel, { foreignKey: 'id_departamento' });



module.exports = ShowModel;