var graphic;

function setup(){
  createCanvas(800, 600);
  frameRate(5);
  strokeCap(SQUARE);
  graphic = loadImage("images/megaman.gif")

}

function draw(){
  stroke("#fff0");
  frameRate(random(10,150)/5);

let newNum=1;

if (random(1,5)<random(1,10)) {
  newNum = random(0,10);
}

if (random(0,10)<newNum){
for (var countRows = 0; countRows < 9; countRows++) {
  for (var countBlocks = 0; countBlocks < 6; countBlocks++) {
    if (countRows<random(0,13)) {
      fill(mouseX-random(1,countBlocks*10+countRows*10+10), ((mouseX+mouseY)/2)-random(1,countBlocks*10+countRows*10+10), mouseY-random(1,countBlocks*10+countRows*10+10));
      rect(countBlocks*100+15,countRows*50+50,100,25);

      fill(mouseX-random(1,countBlocks*10+countRows*10+20), ((mouseX+mouseY)/2)-random(1,countBlocks*10+countRows*10+20), mouseY-random(1,countBlocks*10+countRows*10+20));
      rect(countBlocks*100+65,countRows*50+75,100,25);
    }

  }
}
}

image(graphic, 0, 0);


}
