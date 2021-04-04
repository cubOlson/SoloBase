'use strict';
module.exports = (sequelize, DataTypes) => {
  const userTruck = sequelize.define('userTruck', {
    userId: DataTypes.INTEGER,
    truckId: DataTypes.INTEGER
  }, {});
  userTruck.associate = function(models) {
    userTruck.belongsTo(models.Truck, { foreignKey: 'truckId' });
    userTruck.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return userTruck;
};