const router = require('express').Router();
const { Warehouse,Product, Category } = require('../../models');

router.get('/', (req, res) => {
    Warehouse.findAll({
        attributes: ['id', 'warehouse_name', 'description'],
        include: [
            {
                model: Category,
                include: ['id', 'category_name', 'warehouse_id']
            },
            {
                model: Product,
                include: ['id', 'product_name', 'quantity', 'category_id']
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
        attributes: ['id', 'warehouse_name', 'description'],
        include: [
            {
                model: Category,
                include: ['id', 'category_name', 'warehouse_id']
            },
            {
                model: Product,
                include: ['id', 'product_name', 'quantity', 'category_id']
            }
        ]
    })
        .then(dbWarehouseData => {
            if (!dbWarehouseData) {
                res.status(404).json({ message: 'No warehouse with this id found!' });
                return;
            }
            res.json(dbWarehouseData);
        })
});

module.exports = router;