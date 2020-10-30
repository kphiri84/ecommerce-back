const db = require('../models');
const ProductCategory = db.productCategory;

exports.postProductCategory = (req, res) => {
	ProductCategory.create({
        category_id: req.body.category_id,
        product_id: req.body.product_id
	}).then((cat) => res.json(cat));
};

