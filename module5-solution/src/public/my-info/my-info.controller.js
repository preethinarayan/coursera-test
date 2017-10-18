(function(){
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'MenuService', 'ApiPath'];
function MyInfoController(user, MenuService, ApiPath){
	var myInfo = this;

	myInfo.user = user;
	myInfo.basePath = ApiPath;

	if(myInfo.user && myInfo.user.menuitem){
		MenuService.getMenuItem(myInfo.user.menuitem).then(function(data){
			if(data) {
				myInfo.menuitemDetails = data;
			}
		})
	}

}	

})();