// Developer Module

exports.inf = function (){
	for (var i = 0, l= arguments.length; i < l; i++){
		Ti.API.info(arguments[i]);
	}
}


exports.infArray = function (array){
	for (var i = 0, l= array.length; i < l; i++){
		Ti.API.info(array[i]);
	};
}; 
