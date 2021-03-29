'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocationVote = sequelize.define('LocationVote', {
    truckId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  LocationVote.associate = function(models) {
    LocationVote.belongsTo(models.Truck, { foreignKey: 'truckId' });
    LocationVote.belongsTo(models.Location, { foreignKey: 'locationId' });
    LocationVote.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return LocationVote;
};