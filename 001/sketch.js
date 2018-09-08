let x, y;
let counter = 0;

// const capturer = new CCapture({
//     format: 'gif',
//     workersPath: 'js/',
//     framerate: 30,
//     verbose: true
// });

function randomRGB() {
    return [random(0, 255), random(0, 255), random(0, 255)];
}

function setup() {    
    const p5Canvas = createCanvas(windowWidth, windowHeight);    
    canvas = p5Canvas.canvas;
    frameRate(30);
    fill(0);
    // capturer.start();
}

function draw() {
    // capturer.capture(canvas);
    counter += 1;
    x = random(0, width);
    y = random(0, width);
    strokeWeight(random(1,4));
    stroke(randomRGB());
    line(0, x, y, x)
    if(counter > 200) {
        clear();
        counter = 0;
        // Save the animation as a .gif file
        // noLoop();
        // capturer.stop();
        // capturer.save();
    }
}


