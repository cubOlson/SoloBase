'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    truckId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    stars: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Truck, { foreignKey: 'truckId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Review;
};