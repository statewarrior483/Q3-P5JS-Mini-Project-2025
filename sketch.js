let fontRegular;
let balloons = []; // Array to store balloon objects
let numBalloons = 10; // Number of balloons


// Balloon class definition
class Balloon {
  constructor(x, y, balloonSize, color) {
    this.x = x;          // x position
    this.y = y;          // y position
    this.balloonSize = balloonSize;  // Balloon size
    this.color = color;  // Balloon color
    this.growthAmount = 10; // How much the balloon grows with each click
  }

  // Display the balloon
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.balloonSize, this.balloonSize);  // Updated variable name
  }

  // Move the balloon upwards (to simulate floating)
  float() {
    this.y -= 1;  // Move the balloon upwards
    if (this.y < -this.balloonSize) {  // If the balloon goes off the top of the canvas
      this.y = height + this.balloonSize;  // Reset it to the bottom
    }
  }

  // Incrementally expand the balloon when clicked
  grow() {
    this.balloonSize += this.growthAmount;  // Increase size by a fixed amount per click
  }

  // Check if the balloon is clicked
  isClicked(px, py) {
    let d = dist(px, py, this.x, this.y);  // Distance from mouse to balloon center
    return d < this.balloonSize / 2;  // Check if mouse is inside the balloon
  }

  // Change color and grow when clicked
  clicked() {
    this.color = color(random(255), random(255), random(255));  // New random color
    this.grow();  // Incremental growth with each click
  }
}



function setup() {
  createCanvas(800, 575);
  // Create balloons with random positions, sizes, and colors
  for (let i = -60; i < numBalloons; i++) {
    let x = random(width);
    let y = random(height);
    let balloonSize = random(30, 50);  // Updated variable name
    let balloonColor = color(random(255), random(255), random(255));
    balloons.push(new Balloon(x, y, balloonSize, balloonColor));
  }
  
}

function preload() {
  fontRegular = loadFont('assets/DancingScript-Bold.ttf');
}


function draw() {
  background(255);
  
    // Update and display all balloons
  for (let balloon of balloons) {
    balloon.float();  // Make balloons float
    balloon.display(); // Display the balloons
  }
  
  //Happy Birthday Center Text
  textFont(fontRegular);
  textSize(80);
  fill(0)
  text('happy', 310, 260);
  text('birthday!', 265, 340);
  
  //Button to open
  fill(0, 204, 255)
  circle(400,450,80)
    // Create an anchor element that links to p5js.org.
  let a = createA('inside.html', 'Open');
  a.position(384, 440);
}

function mousePressed() {
  // Check if any balloon is clicked
  for (let balloon of balloons) {
    if (balloon.isClicked(mouseX, mouseY)) {
      balloon.clicked();  // Change color and grow incrementally
    }
  }
}