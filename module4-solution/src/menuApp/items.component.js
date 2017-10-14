(function(){
'use strict';

angular.module('Data')
.component('items', {
	templateUrl: 'src/menuApp/templates/all_items.template.html',
	bindings: {
		items: '<'
	}
});

})();