function setup(){
  createCanvas(600, 400);
}

function draw(){


  if(mouseIsPressed==true){
    stroke(mouseX-random(1,50), ((mouseX+mouseY)/2)-random(1,50), mouseY-random(1,50));
    strokeWeight(random(1,20)+random(1,20)-10);
    point(mouseX-5, mouseY-5);
    point(mouseX*-1+600, mouseY-5);
    point(mouseX*-1+600, mouseY*-1+400);
    point(mouseX-5, mouseY*-1+400);
  }


}
