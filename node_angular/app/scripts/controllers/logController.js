define(['angular','myApp'], function(anugluar, myApp){

	return anugluar.module('myApp')
			.controller('logController',['$scope','$http',
			 function($scope, $http){
			 	$scope.message = '';
			 	$scope.user = {};
			 	$scope.sendData = function(){

			 		$http.post('/log', $scope.user).success(function(data){
			 			if(data.success){
			 				$scope.message = data.message + '   3秒后自动跳转';
			 				window.localStorage.user = $scope.user.name;
							// setTimeout(function() {
							// 	window.location = '#/'
							// },
							// 3000);
			 			}else {
							$scope.message = data.message;
							console.log(data);
						}

			 		});
			 		
			 	};
			 }])
})