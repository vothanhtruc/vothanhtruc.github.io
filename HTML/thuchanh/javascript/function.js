var contentHouseBunny = true;
var contentEagleEye = true;
var contentJourney = true;
function showHouseBunny(){
	if (contentHouseBunny == true) {
		//displays the contents of The House Bunny
		document.getElementById("icon_house_bunny").style.background="url(../thuchanh/img/top_movie_trailers_arrows.gif) no-repeat 0 3px";
		document.getElementById("content_house_bunny").style.display="block";

	} else {
		//hide the contents of The House Bunny
		document.getElementById("icon_house_bunny").style.background="url(../thuchanh/img/top_movie_trailers_arrows.gif) no-repeat 0 -20px";
		document.getElementById("content_house_bunny").style.display="none";
	}
	contentHouseBunny = !contentHouseBunny;
}
function showEagleEye(){
	if (contentEagleEye == true) {
		//displays the contents of Eagle Eye
		document.getElementById("icon_eagle_eye").style.background="url(../thuchanh/img/top_movie_trailers_arrows.gif) no-repeat 0 3px";
		document.getElementById("content_eagle_eye").style.display="block";

	} else {
		//hide the contents of Eagle Eye
		document.getElementById("icon_eagle_eye").style.background="url(../thuchanh/img/top_movie_trailers_arrows.gif) no-repeat 0 -20px";
		document.getElementById("content_eagle_eye").style.display="none";
	}
	contentEagleEye = !contentEagleEye;
}
function showJourney(){
	if (contentJourney == true) {
		//displays the contents of Journey To The Centre Of The Earth
		document.getElementById("icon_journey").style.background="url(../thuchanh/img/top_movie_trailers_arrows.gif) no-repeat 0 3px";
		document.getElementById("content_journey").style.display="block";

	} else {
		//hide the contents of Journey To The Centre Of The Earth 
		document.getElementById("icon_journey").style.background="url(../thuchanh/img/top_movie_trailers_arrows.gif) no-repeat 0 -20px";
		document.getElementById("content_journey").style.display="none";
	}
	contentJourney = !contentJourney;
}