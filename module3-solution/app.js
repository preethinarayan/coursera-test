(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var narrow = this;

	narrow.searchTerm = "";

	narrow.getMenuItems = function(){
		if(narrow.searchTerm === ""){
			narrow.found = []
			return;
		}
		 
		var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);

		promise.then(function(foundItems){
			narrow.found = foundItems;
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	narrow.removeItem = function(index){
		narrow.found.splice(index, 1);
	}

}


MenuSearchService.$inject = ['$http', 'ApiBasePath', '$q']
function MenuSearchService($http, ApiBasePath, $q) {
	var service = this;
	

	service.getMatchedMenuItems = function(searchTerms) {
		var foundItems = [];
    	return $http({
      		method: "GET",
      		url: (ApiBasePath + "/menu_items.json")
    	})
    	.then(function(result){
    		console.log(result);
    		var menuItems = result.data['menu_items'];
    		for(var i=0; i< menuItems.length; i++) {
    			if(menuItems[i].description.indexOf(searchTerms) !== -1) {
    				foundItems.push(menuItems[i]);
    			}
    		}

    		return foundItems;
    	})
    	.catch(function (error) {
      		console.log(error);
    	});
	}
}


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}


})();