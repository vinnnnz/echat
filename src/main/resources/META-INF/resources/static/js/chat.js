var chatApp = angular.module("chat", []);

chatApp.directive("sidebar", function() {
	
	return {
		
		restrict : "E",
		
		controller : function($scope, $http) {
			
			$scope.toggleProfile = false;
			
			$scope.$watch('search', function() {
				
				$http.get("/usersearch?u=" + $scope.search)
				  .then(function(response){ 
					  $scope.users = response.data; 
				 });
				
			});
			
			$scope.showProfile = function() {
				if($scope.toggleProfile) {
					
					$scope.toggleProfile = false;
				} else {
					
					$scope.toggleProfile = true;
				}
			};
			
			$scope.addAsContact = function(e) {
				
				$scope.addProfile = e.u;
				
				$scope.toggleAddProfile ? $scope.toggleAddProfile = false : $scope.toggleAddProfile = true;
			}
			
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
				   "<li ng-repeat='u in users' data-ng-click='addAsContact(this)' style='list-style:none; padding:10px;'><img src='data:image/png;base64,{{u.profileImage}}' style='width:32px; margin-right:10px; height:32px;border-radius:50%;vertical-align:middle;'>{{u.displayName}} <span style='display:none'>{{u._id}}</span></li>"
	};
}). directive("profile", function() {
	
	return {
		
			restrict : "E",
			
			require : "sidebar",
			
			template : "<div class='profile-wrapper' data-ng-show='toggleProfile'>" + 
							"<img src='{{image}}' class='profile-image'>" +
							"<div class='profile-info'>" +
								"<div class='profile-display-name'>{{user.displayName}}</div>" +
								"<div class='profile-data-wrapper'>"  +
								"<label>Account: </label><div class='profile-data'>{{user._id}}</div>" +
								"</div>" +
								"<div class='profile-data-wrapper'>" +
								"<label>Email: </label><div class='profile-data'>{{user.email}}</div>" +
								"</div>" +
								"<div class='profile-data-wrapper'>" +
								"<label>Country: </label><div class='profile-data'>{{user.country}}</div>" +
								"</div>" +
								"<div class='profile-data-wrapper'>" +
								"<label>Age: </label><div  class='profile-data'>{{user.age}}</div>" +
								"</div>" +
							"</div>" +
						"</div>"
	};
}).directive("aprofile", function() {
	
	return {
		
		restrict : "E",
		
		require : "sidebar",
		
		template : "<div data-ng-show='toggleAddProfile'>{{addProfile.displayName}}</div>"
	};
});