'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('LocationVotes', [
        {
          truckId: 1,
          locationId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 2,
          locationId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
