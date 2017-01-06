var application = angular.module('ech', []);

application.controller('registration', function($scope, $http) {
	
	$scope.userForm = {};
	
	$scope.upload = "";
	
	var fd = new FormData();
	
	$scope._register = function() {
		
		console.log($scope.userForm);
		console.log($scope.upload);
		fd.append("displayName", $scope.userForm.displayName);
		fd.append("userID", $scope.userForm.userID);
		fd.append("email", $scope.userForm.email);
		fd.append("age", $scope.userForm.age);
		fd.append("country", $scope.userForm.country);
		fd.append("password", $scope.userForm.password);
		fd.append("image", $scope.userForm.image);
		$http({
			method : 'POST',
			url : '/register',
			headers: {
				'Content-Type': undefined
			},
			data : fd
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	}
});

application.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
           var model = $parse(attrs.fileModel);
           var modelSetter = model.assign;
           
           element.bind('change', function(){
              scope.$apply(function(){
                 modelSetter(scope, element[0].files[0]);
              });
              
              scope.userForm['image'] = scope.upload;
           });
        }
     };
  }]);