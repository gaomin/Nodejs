var User = require('../models/user.js');

module.exports = function(app){
	app.get('/', function (req, res) {
    	res.sendfile('app/index.html');
	});

	app.post('/reg', function (req, res) {
    	var data = req.body.name;
    	console.log(data);
    	res.send({'success':'true'});
    	var newUser = new User({
	        name: req.body.name,
	        password: req.body.password,
	        email: req.body.email
   	 	});

   	 	newUser.save(function (err, user) {
	        if (err) {
	          req.flash('error', err);
	          return res.redirect('/');
	       	}
    	});
	});
};