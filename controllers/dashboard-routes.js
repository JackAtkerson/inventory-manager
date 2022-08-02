const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Warehouse, Category, Product } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Warehouse.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'warehouse_name',
      'description',
      'user_id'
    ],
    include: {
      model: User,
      attributes: ['id', 'username']
    }
  })
    .then(dbWarehouseData => {
      const warehouses = dbWarehouseData.map(warehouses => warehouses.get({ plain: true }));
      res.render('dashboard', { warehouses });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/warehouse/:id', (req, res) => {
  Category.findAll({
    attributes: [
      'id',
      'category_name',
      'warehouse_id'
    ],
    include: [
      {
        model: Warehouse,
        attributes: ['id', 'warehouse_name']
      },
      {
        model: Product,
        attributes: ['id', 'product_name', 'quantity', 'category_id']
      }
    ]
  })
    .then(dbCategoryData => {
      const categories = dbCategoryData.map(categories => categories.get({ plain: true }));
      res.render('single-warehouse', { categories });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/create-warehouse', (req, res) => {
  res.render('create-warehouse', { loggedIn: req.session.loggedIn })
});

module.exports = router;