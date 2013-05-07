var Styles = require('/Styles');
var Ui = require('/Ui');
var EventDataWindow = require('/EventDataWindow');

exports.create = function() {
	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		navBarHidden: true,
		layout : 'vertical',
		title: "Programa"
	});

	var eventsList = require('/EventsList').eventsList;

	var dataTable = [];

	for (var i = 0; i < eventsList.length; i++) {
		var event = eventsList[i];
		var row = Ti.UI.createTableViewRow({
			title : event['title'], //propiedad TI para que escriba algo en la row, las demás son nuestras
			eventData : event,
			editable : true
		});
		dataTable.push(row);
	};

	var tableView = Ti.UI.createTableView({
		data : dataTable,
		editable : true

	});

	tableView.addEventListener('click', function(e) {

		var winEventData = EventDataWindow.create(e.rowData.eventData);

		var Tabs = require('/Tabs');
		var currentTab = Tabs.getTab({
			tabName : 'programa'
		});

		currentTab.open(winEventData);
	});

	tableView.addEventListener('delete', function(e) {

	});

	win.add(tableView);

	return win;

};

