var Styles = require('/Styles');
var Ui = require('/Ui');
var Dev = require('/Dev');
var RatingStartView = require('/RatingStartView');

exports.create = function(event) {
	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		title : event.title,
		layout : 'vertical',
		navBarHidden : false
	});

	var scrollView = Ti.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true,
		layout : 'vertical'
	});

	win.add(scrollView);

	for (var i in event) {
		var act = event[i];

		var actView = createActivity(act);
		scrollView.add(actView);

	};

	return win;

}
function createActivity(act) {




	var view = Ti.UI.createView({
		layout : 'vertical',
		height : Ti.UI.SIZE,
		backgroundImage : '/images/background-wood.jpeg'
	});

	var labelTitle = Ui.createLabel({
		text : act.title,
		type : 'title'

	});
	var labelDescription = Ui.createLabel({
		text : act.description,
		type : 'description'

	});
	var labelTimetable = Ui.createLabel({
		text : act.timetable,
		type : 'timetable'

	});
	var startView = RatingStartView.create(act.id);

	view.add(labelTitle);
	view.add(labelTimetable);
	view.add(labelDescription);
	view.add(startView);

	Dev.inf(act.questions);
	if (act.questions) {

		for (var i = 0; i < act.questions.length; i++) {
			var labelRating = Ui.createLabel({
				text : act.questions[i],
				type : 'timetable'
			});
			view.add(labelRating);
		}

	}

	return view;

}