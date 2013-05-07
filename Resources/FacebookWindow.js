var Styles = require('/Styles');
var Ui = require('/Ui');



exports.create = function() {
	// var win = Ti.UI.createWindow({
		// backgroundColor : Styles.window.backgroundColor,
		// backgroundImage: Styles.window.backgroundImage,
		// navBarHidden: true
	// });
	
	var win = Ui.createWebViewWindow({
		
		url: 'https://m.facebook.com/Appio.Spain'
	});
	
	
return win;

}
