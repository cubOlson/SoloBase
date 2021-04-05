'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reservations', [
        {
          truckId: 1,
          name: 'Mr. Smith',
          address1: '6748 North Umbridge Boulevard',
          address2: '',
          date: '4/23/21',
          email: 'fake@gmail.com',
          phone: '765-345-1625',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 2,
          name: 'Crub Bolson',
          address1: '12 Ramsey Street',
          address2: 'Door 1',
          date: '2021-04-11',
          email: 'fake11@gmail.com',
          phone: '763-231-2933',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 2,
          name: 'Crub Bolson',
          address1: '12 Ramsey Street',
          address2: 'Door 2',
          date: '2021-04-12',
          email: 'fake11@gmail.com',
          phone: '763-231-2933',
          userId: 1,
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
