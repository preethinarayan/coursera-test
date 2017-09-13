(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.displayMessage = "";
	
	$scope.checkLunchAndDisplayMessage = function(){
		console.log("IN HERE");
		var lunchItems = [];
		console.log($scope.lunchMenuItems);
		if($scope.lunchMenuItems && $scope.lunchMenuItems.length > 1){
			lunchItems = $scope.lunchMenuItems.split(",");
			if(lunchItems.length > 3) {
				$scope.displayMessage = "Too Much!";
			} else {
				$scope.displayMessage = "Enjoy!";
			}
		} else {
			console.log("in else");
			$scope.displayMessage = "Please enter data first";
		}
	};

}

})();