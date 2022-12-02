const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    launchdate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.REAL,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },{timestamps: false});
};
