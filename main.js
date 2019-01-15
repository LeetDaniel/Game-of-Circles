var playerX = 400;
var playerY = 40;
var playerSize = 50;
var playerSpeed = 5;
var eSize = 50;
var ex1 = 750;
var ey1 = 50;
var ex2 = 350;
var ey2 = 50;
var ex3 = 150;
var ey3 = 60;
var ex4 = 50;
var ey4 = 40;

function setup() {
    createCanvas(800, 500);
}

function draw() {
    background(150);

    // player
    ellipse(playerX, playerY, playerSize, playerSize); // x, y, w, h

    // four enemies
    ellipse(ex1, ey1, eSize, eSize);
    ellipse(ex2, ey2, eSize, eSize);
    ellipse(ex3, ey3, eSize, eSize);
    ellipse(ex4, ey4, eSize, eSize);
}
// why are they going backwards?
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        playerX -= playerSpeed;
    } else if (keyCode === RIGHT_ARROW) {
        playerX += playerSpeed;
    } else if (keyCode === UP_ARROW) {
        playerY += playerSpeed;
    } else if (keyCode === DOWN_ARROW) {
        playerY -= playerSpeed;
    }
}
