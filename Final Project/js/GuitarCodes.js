let GuitarImage;
let LowEString;
let LowEStringSOUND;

let AString;
let AStringSOUND;

let DString;
let DStringSOUND;

let GString;
let GStringSOUND;

let BString;
let BStringSOUND;

let HighEString;
let HighEStringSOUND;

let font;

let bgColor;
let targetColor;
let fadeSpeed = 0.01; // Adjust the speed of fading
let triggerFade = false; // Flag to indicate if fading should occur

function preload() {
    GuitarImage = loadImage('./assets/GuitarREAL.PNG');
    LowEString = loadImage('./assets/String.PNG');
    LowEStringSOUND = loadSound('./assets/LowEString.mp3');
    AString = loadImage('./assets/String.PNG'); 
    AStringSOUND = loadSound('./assets/AString.mp3'); 
    DString = loadImage('./assets/String.PNG'); 
    DStringSOUND = loadSound('./assets/DString.mp3'); 
    GString = loadImage('./assets/String.PNG'); 
    GStringSOUND = loadSound('./assets/GString.mp3'); 
    BString = loadImage('./assets/String.PNG'); 
    BStringSOUND = loadSound('./assets/BString.mp3'); 
    HighEString = loadImage('./assets/String.PNG'); 
    HighEStringSOUND = loadSound('./assets/HighEString.mp3'); 
    font = loadFont('Scream Real.ttf');
}

function setup() {
    createCanvas(1422, 800);
    bgColor = color(0); // Set initial background color to black
    targetColor = color(0); // Set initial target color to black
}

function draw() {
    background(bgColor);
    
    // Add your name text
    fill(255); // White text color
    textSize(50);
    textFont(font)
    textAlign(RIGHT, BOTTOM);
    text("Cameron Byers", width - 20, height - 20); // Adjusted position
    textSize(30);
    text("Click on the Strings to Play the Guitar", width - 200, height - 750); // Adjusted position
    text("Press space for a Chord", width -350, height -710); // Adjusted position
  

    
    
    translate(width / 2, height / 2);

     

    rotate(0.8);
    scale(0.9);
    image(GuitarImage, -600, -400);
    rotate(0.8);
    image(LowEString, -200, -100);
    rotate(-.2);
    image(AString, -200, -75);
    rotate(-.3);
    image(DString, -200, -50);
    rotate(-.4);
    image(GString, -200, -25);
    rotate(-.5);
    image(BString, -200, 0);
    rotate(-.4);
    image(HighEString, -200, 25);


 


    
    

    if (triggerFade) {
        bgColor = lerpColor(bgColor, targetColor, fadeSpeed);
        if (red(bgColor) >= red(targetColor) && green(bgColor) >= green(targetColor) && blue(bgColor) >= blue(targetColor)) {
            if (!isBlack(targetColor)) {
                targetColor = color(0);
                triggerFade = false;
            }
        }
    }
}

function mouseClicked() {
    if (mouseX > width / 2 - 200 && mouseX < width / 2 - 200 + LowEString.width * 0.9 &&
        mouseY > height / 2 - 100 && mouseY < height / 2 - 100 + LowEString.height * 0.9) {
        if (LowEStringSOUND.isLoaded()) {
            LowEStringSOUND.play();
            targetColor = color(random(255), random(255), random(255));
            triggerFade = true;
        }
    }

    if (mouseX > width / 2 - 200 && mouseX < width / 2 - 200 + AString.width * 0.9 &&
        mouseY > height / 2 - 75 && mouseY < height / 2 - 75 + AString.height * 0.9) {
        if (AStringSOUND.isLoaded()) {
            AStringSOUND.play();
            targetColor = color(random(255), random(255), random(255));
            triggerFade = true;
        }
    }

    if (mouseX > width / 2 - 200 && mouseX < width / 2 - 200 + DString.width * 0.9 &&
        mouseY > height / 2 - 50 && mouseY < height / 2 - 50 + DString.height * 0.9) {
        if (DStringSOUND.isLoaded()) {
            DStringSOUND.play();
            targetColor = color(random(255), random(255), random(255));
            triggerFade = true;
        }
    }

    if (mouseX > width / 2 - 200 && mouseX < width / 2 - 200 + GString.width * 0.9 &&
        mouseY > height / 2 - 25 && mouseY < height / 2 - 25 + GString.height * 0.9) {
        if (GStringSOUND.isLoaded()) {
            GStringSOUND.play();
            targetColor = color(random(255), random(255), random(255));
            triggerFade = true;
        }
    }

    if (mouseX > width / 2 - 200 && mouseX < width / 2 - 200 + BString.width * 0.9 &&
        mouseY > height / 2 && mouseY < height / 2 + BString.height * 0.9) {
        if (BStringSOUND.isLoaded()) {
            BStringSOUND.play();
            targetColor = color(random(255), random(255), random(255));
            triggerFade = true;
        }
    }

    if (mouseX > width / 2 - 200 && mouseX < width / 2 - 200 + HighEString.width * 0.9 &&
        mouseY > height / 2 + 25 && mouseY < height / 2 + 25 + HighEString.height * 0.9) {
        if (HighEStringSOUND.isLoaded()) {
            HighEStringSOUND.play();
            targetColor = color(random(255), random(255), random(255));
            triggerFade = true;
        }
    }
}

function keyPressed() {
    if (keyCode === 32) { // Check if spacebar is pressed
        if (LowEStringSOUND.isLoaded()) {
            LowEStringSOUND.play();
        }
        if (AStringSOUND.isLoaded()) {
            AStringSOUND.play();
        }
        if (DStringSOUND.isLoaded()) {
            DStringSOUND.play();
        }
        if (GStringSOUND.isLoaded()) {
            GStringSOUND.play();
        }
        if (BStringSOUND.isLoaded()) {
            BStringSOUND.play();
        }
        if (HighEStringSOUND.isLoaded()) {
            HighEStringSOUND.play();
        }
        targetColor = color(random(255), random(255), random(255));
        triggerFade = true;
    }
}

function isBlack(color) {
    return red(color) === 0 && green(color) === 0 && blue(color) === 0;
}