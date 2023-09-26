let bats = [];

function setup() {
    createCanvas(500, 500);
    noStroke();

    //initialize bats for the scene
    for (let i = 0; i < 5; i++) {
        bats.push(new Bat(random(width), random(150)));
    }
}

function draw() {
    //set the background color
    background(255);

    //draw the spooky moon
    drawMoon();

    //draw the haunted house
    drawHouse();

    //draw windows on the house
    drawWindows();

    //draw the door and porch
    drawDoorAndPorch();

    //draw the pumpkin on the right of the house
    drawPumpkin(410, 400, 40);

    //display and animate the bats
    animateBats();
}

function drawMoon() {
    fill('yellow');
    ellipse(400, 100, 160, 160);
}

function drawHouse() {
    fill('#444');
    rect(100, 200, 300, 250);
    fill('#333');
    triangle(100, 200, 250, 100, 400, 200);
}

function drawWindows() {
    fill('yellow');
    drawWindow(130, 230);
    drawWindow(320, 230);
}

function drawWindow(x, y) {
    rect(x, y, 50, 50);
    stroke('black');
    strokeWeight(3);
    line(x, y + 25, x + 50, y + 25);
    line(x + 25, y, x + 25, y + 50);
    noStroke();
}

function drawDoorAndPorch() {
    fill("#554");
    rect(220, 340, 60, 110);
    rect(200, 445, 100, 10); //porch
}

function drawPumpkin(x, y, size) {
    fill('orange');
    ellipse(x, y, size, size);
    fill('green');
    rect(x-5, y - (size / 2), 10, 20); //pumpkin stem
    fill('black');
    ellipse(x - (size * 0.15), y - (size * 0.125), size * 0.125, size * 0.125);
    ellipse(x + (size * 0.15), y - (size * 0.125), size * 0.125, size * 0.125);
    beginShape();
    vertex(x - (size * 0.25), y + (size * 0.125));
    quadraticVertex(x, y + (size * 0.375), x + (size * 0.25), y + (size * 0.125));
    endShape();
}

function animateBats() {
    for (let bat of bats) {
        bat.move();
        bat.display();
    }
}

class Bat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = random(1, 3) * (random() > 0.5 ? 1 : -1);
        this.speedY = random(1, 2);
    }

    //update bat's position
    move() {
        this.x += this.speedX;
        this.y += sin(frameCount * 0.1) * this.speedY;

        //reset bat to the left if it goes off the right side
        if (this.x > width + 20) {
            this.x = -20;
        }
    }

    //display the bat on canvas
    display() {
        fill('black');
        beginShape();
        vertex(this.x, this.y);
        vertex(this.x + 20, this.y + 20);
        vertex(this.x + 10, this.y);
        vertex(this.x, this.y + 20);
        endShape(CLOSE);
    }
}
