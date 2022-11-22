"use strict";

/**************************************************
Project 1 : Simulation
Junior Vigneault

My project is a simulation that leads the user through uncharted programming territories...view at your own risk
**************************************************/

// declaring my variables for the backgrounds
let fadeIN = 255;
let timer1 = false;
let timer2 = false;
let timer3 = false;
let timer4 = false;
let timer5 = false;
let timer6 = false;
let timer7 = false;
let timer8 = false;
let timer9 = false;
let timer10 = false;
let timer11 = false;
let timer12 = false;
let timer13 = false;
let timer14 = false;
let timer15 = false;
let timer16 = false;
let timer17 = false;
let timer18 = false;
let timer19 = false;
let timer20 = false;
let timer21 = false;

let input;



let textColor = 255;
let flower1 = {
  x: 1,
  y: 1,
  x2: 1,
  y2: 1,
  angle: 10,
  speed: 7,
  weight: .5,
  fill: {
    r: 55,
    g: 55,
    b: 55,
  }
}
let flower2 = {
  x: 1,
  y: 1,
  x2: 1,
  y2: 1,
  angle: 10,
  speed: 7,
  weight: .5,
  fill: {
    r: 255,
    g: 55,
    b: 55,
  }
}
let flower3 = {
  x: 1,
  y: 1,
  x2: 1,
  y2: 1,
  angle: 10,
  speed: 4,
  weight: .2,
  fill: {
    r: 255,
    g: 255,
    b: 255,
  }
}
let flower4 = {
  x: 1,
  y: 1,
  x2: 1,
  y2: 1,
  angle: 1,
  speed: .09,
  weight: .2,
  fill: {
    r: 0,
    g: 0,
    b: 255,
  }
}
let flower5 = {
  x: 1,
  y: 1,
  x2: 1,
  y2: 1,
  angle: 29,
  speed: .02,
  weight: .2,
  fill: {
    r: 80,
    g: 0,
    b: 20,
  }
}
let flower6 = {
  x: 1,
  y: 1,
  x2: 1,
  y2: 1,
  angle: 29,
  speed: .02,
  weight: .2,
  fill: {
    r: 0,
    g: 0,
    b: 0,
  }
}

// declaring variables for images

let cursorIMG;

let okImage = {
  x: 300,
  y: 500,
  sizeX: 90,
  sizeY: 40,
  image: undefined
}

let childImage = {
  x: undefined,
  y: undefined,
  sizeX: undefined,
  sizeY: undefined,
  image: undefined,
  speed: 5,
  vx: 0,
  vy: 0
}

let earthImage = {
  x: undefined,
  y: undefined,
  sizeX: undefined,
  sizeY: undefined,
  image: undefined
}

// declaring some variables I will use a couple times during the program

let size = {
  growing: 50,
}
let fade = {
  fadeIn: 0,
  fadeIn2: 1,
}

let circleBg = {
  x: 100,
  y: 100,
  size: 100,
  speed: 100,
  vx: 0,
  vy: 0
}

let typing = ``;

// creating variables for my sounds

let everythingSFX;
let opusSFX;
let opusfinSFX;


function preload() {
  everythingSFX = loadSound('assets/sounds/everything.mp3');
  opusSFX = loadSound('assets/sounds/opus.mp3');
  opusfinSFX = loadSound('assets/sounds/opusfin.mp3')
  okImage.image = loadImage('assets/images/ok.png');
  childImage.image = loadImage('assets/images/child.png')
  earthImage.image = loadImage('assets/images/earth.png')

  cursorIMG = loadImage('assets/images/cursor.png');
}

// my first state... WOW!
// firstState
let state = 'start';


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // lost child original position in state title32

  childImage.x = windowWidth / 4;
  childImage.y = windowHeight / 7;
  background(0);
  noCursor();
  input = document.querySelector('input');
}



function draw() {

  titleSwitch();

  image(cursorIMG, mouseX, mouseY);
}

// My beautiful functions


// This function has all my state switches everytime the title changes

function titleSwitch() {
  if (state === 'start') {
    start();
  } else if (state === 'title') {
    title();
  } else if (state === 'title2') {
    title2();
  } else if (state === 'title3') {
    title3();
  } else if (state === 'title4') {
    title4();
  } else if (state === 'title5') {
    title5();
  } else if (state === 'title6') {
    title6();
  } else if (state === 'title7') {
    title7();
  } else if (state === 'title8') {
    title8();
  } else if (state === 'title9') {
    title9();
  } else if (state === 'title10') {
    title10();
  } else if (state === 'title11') {
    title11();
  } else if (state === 'title12') {
    title12();
  } else if (state === 'title13') {
    title13();
  } else if (state === 'title14') {
    title14();
  } else if (state === 'title15') {
    title15();
  } else if (state === 'title16') {
    title16();
  } else if (state === 'title17') {
    title17();
  } else if (state === 'title18') {
    title18();
  } else if (state === 'title19') {
    title19();
  } else if (state === 'title20') {
    title20();
  } else if (state === 'title21') {
    title21();
  } else if (state === 'title22') {
    title22();
  } else if (state === 'title23') {
    title23();
  } else if (state === 'title24') {
    title24();
  } else if (state === 'title25') {
    title25();
  } else if (state === 'title26') {
    title26();
  } else if (state === 'title27') {
    title27();
  } else if (state === 'title28') {
    title28();
  } else if (state === 'title29') {
    title29();
  } else if (state === 'title30') {
    title30();
  } else if (state === 'title31') {
    title31();
  } else if (state === 'title32') {
    title32();
  } else if (state === 'title33') {
    title33();
  } else if (state === 'title34') {
    title34();
  } else if (state === 'title35') {
    title35();
  } else if (state === 'title36') {
    title36();
  } else if (state === 'title37') {
    title37();
  } else if (state === 'title38') {
    title38();
  } else if (state === 'title39') {
    title39();
  } else if (state === 'title40') {
    title40();
  } else if (state === 'title41') {
    title41();
  } else if (state === 'title42') {
    title42();
  } else if (state === 'title43') {
    title43();
  } else if (state === 'title44') {
    title44();
  } else if (state === 'title45') {
    title45();
  } else if (state === 'title46') {
    title46();
  } else if (state === 'title47') {
    title47();
  } else if (state === 'title48') {
    title48();
  } else if (state === 'title49') {
    title49();
  } else if (state === 'title50') {
    title50();
  } else if (state === 'title51') {
    title51();
  } else if (state === 'title52') {
    title52();
  } else if (state === 'title53') {
    title53();
  } else if (state === 'title54') {
    title54();
  } else if (state === 'title55') {
    title55();
  } else if (state === 'title56') {
    title56();
  } else if (state === 'title57') {
    title57();
  } else if (state === 'title58') {
    title58();
  }
}

// All my different titles with different backgrounds and games

function start() {
  clickInstruction();
}

function title() {
  background(0);

  flowers(flower1)
  push();
  noStroke();
  if (fadeIN > 0) {
    fadeIN = fadeIN - 1.4;
    setTimeout(() => {
      timer1 = true;
    }, 5000)
  }
  fill(0, 0, 0, fadeIN);
  rect(0, 0, width, height);
  pop();
  if (fadeIN <= 1) {
    push();
    fadeIn();
    fill(textColor);
    textAlign(CENTER, CENTER);
    textSize(60);
    textStyle(BOLD);
    text("Hello Moment Factory", width / 2, 300);
    textAlign(CENTER, CENTER);
    if (timer1) {
      text(`Welcome to the Underworld`, width / 2, 650)
    };
    setTimeout(() => {
      timer7 = true;
    }, 3000)
    if(timer7){
      textSize(20);
    text(`(Click to continue)`, width / 2, 800)
}
    pop();

  }
}

function title2() {
  background(0);
  flowers(flower1)
  push();
  fadeOut();
  fill(textColor);
  textAlign(CENTER);
  textSize(40);
  textStyle(BOLD);
  text(`My name is Junior Vigneault...`, windowWidth / 2, 300);
  setTimeout(() => {
    timer2 = true;
  }, 3000)
  if (timer2) {
    text(`...and this is my application for the job of Interaction Designer.`, width / 2, 650)
  };
  pop();
}

function title3() {
  background(0);
  flowers(flower1)
  push();
  fadeIn();
  // let size = map(mouseX, 0, height, 10, 40);
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);
  text(`This message has been sent from the future...`, windowWidth / 2, 300);
  setTimeout(() => {
    timer3 = true;
  }, 2000)
  if (timer3) {
    text(`...and carries a crucial secret prophecy.`, width / 2, 650);
  }
  pop();
}

function title4() {
  background(0);
  flowers(flower1)
  push();
  fadeIn();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`To ignore this prophecy...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title5() {
  background(0);
  flowers(flower1);
  push();
  fadeOut();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`...would cause the wrath of the interactive gods to unravel.`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title6() {
  background(0);
  flowers(flower1);
  push();
  fadeOut();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`I am contacting you from my UX laboratory...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title7() {
  background(0);
  flowers(flower1);
  push();
  fadeIn();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`...where a legion of deadly cyborg
    assassins are about to blow open the door...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title8() {
  background(0);
  flowers(flower1);
  push();
  fadeOut();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(70);
  textStyle(BOLD);
  text(`This is my last chance to warn you
    about what is yet to come...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title9() {
  background(0);
  flowers(flower1);
  push();
  fadeIn();
  fade.fadeIn = constrain(fade.fadeIn, 0, 255);
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(90);
  textStyle(BOLD);
  text(`The future needs you...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title10() {
  background(0);
  flowers(flower1);
  push();
  fadeOut();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Since the beginning of my life,
  I have been telling stories...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title11() {
  background(0);
  flowers(flower1);
  push();
  fadeIn();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`...using video, sound and code.`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title12() {
  background(0);
  flowers(flower1);
  push();
  fadeOut();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Creating everything with nothing...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title13() {
  background(0);
  flowers(flower1);
  push();
  fadeIn();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`...creating nothing with everything.`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title14() {
  background(0);
  flowers(flower1);
  push();
  fadeOut();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Taking people on a journey they never expected.`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title15() {
  background(0);
  flowers(flower1);
  push();
  fadeIn();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`I understand rhythm.`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title16() {
  background(0);
  flowers(flower1);
  push();
  fadeOut();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(165);
  textStyle(BOLD);
  text(`Style`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title17() {
  background(0);
  flowers(flower1);
  push();
  fadeIn();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(185);
  textStyle(BOLD);
  text(`Storytelling`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title18() {
  background(0);
  flowers(flower2);
  push();
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(200);
  textStyle(BOLD);
  text(`EMOTIONS`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title19() {
  background(0);
  flowers(flower1)
  push();
  fadeOut();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`...and more...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title20() {
  background(0);
  flowers(flower1)
  push();
  fadeOut();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`The cyborgs are approaching, I must
    quickly comunicate the prophecy...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title21() {
  background(0);
  flowers(flower4)
  push();
  let color = random(0, 255);
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Are you ready?`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title22() {
  background(0);
  flowers(flower5)
  push();
  fadeOut();
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(80);
  textStyle(BOLD);
  text(`You must before promise...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title23() {
  background(0);
  flowers(flower6)
  push();
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`PROMISE TO NEVER TELL`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title24() {
  background(0);
  push();
  fadeOut();
  fill(fade.fadeIn);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`...if you do promise...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title25() {
  background(0);
  input.style.display = "block"
  push();
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(40);
  textStyle(BOLD);
  text(`Type "I PROMISE" in the input down below`, windowWidth / 2, 300);
  pop();
  input = document.querySelector('input');
  let answer = 'I PROMISE';
  let rightAnswer = false;
  if (input.value.toUpperCase() === answer) {
      input.style.display = "none"
    setTimeout(() => {
      timer4 = true;
    }, 1000)
  }
  if (timer4) {
    state = 'title26'
    fade.fadeIn = 250;
  }
}

// GAME 1 - YOU HAVE TO TYPE I PROMISE AND CLICK OK

function title26() {
  push();
  background(0);
  fadeIn();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Good...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title27() {
  push();
  background(0);
  fadeOut();
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Very good...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title28() {
  push();
  background(0);
  starrySky();
  fadeIn();
  fill(textColor);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  setTimeout(() => {
    timer5 = true;
  }, 1000);
  if (timer5) {
    text(`You are ready to experience the prophecy...`, windowWidth / 2, windowHeight / 2);
  }
  pop();
}


function title34() {
  push();
  background(0);
  starrySky();
  fadeIn();
  fill(fade.fadeIn);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Finally ready...`, windowWidth / 2, windowHeight / 2);
  pop();

}

function title35() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(98, 100);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`The time has come`, windowWidth / 2, windowHeight / 2);
  pop();

}

function title36() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(78, 80);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`For me to tell you the prophecy...`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title37() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(78, 80);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`Open of your eyes.`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title38() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(78, 80);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`And take everything in`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title39() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(70, 80);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`THE TIME IS`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title40() {
  push();
  background(0);
  noStroke();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`NOW`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title41() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(300, 302);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`ARE`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title42() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(350, 352);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`YOU`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title43() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`READY?`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title44() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`TO`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title45() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`BE`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title46() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`BORN`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title47() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`AGAIN`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title48() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`5`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title49() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`4`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title50() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`3`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title51() {
  push();
  background(0);
  noStroke();
  starrySky();
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`2`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title52() {
  push();
  background(0);
  noStroke();
  flowers(flower2);
  let size = random(400, 402);
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(size);
  textStyle(BOLD);
  text(`1`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title53() {
  push();
  background(0);
  noStroke();
  fill(250);
  textAlign(CENTER, CENTER);
  textSize(200);
  textStyle(BOLD);
  text(`WAIT`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title54() {
  push();
  background(0);
  noStroke();
  fill(250);
  textAlign(CENTER, CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`INHALE`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title55() {
  push();
  background(0);
  noStroke();
  fill(250);
  textAlign(CENTER, CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`EXHALE`, windowWidth / 2, windowHeight / 2);
  pop();
}

function title56() {
  background(0);
  grandeFinale();
}

function title57() {
  push();
  background(0);
  noStroke();
  let color = random(0, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`END OF SIGNAL`, windowWidth / 2, windowHeight / 2);
  pop();
}

// letting mouse pressed change almost all my title states

function mousePressed() {
  if (state === 'start') {
    state = 'title';
    fade.fadeIn = 0;
    // song starts
    opusSFX.play();
  } else if (state === 'title' && timer1 === true) {
    state = 'title2';
    fade.fadeIn = 250;
  } else if (state === 'title2' && timer2 === true) {
    state = 'title3';
    // voice effect
    // everythingSFX.play();
    fade.fadeIn = 0;
  } else if (state === 'title3' && timer3 === true) {
    state = 'title4';
    fade.fadeIn = 250;
  } else if (state === 'title4') {
    state = 'title5';
    fade.fadeIn = 0;
  } else if (state === 'title5') {
    state = 'title6';
    fade.fadeIn = 250;
  } else if (state === 'title6') {
    state = 'title7';
    fade.fadeIn = 0;
  } else if (state === 'title7') {
    state = 'title8';
    fade.fadeIn = 250;
  } else if (state === 'title8') {
    state = 'title9';
    fade.fadeIn = 0;
  } else if (state === 'title9') {
    state = 'title10';
    fade.fadeIn = 250;
  } else if (state === 'title10') {
    state = 'title11';
    fade.fadeIn = 0;
  } else if (state === 'title11') {
    state = 'title12';
    fade.fadeIn = 250;
  } else if (state === 'title12') {
    state = 'title13';
    fade.fadeIn = 0;
  } else if (state === 'title13') {
    state = 'title14';
    fade.fadeIn = 250;
  } else if (state === 'title14') {
    state = 'title15';
    fade.fadeIn = 0;
  } else if (state === 'title15') {
    state = 'title16';
    fade.fadeIn = 250;
  } else if (state === 'title16') {
    state = 'title17';
    fade.fadeIn = 0;
  } else if (state === 'title17') {
    state = 'title18';
    fade.fadeIn = 250;
  } else if (state === 'title18') {
    state = 'title19';
    fade.fadeIn = 250;
  } else if (state === 'title19') {
    state = 'title20';
    fade.fadeIn = 0;
  } else if (state === 'title20') {
    state = 'title21';
    fade.fadeIn = 250;
  } else if (state === 'title21') {
    state = 'title22';

  } else if (state === 'title22') {
    state = 'title23';

  } else if (state === 'title23') {
    state = 'title24';
    fade.fadeIn = 250;
  } else if (state === 'title24') {
    state = 'title25';
  } else if (state === 'title26') {
    state = 'title27';
    fade.fadeIn = 0;
  } else if (state === 'title27') {
    state = 'title34';
    fade.fadeIn = 250;
  } else if (state === 'title28' && timer5 === true) {
    state = 'title29';
  } else if (state === 'title29') {
    state = 'title30';
  } else if (state === 'title30') {
    state = 'title31';
  } else if (state === 'title32') {
    state = 'title33';
  } else if (state === 'title33') {
    state = 'title34';
  } else if (state === 'title34') {
    state = 'title35';
  } else if (state === 'title35') {
    state = 'title36';
  } else if (state === 'title36') {
    state = 'title37';
  } else if (state === 'title37') {
    state = 'title38';
  } else if (state === 'title38') {
    state = 'title39';
  } else if (state === 'title39') {
    state = 'title40';
  } else if (state === 'title40') {
    state = 'title41';
  } else if (state === 'title41') {
    state = 'title42';
  } else if (state === 'title42') {
    state = 'title43';
  } else if (state === 'title43') {
    state = 'title44';
  } else if (state === 'title44') {
    state = 'title45';
  } else if (state === 'title45') {
    state = 'title46';
  } else if (state === 'title46') {
    state = 'title47';
  } else if (state === 'title47') {
    state = 'title48';
  } else if (state === 'title48') {
    state = 'title49';
  } else if (state === 'title49') {
    state = 'title50';
  } else if (state === 'title50') {
    state = 'title51';
  } else if (state === 'title51') {
    state = 'title52';
  } else if (state === 'title52') {
    state = 'title53';
    opusSFX.stop();
  } else if (state === 'title53') {
    state = 'title54';
    // song stops
  } else if (state === 'title54') {
    state = 'title55';
  } else if (state === 'title55') {
    state = 'title56';
    opusfinSFX.play();

  } else if (state === 'title56') {
    state = 'title57';
    // final song starts!
  }
}


// typing for the game 1 in title 26
// function keyTyped() {
//   typing = typing + key;
// }


// function of the lost child in game 2 in title 32
function lostChild() {

  // positioning the earth in game 2 in title 32
  childImage.x = constrain(childImage.x, 0, width);
  imageMode(CENTER);
  earthImage.x = windowWidth / 2
  earthImage.y = windowHeight / 2 + 200;

  // controlling child with arrow keys and making it drift (game2 title 32)
  if (keyIsDown(LEFT_ARROW)) {
    childImage.vx = -childImage.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    childImage.vx = childImage.speed;
  } else {
    childImage.vx = 4;
  }
  if (keyIsDown(UP_ARROW)) {
    childImage.vy = -childImage.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    childImage.vy = childImage.speed;
  } else {
    childImage.vy = 0;
  }

  childImage.x = childImage.x + childImage.vx;
  childImage.y = childImage.y + childImage.vy;

  // making the child and earth appear (game2 title 32)

  image(earthImage.image, earthImage.x, earthImage.y, earthImage.size, earthImage.size);
  image(childImage.image, childImage.x, childImage.y, childImage.size, childImage.size);

  // changing the state if the child is back in the chain of love! (game2 title 32)
  let d = dist(childImage.x, childImage.y, earthImage.x, earthImage.y);
  if (d < 120) {
    state = 'title32'
  }

  // making stars in the sky
  starrySky();
}

// first state to make the music play

function clickInstruction() {
  push();
  let color = random(200, 250);
  noStroke();
  if (frameCount % 20 === 0) {
    color = random(0, 20);
  }
  fill(color);
  starrySky();
  textStyle(BOLD);
  noStroke();
  textSize(50);
  textAlign(CENTER, CENTER);
  text('CLICK', 0, 450, width);
  textSize(20);
  fill(200);
  text('turn sound on', 0, 300, width);
  text('&', 0, 370, width);
  pop();
}

// making stars in the sky like (like white noise or grain)
function starrySky() {

  for (let i = 0; i < 10; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    strokeWeight(1);
    point(x, y);
  }
}

// confetti with text magic is real as finale with song called in mouse pressed

function grandeFinale() {


  for (let i = 0; i < 10; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);

    noStroke();
    fill(r, g, b);
    rectMode(CENTER)
    rect(x, y, 10, 50);

    push();
    noStroke();
    fill(r, g, b);
    textAlign(CENTER, CENTER);
    textSize(180);
    textStyle(BOLD);
    text(`YOU MUST`, windowWidth / 2, 400);
    text(`HIRE ME`, windowWidth / 2, 600);
    pop();
  }
}

// from black to white (used in many titles)
function fadeIn() {
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fade.fadeIn = constrain(fade.fadeIn, 0, 250);
}

// from white to black (used in many titles)
function fadeOut() {
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fade.fadeIn = constrain(fade.fadeIn, 0, 250);
}

// This function is for the big laser flower background

function flowers(flowers) {

  for (let i = 0; i < 500; i++) {
    push();
    flowers.angle = flowers.angle + flowers.speed
    translate(windowWidth / 2, windowHeight / 2);
    rotate(flowers.angle);
    stroke(flowers.fill.r, flowers.fill.g, flowers.fill.b);
    strokeWeight(flowers.weight);
    line(flowers.x, flowers.y, flowers.x2, flowers.y2);
    translate(flowers.x, flowers.y);
    rotate(flowers.angle);
    flowers.x = flowers.x + random(0, width);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
