// angular.module('myApp')
// 	   .controller('register',['$scope', function($scope) {  
//  			console.log('ssss');
//   	}]
// );


define(['angular','myApp'],function(angular,myApp){
	return angular.module('myApp')
			.controller('register',['$scope','$http', function($scope,$http) {  
 					
 					$scope.user = {
 						name: 'gm',
 						password: 'gm',
 						repassword: 'gm',
 						email: 'gm@126.com'
 					};
 					
 					$scope.sendData = function(){
 						
 						$http.post('/reg',$scope.user)
 							.success(function(){

 							});
 					};
  				}]
			);
});