'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Photos', [
        {
          caption: 'Bayou Bites',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/bb_3.jpg?itok=8Z-HtiRN',
          truckId: 1,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Belli-ful Bistro',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/20190107_183251%20%281%29_0.jpg?itok=GM2W68HJ',
          truckId: 2,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'California Smothered Burrito Food Truck',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/70070774_2426847284062509_4947469572400742400_n.jpg?itok=yGafm62q',
          truckId: 3,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Chatter Box Cafe',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/chat.jpg?itok=H5DVQklq',
          truckId: 4,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Chick -N- Nooga LLC',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/nooga.jpg?itok=Q7gsfkEV',
          truckId: 5,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'CJ`S BBQ',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/cjs_0.jpg?itok=AyTGRieN',
          truckId: 6,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Heart and Bowl',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/hab.jpg?itok=oo9vTY5-',
          truckId: 7,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Hi Five BBQ',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/52713839_610125112749145_2131822492136767488_o_0.jpg?itok=Wdevg3-B',
          truckId: 8,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'In Season',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/Side%20view%20of%20food%20truck_0.jpg?itok=7eswDHrW',
          truckId: 9,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Pops Dogs',
          url: 'https://www.foodtrucksin.com/sites/default/files/styles/medium/public/pops_0.jpg?itok=Gk_th16c',
          truckId: 10,
          isMenu: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Bayou Bites Menu',
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/12/bd/4c/7c/menu.jpg',
          truckId: 1,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Belli-ful Bistro Menu',
          url: 'https://i.pinimg.com/originals/42/1d/04/421d042ffe959add7de4951dfefd8706.jpg',
          truckId: 2,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'California Smothered Burrito Food Truck Menu',
          url: 'https://d6ozfheqtj1tz.cloudfront.net/ChIJTcDcoGBkYIgRVwaeOu3I3Bs/5b42e38939b33.jpg',
          truckId: 3,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Chatter Box Cafe Menu',
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/c3/8e/75/menu.jpg',
          truckId: 4,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Chick -N- Nooga LLC Menu',
          url: 'https://www.genuinebroasterchicken.com/wp-content/uploads/2020/06/GBC-36x24_New2020-1024x576.jpg',
          truckId: 5,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'CJ`S BBQ Menu',
          url: 'https://i2.wp.com/bbq.huntspoint.com/wp-content/uploads/2019/04/HuntspointBBQ_TakeOut_Menu_Spring-2019-Final-MainMenuPage.jpg?resize=1500%2C1167&ssl=1',
          truckId: 6,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Heart and Bowl Menu',
          url: 'https://cdn.shopify.com/s/files/1/1460/1018/files/2_Smoothie_Menu.png?v=1559139532',
          truckId: 7,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Hi Five BBQ menu',
          url: 'https://d6ozfheqtj1tz.cloudfront.net/ChIJfehJ8LiMwokRWHELIVGMxV4/5b890cd1e0fbd.jpg',
          truckId: 8,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'In Season Menu',
          url: 'https://i.pinimg.com/originals/4f/f9/2f/4ff92f01a05f72df365792bcd3ed9a62.jpg',
          truckId: 9,
          isMenu: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          caption: 'Pops Dogs Menu',
          url: 'https://lh3.googleusercontent.com/proxy/xrwTHgDPrwSNYz7XiaVI9VAQkDVFtQDpggdxYM31Unlr0FtvSYDVfAEp2H7lzyrKsWU4toXDFVHw1n_Dgx944wvN14vyO3Ji205kqB9nqt527TrKu7FAFSIBIcaxDtsBYa5toGJoRqHUqn9sW111Vq2eGmayyVPcRYbaQ0AxlKkQF3LnHPfF7yewGobX6f61ugY',
          truckId: 10,
          isMenu: true,
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
