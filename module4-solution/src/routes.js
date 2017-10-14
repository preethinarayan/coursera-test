(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
    	templateUrl: 'src/menuApp/templates/home.template.html'
	})
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menuApp/templates/categories.template.html',	
		controller: 'CategoriesController as categoriesCtrl',
	    resolve: {
	      categories: ['MenuDataService', function (MenuDataService) {
		    return MenuDataService.getAllCategories()
		    .then(function(response){
		    	return response.data;
		    })
		    .catch(function(){
		    	console.log("Error fetching categories");
		    });   
	      }]
	    }
	})
	.state('categories.items', {
		url: '/items/{category}',
		templateUrl: 'src/menuApp/templates/items.template.html',
		controller: 'ItemsController as itemsCtrl',
	    resolve: {
	      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
	        return MenuDataService.getItemsForCategory($stateParams.category)
		    .then(function(response){
		    	return response.data.menu_items;
		    })
		    .catch(function(){
		    	console.log("Error fetching category items");
		    }); 
	      }]
	    }
	});
}

})();