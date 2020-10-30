const { authJwt } = require('../middlewares');
const controller = require('../controllers/product.controller');

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
		next();
	});

	app.get('/api/products',controller.getAllProducts);

	
	app.get('/api/products/:id',controller.getOneProduct);

	// app.get('/:id/purchased',checkUser, controller.getSinglePurchasedProductInfo);

	// // router.route('/purchased-list')
	// // .get(checkUser, controller.getPurchasedList);

	app.post('/api/products',controller.postProducts);
   app.post('/:id/reviews', controller.submitReview)
    // app.delete('/:id/reviews',checkUser, controller.deleteReview);

	// app.get('/', [ authJwt.verifyToken ], controller.getCart);
	// app.post([ authJwt.verifyToken ], controller.addToCart);

	// app.delete('/:id', [ authJwt.verifyToken ], controller.removeItemFromCart);
};
