const config = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	operatorsAliases: false,

	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.category = require('../models/category.model')(sequelize, Sequelize);
db.product = require('../models/product.model')(sequelize, Sequelize);
db.productCategory = require('../models/productCategory.model')(sequelize, Sequelize);
db.review = require('../models/review.model')(sequelize, Sequelize);
db.adress = require('../models/adress.model')(sequelize, Sequelize);

// db.user.belongsToMany(db.route, {
//     through: "user_routes",
//     foreignKey: "userId",
//     otherKey: "routeId"
// })

db.user.hasMany(db.review);
db.user.hasMany(db.adress);

db.category.hasMany(db.productCategory);
db.category.belongsToMany(db.product, { through: db.productCategory });

db.product.hasMany(db.review);
db.product.hasMany(db.productCategory);
db.product.belongsToMany(db.category, { through: db.productCategory });

db.productCategory.belongsTo(db.product);
db.productCategory.belongsTo(db.category);


db.review.belongsTo(db.product);
db.review.belongsTo(db.user);

db.adress.belongsTo(db.user);

module.exports = db;
