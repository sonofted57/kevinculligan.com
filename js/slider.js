/* jQuery Vegas Slider */
	// For slideshow:
	$.vegas('slideshow', {
		delay: 3000,
		backgrounds: [
			{ src:'./images/image_01.jpg', fade:1000 },
			{ src:'./images/image_02.jpg', fade:1000 },
			{ src:'./images/image_05.jpg', fade:1000 }
		]
	})('overlay', {
		src: './vegas/overlays/06.png'
	});
	// For single image:
	/*$.vegas({
		src:'./images/image01.jpg'
	})('overlay', {
		src: './vegas/overlays/06.png'
	});*/