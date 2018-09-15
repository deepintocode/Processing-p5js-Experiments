let offsetX;
let offsetY;
let velocityX;
let velocityY;

const canvasWidth = 1024;
const canvasHeight = 768;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  velocityX = mouseX - pmouseX;
  velocityY = mouseY - pmouseY;
  background(255);
  stroke(0);
  offsetX = map(mouseX, 0, width, -20, 20);
  offsetY = map(mouseY, 0, width, -20, 20);
  fill(255);
  ellipse(width/2 - 150, height/2, 200, 100);
  ellipse(width/2 + 150, height/2, 200, 100);
    
  fill(0);
  if(mouseIsPressed){
    noStroke();
    fill(255, 10, 10);
  }
  ellipse(width/2 - 150 + offsetX , height/2 + offsetY, 25 + velocityX, 25 + velocityY);
  ellipse(width/2 + 150 + offsetX, height/2 + offsetY, 25 + velocityX, 25 + velocityY);
  console.log('mouseX -->', mouseX);
  console.log('pmouseX -->',pmouseX);
  console.log('difference -->', velocityX);
  
}