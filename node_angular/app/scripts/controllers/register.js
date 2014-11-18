
define(['angular','myApp'],function(angular,myApp){
	return angular.module('myApp')
			.controller('register',['$scope','$http', function($scope,$http) {  
 					$scope.message = '';
 					
 					$scope.user = {
 						name: 'gm',
 						password: 'gm',
 						repassword: 'gm',
 						email: 'gm@126.com'
 					};
 					
 					$scope.sendData = function(){
 						$http.post('/reg',$scope.user)
 							.success(function(data){
 								if(data.success){
	 								if(data.flag == 'new'){
	 									$scope.message = data.message +'   3秒后自动跳转';
	 									setTimeout(function(){window.location = '#/'},3000);
	 								}else{
		 								$scope.message = data.message;
		 								console.log(data);
	 								}
 								}
 							});
 						};
  				}]
			);
});