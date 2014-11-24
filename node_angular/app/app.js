
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
    'jquery',
    'scripts/controllers/all',
    'scripts/directives/all'

    ],
    
    function (angular,angularRoute,myApp,domReady,$) {

    	 myApp.config(['$routeProvider',
	      
	       function($routeProvider) {
	          $routeProvider
		        .when('/',{
		          templateUrl: 'views/welcome.html',
		          controller: 'homeController'
		        })
		        .when('/register',{
		          templateUrl: 'views/register.html',
		          controller: 'regController'
		        })
		        .when('/login', {
		          templateUrl: 'views/login.html',
		          controller: 'logController'
		        })
		        .otherwise({redirectTo: '/'});
		        
	        }
	    ]);

		domReady(function() {
		      angular.bootstrap(document, ['myApp']);

		      
		      $('html').addClass('ng-app: myApp');
		    });

		
	}
     	
);








