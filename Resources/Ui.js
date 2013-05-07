exports.createLabel = function(_args) {

	var label = Ti.UI.createLabel({
		text : _args.text,
		color : _args.color || 'white',
		left : _args.left || '0',
		top : _args.top || '0',
		width : _args.width || Ti.UI.SIZE,
		height : _args.height || Ti.UI.SIZE

	});

	switch (_args.type) {

		case 'title':
			label.font = {
				fontSize : 24,
				fontWeight : 'bold'
			};
			label.bottom = 5;
			label.top = 5;
			label.textAlign = Ti.UI.TEXT_ALIGNMENT_CENTER;
			label.width = Ti.UI.FILL;
			label.backgroundColor = _args.backgroundColor || 'rgb(128,0,0)';

			break;
		case 'description':
			label.font = {
				fontSize : 20,
				fontWeight : 'normal'
			};
			label.bottom = _args.bottom || '5';
			label.top = _args.top || '5';
			label.left = _args.left || '5';
			label.width = Ti.UI.SIZE;
			label.color = 'black';
			label.backgroundColor = _args.backgroundColor || 'transparent';

			break;

		case 'timetable':
			label.font = {
				fontSize : 16,
				fontWeight : 'normal'
			};
			label.bottom = _args.bottom || '5';
			label.top = _args.top || '5';
			label.left = _args.left || '5';
			label.width = Ti.UI.SIZE;
			label.color = 'blue';
			label.backgroundColor = _args.backgroundColor || 'transparent';

			break;

		default:

			break;

	}

	return label;
}

exports.createTextField = function(_args) {

	var textField = Ti.UI.createTextField({

		top : _args.top || '5',
		right : '0',
		bottom : _args.bottom || '5',
		width : _args.width || Ti.UI.FILL,
		height : _args.height || Ti.UI.SIZE,
		hintText : _args.hintText || '',
		size : '24',
		keyboardType : _args.keyboardType || Ti.UI.KEYBOARD_DEFAULT,
		borderStyle : _args.borderStyle || Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		value : _args.value
	});

	return textField;
}

exports.createButton = function(_args) {

	var button = Ti.UI.createButton({
		title : _args.title,
		backgroundColor : _args.backgroundColor || '#c0c0c0',
		bottom : _args.bottom || '5',
		top : _args.top || '5',
		left : _args.left || Ti.UI.CENTER,
		height : _args.height || Ti.UI.SIZE,
		width : _args.width || Ti.UI.SIZE,
		font : {
			fontSize : 20,
			fontStyle : 'normal',
			fontWeight : 'bold'
		}

	});
	return button;

}

exports.createFormRow = function(_args) {

	var view = Ti.UI.createView({
		backgroundColor : 'black',
		top : '0',
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL
	});

	var label = exports.createLabel({
		text : _args.name,
		type : 'text',
		top : 5
	});

	var tf = exports.createTextField({

		top : 5,
		hintText : _args.hintText,
		width : '50%',
		right : '0',
		value : _args.value || ''
	});

	view.add(label);
	view.add(tf);

	return view;

}

exports.createSwitchRow = function(_args) {

	var view = Ti.UI.createView({
		backgroundColor : 'black',
		top : 5,
		height : Ti.UI.SIZE,
		width : Ti.UI.FILL,
		//layout: 'horizontal'
	});

	var label = exports.createLabel({
		text : _args.name,
		type : 'text',
		top : 5,
		left : 0
	});

	var buttonSwitch = Ti.UI.createSwitch({
		Value : true,
		top : 5,
		right : 0,
		titleOn : _args.titleOn,
		titleOff : _args.titleOff
	});

	view.add(label);
	view.add(buttonSwitch);

	return view;

}
function createButtonNavigation(_args) {

	var button = Ti.UI.createButton({
		backgroundColor : 'transparent',
		top : 5,
		left : _args.left || 15,
		width : 32,
		height : 32
	});

	button.setActive = function(isActive) {

		if (isActive) {
			button.image = '/images/' + _args.image + '.png';
		} else {
			button.image = '/images/' + _args.image + 'Inactive.png'
		}

	}

	return button;
};

exports.createWebViewWindow = function(_args) {

	var win = Ti.UI.createWindow({
		//backgroundColor : Styles.window.backgroundColor,
		//backgroundImage : Styles.window.backgroundImage,
		navBarHidden : true
		//	layout : 'vertical'
	});

	var webView = Titanium.UI.createWebView({
		url : _args.url,
		bottom : 0
	});

	var viewNavigation = Ti.UI.createView({
		backgroundColor : 'black',
		opacity : 0.7,
		layout : 'horizontal',
		width : Ti.UI.FILL,
		height : 49,
		bottom : 0

	});

	var backBtn = createButtonNavigation({

		image : 'back'
	});

	var refreshBtn = createButtonNavigation({

		image : 'refresh',
	});

	var forwardBtn = createButtonNavigation({

		image : 'forward'
	});

	backBtn.addEventListener('click', function() {
		webView.goBack();
	});

	refreshBtn.addEventListener('click', function() {
		webView.reload();
	});

	forwardBtn.addEventListener('click', function() {
		webView.goForward();
	});

	backBtn.setActive(webView.canGoBack());
	forwardBtn.setActive(webView.canGoForward());
	refreshBtn.setActive(true);

	setInterval(function(){
		
		backBtn.setActive(webView.canGoBack());
		forwardBtn.setActive(webView.canGoForward());
	
	}, 900);
		

	win.add(webView);
	win.add(viewNavigation);
	viewNavigation.add(backBtn);
	viewNavigation.add(refreshBtn);
	viewNavigation.add(forwardBtn);

	return win;

};

