function setup(){
  createCanvas(600, 400);
}

function draw(){
background("#777")
noStroke();

if(mouseX<=300 && mouseY<=200) {
  fill("#f00f");
  rect(0,0,300,400);
}

if(mouseX>=300 && mouseY>=200) {
  fill("#00ff");
  rect(300,0,300,400);
}


}
