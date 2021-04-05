'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@truckOwner.io',
        username: 'Truckman',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@fake1.io',
        username: 'Mr.Dibbs',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@fake2.io',
        username: 'FoodIsMyPassion',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};