module.exports = function(app) {
	app.get('/', function(req, res) { res.send({status: "ON", name: "RESTful API - FacebookApp"}) });

	var publications = require('./controllers/publications.js');
	app.post('/sendPublication', publications.sendPublication);
	app.put('/editPublication/:id', publications.editPublication);
	app.get('/getPublications', publications.getPublications);

	var users = require('./controllers/users.js');
	app.post('/register', users.register);
	app.get('/getUsers', users.getUsers);
};
