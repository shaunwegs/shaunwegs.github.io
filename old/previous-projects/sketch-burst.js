
var square1;
var square2;
var square3;

function setup(){
  createCanvas(600, 400);
  noStroke()

}

function draw(){
  background("#777");

  if (mouseX>=100 && mouseX<=200 && mouseY>=100 && mouseY<=200) {
    square1=0;
  }

  if (mouseX>=300 && mouseX<=400 && mouseY>=175 && mouseY<=275) {
    square2=0;
  }

  if (mouseX>=375 && mouseX<=475 && mouseY>=25 && mouseY<=125) {
    square3=0;
  }

  if (square1==0) {
    fill("#d00");
    rect(75,75,50,50);
    rect(175,75,50,50);
    rect(75,175,50,50);
    rect(175,175,50,50);
  }else {
    fill("#d00");
    rect(100,100,100,100);
  }

    if (square2==0) {
      fill("#0d0");
      rect(275,150,50,50);
      rect(375,150,50,50);
      rect(275,250,50,50);
      rect(375,250,50,50);
    }else {
      fill("#0d0");
      rect(300,175,100,100);
    }

    if (square3==0) {
      fill("#00d");
      rect(350,0,50,50);
      rect(450,0,50,50);
      rect(350,100,50,50);
      rect(450,100,50,50);
    }else {
      fill("#00d");
      rect(375,25,100,100);
    }


}
