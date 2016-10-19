var canvasControl = document.getElementById("frame-control");
var contextControl = canvasControl.getContext("2d");
var canvasPlay = document.getElementById("frame-play");
var contextPlay = canvasPlay.getContext("2d");
var framePlaySize = 500;
var positionCenter = (framePlaySize - 120) / 2;


// value default
var time = 20;
var score = 0;
var heart = 5;
var numMonster = 0;
var speed = 0;
var buttonPause = false;
var numBoom = 3;
var buttonReset = false;
sessionStorage.myVariable = 0;

// imgBlood src
var src = "../gamemonster/img/monster.gif";
var srcBlood = "../gamemonster/img/blood.png";
var srcNull = "";
var srcHeart = "../gamemonster/img/heart.png";

// heart
var imgHeart = new Image();
imgHeart.src = srcHeart;
var positionHeart = 75;

// blood
var imgBlood = new Array();
var imgBloodX = new Array();
var imgBloodY = new Array();
for (var i = 0; i <= 9; i++) {
	imgBlood[i] = new Image();
	imgBlood[i].src = srcNull;
	imgBloodX[i] = 0;
	imgBloodY[i] = 0;
}

// list monster
var imgMonster = new Array();
var monster = new Array();
var monsterX = new Array();
var monsterY = new Array();
var speedX = new Array();
var speedY = new Array();

// draw canvas header
canvasControl.setAttribute('width', '500');
canvasControl.setAttribute('height', '100');
canvasPlay.setAttribute('width', '500');
canvasPlay.setAttribute('height', '500');
contextControl.font = '18pt Calibri';
contextControl.fillStyle = '#1DD604';
contextControl.fillText("Score:", 10, 25);
contextControl.fillText(score, 75, 25);
contextControl.fillText("Heart: ", 10, 55);
contextControl.fillText("Speed:", 10, 85);
contextControl.fillText(speed, 80, 85);
contextControl.fillText("High Score:", 350, 25);
contextControl.fillText(sessionStorage.myVariable, 465, 25);

main();

function main() {
	document.getElementById("frame-play").setAttribute("onclick",
			"catchMonster(event)");
	setInterval("play()", time);
}

function play() {
	showHeart();
	document.getElementById("num_boom").innerHTML = numBoom;
	if (buttonReset == true) {
		resetGame();
		contextControl.clearRect(465, 0, 100, 50);
		contextControl.fillText(sessionStorage.myVariable, 465, 25);
		buttonReset = false;
	} else {
		if (buttonPause == false) {
			document.getElementById("frame-play").setAttribute("onclick",
					"catchMonster(event)");
			if (heart > 0) {
				if (numMonster == 0) {
					startState();
					increaseLevel();
				} else {
					move();
				}
			} else {
				contextPlay.clearRect(0, 0, framePlaySize, framePlaySize);
				contextPlay.font = '50pt Calibri';
				contextPlay.fillStyle = 'white';
				contextPlay.fillText("GAME OVER", 90, 250);
				clearInterval(setInterval("play()", time));
				document.getElementById("frame-play").setAttribute("onclick",
						"");
			}
		} else {
			contextPlay.font = '50pt Calibri';
			contextPlay.fillStyle = 'white';
			contextPlay.fillText("PAUSE", 170, 250);
			clearInterval(setInterval("play()", time));
			document.getElementById("frame-play").setAttribute("onclick", "");
		}
	}
}

function pause() {
	buttonPause = !buttonPause;
}

function resetGame() {
	if (score > sessionStorage.myVariable) {
		sessionStorage.myVariable = score;
	}
	startState();
	time = 20;
	score = 0;
	heart = 5;
	numMonster = 0;
	speed = -1;
	buttonPause = false;
	numBoom = 3;
	showCore(score);
	showHeart();
	increaseLevel();
	for (var i = 0; i <= 9; i++) {
		imgBlood[i] = new Image();
		imgBlood[i].src = srcNull;
		imgBloodX[i] = 0;
		imgBloodY[i] = 0;
	}
	buttonReset = true;
}

function clickBoom() {
	if (numBoom > 0) {
		numBoom--;
		for (var i = 8; i >= 0; i--) {
			imgBlood[i].src = srcBlood;
			imgBloodX[i] = monsterX[i];
			imgBloodY[i] = monsterY[i];
			score += 10;
			numMonster--;
			speedX[i] = 0;
			speedY[i] = 0;
			monsterX[i] = 500;
			monsterY[i] = 500;
		}
		// change score
		showCore(score);
		document.getElementById("num_boom").innerHTML = numBoom;
	}
}

function showCore(score) {
	contextControl.clearRect(75, 0, 150, 30);
	contextControl.fillText(score, 75, 25);
}

function showHeart() {
	contextControl.clearRect(75, 40, 100, 20);
	positionHeart = 75;
	for (var i = 0; i < heart; i++) {
		contextControl.drawImage(imgHeart, positionHeart, 40, 20, 20)
		positionHeart += 20;
	}
}

// tang toc do
function increaseLevel() {
	for (var i = 0; i < 9; i++) {
		if (speedX[i] == 0) {
			speedX[i] = 0;
		} else if (speedX[i] < 0) {
			speedX[i]--;
		} else {
			speedX[i]++;
		}
		if (speedY[i] == 0) {
			speedY[i] = 0;
		} else if (speedY[i] < 0) {
			speedY[i]--;
		} else {
			speedY[i]++;
		}
	}
	speed++;
	contextControl.clearRect(80, 60, 130, 130);
	contextControl.fillText(speed, 80, 85);
}

// tro ve trang thai ban dau
function startState() {
	// monster top left
	monsterX[0] = 0;
	monsterY[0] = 0;
	speedX[0] = 1;
	speedY[0] = 1;
	imgMonster[0] = new Image();
	imgMonster[0].src = src;

	// monster top
	monsterX[1] = positionCenter;
	monsterY[1] = 0;
	speedX[1] = 0;
	speedY[1] = 1;
	imgMonster[1] = new Image();
	imgMonster[1].src = src;

	// monster top right
	monsterX[2] = framePlaySize - 120;
	monsterY[2] = 0;
	speedX[2] = -1;
	speedY[2] = 1;
	imgMonster[2] = new Image();
	imgMonster[2].src = src;

	// monster right
	monsterX[3] = framePlaySize - 120;
	monsterY[3] = positionCenter;
	speedX[3] = -1;
	speedY[3] = 0;
	imgMonster[3] = new Image();
	imgMonster[3].src = src;

	// monster bottom right
	monsterX[4] = framePlaySize - 120;
	monsterY[4] = framePlaySize - 120;
	speedX[4] = -1;
	speedY[4] = -1;
	imgMonster[4] = new Image();
	imgMonster[4].src = src;

	// monster bottom
	monsterX[5] = positionCenter;
	monsterY[5] = framePlaySize - 120;
	speedX[5] = 0;
	speedY[5] = -1;
	imgMonster[5] = new Image();
	imgMonster[5].src = src;

	// monster bottom left
	monsterX[6] = 0;
	monsterY[6] = framePlaySize - 120;
	speedX[6] = 1;
	speedY[6] = -1;
	imgMonster[6] = new Image();
	imgMonster[6].src = src;

	// monster left
	monsterX[7] = 0;
	monsterY[7] = positionCenter;
	speedX[7] = 1;
	speedY[7] = 0;
	imgMonster[7] = new Image();
	imgMonster[7].src = src;

	// monster center
	monsterX[8] = positionCenter;
	monsterY[8] = positionCenter;
	speedX[8] = 2;
	speedY[8] = 1;
	imgMonster[8] = new Image();
	imgMonster[8].src = src;

	// chang sum monster
	numMonster += 9;
}

function move() {
	contextPlay.clearRect(0, 0, framePlaySize, framePlaySize);
	// draw array imgBlood blood hide
	for (var i = 0; i < 9; i++) {
		contextPlay.drawImage(imgBlood[i], imgBloodX[i], imgBloodY[i]);
	}

	// draw array monster
	for (var i = 0; i < 9; i++) {
		collision();
		monsterX[i] += speedX[i];
		monsterY[i] += speedY[i];
		contextPlay.drawImage(imgMonster[i], monsterX[i], monsterY[i]);
	}
}

function collision() {
	// monster top left
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterY[0] >= this.framePlaySize - 120 || monsterY[0] < 0) {
		speedX[0] = -speedX[0];
		speedY[0] = -speedY[0];
	}

	// monster top
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterY[1] >= this.framePlaySize - 120 || monsterY[1] < 0)
		speedY[1] = -speedY[1];

	// monster top right
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterY[2] < 0 || monsterY[2] >= this.framePlaySize - 120) {
		speedX[2] = -speedX[2];
		speedY[2] = -speedY[2];
	}

	// monster right
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterX[3] >= this.framePlaySize - 120 || monsterX[3] < 0)
		speedX[3] = -speedX[3];

	// monster bottom right
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterY[4] < 0 || monsterY[4] > this.framePlaySize - 120) {
		speedX[4] = -speedX[4];
		speedY[4] = -speedY[4];
	}

	// monster bottom
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterY[5] >= this.framePlaySize - 120 || monsterY[5] < 0)
		speedY[5] = -speedY[5];

	// monster bottom left
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterY[6] < 0 || monsterY[6] > this.framePlaySize - 120) {
		speedX[6] = -speedX[6];
		speedY[6] = -speedY[6];
	}

	// monster left
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterX[7] >= this.framePlaySize - 120 || monsterX[7] < 0)
		speedX[7] = -speedX[7];

	// monster center
	// cham vach ben phai hoac ben trai se doi huong
	if (monsterX[8] >= this.framePlaySize - 120 || monsterX[8] < 0)
		speedX[8] = -speedX[8];
	// cham vach ben tren hoac ben duoi se doi huong
	if (monsterY[8] >= this.framePlaySize - 120 || monsterY[8] < 0)
		speedY[8] = -speedY[8];
}

function catchMonster(evt) {
	var x = evt.clientX - canvasPlay.offsetLeft;
	var y = evt.clientY - canvasPlay.offsetTop;
	// click mouse monster center
	for (var i = 9; i >= 0; i--) {
		if (x > monsterX[i] && x <= monsterX[i] + 120 && y > monsterY[i]
				&& y <= monsterY[i] + 120) {
			imgBlood[i].src = srcBlood;
			imgBloodX[i] = monsterX[i];
			imgBloodY[i] = monsterY[i];
			score += 10;
			numMonster--;
			heart++;
			speedX[i] = 0;
			speedY[i] = 0;
			monsterX[i] = 500;
			monsterY[i] = 500;
			break;
		}
	}
	heart--;
	// change heart
	showHeart();
	// change score
	showCore(score);
}