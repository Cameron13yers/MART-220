var Food;
var foodX = 600;
var foodY = 300;
var foodW = 124;
var foodH = 81;

// CAT OBJECTS
var CatObjects = [];
var CatRunObjects = [];
var CatRunLeftObjects = [];
var currentObjects;

// CAT ANIMATION IMAGES
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var currentAnimation;
var scaleFactor = 0.5;

// Define all the variables that will hold the strings read in from a file
var result;
var runresult;
var runresultleft;

// Define the variable that will iterate over the animation and objects
var counter = 0;

// Define the variable that will be used when creating an interval
var myInterval;

// Define a variable for to slow the movement animations down
var index = 0;

function preload() {
  result = loadStrings('assets/catidle.txt');
  runresult = loadStrings('assets/catrun.txt');
  runresultleft = loadStrings('assets/catrunleft.txt');

  // Load and resize the animation images
  for (var i = 0; i < result.length; i++) {
    var img = loadImage('assets/' + result[i]);
    img.resize(img.width * scaleFactor, img.height * scaleFactor);
    animation.push(img);
  }

  for (var i = 0; i < runresult.length; i++) {
    var runImg = loadImage('assets/' + runresult[i]);
    runImg.resize(runImg.width * .5, runImg.height * .5);
    runanimation.push(runImg);

    var leftRunImg = loadImage('assets/' + runresultleft[i]);
    leftRunImg.resize(leftRunImg.width * .5, leftRunImg.height * .5);
    leftrunanimation.push(leftRunImg);
  }

  // Load the food image
  Food = loadImage('assets/fish3.png');
}

function setup() {
  createCanvas(800, 600);

  // Assign the loaded food image directly
  foodimage = Food;

  // create all the idle objects and set the animation array too
  for (var i = 0; i < result.length; i++) {
    CatObjects.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = CatObjects[i].getImage();
  }

  // create both movement to the right and left and the animations in this for loop
  for (var i = 0; i < runresult.length; i++) {
    CatRunObjects.push(new imageclass('assets/' + runresult[i], 0, 0));
    runanimation[i] = CatRunObjects[i].getImage();
    CatRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], 0, 0));
    leftrunanimation[i] = CatRunLeftObjects[i].getImage();
  }

  // assign the idle objects to the generic object variable
  currentObjects = CatObjects;

  // create an interval for the idle animation
  myInterval = setInterval(incrementIndex, 100);
  myInterval2 = setInterval(movefood, 5000);
}

// display all the frames using the draw function as a loop
function draw() {
  background(120);

  // check to see if any keys have been pressed
  if (keyIsPressed) {
    // stop the idle interval
    clearInterval(myInterval);
    // set the variable to null - we will check for this later
    myInterval = null;

    // use this if statement to slow the movement animations
    index++;
    if (index > 3) {
      incrementIndex();
      index = 1;
    }

    // move to the right
    if (key == "d") {
      // assign the generic animation and object variables
      currentAnimation = runanimation;
      currentObjects = CatRunObjects;

      // make sure we don't go over the size of the arrays
      // keep in mind the idle has 10 and the movement has 8
      if (counter >= currentAnimation.length) {
        counter = 0;
      }

      // move the animation by updating the x component
      currentObjects[counter].setX(currentObjects[counter].getX() + 10);

      // make sure you assign the x component of the left movement too
      for (var i = 0; i < CatRunLeftObjects.length; i++) {
        CatRunLeftObjects[i].setX(currentObjects[0].getX());
      }

      // make sure the movement object is assigned to the current object again
      CatRunObjects = currentObjects;

      // this just the opposite of the above.  The character moves to the left here instead
    } else if (key == "a") {
      currentAnimation = leftrunanimation;
      currentObjects = CatRunLeftObjects;

      if (counter >= currentAnimation.length) {
        counter = 0;
      }
      currentObjects[counter].setX(currentObjects[counter].getX() - 2);

      for (var i = 0; i < CatRunObjects.length; i++) {
        CatRunObjects[i].setX(currentObjects[0].getX());
      }

      CatRunLeftObjects = currentObjects;
    }

    for (var i = 0; i < CatObjects.length; i++)
      CatObjects[i].setX(currentObjects[0].getX());
  } else {
    if (myInterval == null) {
      myInterval = setInterval(incrementIndex, 50);
    }
    currentObjects = CatObjects;
    currentAnimation = animation;
  }

  // Check for collision between animation image and food image
  if (
    collides(
      currentObjects[counter].getX(),
      currentObjects[counter].getY(),
      currentAnimation[counter].width,
      currentAnimation[counter].height,
      foodX,
      foodY,
      foodW,
      foodH
    )
  ) {
    // Collision detected, move food image off-screen
    foodX = -1000;
    foodY = -1000;
  }

  // Draw animation image
  image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());
  // Draw food image
  image(foodimage, foodX, foodY, foodW, foodH);
}

function incrementIndex() {
  // increment the index
  counter += 1;
  // if we reach the end of the array, start over
  if (counter >= currentObjects.length) {
    counter = 0;
  }
}

function movefood() {
  foodX = random(100, 700);
  foodY = random(100, 500);
}

// Function to check for collision between two rectangular objects
function collides(obj1x, obj1y, obj1w, obj1h, obj2x, obj2y, obj2w, obj2h) {
  return (
    obj1x < obj2x + obj2w &&
    obj1x + obj1w > obj2x &&
    obj1y < obj2y + obj2h &&
    obj1y + obj1h > obj2y
  );
}
