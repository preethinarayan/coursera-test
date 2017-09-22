(function() {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;

	toBuy.toBuyList = ShoppingListCheckOffService.listItemsToBuy();

	toBuy.bought = function(itemIndex) {
	    ShoppingListCheckOffService.addItemToBought(itemIndex);
	}
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
	var alreadyBought = this;

	alreadyBought.boughtList = ShoppingListCheckOffService.listBoughtItems();
};

function ShoppingListCheckOffService() {

	var service = this;
	var toBuyItems = [{
		name: "Cookies",
		quantity: 10
	},
	{
		name: "Chips",
		quantity: 4
	},
	{
		name: "Biscuits",
		quantity: 9
	},
	{
		name: "Fruits",
		quantity: 4
	},
	{
		name: "Coconuts",
		quantity: 5

	}];
	var boughtItems = [];

	service.addItemToBought = function(itemIndex) {
		boughtItems.push(toBuyItems[itemIndex]);
		toBuyItems.splice(itemIndex, 1);
	};

	service.listItemsToBuy = function() {
		return toBuyItems;
	};

	service.listBoughtItems = function() {
		return boughtItems;
	}

};

})();