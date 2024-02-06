//var blueberries
var shapes = [];

//fonts
var myFont;

//Butter Spin
var ButterRotateAngle = 120;

//Mouse Blueberry x and y
var mousebbX;
var mousebbY;

//banana1 parts
var bananaX = 0;
var bananaY = -150;
var bananaXSpeed =0;
var bananaYSpeed =0;

//banana2 parts
var banana2X = 150;
var banana2Y = 100;
var banana2XSpeed =0;
var banana2YSpeed =0;

//banana3 parts
var banana3X = -150;
var banana3Y = 100;
var banana3XSpeed =0;
var banana3YSpeed =0;

function setup() 
{
    createCanvas (800,800);
    myFont = loadFont("fonts/Error.ttf");
    
    bananaXSpeed = random(1,11);
    bananaYSpeed = random(1,11);

    banana2XSpeed = random(1,11);
    banana2YSpeed = random(1,11);

    banana3XSpeed = random(1,11);
    banana3YSpeed = random(1,11);

   
}

function draw () 
{
    background(220);
    
    translate(width / 2, height / 2);

//myname
fill(0, 0, 0);
textSize(35);
textFont('TimesNewRoman');
text("Cameron Byers", 150, 350);

//piece name
textSize(35);
textFont('TimesNewRoman');
text("Wacky Waffle", -385, -330);

//blueberry hint
textSize(25)
textFont('TimesNewRoman')
text("Click on the Waffle To Add Blueberries!", -350, 330)

//Waffle

//Waffle Cicrle
fill(240,171,103);
circle(0,0,500);

//Waffle Squares 
fill (220,151,83);

//Row 1 Left->Right
rect(-75,-235,65,55);
rect(10,-235,65,55);

//Row 2 Left->Right
square(-160,-160,65);
square(-75,-160,65);
square(10,-160,65);
square(95,-160,65);

//Row 3 Left->Right
rect(-235,-75,55,65);
square(-160,-75,65);
square(-75,-75,65);
square(10,-75,65);
square(95,-75,65);
rect(180,-75,55,65);

//Row 4 Left->Right
rect(-235,10,55,65);
square(-160,10,65);
square(-75,10,65);
square(10,10,65);
square(95,10,65);
rect(180,10,55,65);

//Row 5 Left->Right
square(-160,95,65);
square(-75,95,65);
square(10,95,65);
square(95,95,65);

//Row 6 Left->Right
rect(-75,180,65,55);
rect(10,180,65,55);


//Circle Overlay to Shape Squares

//Syrup
push();
rotate(45);
fill(22, 15, 0, 99);
ellipse(0,0,400,200);
pop();
push();
rotate(270);
fill(22, 15, 0, 99);
ellipse(10,30,400,200);
pop();
push();
rotate(90);
fill(22, 15, 0, 99);
ellipse(0,0,450,250);
pop();

//rotation reset


//Butter
//Melted Butter Circles
fill(233, 206, 75);
ellipse(0,0,100,180);
ellipse(0,0,180,100);
//Butter Square
push();
fill(254, 230, 110);
rotate(ButterRotateAngle);
rect(-45,-45,90,90);
pop();

ButterRotateAngle += .05;

mousecircle();

// Draw shapes stored in the array
for (var i = 0; i < shapes.length; i++) {
    fill(shapes[i].color);
    if (shapes[i].shape === 'circle') {
      circle(shapes[i].x, shapes[i].y, shapes[i].size);
    } else if (shapes[i].shape === 'square') {
      square(shapes[i].x, shapes[i].y, shapes[i].size);
    }
  }

  
drawBananas();

}

function drawBananas() {
    //banana1
    fill(255, 249, 205);
    circle(bananaX, bananaY, 115);
    fill(255, 249, 205);
    circle(bananaX, bananaY, 110);
    fill(242, 231, 183);
    circle(bananaX, bananaY, 45);
    fill(134, 113, 64);
    circle(bananaX - 10, bananaY - 5, 10);
    circle(bananaX + 10, bananaY - 5, 10);
    circle(bananaX, bananaY + 10, 10);

    bananaX += bananaXSpeed;
    bananaY += bananaYSpeed;

    if (bananaX + 115 / 2 >= width / 2 || bananaX - 115 / 2 <= -width / 2) {
        bananaXSpeed *= -1; // Reverse x velocity
    }
    if (bananaY + 230 / 2 >= height / 2 || bananaY - 230 / 2 <= -height / 2) {
        bananaYSpeed *= -1; // Reverse y velocity
    }

    //banana2
    fill(255, 249, 205);
    circle(banana2X, banana2Y, 115);
    fill(255, 249, 205);
    circle(banana2X, banana2Y, 110);
    fill(242, 231, 183);
    circle(banana2X, banana2Y, 45);
    fill(134, 113, 64);
    circle(banana2X - 10, banana2Y - 5, 10);
    circle(banana2X + 10, banana2Y - 5, 10);
    circle(banana2X, banana2Y + 10, 10);

    banana2X += banana2XSpeed;
    banana2Y += banana2YSpeed;

    if (banana2X + 115 / 2 >= width / 2 || banana2X - 115 / 2 <= -width / 2) {
        banana2XSpeed *= -1; // Reverse x velocity
    }
    if (banana2Y + 230 / 2 >= height / 2 || banana2Y - 230 / 2 <= -height / 2) {
        banana2YSpeed *= -1; // Reverse y velocity
    }

    //banana3
    fill(255, 249, 205);
    circle(banana3X, banana3Y, 115);
    fill(255, 249, 205);
    circle(banana3X, banana3Y, 110);
    fill(242, 231, 183);
    circle(banana3X, banana3Y, 45);
    fill(134, 113, 64);
    circle(banana3X - 10, banana3Y - 5, 10);
    circle(banana3X + 10, banana3Y - 5, 10);
    circle(banana3X, banana3Y + 10, 10);

    banana3X += banana3XSpeed;
    banana3Y += banana3YSpeed;

    if (banana3X + 115 / 2 >= width / 2 || banana3X - 115 / 2 <= -width / 2) {
        banana3XSpeed *= -1; // Reverse x velocity
    }
    if (banana3Y + 230 / 2 >= height / 2 || banana3Y - 230 / 2 <= -height / 2) {
        banana3YSpeed *= -1; // Reverse y velocity
    }
}

function mousecircle() {
    // Create blueberry when mouse clicked
    fill(51, 81, 135);
    circle(mousebbX - width / 2, mousebbY - height / 2, 50); // Adjusted for translated origin
    fill(42, 57, 82);
    square(mousebbX - width / 2 - 10, mousebbY - height / 2 - 10, 20); // Adjusted for translated origin
  }
  
  function mouseClicked() {
    // Define the sizes of the circle and square
    var circleSize = 50;
    var squareSize = 20;

    // Calculate the offset to center the square within the circle
    var offset = (circleSize - squareSize) / 2;

    // Push circle shape
    shapes.push({
        x: mouseX - width / 2,
        y: mouseY - height / 2,
        size: circleSize,
        color: color(51, 81, 135),
        shape: 'circle'
    });

    // Push square shape
    shapes.push({
        x: mouseX - width / 2 - squareSize / 2, 
        y: mouseY - height / 2 - squareSize / 2, 
        size: squareSize,
        color: color(42, 57, 82),
        shape: 'square'
    });
}
