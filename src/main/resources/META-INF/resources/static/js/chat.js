var chatApp = angular.module("chat", []);

chatApp.directive("sidebar", function() {
	
	return {
		
		restrict : "E",
		
		controller : function($scope, $http) {
			
			$scope.sh = false;
			
			$scope.$watch('search', function() {
				
				$http.get("/usersearch?u=" + $scope.search)
				  .then(function(response){ 
					  $scope.users = response.data; 
				 });
				
			});
			
			$scope.showProfile = function() {
				if($scope.sh) {
					
					$scope.sh = false;
				} else {
					
					$scope.sh = true;
				}
			};
			
			$http({
				method : 'GET',
				url : '/user?userid=sonu2x'
			}).then(function successCallback(response) {
			    
				$scope.image = "data:image/png;base64,"+response.data.profileImage;
				$scope.user = response.data;
				
			  });
		},
		
		template : "<img src='{{image}}' data-ng-click='showProfile()' style='position: relative; width: 60px; border-radius: 50%; height: 60px; vertical-align: middle; margin: 2px; border: 3px solid #AAA;'><div style='display: inline-block; font-size: 1.4em;font-family: Century Gothic; color: #FFF; margin-left: 20px; text-transform: capitalize;'>{{user.displayName}}</div>" +
					"<div class='search-bar'>" +
						"<input type='text' data-ng-model='search' ng-model-options='{ debounce: 800 }' placeholder='Search People'><span class='fa fa-search' style='height: 35px;line-height: 35px;'></span>" +
				   "</div>"	+
				   "<li ng-repeat='u in users' style='list-style:none; padding:10px;'><img src='data:image/png;base64,{{u.profileImage}}' style='width:32px; margin-right:10px; height:32px;border-radius:50%;vertical-align:middle;'>{{u.displayName}} <span style='display:none'>{{u._id}}</span></li>"
	};
}). directive("profile", function() {
	
	return {
		
			restrict : "E",
			
			require : "sidebar",
			
			template : "<div data-ng-show='sh' style='display: flex;'>" + 
							"<img src='{{image}}' style='width:200px; height:200px;margin-left:20px;margin-top:20px;'>" +
							"<div style='margin-left: 100px; margin-top:20px;'>" +
								"<div style='text-transform: capitalize;font-family: Century Gothic;'>{{user.displayName}}</div>" +
								"<div style='margin-top:50px;'>"  +
								"<label>Account: </label><div style='font-family: Century Gothic;display:inline-block;'>{{user._id}}</div>" +
								"</div>" +
								"<div style='margin-top:10px;'>" +
								"<label>Email: </label><div style='font-family: Century Gothic;display:inline-block;'>{{user.email}}</div>" +
								"</div>" +
								"<div style='margin-top:10px;'>" +
								"<label>Country: </label><div style='font-family: Century Gothic;display:inline-block;'>{{user.country}}</div>" +
								"</div>" +
								"<div style='margin-top:10px;'>" +
								"<label>Age: </label><div style='font-family: Century Gothic;display:inline-block;'>{{user.age}}</div>" +
								"</div>" +
							"</div>" +
						"</div>"
	};
});