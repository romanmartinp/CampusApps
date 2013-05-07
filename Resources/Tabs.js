var ScheduleWindow = require('/ScheduleWindow');
var TwitterWindow = require('/TwitterWindow');
var FacebookWindow = require('/FacebookWindow');
var LocationWindow = require('/LocationWindow');
var SignUpWindow = require('/SignUpWindow');
var PartnersWindow = require('/PartnersWindow');
var tabSchedule;
var tabTwitter;
var tabLocation;
var tabSignUp;
var tabPartners;

exports.createTabGroup = function() {

	var tabGroup = Ti.UI.createTabGroup();

	var winSchedule = ScheduleWindow.create();

	var winTwitter = TwitterWindow.create();

	var winFacebook = FacebookWindow.create();

	var winLocation = LocationWindow.create();

	var winSignUp = SignUpWindow.create();

	var winPartners = PartnersWindow.create();

	tabSchedule = Ti.UI.createTab({
		title : "Programa",
		icon : "KS_nav_ui.png",
		window : winSchedule
	});

	tabTwitter = Ti.UI.createTab({
		title : "Twitter",
		icon : "KS_nav_ui.png",
		window : winTwitter
	});

	tabLocation = Ti.UI.createTab({
		title : "Localización",
		icon : "KS_nav_views.png",
		window : winLocation
	});

	tabSignUp = Ti.UI.createTab({
		title : "Registro",
		icon : "KS_nav_views.png",
		window : winSignUp
	});

	tabPartners = Ti.UI.createTab({
		title : "Partners",
		icon : "KS_nav_views.png",
		window : winPartners
	});

	tabFacebook = Ti.UI.createTab({
		title : "Facebook",
		icon : "KS_nav_ui.png",
		window : winFacebook
	});

	Ti.App.addEventListener('tabGroup:openWindow', function(e) {
		alert('Tab ' + e.tab + 'ventana ' + e.win);
	})

	tabGroup.addTab(tabSchedule);
	tabGroup.addTab(tabTwitter);
	tabGroup.addTab(tabFacebook);
	tabGroup.addTab(tabLocation);
	tabGroup.addTab(tabSignUp);
	tabGroup.addTab(tabPartners);

	return tabGroup;

}

exports.getTab = function(_args) {

	switch (_args.tabName) {
		case 'programa':
			return tabSchedule;
			break;

		case 'twitter':
			return tabTwitter;
			break;

		case 'facebook':
			return tabFacebook;
			break;

		case 'location':
			return tabLocation;
			break;

		case 'signup':
		alert ('devolvemos '+ tabSignUp);
			return tabSignUp;
			break;

		case 'partners':
			return tabPartners;
			break;

	}

}
