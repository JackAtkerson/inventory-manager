const router = require('express').Router();
const { User, Warehouse, Category } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    // find all warhouses
    Warehouse.findAll({
        attributes: ['id', 'warehouse_name'],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Category,
                attributes: ['id', 'category_name']
            }
        ]
    })
        .then(dbWarehouseData => res.json(dbWarehouseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Warehouse.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'warehouse_name'],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Category,
                attributes: ['id', 'category_name']
            }
        ]
    })
        .then(dbWarehouseData => res.json(dbWarehouseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Warehouse.create({
        warehouse_name: req.body.warehouse_name,
        description: req.body.description,
        user_id: req.session.user_id
    })
        .then(dbWarehouseData => res.json(dbWarehouseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;