var b, w;

function setup() {
  createCanvas(windowWidth,400);
  frameRate(12);
  b = new bullet(random(30, 52), random(223, 321));
  w = new wall(random(22, 83));
}

function draw() {
  background(51);  
  if (isColliding(b, w)) {
    b.velocityX = 0;
    b.speed = 0;
  }
  drawSprites();
}

function isColliding(b, w) {
  var bx = b.sprite.x + b.sprite.width;
  var wx = w.sprite.x;
  if (bx >= wx) {
    return true;
  }
  return false;
}