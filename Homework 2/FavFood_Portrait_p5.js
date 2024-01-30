
function setup() {
    createCanvas (800,800);
}
function draw () {
    background(220);
    
    translate(width / 2, height / 2);
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
rotate(120);
rect(-45,-45,90,90);
pop();

//blueberries
fill(51, 81, 135)
circle(100,70,50)
fill(42, 57, 82)
square(90,60,20)

fill(51, 81, 135)
circle(-100,150,50)
fill(42, 57, 82)
square(-110,140,20)

fill(51, 81, 135)
circle(-5,-150,50)
fill(42, 57, 82)
square(-15,-160,20)

fill(51, 81, 135)
circle(-130,-40,50)
fill(42, 57, 82)
square(-140,-50,20)

fill(51, 81, 135)
circle(130,-90,50)
fill(42, 57, 82)
square(120,-100,20)


}