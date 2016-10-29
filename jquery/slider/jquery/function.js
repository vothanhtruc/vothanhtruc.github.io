$(document).ready(function() {
	// list src of image
	var listImg = [ 
		"../slider/img/field2.jpg",
		"../slider/img/fog.jpg",
		"../slider/img/lake.jpg",
		"../slider/img/lake_and_moutain.jpg",
		"../slider/img/moutain.jpg",
		"../slider/img/river.jpg",
		"../slider/img/spring.jpg",
		"../slider/img/sunshine.jpg",
		"../slider/img/waterfall.jpg",
		"../slider/img/winter.jpg" 
	];
	// list alt of image
	var listNameOfImg = [ 
		"field2", 
		"fog", 
		"lake",
		"lake_and_moutain", 
		"moutain", 
		"river", 
		"spring",
		"sunshine", 
		"waterfall", 
		"winter" 
	];
	var imgCurrent = $("#image").attr("alt");
	var btnNow = "";
	var listButton = "";
	// find image by alt
	function search() {
		var i = 0;
		for (; i <= listNameOfImg.length - 1; i++) {
			if (imgCurrent == listNameOfImg[i])
				return i;
		}
		return -1;
	}
	// index of image current and list button index
	$('#list_index').append(function() {
		for (var i = 0; i < listNameOfImg.length; i++) {
			if (i == search()) {
				listButton += '<button id="btn_' + i + '" class="index index_select" type="button">' + i + '</button>';
			} else {
				listButton += '<button id="btn_' + i + '" class="index" type="button">' + i + '</button>';
			}
		}
		return listButton;
	});
	// previous
	$('#previous').click(function() {
		try {
			// if the first image
			imgCurrent = $("#image").attr("alt");
			btnNow = "#btn_" + search();
			var btnPrevious = "";
			if (search() == 0) {
				btnPrevious = "#btn_" + (listImg.length - 1);
				$('#image').attr('src', listImg[listImg.length - 1]);
				$('#image').attr('alt', listNameOfImg[listNameOfImg.length - 1]);
				$(btnPrevious).attr('class', 'index_select');
				$(btnNow).removeClass('index_select');
			} else if (search() == -1) {
				throw "Image error!";
			} else {
				btnPrevious = "#btn_" + (search() - 1);
				$('#image').attr('src',	listImg[search() - 1]);
				$('#image').attr('alt',	listNameOfImg[search() - 1]);
				$(btnPrevious).attr('class', 'index_select');
				$(btnNow).removeClass('index_select');
			}
		} catch (err) {
			window.alert(err);
		}
	});
	// next
	$('#next').click(function() {
		try {
			imgCurrent = $("#image").attr("alt");
			btnNow = "#btn_" + search();
			var btnNext = "";
			// if the end image
			if (search() == (listImg.length - 1)) {
				btnNext = "#btn_0";
				$('#image').attr('src', listImg[0]);
				$('#image').attr('alt',	listNameOfImg[0]);
				$(btnNext).attr('class', 'index_select');
				$(btnNow).removeClass('index_select');
			} else if (search() == -1) {
				throw "Image error!";
			} else {
				btnNext = "#btn_" + (search() + 1);
				$('#image').attr('src',	listImg[search() + 1]);
				$('#image').attr('alt',	listNameOfImg[search() + 1]);
				$(btnNext).attr('class', 'index_select');
				$(btnNow).removeClass('index_select');
			}
		} catch (err) {
			window.alert(err);
		}
	});
	// function display image by index
	function show_img_index(btnIndex, numIndex) {
		$(btnIndex).click(function() {
			imgCurrent = $("#image").attr("alt");
			btnNow = "#btn_" + search();
			$(btnNow).removeClass('index_select');
			$('#image').attr('src', listImg[numIndex]);
			$('#image').attr('alt', listNameOfImg[numIndex]);
			$(btnIndex).attr('class', 'index_select');
		});
	}
	// display image by index
	for (var i = 0; i < listNameOfImg.length; i++) {
		var btnIndex = "#btn_" + i;
		show_img_index(btnIndex, i);
	}
})