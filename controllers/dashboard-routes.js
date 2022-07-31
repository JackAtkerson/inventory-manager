const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment, Product } = require('../models');
const withAuth = require('../utils/auth');

// gets all products posted by user that is currently logged in
router.get('/', withAuth, (req, res) => {
    console.log(req.session.user_id)
    Product.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
           'id',
          'product_name',
          'stock',
          'category_id'
    ],
    order: [['created_at', 'DESC']], 
    include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'product_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
    ]
  })
  .then(dbPostData => {
    const products = dbPostData.map(product => product.get({ plain: true }));
    res.render('dashboard', { products, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

// add new product
router.get('/new', withAuth, (req,res) => {
  res.render('add-post', {loggedIn: true});
})

// when clicking on edit post, will be redirected to this page
router.get('/edit/:id', withAuth, (req, res) => {
    Product.findByPk(req.params.id, {
        attributes: [
          'id',
          'product_name',
          'stock',
          'category_id'
        ],
        include: [
        {
            model: User,
            attributes: ['username']
        }
        ]}
    )
        .then(dbPostData => {
        const recipe = dbPostData.get({ plain: true });

        res.render('edit-product', {
        product,
        loggedIn: true
        });

        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
})

module.exports = router;