

exports.setProperty =function(_args){
	Ti.App.Properties.setString(_args.name, _args.value)
	
};


exports.getProperty = function(_args){
	return 	Ti.App.Properties.getString(_args.name)

	
};
