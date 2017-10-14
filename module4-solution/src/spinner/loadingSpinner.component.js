(function(){

'use strict';

angular.module('Spinner')
.component('loadingSpinner', {
	templateUrl: 'src/spinner/loadingSpinner.template.html',
	controller: SpinnerController
});

SpinnerController.$inject = ['$rootScope'];
function SpinnerController($rootScope){
	var $ctrl = this,
		cancelled = [];

	$ctrl.$onInit = function(){
		var cancel = $rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams, options){
			$ctrl.showSpinner = true;
		});
		cancelled.push(cancel);

		cancel = $rootScope.$on('$stateChangeSuccess',
	    function(event, toState, toParams, fromState, fromParams){
	      $ctrl.showSpinner = false;
	    });
	    cancelled.push(cancel);

	    cancel = $rootScope.$on('$stateChangeError',
	    function(event, toState, toParams, fromState, fromParams, error){
	      $ctrl.showSpinner = false;
	    });
	    cancelled.push(cancel);
	}

	$ctrl.$onDestroy = function () {
    	cancelled.forEach(function (item) {
      		item();
    	});
  	};
};

})();