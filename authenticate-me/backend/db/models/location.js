'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {
    Location.hasMany(models.Truck, { foreignKey: 'locationId' });
  };
  return Location;
};