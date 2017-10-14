(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories){
	var cat = this;

	cat.categories = categories;

    // MenuDataService.getAllCategories()
    // .then(function(response){
    // 	for(var i = 0; i < response.data.length; i++){
    // 		console.log(response.data[i]);
    // 	}
    // 	menuApp.categories = response.data;
    // })
    // .catch(function(){
    // 	console.log("Error fetching categories");
    // });
}

})();