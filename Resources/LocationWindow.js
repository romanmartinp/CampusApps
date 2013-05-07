var Styles = require('/Styles');
var LocationDetailsWindow = require('/LocationDetailsWindow');

var latitude = 37.10643;
var longitude = -4.350779;
var currentLocation;
var win;

exports.create = function() {
	win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		navBarHidden : true,
		title : 'Localización'
	});
	getMyLocation();

	var map = createMap();

	var buttonOpenRoute = Ti.UI.createButton({
		title : "Calcular Ruta",
		height : 40,
		width : 200,
		top : 10
	});

	buttonOpenRoute.addEventListener('click', function(evt) {
		Ti.Platform.openURL("http://maps.google.com/maps?saddr=" + currentLocation.latitude + "," + currentLocation.longitude + "&daddr=" + latitude + "," + longitude);
	});

	win.add(map);
	win.add(buttonOpenRoute);

	return win;

}
function createMap(_args) {

	var Tabs = require('/Tabs');

	var annotation = Ti.Map.createAnnotation({
		latitude : latitude,
		longitude : longitude,
		title : "Molino de madaura",
		pincolor : 'red',
		rightButton : Titanium.UI.iPhone.SystemButton.INFO_LIGHT,
		animate: true,
		subtitle: 'Ctra MA 7200 km 7.3, Archidona'
	});

	mapview = Titanium.Map.createView({
		mapType : Titanium.Map.HYBRID_TYPE,
		region : {
			latitude : latitude,
			longitude : longitude,
			latitudeDelta : 0.01,
			longitudeDelta : 0.01
		},
		animate : true,
		regionFit : true,
		userLocation : true,
		annotations : [annotation]
	});

	mapview.addEventListener('click', function(e) {

		var clicksource = e.clicksource;

		if (clicksource === 'rightButton' || clicksource === 'title' || clicksource === 'subtitle') {
			var win = LocationDetailsWindow.createWindow();
			win.addEventListener('close', function() {
				mapview.selectAnnotation(annotation);

			});
			var tab = Tabs.getTab({
				tabName : 'location'
			});
			tab.open(win);
		}

	});

	win.addEventListener('open', function() {
		mapview.selectAnnotation(annotation);
	});

	return mapview;

};

function getMyLocation(_args) {
	//Get the current position and set it to the mapview
	Titanium.Geolocation.getCurrentPosition(function(e) {

		currentLocation = {
			latitude : e.coords.latitude,
			longitude : e.coords.longitude,
		};
	});

};
