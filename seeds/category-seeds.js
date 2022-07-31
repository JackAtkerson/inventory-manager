const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Coffee'
    },
    {
        category_name: 'Tea'
    },
    {
        category_name: 'Milk'
    },
    {
        category_name: 'Equipment'
    },
    {
        category_name: 'Merchandise'
    } 
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;