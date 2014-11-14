
require.config({ 
 	
    paths: {  
        angular: '/scripts/vender/angular',  
        angularRoute: '/scripts/vender/angular-route', 
        jquery: '/scripts/vender/jquery',
        bootstrap: '/scripts/vender/bootstrap', 
        domReady:'/scripts/vender/domReady',
        myApp: '/scripts/myApp'
    },  

    shim: {  
        'angular' : {'exports' : 'angular'},  
        'angularRoute': ['angular'],  
        
    },  
    priority: [  
        'angular'
    ]  
});  


require([
	'angular',
	'angularRoute',
    'myApp',
    'domReady',
    'jquery'
    ],
    function (angular,angularRoute,myApp,domReady,$) {

    	 myApp.config(['$routeProvider',
	      
	       function($routeProvider) {
	          $routeProvider
		        .when('/',{
		          templateUrl: 'views/welcome.html',

		        })
		        .when('/register',{
		          templateUrl: 'views/register.html',
		          controller: 'register'
		        })
		        .when('/welcome', {
		          templateUrl: 'views/welcome.html',
		         
		        }).when('/error',{
		          templateUrl: 'views/404.html',
		          controller: function(){console.log('ddddd');}
		        });
	        }
	    ]);

		domReady(function() {
		      angular.bootstrap(document, ['myApp']);

		      
		      $('html').addClass('ng-app: myApp');
		    });

		
	}
     	
);








