'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Trucks', [
        {
        name: 'Bayou Bites', 
        description: 'One-stop shop for all your Cajun/Creole needs', 
        locationId: 1, 
        phone: '555-555-5555', 
        website: 'https://www.foodtrucksin.com/bayou-bites',
        foodType: 'Southern, Cajun/Creole, Seafood',
        priceRange: '$$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belli-ful Bistro', 
        description: 'We offer fried meat and fried veggies only.', 
        locationId: 2, 
        phone: '444-444-4444', 
        website: 'https://www.foodtrucksin.com/belli-ful-bistro',
        foodType: 'Comfort Food, Southern',
        priceRange: '$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'California Smothered Burrito Food Truck', 
        description: 'Smothered burritos only after Jeff quit. Now hiring.', 
        locationId: 3, 
        phone: '575-575-7555', 
        website: 'https://www.foodtrucksin.com/california-smothered-burrito-food-truck',
        foodType: 'Mexican, Tacos, Tex-Mex',
        priceRange: '$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chatter Box Cafe', 
        description: 'No talking allowed. Open Mondays and Tuesdays only except by appointment.', 
        locationId: 4, 
        phone: '484-448-4484', 
        website: 'https://www.foodtrucksin.com/chatter-box-cafe',
        foodType: 'Southern, American (New)',
        priceRange: '$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chick -N- Nooga LLC', 
        description: 'Here at Chick-N-Nooga we believe that chicken should be more expensive. This makes it tastier.', 
        locationId: 5, 
        phone: '995-595-5955', 
        website: 'https://www.foodtrucksin.com/chick-n-nooga-llc',
        foodType: 'Southern, American (Traditional), Comfort Food',
        priceRange: '$$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: `CJ'S BBQ`, 
        description: 'Taste the meat, not the heat Chattanooga. Or my name aint CJ', 
        locationId: 1, 
        phone: '334-443-4433', 
        website: 'https://www.foodtrucksin.com/cjs-bbq',
        foodType: 'Barbeque',
        priceRange: '$$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Heart and Bowl', 
        description: 'Now offering delicious nutritious Slurm and Slurm-Zero.', 
        locationId: 2, 
        phone: '575-575-7445', 
        website: 'https://www.foodtrucksin.com/heart-and-bowl',
        foodType: 'Smoothies, Juice, and Beverages, Sweets & Treats',
        priceRange: '$$$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hi Five BBQ', 
        description: 'Cheaper and better than the CJ crap. We only cook with charcoal here.', 
        locationId: 3, 
        phone: '484-438-3384', 
        website: 'https://www.foodtrucksin.com/hi-five-bbq',
        foodType: 'Barbeque, Tex-Mex',
        priceRange: '$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'In Season', 
        description: 'Just walk around back and have your password ready.', 
        locationId: 4, 
        phone: '575-665-7445', 
        website: 'https://www.foodtrucksin.com/season',
        foodType: 'The Good Stuff',
        priceRange: '$$$$$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pops Dogs', 
        description: 'We sell small dogs big dogs long dogs wide dogs spicy dogs cheap dogs sassy dogs we got the dogs.', 
        locationId: 5, 
        phone: '555-222-3384', 
        website: 'https://www.foodtrucksin.com/pops-dogs',
        foodType: 'Hot Dogs, American (Traditional)',
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
