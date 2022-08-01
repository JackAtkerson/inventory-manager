const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Warehouse = require('./Warehouse');

User.hasMany(Warehouse, {
	foreignKey : 'user_id'
});

Warehouse.belongsTo(User, {
	foreignKey : 'user_id'
});

Warehouse.hasMany(Category, {
	foreignKey: 'warehouse_id'
});

Category.belongsTo(Warehouse,{
	foreignKey: 'warehouse_id'
});

Category.hasMany(Product, {
	foreignKey: 'category_id'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = { User, Category, Product, Warehouse};