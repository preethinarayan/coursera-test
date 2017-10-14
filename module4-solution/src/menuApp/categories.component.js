(function(){
'use strict';

angular.module('Data')
.component('categories', {
	templateUrl: 'src/menuApp/templates/all_categories.template.html',
	bindings: {
		categories: '<'
	}
});

})();