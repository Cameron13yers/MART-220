var waterLevel = 400;
var waveSpeed = 0.10;
var waveHeight = 5;
var waveFrequency = 1.8; // Increased wave frequency

//var blueberries
var shapes = [];

//fonts
var myFont;
var myFont2;
var myFont3;

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

//SyrupDrops
var shapes = [];
var syrupDrops = [];
var SyrupDropX;
var SyrupDropY;

//Knife
var Knife;
var knifeX = -350, knifeY = -325;

//Fork
var Fork;
var forkX = 230, forkY = -325;

//Strawberry
var Eggo
var colorChangeSpeed = .005;
var eggoX = -200
var eggoY = 0
var eggoXSpeed = 0
var eggoYSpeed = 0

function setup() 
{
    createCanvas (800,800);
    
    Knife = loadImage("images/Knife.png");
    Fork = loadImage("images/Fork.png");
    Eggo = loadImage("images/Eggo.png")
    
    
    myFont = loadFont("fonts/Error.ttf");
    myFont2 = loadFont("fonts/Retro.ttf");
    myFont3 = loadFont("fonts/MyCoffeeBreak.ttf");
    
    bananaXSpeed = random(1,11);
    bananaYSpeed = random(1,11);

    banana2XSpeed = random(1,11);
    banana2YSpeed = random(1,11);

    banana3XSpeed = random(1,11);
    banana3YSpeed = random(1,11);

    eggoXSpeed = random(1,11);
    eggoYSpeed = random(1,11);

   setInterval(createSyrupDrop, 1000); // Create a new syrup drop every second
}

function draw () 
{
    background(255, 239, 221);
    
    translate(width / 2, height / 2);

      
  fill(50, 15, 0, 99); 
  beginShape();
  vertex(-400, height / 2);
  for (let x = -400; x < width / 2; x += 10) {
    let y = map(sin(x * waveFrequency + frameCount * waveSpeed), -1, 1, waterLevel - waveHeight, waterLevel + waveHeight);
    vertex(x, y);
  }
  vertex(width / 2, height / 2);
  endShape(CLOSE);
  
    waterLevel -=.02;
  
    if (waterLevel > 400) {
    waterLevel = height / 2;
  }


//myname
fill(0, 0, 0);
textSize(35);
textFont(myFont);
text("Cameron Byers", 100, 350);

//piece name
fill(208, 160, 106)
textSize(80);
textFont(myFont3);
text("Wacky Waffle", -385, -330);

//blueberry hint
fill(51, 81, 135)
stroke(0)
textSize(30)
textFont(myFont2)
text("Click on the Waffle To Add Blueberries!", -350, 300)

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

// Draw syrup drops
for (let i = 0; i < syrupDrops.length; i++) {
    syrupDrops[i].display();
    syrupDrops[i].update();
  }



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
  
image(Knife, knifeX, knifeY);
image(Fork, forkX, forkY);

let r = (sin(frameCount * colorChangeSpeed) + 1) * 127; 
let g = (sin(frameCount * colorChangeSpeed + PI / 2) + 1) * 127; 
let b = (sin(frameCount * colorChangeSpeed + PI) + 1) * 127; 

     tint(r, g, b);

  image(Eggo, eggoX, eggoY, 200, 108);

  eggoX += eggoXSpeed;
  eggoY += eggoYSpeed;

  if (eggoX + 400 / 2 >= width / 2 || eggoX - 0 / 2 <= -width / 2) {
      eggoXSpeed *= -1; // Reverse x velocity
  }
  if (eggoY + 230 / 2 >= height / 2 || eggoY - 0 / 2 <= -height / 2) {
      eggoYSpeed *= -1; // Reverse y velocity
  }

  noTint();

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

function createSyrupDrop() {
    let size = random(10, 23);
    let drop = new SyrupDrop(random(-150, 200), random(0, 100), random(5, 5), size);
    syrupDrops.push(drop);
}

class SyrupDrop {
    constructor(x, y, speed, size) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size; 
    }

    update() {
        this.y += this.speed;
        if (this.y > height) {
           syrupDrops.splice(syrupDrops.indexOf(this), 1);
        }
    }

    display() {
        fill(22, 15, 0, 99);
        ellipse(this.x, this.y, this.size, this.size * 3); 
    }
}
