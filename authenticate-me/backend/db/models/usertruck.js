'use strict';
module.exports = (sequelize, DataTypes) => {
  const userTruck = sequelize.define('userTruck', {
    userId: DataTypes.INTEGER,
    truckId: DataTypes.INTEGER
  }, {});
  userTruck.associate = function(models) {
    // associations can be defined here
  };
  return userTruck;
};