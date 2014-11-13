var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/welcome', {
        templateUrl: 'views/welcome.html',
        //controller: 'RouteListCtl'
      }).when('/error',{
      	templateUrl: 'views/404.html'
      });
      
      
}]);