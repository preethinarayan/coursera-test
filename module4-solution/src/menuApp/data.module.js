(function(){
'use strict';

angular.module('Data', []);

angular.module('Data')
.config(function(){
	console.log('Data config');
})
.run(function(){
	console.log('Data run');
});

})();