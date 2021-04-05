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
        },
        {
          name: 'The Streets2',
          address1: '2 Street N',
          address2: 'On the Right',
          city: 'Urcity',
          state: 'Urstate',
          postalCode: 5033,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bridgetown',
          address1: '11 Alameda St.',
          address2: '',
          city: 'Urcity',
          state: 'Urstate',
          postalCode: 5032,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Docks',
          address1: '1232 W Grammerton Rd.',
          address2: `Can't miss it`,
          city: 'Urcity',
          state: 'Urstate',
          postalCode: 5032,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Plaza District',
          address1: '123-145 North End Plaza',
          address2: '',
          city: 'Urcity',
          state: 'Urstate',
          postalCode: 5033,
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
