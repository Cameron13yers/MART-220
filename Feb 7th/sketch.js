var Ghost;
var ghostX = 720, ghostY = 400;
var GhostSpeed = 5
var myFont;
var myFont2;

var myTime = 0;

var PacMan;
var xImage2 = 300, yImage2 = 25;
var speedX2, speedY2;

function setup()
{
    createCanvas(1440,800);
    Ghost = loadImage("images/PacManGhost.png");

    PacMan = loadImage("images/PacMan.png");

    myFont = loadFont("fonts/PacfontGood-yYye.ttf");
    myFont2 = loadFont("fonts/ProtestRiot-Regular.ttf");


    speedX2 = random(1, 5);
    speedY2 = random(1, 5);

    setInterval(changeTime, 1000);
}
// this runs continuously
function draw()
{
    background(0, 0 ,0);
    image(Ghost, ghostX, ghostY);


    if (key === 'w' || key === 'W') {
        ghostY -= GhostSpeed; // Move up
      } else if (key === 's' || key === 'S') {
        ghostY += GhostSpeed; // Move down
      } else if (key === 'a' || key === 'A') {
        ghostX -= GhostSpeed; // Move left
      } else if (key === 'd' || key === 'D') {
        ghostX += GhostSpeed; // Move right
      }
    
   image(PacMan, xImage2,yImage2);

    xImage2 += speedX2;
    yImage2 += speedY2;

    if(ghostX >= width-100 || xImage2 <= 0)
    {
        GhostSpeed *=-1;
    }

    if(ghostY >= height-100 || yImage2 <= 0)
    {
        GhostSpeed *=-1;
    }

    if(xImage2 >= width-100 || xImage2 <= 0)
    {
        speedX2 *=-1;
    }

    if(yImage2 >= height-100 || yImage2 <= 0)
    {
        speedY2 *=-1;
    }

    fill(255);
    textSize(50);
    textFont(myFont);
    text("Pac Man", 600, 50);

    fill(36,250,100);
    textSize(15);

    textFont(myFont2)
    text(myTime + " seconds", 700, 70);

   // var hasCollided = checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100);
    
    if(checkCollision(ghostX, ghostY, 100, 100, xImage2, yImage2, 100, 100))
    {
        GhostSpeed = 0
        speedX2 = 0
        speedY2 = 0
        textSize(100)
        text("You Survived" + myTime + "seconds", 200,400)
        stopInterval()
    }
    
}


  


function checkCollision(x,y,w,h, x2,y2,w2,h2)
{
   
	if (
		x - w/2 < x2 + w2/2 &&
		x + w2/2 > x2 -w/2 &&
		y - h2/2 < y2 + h/2 &&
		y + h2/2 > y2 - h/2
	
	){
     return true;
	} else {
     return false;
    }
}

function changeTime()

{
    myTime++;
    
    //myTime -= 1;
    //myTime = myTime - 1;
}

