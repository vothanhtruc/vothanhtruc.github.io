var canvasControl = document.getElementById("frame-control");
var contextControl = canvasControl.getContext("2d");
var canvasPlay = document.getElementById("frame-play");
var contextPlay = canvasPlay.getContext("2d");
var framePlaySize = 500;
var positionCenter = (framePlaySize - 120) / 2;

// value default
var stage = 1;
var time = 20;
var score = 0;
var heart = 5;
var numMonster = 0;
var speed = 0;
var buttonPause = false;
var numBoom = 3;
var buttonReset = false;
sessionStorage.myVariable = 0;

// img src
var srcMonster = "../gamemonster/img/monster.gif";
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
for (var i = 0; i < 9; i++) {
	imgBlood[i] = new Image();
	imgBlood[i].src = srcNull;
	imgBloodX[i] = 0;
	imgBloodY[i] = 0;
}

// list monster
var imgMonster = new Array();
for (var i = 0; i < 9; i++) {
	imgMonster[i] = new Image();
	imgMonster[i].src = srcMonster;
}
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
contextControl.fillText("High Score:", 330, 25);
contextControl.fillText(sessionStorage.myVariable, 445, 25);

main();

function main() {
	document.getElementById("frame-play").setAttribute("onclick",
			"catchMonster(event)");
	setInterval("play()", time);
}

function returnDefaultState() {
	// monster top left
	monsterX[0] = 0;
	monsterY[0] = 0;

	// monster top
	monsterX[1] = positionCenter;
	monsterY[1] = 0;

	// monster top right
	monsterX[2] = framePlaySize - 120;
	monsterY[2] = 0;

	// monster right
	monsterX[3] = framePlaySize - 120;
	monsterY[3] = positionCenter;

	// monster bottom right
	monsterX[4] = framePlaySize - 120;
	monsterY[4] = framePlaySize - 120;

	// monster bottom
	monsterX[5] = positionCenter;
	monsterY[5] = framePlaySize - 120;

	// monster bottom left
	monsterX[6] = 0;
	monsterY[6] = framePlaySize - 120;

	// monster left
	monsterX[7] = 0;
	monsterY[7] = positionCenter;

	// monster center
	monsterX[8] = positionCenter;
	monsterY[8] = positionCenter;

	// chang sum monster
	numMonster += 9;
}

function returnDefaultSpeed() {
	// speed top left
	speedX[0] = 1;
	speedY[0] = 1;

	// speed top
	speedX[1] = 0;
	speedY[1] = 1;

	// speed top right
	speedX[2] = -1;
	speedY[2] = 1;

	// speed right
	speedX[3] = -1;
	speedY[3] = 0;

	// speed bottom right
	speedX[4] = -1;
	speedY[4] = -1;

	// speed bottom
	speedX[5] = 0;
	speedY[5] = -1;

	// speed bottom left
	speedX[6] = 1;
	speedY[6] = -1;

	// speed left
	speedX[7] = 1;
	speedY[7] = 0;

	// speed center
	speedX[8] = 2;
	speedY[8] = 1;
}

function play() {
	showHeart();
	document.getElementById("num_boom").innerHTML = numBoom;
	// click button reset
	if (buttonReset == true) {
		resetGame();
		contextControl.clearRect(445, 0, 100, 50);
		contextControl.fillText(sessionStorage.myVariable, 445, 25);
		buttonReset = false;
	} else {
		// click button pause
		if (buttonPause == false) {
			document.getElementById("frame-play").setAttribute("onclick",
					"catchMonster(event)");
			if (heart > 0) {
				if (numMonster == 0) {
					returnDefaultState();
					// when winning the monster is faster
					if (stage > 1) {
						increaseLevel();
						// when stage 1 the monster's speed is nomarl
					} else {
						returnDefaultSpeed();
					}
				} else {
					move();
				}
			} else { // when game over
				contextPlay.clearRect(0, 0, framePlaySize, framePlaySize);
				contextPlay.font = '50pt Calibri';
				contextPlay.fillStyle = 'white';
				contextPlay.fillText("GAME OVER", 90, 250);
				clearInterval(setInterval("play()", time));
				document.getElementById("frame-play").setAttribute("onclick",
						"");
			}
		} else { // when click pause
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
	returnDefaultState();
	returnDefaultSpeed();
	stage = 1;
	score = 0;
	heart = 5;
	numMonster = 0;
	speed = -1;
	buttonPause = false;
	numBoom = 3;
	showScore(score);
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
			// ignore the monster is dead
			if (monsterX[i] == 500 || monsterY[i] == 500) {
				continue;
				// kill all monsters alive
			} else {
				imgBlood[i].src = srcBlood;
				imgBloodX[i] = monsterX[i];
				imgBloodY[i] = monsterY[i];
				score += 10;
				numMonster--;
				monsterX[i] = 500;
				monsterY[i] = 500;
			}
		}
		// change score
		showScore(score);
		stage++;
		document.getElementById("num_boom").innerHTML = numBoom;
	}
}

function showScore(score) {
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
	speed++;
	contextControl.clearRect(80, 60, 130, 130);
	contextControl.fillText(speed, 80, 85);
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
}

function move() {
	contextPlay.clearRect(0, 0, framePlaySize, framePlaySize);
	// draw array img blood hide
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
	for (var i = 0; i < 9; i++) {
		// monster right or left
		if ((i == 3) || (i == 7)) {
			// touch the right or left wall monsters will change direction
			if (monsterX[i] > this.framePlaySize - 120 || monsterX[i] < 0)
				speedX[i] = -speedX[i];
			// monster center
		} else if (i == 8) {
			// touch the right or left wall monsters will change direction
			if (monsterX[i] > this.framePlaySize - 120 || monsterX[i] < 0)
				speedX[i] = -speedX[i];
			// touch the top or bottom wall monsters will change direction
			if (monsterY[i] > this.framePlaySize - 120 || monsterY[i] < 0)
				speedY[i] = -speedY[i];
			// the remaining monsters
		} else {
			// touch the top or bottom wall monsters will change direction
			if (monsterY[i] > this.framePlaySize - 120 || monsterY[i] < 0) {
				speedX[i] = -speedX[i];
				speedY[i] = -speedY[i];
			}
		}
	}
}

function catchMonster(evt) {
	var x = evt.clientX - canvasPlay.offsetLeft;
	var y = evt.clientY - canvasPlay.offsetTop;
	for (var i = 8; i >= 0; i--) {
		// click position coincides with the position of monsters
		if (x > monsterX[i] && x <= monsterX[i] + 120 && y > monsterY[i]
				&& y <= monsterY[i] + 120) {
			imgBlood[i].src = srcBlood;
			imgBloodX[i] = monsterX[i];
			imgBloodY[i] = monsterY[i];
			score += 10;
			numMonster--;
			heart++;
			monsterX[i] = 500;
			monsterY[i] = 500;
			break;
		}
	}
	// kill all monster will level up
	if (numMonster == 0) {
		stage++;
	}
	// click wrong
	heart--;
	// change heart
	showHeart();
	// change score
	showScore(score);
}