define(['angular','myApp'], function(angular, myApp){
	return angular.module('myApp')
		.controller('homeController', ['$scope', '$rootScope',function($scope, $rootScope){
			

			$scope.logout = function(){
				window.localStorage.user = '';
				$rootScope.curUser = '';
			}
		}]);
})