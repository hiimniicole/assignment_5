// example code - draws an ornament

var ornamentImage;

function setup() {
	createCanvas(640, 360);
	ornamentImage = loadImage("images/ornament.png");
}

function draw() {
	background(50, 50, 50);
	fill(100, 0, 0);
	stroke(0, 100, 100);
	strokeWeight(60);
	ellipse(320, 180, 200, 200);
	image(ornamentImage, 320 - ornamentImage.width * 0.5, 180 - ornamentImage.height * 0.5);
}
