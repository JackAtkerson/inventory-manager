const { Warehouse } = require('../models');

const warehouseData = [
    {
        warehouse_name: 'Coffee Warehouse',
        description: 'A warehouse used to ship and store coffe, tea, and related equipment.',
        user_id: 1
    }
];

const seedWarehouses = () => Warehouse.bulkCreate(warehouseData);

module.exports = seedWarehouses;