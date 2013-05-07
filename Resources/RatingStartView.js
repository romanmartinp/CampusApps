var LocalStorage = require('/LocalStorage');

exports.create = function(activityId) {

	var rateView = Ti.UI.createView({
		layout : 'horizontal',
		background : 'black',
		height : 30
	});
	var max = 10;
	var min = 1;
	var stars = [];

	function rate(vote) {

		fillStars(vote);
		LocalStorage.setProperty({
			name : activityId,
			value : vote
		});

	}

	function fillStars(vote) {

		for (var i = 1; i <= max; i++) {

			stars[i].image = i <= vote ? '/images/estrella.png' : '/images/estrellavacia.png';
		};
	};

	for (var i = 1; i <= max; i++) {
		stars[i] = Ti.UI.createButton({
			image : '/images/estrellavacia.png',
			'rating' : i
		});
		stars[i].addEventListener('click', function(e) {
			rate(e.source.rating);
		});
		rateView.add(stars[i]);
	};
	var savedVote = LocalStorage.getProperty({
		name : activityId
	});
	fillStars(savedVote);

	return rateView;
}