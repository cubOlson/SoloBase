'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Truck = sequelize.define('Truck', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: DataTypes.STRING,
    foodType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priceRange: DataTypes.STRING
  }, {});

  Truck.associate = function(models) {
    Truck.belongsTo(models.Location, { foreignKey: 'locationId' });
    Truck.hasMany(models.Review, { foreignKey: 'truckId' });
    Truck.hasMany(models.Photo, { foreignKey: 'truckId' });
  };
  return Truck;
};