const router = require('express').Router();
const { Op } = require('sequelize');
const { User, Comment, Product } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session)
    Product.findAll({
        where: {
          id: {
            [Op.between]: [1,6]
          }
        },
        
        order: [['created_at', 'DESC']], 
        include: [
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
          const products = dbPostData.map(product => product.get({ plain: true }));
          res.render('homepage', {
            products,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// find all products
router.get('/products', (req, res) => {
  console.log(req.session)
  Product.findAll({
      attributes: [
          'id',
          'product_name',
          'stock',
          'category_id'
      ],
      order: [['created_at', 'DESC']], 
      include: [
          {
            model: User,
            attributes: ['username']
          }
      ]
  })
      .then(dbPostData => {
        const products = dbPostData.map(product => product.get({ plain: true }));
        res.render('category', {
          product,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// get single post
router.get('/product/:id', (req,res) => {
  Product.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'product_name',
        'stock',
        'category_id',
        
        
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id', 'product_id', 'created_at'],
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const product = dbPostData.get({ plain: true });
      res.render('single-product', {
        product,
        loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})

router.get('/product/category/:category', (req, res) => {
  console.log(req.params.category)
  Recipe.findAll({
      where: {
        category: req.params.category
      },
      attributes: [
          'id',
          'category_name',
    
      ],
      order: [['created_at', 'DESC']], 
      include: [
          {
            model: User,
            attributes: ['username']
          }
      ]
  })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this category' });
          return;
        }
        const products = dbPostData.map(product => product.get({ plain: true }));
        res.render('category', {
          products,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//login / signup page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login-page', { layout: 'login'});
});

module.exports = router;