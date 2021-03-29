'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    caption: DataTypes.STRING,
    url: DataTypes.STRING,
    truckId: DataTypes.INTEGER,
    isMenu: DataTypes.BOOLEAN
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.Truck, { foreignKey: 'truckId' });
  };
  return Photo;
};