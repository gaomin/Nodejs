var User = require('../models/user.js');

module.exports = function(app){
	app.get('/', function (req, res) {
    	res.sendfile('app/index.html');
	});

	app.post('/reg', function (req, res) {
    	var data = req.body.name;
    	console.log(data);
    	
    	var newUser = new User({
	        name: req.body.name,
	        password: req.body.password,
	        email: req.body.email
   	 	});

    	User.get(newUser.name, function(err,user){
    		if(user){
    			
    			 return res.status('error').send('用户已存在!');
    			
       			 //return res.redirect('/register');//返回注册页
    		}
    		newUser.save(function (err, user) {
		        if (err) {
		          
		          return res.status('error').send(err);
		         // return res.redirect('/');
		       	}

		       	 return res.status('success').send('注册成功!');
	    	});
    	});
   	 	
	});
};