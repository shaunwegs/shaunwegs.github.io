function setup(){
  createCanvas(600, 300);

  noStroke()
  fill("#f00");
  rect(0,0,100,100);
  fill("#0f0");
  rect(0,100,100,100);
  fill("#00f");
  rect(0,200,100,100);
}

function draw(){

  if(mouseIsPressed==true && mouseX>=100){
    strokeWeight(random(10,20));
    point(mouseX-5, mouseY-5);
  }else if (mouseIsPressed==true && mouseX<=100 && mouseY<=100){
    stroke("#f00");
  }else if (mouseIsPressed==true && mouseX<=100 && mouseY>=101 && mouseY<=200){
    stroke("#0f0");
  }else if (mouseIsPressed==true && mouseX<=100 && mouseY>=201){
    stroke("#00f");
  }
}
