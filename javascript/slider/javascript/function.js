// list src of image
var listImg = [ "../slider/img/field2.jpg", "../slider/img/fog.jpg",
		"../slider/img/lake.jpg", "../slider/img/lake_and_moutain.jpg",
		"../slider/img/moutain.jpg", "../slider/img/river.jpg",
		"../slider/img/spring.jpg", "../slider/img/sunshine.jpg",
		"../slider/img/waterfall.jpg", "../slider/img/winter.jpg" ];

// list alt of image
var listNameOfImg = [ "field2", "fog", "lake", "lake_and_moutain", "moutain",
		"river", "spring", "sunshine", "waterfall", "winter" ];
var imgCurrent = "";
var imgNew = "";
var imgIndex = 0;

// get attributes of image and index of image current
function slide() {
	imgCurrent = document.getElementById("image").getAttribute("alt");
	imgNew = document.getElementById("image");
	var list_button = "";

	// index of image current and list button index
	for (var j = 0; j < listNameOfImg.length; j++) {
		if (j == search()) {
			list_button += '<button class="index index_select" type="button">'
					+ j + '</button>';
		} else {
			list_button += '<button class="index"type="button" onclick="show_img_index('
					+ j + ')">' + j + '</button>';
		}
	}
	document.getElementById("list_index").innerHTML = list_button;
}

// find image by alt
function search() {
	var i = 0;
	for (; i <= listNameOfImg.length - 1; i++) {
		if (imgCurrent == listNameOfImg[i])
			return i;
	}
	return -1;
}

// display image by index
function show_img_index(index) {
	var numIndex = parseInt(index);
	try {
		for (var a = 0; a <= listNameOfImg.length - 1; a++) {
			if (a == numIndex) {
				imgNew.setAttribute("src", listImg[a]);
				imgNew.setAttribute("alt", listNameOfImg[a]);
				slide();
				return;
			}
		}
		throw "Image error!";
	} catch (err) {
		window.alert(err);
	}
}

function previous() {
	slide();
	try {
		// if the first image
		if (search() == 0) {
			imgNew.setAttribute("src", listImg[listImg.length - 1]);
			imgNew.setAttribute("alt", listNameOfImg[listNameOfImg.length - 1]);
			slide();
		} else if (search() == -1) {
			throw "Image error!";
		} else {
			imgNew.setAttribute("src", listImg[search() - 1]);
			imgNew.setAttribute("alt", listNameOfImg[search() - 1]);
			slide();
		}
	} catch (err) {
		window.alert(err);
	}
}

function next() {
	slide();
	try {
		// if the end image
		if (search() == (listImg.length - 1)) {
			imgNew.setAttribute("src", listImg[0]);
			imgNew.setAttribute("alt", listNameOfImg[0]);
			slide();
		} else if (search() == -1) {
			throw "Image error!";
		} else {
			imgNew.setAttribute("src", listImg[search() + 1]);
			imgNew.setAttribute("alt", listNameOfImg[search() + 1]);
			slide();
		}
	} catch (err) {
		window.alert(err);
	}
}