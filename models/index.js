const User = require('./User');
const Comment = require('./Comment');
const Product = require('./Product');
const Category = require('./Category');
const Warehouse = require('./Warehouse');

User.hasMany(Product, {
	foreignKey : 'user_id'
});

Product.belongsTo(User, {
	foreignKey : 'user_id'
});

//Comment.belongsTo(User, {
//	foreignKey : 'user_id'
//});

//Comment.belongsTo(Product, {
//	foreignKey : 'product_id'
//});

User.hasMany(Comment, {
	foreignKey : 'user_id'
});

//Product.hasMany(Comment, {
//	foreignKey : 'comment_id'
//});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Product, {
    foreignKey: 'category_id'
});

//Product.belongsToMany(Tag, {
//	foreignKey: 'product_id',
//	through:ProductTag
//})

module.exports = { User, Comment, Category, Product, Warehouse};