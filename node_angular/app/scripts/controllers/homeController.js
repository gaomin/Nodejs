define(['angular','myApp'], function(angular, myApp){
	return angular.module('myApp')
		.controller('homeController', ['$scope', '$rootScope',function($scope, $rootScope){
			console.log($rootScope.curUser);
			$rootScope.curUser = window.localStorage.user;

			$scope.logout = function(){
				window.localStorage.user = '';
				$rootScope.curUser = '';
			}
		}]);
})