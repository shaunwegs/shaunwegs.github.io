var graphic;

function setup(){
  createCanvas(1200, 1623);
  frameRate(5);
  strokeCap(SQUARE);
  bg = loadImage("ppg/bg.jpg");
  ppg = loadImage("ppg/ppg.png");
  fire1 = loadImage("ppg/fire01.png");
  fire2 = loadImage("ppg/fire02.png");
  fire3 = loadImage("ppg/fire03.png");
  fire4 = loadImage("ppg/fire04.png");
  currentfire = fire1;
  candle1 = loadImage("ppg/candle1.png");
  candle2 = loadImage("ppg/candle2.png");
  candle3 = loadImage("ppg/candle3.png");
  candle4 = loadImage("ppg/candle4.png");
  candle5 = loadImage("ppg/candle5.png");
  candle6 = loadImage("ppg/candle6.png");
  candle7 = loadImage("ppg/candle7.png");
  candle8 = loadImage("ppg/candle8.png");
  currentcandle = candle1;
  text1a = loadImage("ppg/text1.png");
  text1b = loadImage("ppg/text1-b.png");
}

function draw(){
  stroke("#fff0");
  frameRate(random(10,150)/5);

let newNum=1;

if (random(1,5)<random(1,10)) {
  newNum = random(0,10);
}



image(bg, 0, 0);
image(ppg, 115, 0);
fire = random(1,30)
if (fire < 2) {
  currentfire = fire1;
}else if (fire < 3) {
  currentfire = fire2;
}else if (fire < 4) {
  currentfire = fire3;
}else if (fire < 5) {
  currentfire = fire4;
}
tint(255, 240);
image(currentfire, 280, 33);
tint(255, 200);
candle = random(1,40)
if (candle < 2) {
  currentcandle = candle1;
}else if (candle < 3) {
  currentcandle = candle2;
}else if (candle < 4) {
  currentcandle = candle3;
}else if (candle < 5) {
  currentcandle = candle4;
}else if (candle < 6) {
  currentcandle = candle5;
}else if (candle < 7) {
  currentcandle = candle6;
}else if (candle < 8) {
  currentcandle = candle7;
}else if (candle < 9) {
  currentcandle = candle8;
}
image(currentcandle, 314, 482, 30, 60);
candle = random(1,40)
if (candle < 2) {
  currentcandle = candle1;
}else if (candle < 3) {
  currentcandle = candle2;
}else if (candle < 4) {
  currentcandle = candle3;
}else if (candle < 5) {
  currentcandle = candle4;
}else if (candle < 6) {
  currentcandle = candle5;
}else if (candle < 7) {
  currentcandle = candle6;
}else if (candle < 8) {
  currentcandle = candle7;
}else if (candle < 9) {
  currentcandle = candle8;
}
image(currentcandle, 471, 482, 30, 60);

for (var countRows = 0; countRows < 7; countRows++) {
  for (var countBlocks = 0; countBlocks < 19; countBlocks++) {
    candle = random(1,40)
    if (candle < 2) {
      currentcandle = candle1;
    }else if (candle < 3) {
      currentcandle = candle2;
    }else if (candle < 4) {
      currentcandle = candle3;
    }else if (candle < 5) {
      currentcandle = candle4;
    }else if (candle < 6) {
      currentcandle = candle5;
    }else if (candle < 7) {
      currentcandle = candle6;
    }else if (candle < 8) {
      currentcandle = candle7;
    }else if (candle < 9) {
      currentcandle = candle8;
    }
      image(currentcandle, countBlocks*44+10, countRows*50+540, 30, 60);


  }
}
tint(255, 255);
image(text1a, 853, 183);
image(text1b, 30, 870);


}
