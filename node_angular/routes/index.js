var User = require('../models/user.js');

module.exports = function(app){
	app.get('/', function (req, res) {
        res.sendfile('app/index.html');
	});

	app.post('/reg', function (req, res) {
    	
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

    app.post('/log', function(req, res){
        var name = req.body.name,
            pwd = req.body.password;

        User.get(name, function(err, user){
            if(!user){
                return res.status('error').json({message:'用户不存在！', success: false});
            }
            if(user.password != pwd){
                return res.status('error').json({message:'密码不正确！', success: false});
            }
            return res.status('success').json({message:'登录成功', success: true});
        })
    })
};