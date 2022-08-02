const seedUsers = require('./user-seeds');
const seedWarehouses = require('./warehouse-seeds')
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedWarehouses();
  console.log('\n-----WAREHOUSES SEEDED-----\n');

  await seedCategories();
  console.log('\n-----CATEGORIES SEEDED-----\n');

  await seedProducts();
  console.log('\n-----PRODUCTS SEEDED-----\n');

  process.exit(0);
};

seedAll();