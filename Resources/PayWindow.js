var Styles = require('/Styles');
var Ui = require('/Ui');



exports.create = function() {
	// var win = Ti.UI.createWindow({
		// backgroundColor : Styles.window.backgroundColor,
		// backgroundImage: Styles.window.backgroundImage,
		// navBarHidden: true
	// });
	
	var win = Ui.createWebViewWindow({
		
		url: 'http://www.ticketea.com/campus-app-archidona-2013'
	});
	

return win;

}
