var chatApp = angular.module("chat", []);

chatApp.directive("sidebar", function() {
	
	return {
		
		restrict : "E",
		
		controller : function($scope, $http) {
			
			$scope.sh = false;
			
			$scope.showProfile = function() {
				if($scope.sh) {
					
					$scope.sh = false;
				} else {
					
					$scope.sh = true;
				}
			};
			
			$http({
				method : 'GET',
				url : '/user?userid=vinnnnz2'
			}).then(function successCallback(response) {
			    
				$scope.image = "data:image/png;base64,"+response.data.profileImage;
				$scope.user = response.data;
				
			  });
		},
		
		template : "<img src='{{image}}' data-ng-click='showProfile()' style='position: relative; width: 60px; border-radius: 50%; height: 60px; vertical-align: middle; margin: 2px; border: 3px solid #AAA;'><div style='display: inline-block; font-size: 1.4em;font-family: Century Gothic; color: #FFF; margin-left: 20px; text-transform: capitalize;'>{{user.displayName}}</div>" +
					"<div class='search-bar'>" +
						"<input type='text' placeholder='Search People'><span class='fa fa-search' style='height: 35px;line-height: 35px;'></span>" +
				   "</div>"	
	};
}). directive("profile", function() {
	
	return {
		
			restrict : "E",
			
			require : "sidebar",
			
			template : "<div data-ng-show='sh' style='display: flex;'><span>profile</span></div>"
	};
});