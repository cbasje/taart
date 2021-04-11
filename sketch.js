let taart;
let img;

function preload() {
	taart = loadModel('Chocolate Cake.obj', true);
	// img = loadImage('Chocolate Cake.mtl');
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(0);

	let locX = mouseX - height / 2;
	let locY = mouseY - width / 2;

	ambientLight(60, 60, 60);
	pointLight(255, 255, 255, locX, locY, 100);
	
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	// normalMaterial(); // For effect
	// texture(img)
	ambientMaterial(250);
	noStroke();
  	model(taart);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}