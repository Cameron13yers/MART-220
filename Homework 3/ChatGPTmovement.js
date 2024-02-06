let syrupColor; // Variable to store syrup color

function setup() {
  createCanvas(400, 400);
  syrupColor = color(139, 69, 19); // Initial color for syrup
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

  // Draw syrup with color stored in syrupColor variable
  fill(syrupColor);
  rect(150, 200, 100, 100);

  // Draw butter
  fill(255, 255, 102); // Yellow for butter
  ellipse(200, 200, 80, 30);

  // Draw blueberries with movement
  fill(0, 0, 255); // Blue for blueberries
  let blueberryX = map(mouseX, 0, width, 130, 170); // Map mouseX to adjust X position of blueberries
  let blueberryY = map(mouseY, 0, height, 130, 170); // Map mouseY to adjust Y position of blueberries
  ellipse(blueberryX, blueberryY, 20, 20);
  ellipse(blueberryX + 100, blueberryY - 50, 20, 20);
  ellipse(blueberryX - 50, blueberryY + 50, 20, 20);
}

// Change syrup color when mouse is clicked
function mouseClicked() {
  if (mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 300) { // Check if mouse is within syrup area
    syrupColor = color(random(255), random(255), random(255)); // Change syrup color to random color
  }
}
