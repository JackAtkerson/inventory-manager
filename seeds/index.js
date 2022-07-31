const seedComments = require('./comment-seeds');
//const seedRecipe = require('./recipe-seeds');
const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedRecipe();
  console.log('--------------');
  
  await seedComments();
  console.log('--------------');

  await seedCategories();
  console.log('\n-----CATEGORIES SEEDED-----\n');

  await seedProducts();
  console.log('\n-----PRODUCTS SEEDED-----\n');



  process.exit(0);
};

seedAll();