const router = require('express').Router();
const { User, Warehouse, Category } = require('../../models');

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

router.post('/', (req, res) => {
    Warehouse.create({
        warehouse_name: req.body.warehouse_name,
        description: req.body.description
    })
    .then(dbWarehouseData => {
        req.session.save(() => {
            req.body.warehouse_name = dbWarehouseData.warehouse_name;
            req.body.description = dbWarehouseData.description;

            res.json(dbWarehouseData);
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
})

module.exports = router;