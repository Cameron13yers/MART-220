var idlePaths= [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
let toasterImage;
let blueberryImage;

function preload() {
    idlePaths = loadStrings("./images/idle/idle.txt");
    walkPaths = loadStrings("./images/idle/idle.txt");
   
}

function setup() {
    createCanvas(800,600);
    myAnimation = new animationImage(200, 200, 150, 150);
    myAnimation.myLoadAnimation('idle', idlePaths);
    myAnimation.myLoadAnimation('walk', walkPaths);

      //compact way to add an image
  toasterImage = new Sprite(450, 200,100,100, 'static');
  toasterImage.img = "./images/toaster.png";
  toasterImage.scale = 1;
  toasterImage.diameter = 100;

       //compact way to add an image
       blueberryImage = new Sprite(450, 200,100,100, 'static');
       blueberryImage.img = "./images/blueberry.png";
       blueberryImage.scale = 1;
       blueberryImage.diameter = 100;
}


// display all the frames using the draw function as a loop
function draw() 
{

    background(120);  
    
    if(kb.pressing('d'))
    {
        if(myAnimation.isColliding(toasterImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(blueberryImage))
        {
            blueberryImage.remove();
            
        }  
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');    
          
    }
    else if(kb.pressing('a'))
    {
        if(myAnimation.isColliding(toasterImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');  
        }  
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');        
    }
    else if(kb.pressing('w'))
    {
        if(myAnimation.isColliding(toasterImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk'); 

    }
    else if(kb.pressing('s'))
    {
        if(myAnimation.isColliding(toasterImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        myAnimation.updatePosition('down');   
        myAnimation.drawAnimation('walk');        
    }
    else
    {
        myAnimation.drawAnimation('idle');
    } 
    
    blueberryImage.debug = mouseIsPressed;

}
