function setup() {
  createCanvas(400, 400);
  background(0); // set background color to black
}

function draw() {
  // set random stroke weight and fill color
  strokeWeight(random(1, 10));
  fill(random(255), random(255), random(255));

  // generate a random shape
  let shapeType = int(random(4));
  if (shapeType == 0) { // rectangle
    rect(random(width), random(height), random(20, 100), random(20, 100));
  } else if (shapeType == 1) { // ellipse
    ellipse(random(width), random(height), random(20, 100), random(20, 100));
  } else if (shapeType == 2) { // triangle
    triangle(random(width), random(height), random(width), random(height), random(width), random(height));
  } else { // line
    line(random(width), random(height), random(width), random(height));
  }
}
