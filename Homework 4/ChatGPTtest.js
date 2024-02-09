let waterLevel = 0;
let waveSpeed = 0.10;
let waveHeight = 5;
let waveFrequency = 1.8; // Increased wave frequency

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 239, 221); // Blue background
  
  // Draw water
  fill(50, 15, 0, 99); // Light blue color for water
  beginShape();
  vertex(0, height);
  for (let x = 0; x < width; x += 10) {
    let y = map(sin(x * waveFrequency + frameCount * waveSpeed), -1, 1, waterLevel - waveHeight, waterLevel + waveHeight);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
  
  // Increase water level
  waterLevel -= 1;
  
  // Reset water level when it reaches the top
  if (waterLevel < 0) {
    waterLevel = height;
  }
}







