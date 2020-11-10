const { authJwt } = require('../middlewares');
const controller = require('../controllers/adress.controller');

module.exports = function(app) {
	// app.use(function(req, res, next) {
	// 	res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
	// 	next();
    // });
    app.get('/api/adresses',controller.getOneAdress);
	app.post('/api/adresses',controller.postAdresses);
    
};
