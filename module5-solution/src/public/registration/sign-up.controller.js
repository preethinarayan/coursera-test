(function(){
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService' ,'UserService'];
function SignUpController(MenuService, UserService){
	var reg = this;

	reg.submit = function(){
		console.log("IN HERE");

		if(reg.user.menuitem) {
			MenuService.getMenuItem(reg.user.menuitem).then(function(data){
				if(data) {
					UserService.setUser(reg.user);
					reg.completed = true;
				} else {
					reg.regForm.menuitem.$invalid = true;
					reg.regForm.$invalid = true;
				}
			});
		}
	}

}
	
})();