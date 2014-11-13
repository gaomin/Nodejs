var myApp = angular.module('myApp',['ngRoute']);

  myApp.config(['$routeProvider',function ($routeProvider) {
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
          templateUrl: 'views/404.html'
        });
}]);




