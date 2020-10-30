module.exports = (sequelize, Sequelize) => {
	const ProductCategory = sequelize.define('ProductCategory', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		product_id: {
			type: Sequelize.INTEGER
		},
		category_id: {
			type: Sequelize.INTEGER
		}
	});

	return ProductCategory;
};
