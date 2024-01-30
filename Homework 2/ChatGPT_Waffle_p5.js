function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255); // White background

  // Draw waffle base
  fill(210, 180, 140); // Light brown
  rect(50, 50, 300, 300);

  // Draw waffle lines
  stroke(0); // Black stroke
  strokeWeight(2); // Set stroke weight
  for (let x = 100; x <= 300; x += 50) {
    line(x, 50, x, 350);
  }
  for (let y = 100; y <= 300; y += 50) {
    line(50, y, 350, y);
  }

  // Draw syrup
  fill(139, 69, 19); // Brown for syrup
  rect(150, 200, 100, 100);

  // Draw butter
  fill(255, 255, 102); // Yellow for butter
  ellipse(200, 200, 80, 30);

  // Draw blueberries
  fill(0, 0, 255); // Blue for blueberries
  ellipse(150, 150, 20, 20);
  ellipse(250, 150, 20, 20);
  ellipse(200, 250, 20, 20);
}

