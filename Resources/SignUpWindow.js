var Styles = require('/Styles');
var Ui = require('/Ui');
var PayWindow = require('/PayWindow');

exports.create = function() {
	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		navBarHidden : true,
		layout : 'vertical'
	});
	var scrollView = Ti.UI.createScrollView({
		contentHeight : 'auto',
		layout : 'vertical',
		backgroundColor : 'black'
	});

	var name = Ui.createFormRow({
		name : 'Nombre',
		hintText : 'Nombre',
		//value : playerData.name
	});
	var surname = Ui.createFormRow({
		name : 'Apellido',
		hintText : 'Número',
		//value : playerData.number
	});
	var email = Ui.createFormRow({
		name : 'E-mail',
		hintText : 'E-mail',
		//value : playerData.birthDate
	});
	var numbertelephone = Ui.createFormRow({
		name : 'Telephone',
		hintText : 'Telephone',
		//value : playerData.birthDate
	});
	var address = Ui.createFormRow({
		name : 'Dirección',
		hintText : 'Dirección',
		//value : playerData.birthDate
	});
	var zipcode = Ui.createFormRow({
		name : 'Código postal',
		hintText : 'Código postal',
		//value : playerData.birthDate
	});
	var city = Ui.createFormRow({
		name : 'Ciudad',
		hintText : 'Ciudad',
		//value : playerData.birthDate
	});
	var birthDate = Ui.createFormRow({
		name : 'Fecha nacimiento',
		hintText : 'Fecha de nacimiento',
		//value : playerData.birthDate
	});
	var hostelSwitch = Ui.createSwitchRow({
		name : 'Alojamiento en Albergue'

	});
	var hotelSwitch = Ui.createSwitchRow({
		name : 'Alojamiento en Hotel'
	});
	var freelanceSwitch = Ui.createSwitchRow({
		name : 'Freelance/Autónomo'
	});
	var societySwitch = Ui.createSwitchRow({
		name : 'Sociedad/Empresa'
	});
	var paybutton = Ui.createButton({
		title : 'Pagar'
	});

	paybutton.addEventListener('click', function(e) {

		var payWin = PayWindow.create();

		var currentTab = Tabs.getTab({

			tabName : 'signup'
		});

		currentTab.open(payWin);

	});

	scrollView.add(name);
	scrollView.add(surname);
	scrollView.add(email);
	scrollView.add(numbertelephone);
	scrollView.add(address);
	scrollView.add(zipcode);
	scrollView.add(city);
	scrollView.add(birthDate);
	scrollView.add(hostelSwitch);
	scrollView.add(hotelSwitch);
	scrollView.add(freelanceSwitch);
	scrollView.add(societySwitch);
	scrollView.add(paybutton);
	win.add(scrollView);

	return win;

}
