var app = angular.module('app', [
        'ngRoute'
    ])
    .config(function ($routeProvider){
        $routeProvider
            .when('/wel', {
                controller: 'otherCtrl',
                templateUrl: '../views/welcome.html',
                publicAccess: true
            });
            
    });


app.controller('otherCtrl',function($scope){
    console.log('i am other page');
    $scope.title = 'i am other page';
});