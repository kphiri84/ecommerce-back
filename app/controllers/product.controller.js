const db = require('../models');
const config = require('../config/auth.config');
const User = db.user;
const Product = db.product;
const Receipt = db.receipt;
const Review = db.review;

exports.getAllProducts = (req, res) => {
	Product.findAll().then((products) => res.json(products)).catch((err) => {
		// console.log('Products err!', err);
		return res.status(400).send(err.message);
	});
};

exports.getOneProduct = (req, res) => {
	Product.findByPk(req.params.id).then((products) => res.json([ products ])).catch((err) => {
		return res.status(400).send(err.message);
	});
};

exports.postProducts = (req, res) => {
	Product.create({
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
		image: req.body.image,
		category: req.body.category
	}).then((product) => res.json(product));
};

exports.getSinglePurchasedProductInfo = (req, res) => {
	// 1. check to see if the user ID is in the product receipt
	// 2. if user id is found in the product's receipt then OK
	// console.log('>>>>>>>>>>>>>>> \n', req.params.id, req.user.id)
	Receipt.findAll({
		where: {
			product_id: req.params.id,
			user_id: req.user.id
		}
	})
		.then((receipt) => {
			if (receipt.length > 0) {
				// console.log('<><><><><><>Receipt: \n\n', receipt[0]);
				return res.json(receipt[0]);
				// TODO: Give user downloadable link or readable page, etc
				// At the moment, just display a message that user purchased it
			}
			return res.status(403).send('No purcahsed product!');
		})
		.catch((err) => {
			// console.log('<><><><><><>ERROR RECEIPT: \n\n', err);
			return res.status(400).send('Could not retrieve receipts.');
		});
};

exports.submitReview = (req, res) => {
	Review.findAll({
		where: {
			product_id: req.params.id,
			user_id: req.user.id
		}
	})
		.then((reviews) => {
			// console.log("********\n\n", reviews);
			if (reviews && reviews[0]) {
				return res.status(403).send('Already wrote a review before.');
			} else {
				Review.create({
					user_id: req.user.id,
					product_id: req.params.id,
					body: req.body.body,
					rating: parseInt(req.body.rating, 10)
				})
					.then((result) => {
						// console.log('== Successfully saved review \n\n', result);
						return res.json(result);
					})
					.catch((error) => {
						return res.status(400).send('Could not save your review.');
					});
			}
		})
		.catch((err) => {
			return res.status(400).send('Could not submit your review.');
		});
};

exports.deleteReview = (req, res) => {
	// console.log('REVIEW USER====>\n', req.user);
	Review.destroy({
		where: {
			product_id: req.params.id,
			user_id: req.user.id
		}
	})
		.then(() => {
			// console.log("********\n\n", reviews);
			return res.status(200).send('Successfully deleted your review.');
		})
		.catch((err) => {
			return res.status(400).send('Could not delete your review.');
		});
};
