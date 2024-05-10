//draw a spinning donut
let donut;
let texture1;
let texture2;
let texture3;
let miniDonuts = [];
let numMiniDonuts = 10;
let spins = [];
let font;

function preload() {
  // Load model with normalise parameter set to true
  donut = loadModel('assets/donutmodel.obj', true);
  texture1 = loadImage('donutTEX.jpeg');
  texture2 = loadImage('texture2.jpeg');
  texture3 = loadImage('texture3.jpeg');
  font = loadFont('Scream Real.ttf');
}

function setup() {
  createCanvas(1400, 800, WEBGL);
  
  // Create initial positions and spins for mini donuts
  for (let i = 0; i < numMiniDonuts; i++) {
    miniDonuts.push(createVector(random(-width / 2, width / 2), random(-height / 2, height / 2)));
    spins.push(random(0.1, 2));
  }
}

function draw() {
  background(158, 230, 177);

   //Sphere
   push();
   normalMaterial();
   texture(texture3)
     translate(450, 0); 
   rotateZ(frameCount * 0.1);
   rotateX(frameCount * 0.1);
   rotateY(frameCount * 0.1);
   sphere(50); 
   pop();
 
   //Sphere
   push();
   normalMaterial();
   texture(texture2)
     translate(-450, 0); 
   rotateZ(frameCount * 0.1);
   rotateX(frameCount * 0.1);
   rotateY(frameCount * 0.1);
   sphere(50); 
   pop();
 
       //Cube
       push();
       normalMaterial();
       fill(0); 
       translate(-450, 0,); 
       rotateZ(frameCount * 0.1);
       rotateX(frameCount * 0.1);
       rotateY(frameCount * 0.1);
       box(75); 
       pop();
 
           //Cube
     push();
     normalMaterial();
     fill(0); 
     translate(450, 0,); 
     rotateZ(frameCount * 0.1);
     rotateX(frameCount * 0.1);
     rotateY(frameCount * 0.1);
     box(75); 
     pop();

  // Draw mini donuts
  for (let i = 0; i < miniDonuts.length; i++) {
    push();
    normalMaterial();
    texture(texture1);
    translate(miniDonuts[i].x, miniDonuts[i].y);
    rotateZ(frameCount * spins[i]); // Use different spin value for each mini donut
    rotateX(frameCount * spins[i]);
    rotateY(frameCount * spins[i]);
    torus(50, 15, 24, 16);
    pop();
  }

  // Draw main donut
  push();
  normalMaterial();
  texture(texture1);
  scale(2); // Scaled to make model fit into canvas
  rotateX(frameCount * 1);
  rotateY(frameCount * 1);
  rotateZ(frameCount * 1);
  model(donut);
  pop();

  // 2D Text
  fill(237, 144, 66);
  textSize(75);
  textFont(font)
  text("Donut Mania", -700, -325); // Title
  text("Cameron Byers", -8, 385); //
  fill(0)
  textSize(30)
  text("Click to go Donut Crazy!", -200, -300);
}

function mouseClicked() {
  // Update positions of mini donuts to random locations
  for (let i = 0; i < miniDonuts.length; i++) {
    miniDonuts[i].x = random(-width / 2, width / 2);
    miniDonuts[i].y = random(-height / 2, height / 2);
    spins[i] = random(0.1, 2); // Update spin for each mini donut
  }
}

