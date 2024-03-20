var graphic;
var gifgif;
var tic;

function setup(){
  createCanvas(1210, 811);
  frameRate(5);
  strokeCap(SQUARE);
  bg = loadImage("ppg2/bg.jpg");
  fire1 = loadImage("ppg2/fire01.png");
  fire2 = loadImage("ppg2/fire02.png");
  fire3 = loadImage("ppg2/fire03.png");
  fire4 = loadImage("ppg2/fire04.png");
  currentfire = fire1;
  candle1 = loadImage("ppg2/candle1.png");
  candle2 = loadImage("ppg2/candle2.png");
  candle3 = loadImage("ppg2/candle3.png");
  candle4 = loadImage("ppg2/candle4.png");
  candle5 = loadImage("ppg2/candle5.png");
  candle6 = loadImage("ppg2/candle6.png");
  candle7 = loadImage("ppg2/candle7.png");
  candle8 = loadImage("ppg2/candle8.png");
  currentcandle = candle1;
  hands = loadImage("ppg2/clapping1.png");
  hands2 = loadImage("ppg2/clapping2.png");
  hands3 = loadImage("ppg2/clapping3.png");
  hands4 = loadImage("ppg2/clapping4.png");
  hands5 = loadImage("ppg2/clapping5.png");
  hands6 = loadImage("ppg2/clapping6.png");
  hands7 = loadImage("ppg2/clapping7.png");
  hands8 = loadImage("ppg2/clapping8.png");
  pol  = loadImage("ppg2/pol2.png");
  tic = 0;
  tock = 0;
  text1a = loadImage("ppg2/text1.png");
  text1b = loadImage("ppg2/text1-b.png");
  text2a = loadImage("ppg2/text2.png");
  text2b = loadImage("ppg2/text2-b.png");
  text3a = loadImage("ppg2/text3.png");
  text3b = loadImage("ppg2/text3-b.png");
}

function draw(){
  stroke("#fff0");
  frameRate(random(10,150)/5);

let newNum=1;

if (random(1,5)<random(1,10)) {
  newNum = random(0,10);
}



image(bg, 610, 0);
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
image(currentfire, 750, 16);
tint(255, 150);
blendMode(HARD_LIGHT);
candle = random(1,100)
if (candle > 9) {
  currentcandle = currentcandle;
}else if (candle < 2) {
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
image(currentcandle, 765, 243);
image(currentcandle, 843, 243);

for (var countRows = 0; countRows < 7; countRows++) {
  for (var countBlocks = 0; countBlocks < 19; countBlocks++) {

      image(currentcandle, countBlocks*22+610, countRows*25+270);
  }
}
tint(255, 255);
blendMode(BLEND);
image(pol, 953, 339);


for (var count = 0; count < 4; count++) {
  if (tic>39){
    tic = 0;
  }
  if (tic<3){
    image(hands, count*120+650, 675);
  }else if (tic<9) {
    image(hands2, count*120+650, 675);
  }else if (tic<12) {
    image(hands3, count*120+650, 675);
  }else if (tic<19) {
    image(hands4, count*120+650, 675);
  }else if (tic<23) {
    image(hands5, count*120+650, 675);
  }else if (tic<28) {
    image(hands6, count*120+650, 675);
  }else if (tic<31) {
    image(hands7, count*120+650, 675);
  }else{
    image(hands8, count*120+650, 675);
  }
}
tic = tic+1

if (tock<150){
image(text1a, 1035, 90-tock/5);
image(text1b, 630, 430-tock/5);
}
else if (tock<300) {
  image(text3a, 1035, 120-tock/5);
  image(text3b, 630, 435-tock/5);
}
else {
  image(text2a, 1035, 140-tock/5);
  image(text2b, 630, 440-tock/5);
}

tock = tock +1

if (tock>450){
  tock = 0;
}

}
