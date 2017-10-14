(function(){
'use strict';

angular.module('MenuApp', ['ui.router', 'Spinner', 'Data']);

angular.module('MenuApp')
.config(function(){
	console.log('Menu App config');
})
.run(function(){
	console.log('Menu App run');
});

})();