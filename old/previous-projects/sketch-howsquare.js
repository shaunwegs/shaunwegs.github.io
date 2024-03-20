
var square1;

function setup(){
  createCanvas(600, 400);

}

function draw(){
  background("#777");

  if (mouseX>=100 && mouseX<=300 && mouseY>=100 && mouseY<=300) {
    square1=0;
  }

  if (square1==0) {
    rect(75,75,50,50);
    rect(275,75,50,50);
    rect(75,275,50,50);
    rect(275,275,50,50);
  }else {
    rect(100,100,200,200);
  }

print(square1)



}
