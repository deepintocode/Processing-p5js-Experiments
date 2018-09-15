let x;
let scaledStroke;
const canvasHeight = 1080;
const canvasWidth = 1080;
function setup() {
  createCanvas(canvasWidth, canvasHeight);

  x = height;
  for (let i = 0; i < height; i++) {
    scaledStroke = map(x, canvasHeight, 0, 255, 0); 
    stroke(scaledStroke);
    line(0, i, width, i);
    x--;
  }
  noStroke();
  fill(0);
  arc(height - 180, 180, 125, 125, PI, 2 * PI );
  fill(255);
  arc(height - 180, 180, 125, 125, 2 * PI, PI);
  for (let i = 0; i < height; i += 70) {
    scaledFill = map(i, 500, 0, 255, 0); 
    fill(scaledFill, 210);
    rect(width/2 - 10, i - 20, 10, 50);
    rect(width/2 + 10, i - 20, 10, 50);
  }
  fill(255, 20);
  for (let i = 0; i < width; i += 90) {
    for (let j = 0; j < 60; j += 20) {
      rect(i + 10, height - 20 - random(20, 40) - j, 60, 20);
    }
  }
}