define(['angular', 'myApp'],
function(angular, myApp) {
	return angular.module('myApp').directive('upload',
	function() {

		return {
			link: function($scope, element, iAttrs, controller) {
				element.on('keyup',
				function(event) {
					$scope.$apply(function() {
						if ($scope.user.repassword != $scope.user.password) {
							$scope.tips = '两次输入的密码不相同!';
							$scope.myForm.$invalid = true;
						}else{
							$scope.tips = '';
						}
						
					});
				});
			}
		};
	});

});