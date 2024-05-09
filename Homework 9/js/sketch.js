let idlePaths = [];
let myAnimation;
let myWalkAnimation;
let walkPaths = [];
let toasterImage1;
let toasterImage2;
let toasterImage3;
let blueberryImage;
let fireImages = [];
let score = 0;
let scoreText;
let scoreFontSize = 24;
let intervalID;
let maxHealth = 100; // Maximum health value
let health = maxHealth; // Current health value
let healthBarWidth = 200; // Width of the health bar
let gameOver = false; // Variable to track game over state
let winScore = 10; // Score to win the game

function preload() {
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/idle/idle.txt");
}

function setup() {
    createCanvas(1422, 800);
    myAnimation = new animationImage(200, 200, 150, 150);
    myAnimation.myLoadAnimation('idle', idlePaths);
    myAnimation.myLoadAnimation('walk', walkPaths);

    let toaster1X = random(0, width - 200); // Adjust the range as per your image size
    let toaster1Y = random(0, height - 200); // Adjust the range as per your image size
    let toaster2X = random(0, width - 200); // Adjust the range as per your image size
    let toaster2Y = random(0, height - 200); // Adjust the range as per your image size
    let toaster3X = random(0, width - 200); // Adjust the range as per your image size
    let toaster3Y = random(0, height - 200); // Adjust the range as per your image size

    // Compact way to add toaster images
    toasterImage1 = new Sprite(toaster1X, toaster1Y, 100, 100, 'static');
    toasterImage1.img = "./images/toaster.png";
    toasterImage1.scale = 1;
    toasterImage1.diameter = 200;

    toasterImage2 = new Sprite(toaster2X, toaster2Y, 100, 100, 'static');
    toasterImage2.img = "./images/toaster.png";
    toasterImage2.scale = 1;
    toasterImage2.diameter = 200;

    toasterImage3 = new Sprite(toaster3X, toaster3Y, 100, 100, 'static');
    toasterImage3.img = "./images/toaster.png";
    toasterImage3.scale = 1;
    toasterImage3.diameter = 200;

    // Generate initial blueberry image
    spawnBlueberry();
    spawnFire();

    // Create score text
    scoreText = createP('Score: 0');
    scoreText.position(20, 20);
    scoreText.style('color', 'white');
    scoreText.style('font-size', scoreFontSize + 'px'); // Set the font size
}

function drawHealthBar() {
    let healthBarX = width - healthBarWidth - 20; // Position health bar at the top right
    let healthBarY = 20; // Distance from the top of the canvas

    // Draw the outline of the health bar
    stroke(255);
    fill(0);
    rect(healthBarX, healthBarY, healthBarWidth, 20);

    // Calculate the width of the filled portion based on health percentage
    let healthPercentage = health / maxHealth;
    let fillWidth = healthBarWidth * healthPercentage;

    // Draw the filled portion of the health bar
    fill(0, 255, 0); // Green color for healthy portion
    rect(healthBarX, healthBarY, fillWidth, 20);
}

function draw() {
    background(120);

    if (!gameOver && score < winScore && health > 0) {
        for (let i = 0; i < fireImages.length; i++) {
            if (myAnimation.isColliding(fireImages[i])) {
                health -= 10; // Decrease health by 10 (adjust as needed)
            }
        }

        // Draw health bar
        drawHealthBar();

        if (health <= 0) {
            // Set game over state
            gameOver = true;
        } else {
            // Continue the game
            if (myAnimation.isColliding(blueberryImage)) {
                blueberryImage.remove();
                score++;
                scoreText.html('Score: ' + score);
                spawnBlueberry(); // Respawn blueberry after collision
            }

            // Handle animation movement
            if (keyIsDown(68)) {
                myAnimation.updatePosition('forward');
                myAnimation.drawAnimation('walk');
            } else if (keyIsDown(65)) {
                myAnimation.updatePosition('reverse');
                myAnimation.drawAnimation('walk');
            } else if (keyIsDown(87)) {
                myAnimation.updatePosition('up');
                myAnimation.drawAnimation('walk');
            } else if (keyIsDown(83)) {
                myAnimation.updatePosition('down');
                myAnimation.drawAnimation('walk');
            } else {
                myAnimation.drawAnimation('idle');
            }
        }
    }

    // Check for win condition
    if (score >= winScore) {
        gameOver = true;
        winScreen(); // Show win screen
    }

    // Stop game loop if game over
    if (gameOver) {
        noLoop(); // Stop the draw loop
        if (health <= 0) {
            loseScreen(); // Show lose screen if health reaches zero
        }
    }

    blueberryImage.debug = mouseIsPressed;
}

function spawnBlueberry() {
    // Generate random position for blueberry image
    let blueberryX = random(0, width - 100); // Adjust the range as per your image size
    let blueberryY = random(0, height - 100); // Adjust the range as per your image size

    // Compact way to add an image
    blueberryImage = new Sprite(blueberryX, blueberryY, 100, 100, 'static');
    blueberryImage.img = "./images/blueberry.png";
    blueberryImage.scale = 1;
    blueberryImage.diameter = 40;  
}

function spawnFire() {
    // Generate random position for fire image
    let fireX = random(0, width - 100);
    let fireY = random(0, height - 100);

    // Create fire image
    let newFireImage = new Sprite(fireX, fireY, 100, 100, 'static');
    newFireImage.img = "./images/fire.png";
    newFireImage.scale = 3;
    newFireImage.diameter = 40;

    // Add the new fire image to the array
    fireImages.push(newFireImage);

    // Schedule next fire spawn
    setTimeout(spawnFire, 5000); // Adjust spawn interval as needed
}

function winScreen() {
    // Display "You Win" message
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255);
    text("You Win", width / 2, height / 2);
}

function loseScreen() {
    // Display "You Lose" message
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255);
    text("You Lose", width / 2, height / 2);
}