'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Locations', [
        {
          name: 'The Streets',
          address1: '1 Street N',
          address2: 'On the Left',
          city: 'Urcity',
          state: 'Urstate',
          postalCode: 5032,
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
