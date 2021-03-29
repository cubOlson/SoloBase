'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Trucks', [
        {
        name: 'The Food Truck', 
        description: 'One-stop shop for all your food needs', 
        locationId: 1, 
        phone: '555-555-5555', 
        website: 'www.website.com',
        foodType: 'Mexican',
        priceRange: '$',
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
