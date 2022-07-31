const { Product } = require('../models');

const productData = [
    {
        product_name: 'Light Roast Coffee',
        stock: 2,
        category_id: 1
    },
    {
        product_name: 'Medium Roast Coffee',
        stock: 25,
        category_id: 1
    },
    {
        product_name: 'Dark Roast Coffee',
        stock: 7,
        category_id: 1
    },
    {
        product_name: 'Seasonal Coffee',
        stock: 19,
        category_id: 1
    },
    {
        product_name: 'Chai',
        stock: 16,
        category_id: 2
    },
    {
        product_name: 'Matcha',
        stock: 43,
        category_id: 2
    },
    {
        product_name: 'English Breakfast Tea',
        stock: 5,
        category_id: 2
    },
    {
        product_name: 'Earl Gray Tea',
        stock: 8,
        category_id: 2
    },
    {
        product_name: 'Oat Milk',
        stock: 72,
        category_id: 3
    },
    {
        product_name: 'Almond Milk',
        stock: 49,
        category_id: 3
    },{
        product_name: 'Coconut Milk',
        stock: 11,
        category_id: 3
    },{
        product_name: 'Soy Milk',
        stock: 37,
        category_id: 3
    },{
        product_name: 'Coffee Filters',
        stock: 18,
        category_id: 4
    },{
        product_name: 'Coffee Machine',
        stock: 5,
        category_id: 4
    },{
        product_name: 'Kettle',
        stock: 3,
        category_id: 4
    },
    {
        product_name: 'Thermometer',
        stock: 8,
        category_id: 4
    },
    {
        product_name: 'Scale',
        stock: 9,
        category_id: 4
    },
    {
        product_name: 'Stir Stick',
        stock: 14,
        category_id: 4
    },
    {
        product_name: 'Small t-shirt',
        stock: 15,
        category_id: 5
    },
    {
        product_name: 'Medium t-shirt',
        stock: 25,
        category_id: 5
    },
    {
        product_name: 'Large t-shirt',
        stock: 30,
        category_id: 5
    },
    {
        product_name: 'XL t-shirt',
        stock: 20,
        category_id: 5
    },
    {
        product_name: 'XXL t-shirt',
        stock: 15,
        category_id: 5
    },
    {
        product_name: 'Mug',
        stock: 10,
        category_id: 5
    },
    {
        product_name: 'Stickers',
        stock: 12,
        category_id: 5
    },
    {
        product_name: 'Canvas Bag',
        stock: 28,
        category_id: 5
    },
    {
        product_name: 'Fanny Pack',
        stock: 17,
        category_id: 5
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;