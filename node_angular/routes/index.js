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

    			 return res.status('error').json({message: '用户已存在!', flag: 'exist', success: true});
    		}
    		newUser.save(function (err, user) {
		        if (err) {
		          
		          return res.status('error').json({message: err, success: false});
		         
		       	}

		       	 return res.status('success').json({message: '注册成功!', flag: 'new', success: true});
	    	});
    	});
   	 	
	});
};