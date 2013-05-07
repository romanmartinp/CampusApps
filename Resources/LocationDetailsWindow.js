var Styles = require('/Styles');

function createGalleryImage(_args) {

	var view = Ti.UI.createView({
		backgroundImage : '/images/texture.jpg'
	});
	var image = Ti.UI.createImageView({
		image : '/images/' + _args.image
	});
	view.add(image);
	return view;
};

exports.createWindow = function() {
	var win = Ti.UI.createWindow({
		backgroundColor : Styles.window.backgroundColor,
		backgroundImage : Styles.window.backgroundImage,
		navBarHidden : false,
		title : 'Información'
	});

	var view1 = createGalleryImage({
		image : 'image1.jpg'
	});
	var view2 = createGalleryImage({
		image : 'image2.jpg'
	});
	var view3 = createGalleryImage({
		image : 'image3.jpg'
	});

	var gallery = Ti.UI.createScrollableView({
		views : [view1, view2, view3],
		showPagingControl : true
	});

	win.add(gallery);

	return win;
};
