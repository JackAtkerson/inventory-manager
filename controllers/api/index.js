const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tags-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);

router.use('/comments', commentRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/post', postRoutes);

module.exports = router;