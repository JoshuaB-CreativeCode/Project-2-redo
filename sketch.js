//This is built with fullscreen mode in mind.

// All variables being called
let pictureX = 350;
let pictureY = 350;
let tintNew = 0;
let tintOld = 255;
let preventLoop = 0;
let imageSelector = 0;
let firstImage = 0;
let firstImageSelection = 0;

function preload() {
  //All images, fonts, and sounds being called
  groveOld = loadImage("/Images/Grove Street.png");
  groveNew = loadImage("/Images/Grove Street Modern.png");
  broomeOld = loadImage("/Images/Broome St.png");
  broomeNew = loadImage("/Images/Broome St Modern.png");
  barAndGrillOld = loadImage("/Images/Bar and Grill.png");
  barAndGrillNew = loadImage("/Images/sput ready.png");
  eastOld = loadImage("/Images/62 East.png");
  eastNew = loadImage("/Images/62 East Modern.png");
  song = loadSound("/Music/song 2.mp3");
  oldBack = loadImage("/Images/old background.png");
  newBack = loadImage("/Images/new background.png");
  fontUsed = loadFont("/Fonts/basker.ttf");
  fontUsedStatement = loadFont("/Fonts/Bodoni.ttf");
  valOld = loadImage("/Images/valentine old.png");
  valNew = loadImage("/Images/valentine new.png");
}

function setup() {
  //Creates Picture Frame.
  let frame = createImg("/Images/picture frame.png", "picture frame");
  frame.position(220, 0);
  //Creating canvas
  let board = createCanvas(700, 700);
  board.parent("board-holder");
  board.position(330, 100);
  //Calling imageSelection
  imageSelection();
  //Creating Buttons
  let button1 = createButton("Random Image");
  let button3 = createButton("Music");
  let button2 = createButton("First Image");
  button1.parent("button-holder");
  button2.parent("button-holder");
  button3.parent("button-holder");
  button1.mousePressed(imageSelection);
  button3.mousePressed(musicPlayer);
  button2.mousePressed(firstImageSelector);
  button1.position(40, 450);
  button2.position(40, 350);
  button3.position(40, 550);
  imageMode(CENTER);
  //Selecting font to be used within the canvas
  textFont(fontUsed);
}

function draw() {
  // Calls imagePlacement, which is what places the images onto the canvas
  imagePlacement();
  //Calls the mouseHover function, which adds the text whenever you hover your mouse over the image
}

//imageSlection, whose job it is to prevent the image selector constantly going off
function imageSelection() {
  preventLoop = 0;
  redraw();
}

// The main powerhouse of the Code. Does most of the work
function imagePlacement() {
  //Array for images to be randomly be selected from
  let oldImageArray = [groveOld, broomeOld, barAndGrillOld, eastOld, valOld];

  let newImageArray = [groveNew, broomeNew, barAndGrillNew, eastNew, valNew];

  if (preventLoop === 0) {
    //image selector randomly selects images from old image array
    imageSelector = random(oldImageArray);
    //tint old makes the old image visible
    tintOld = 255;
    //tint new makes the new image transparent
    tintNew = 0;
    preventLoop++;
  }

  if (firstImageSelection === 0) {
    //Allows for First image button to select the first image
    imageSelector = oldImageArray[0];
    firstImageSelection++;
  }

  //Selects which image to draw from array
  if (imageSelector === oldImageArray[0]) {
    //First sets the new image to be drawn over with old image, including background
    tint(255, 255, 255, tintNew);
    image(newBack, 350, 350, 700, 700);
    image(newImageArray[0], pictureX, pictureY, 400, 500);
    //Draws old image over new image, so changing tint allows the images to be in the same spot at the same time, allowing for a smoother transition between the two
    tint(255, 255, 255, tintOld);
    image(oldBack, 350, 350, 700, 700);
    image(imageSelector, pictureX, pictureY, 400, 500);
  } else if (imageSelector === oldImageArray[1]) {
    tint(255, 255, 255, tintNew);
    image(newBack, 350, 350, 700, 700);
    image(newImageArray[1], pictureX, 350, 400, 500);
    tint(255, 255, 255, tintOld);
    image(oldBack, 350, 350, 700, 700);
    image(imageSelector, pictureX, pictureY, 400, 500);
  } else if (imageSelector === oldImageArray[2]) {
    tint(255, 255, 255, tintNew);
    image(newBack, 350, 350, 700, 700);
    image(newImageArray[2], pictureX, pictureY, 400, 500);
    tint(255, 255, 255, tintOld);
    image(oldBack, 350, 350, 700, 700);
    image(imageSelector, pictureX, pictureY, 400, 500);
  } else if (imageSelector === oldImageArray[3]) {
    tint(255, 255, 255, tintNew);
    image(newBack, 350, 350, 700, 700);
    image(newImageArray[3], pictureX, pictureY, 400, 500);
    tint(255, 255, 255, tintOld);
    image(oldBack, 350, 350, 700, 700);
    image(imageSelector, pictureX, pictureY, 400, 500);
  } else if (imageSelector === oldImageArray[4]) {
    tint(255, 255, 255, tintNew);
    image(newBack, 350, 350, 700, 700);
    image(newImageArray[4], pictureX, pictureY, 400, 500);
    tint(255, 255, 255, tintOld);
    image(oldBack, 350, 350, 700, 700);
    image(imageSelector, pictureX, pictureY, 400, 500);
  }
  //Determines whether the mouse is over the image. If it is, it tells you information about the image.
  if (mouseX > pictureX - 200 && mouseY > pictureY - 250) {
    if (mouseX < pictureX + 200 && mouseY < pictureY + 250) {
      if (imageSelector === oldImageArray[0] && tintOld > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("Grove Street, New York City, 1930s", 20, 670);
      } else if (imageSelector === oldImageArray[0] && tintNew > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("Grove Street, New York City, 2020s", 20, 670);
      } else if (imageSelector === oldImageArray[1] && tintOld > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("Broom Street, New York City, 1930s", 20, 670);
      } else if (imageSelector === oldImageArray[1] && tintNew > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("Broom Street, New York City, 2020s", 20, 670);
      } else if (imageSelector === oldImageArray[2] && tintOld > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("Spuyten Duyvil, New York City, 1930s", 20, 670);
      } else if (imageSelector === oldImageArray[2] && tintNew > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("Spuyten Duyvil, New York City, 2020s", 20, 670);
      } else if (imageSelector === oldImageArray[3] && tintOld > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("62 East, New York City, 1930s", 20, 670);
      } else if (imageSelector === oldImageArray[3] && tintNew > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("62 East, New York City, 2020s", 20, 670);
      } else if (imageSelector === oldImageArray[4] && tintOld > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("2510 Valentine Avenue, New York City, 1930s", 20, 670);
      } else if (imageSelector === oldImageArray[4] && tintNew > 150) {
        textSize(30);
        textStyle(BOLDITALIC);
        stroke("black");
        strokeWeight(4);
        fill("white");
        text("2510 Valentine Avenue, New York City, 2020s", 20, 670);
      }
    }
  }
  if (pictureX === 200) {
    textSize(30);
    textStyle(BOLDITALIC);
    stroke("black");
    strokeWeight(4);
    fill("white");
    text("You can't go back", 260, 350);
  }
}

//To set keypressed functions
function keyPressed() {
  //What Allows the user to change between the old image and new with arrow keys
  if (keyCode === 80) {
    tintNew = tintNew + 100;
    tintOld = tintOld - 100;
    redraw();
  }
  if (keyCode === 76) {
    tintOld = tintOld + 100;
    tintNew = tintNew - 100;
    redraw();
  }
  //What Allows the user to move the image around the screen
  if (keyCode === 65) {
    pictureX = pictureX - 25;
    redraw();
  }
  if (keyCode === 68) {
    pictureX = pictureX + 25;
    redraw();
  }
  if (keyCode === 87) {
    pictureY = pictureY - 25;
    redraw();
  }
  if (keyCode === 83) {
    pictureY = pictureY + 25;
    redraw();
  }
  //Prevents the User from lowering the tint beyond reason
  if (tintOld < 0) {
    tintOld = 0;
  }
  if (tintNew < 0) {
    tintNew = 0;
  }
  if (tintOld > 255) {
    tintOld = 255;
  }
  if (tintNew > 255) {
    tintNew = 255;
  }
  //Prevents the user from moving the image out of Frame
  if (pictureX < 200) {
    pictureX = 200;
  }
  if (pictureY < 250) {
    pictureY = 250;
  }
  if (pictureX > 500 && tintNew <= 200) {
    pictureX = 500;
  }
  if (pictureY > 450) {
    pictureY = 450;
  }
}

//Plays the music when button is pressed
function musicPlayer() {
  song.loop();
}

//What sets firstImageSelector to zero so the First Image Button works
function firstImageSelector() {
  firstImageSelection = 0;
  redraw();
}
