'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    truckId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    date: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, { foreignKey: 'userId' });
    Reservation.belongsTo(models.Truck, { foreignKey: 'truckId' });
  };
  return Reservation;
};