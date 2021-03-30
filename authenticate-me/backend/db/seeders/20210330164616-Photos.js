'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Photos', [
        {
          caption: 'Truck 1',
          url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Froaminghunger.com%2Foff-the-grill-express%2F&psig=AOvVaw09GaCObOn6d0z3JxvZDbQp&ust=1617209225823000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPig3P272O8CFQAAAAAdAAAAABAF',
          truckId: 1,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Truck 2',
          url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.roadtripsandrollercoasters.com%2Fchattanooga-food-trucks%2F&psig=AOvVaw09GaCObOn6d0z3JxvZDbQp&ust=1617209225823000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPig3P272O8CFQAAAAAdAAAAABAL',
          truckId: 2,
          isMenu: false,
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
