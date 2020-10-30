const db = require('../models');
const Category = db.category;


exports.postCategory = (req, res) => {
	Category.create({
		name: req.body.name,
	}).then((cat) => res.json(cat));
};

