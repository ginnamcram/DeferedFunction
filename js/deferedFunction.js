/**
* Deferes a function call. The function can only be caled once in a defined timespan.
* After the defined timespan the last call will be executed.
* Works with parameters and context bindings
*/
(function(Function){
	'use strict';

	Function.prototype.defer = function(delay){
		var timer = false;
		var func = this;
		return function(){
			var args = arguments, context = this; //save original args and context
			//reset timer if exist
			if(timer !== false){
				clearTimeout(timer);
			}
			timer = setTimeout(function(){
				func.apply(context,args);
				timer = false;
			},delay);
		};
	};
})(window.Function)