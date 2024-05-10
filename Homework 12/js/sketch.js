let font;
let texture1;
let texture2; // Declare a variable to hold the texture image
let texture3;

function preload(){

     // Load your font file (adjust the path as needed)
     font = loadFont('Scream Real.ttf');
     texture1 = loadImage('donut.avif');
     texture2 = loadImage('wafflecone.jpeg');
     texture3 = loadImage('donuthole.jpeg');
}

function setup() {
    createCanvas(1000,900, WEBGL);
    noStroke();

  
  }
  
  
  function draw() {
    background(158, 230, 177);
    

    //Plane
    push();
    normalMaterial();
    fill(184, 22, 52); 
    translate(-300,-300);
    rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    plane(150, 150);
    pop();
  
    //Cube
    push();
    normalMaterial();
    fill(245, 126, 7); 
    translate(0, -300,); 
    rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    box(50); 
    pop();
  
    //Sphere
    push();
    texture(texture3)
    translate(300, -300); 
    rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    sphere(30); 
    pop();
  
    //Cylinder
    push();
    normalMaterial();
    fill(0, 181, 12); 
    translate(-300, 0); 
    rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1); 
    cylinder(25, 100); 
    pop();

    //Cone
    push()
    texture(texture2);
    translate(0,0);
    rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1); 
    cone(50, 150, 24, 24, true);
    pop()

    //Ellipsoid
    push()
    normalMaterial();
    fill(137, 36, 237);
    translate(300,0);
    rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1); 
    ellipsoid(50, 150,75, 24, 24);
    pop()

    //Torus
    push()
    texture(texture1);
    translate(0,300);
    rotateZ(frameCount * 0.1);
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    torus(50, 15, 24, 16);
    pop()

      // 2D Text
      fill(0,0,0);
      textSize(36);
      textFont(font)
      text("My 3D Art", -400, 300); // Title
      text("Cameron Byers", 100, 300); //
  }