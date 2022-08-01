const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const warehouseRoutes = require('./warehouse-routes');


router.use('/users', userRoutes);
router.use('/warehouses', warehouseRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;