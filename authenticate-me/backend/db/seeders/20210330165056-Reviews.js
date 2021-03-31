'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          truckId: 1,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 1,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 1,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 1,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 2,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 2,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 2,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 2,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 3,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 3,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 3,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 3,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 4,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 4,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 4,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 4,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 5,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 5,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 5,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 5,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 6,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 6,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 6,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 6,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 7,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 7,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 7,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 7,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 8,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 8,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 8,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 8,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 9,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 9,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 9,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 9,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 10,
          userId: 1,
          title: 'This place sucks',
          content: `But I'd still recommend though`,
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 10,
          userId: 2,
          title: 'Awesome! I love it!',
          content: `Honestly I could tell my whole life story here just to justify this but it good.`,
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 10,
          userId: 3,
          title: 'Meh',
          content: `I mean, it was food.`,
          stars: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          truckId: 10,
          userId: 4,
          title: 'Pretty good',
          content: `Yeah I'm stickin with it's good`,
          stars: 4,
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
