
function setup(){
  createCanvas(800, 600);
  frameRate(5);
  strokeCap(SQUARE);
}

function draw(){
  stroke("#fff0");
  frameRate(random(10,150)/5);

let newNum=1;

if (random(1,5)<random(1,10)) {
  newNum = random(0,10);
}

if (random(0,10)<newNum){
for (var countRows = 0; countRows < 20; countRows++) {
  for (var countBlocks = 0; countBlocks < 10; countBlocks++) {
    if (countRows<random(0,13)) {
      fill(mouseX-random(1,countBlocks*10+countRows*10+10), ((mouseX+mouseY)/2)-random(1,countBlocks*10+countRows*10+10), mouseY-random(1,countBlocks*10+countRows*10+10));
      rect(countBlocks*100,countRows*50,100,25);

      fill(mouseX-random(1,countBlocks*10+countRows*10+20), ((mouseX+mouseY)/2)-random(1,countBlocks*10+countRows*10+20), mouseY-random(1,countBlocks*10+countRows*10+20));
      rect(countBlocks*100-50,countRows*50-25,100,25);
    }

  }
}
}

if (random(1,5)<random(1,10)) {
for (let i = 0; i < 50; i++) {
    let r = random(255);
    let a = random(255);
    let w = random(0,600)
    stroke(r, r, r, a);
    strokeWeight(random(1,3));
    line(0, w, width, w);
  }
}

if (random(1,5)<random(1,10)) {
for (let i = 0; i < 300; i++) {
    let r = random(255);
    let a = random(255);
    let h = random(0,800)
    let w = random(0,600)
    stroke(r, r, r, a);
    strokeWeight(random(1,4));
    line(h, w, h+random(10,40), w);
  }
}

if (random(1,5)<random(1,10)) {
for (let i = 0; i < 300; i++) {
    let r = random(255);
    let a = random(255);
    let h = random(0,800)
    let w = random(0,600)
    stroke(r, r, r, a);
    strokeWeight(random(1,4));
    line(h, w, h+random(10,40), w);
  }
}

for (let i = 0; i < 300; i++) {
    let r = random(255);
    let a = random(255);
    let h = random(0,800)
    let w = random(0,600)
    stroke(r, r, r, a);
    strokeWeight(random(1,4));
    line(h, w, h+random(10,40), w);
  }

if (random(1,5)<random(1,10)) {
  for (let i = 0; i < 200; i++) {
    let r = random(255);
    let a = random(255);
    let w = random(0,600);
    let h = random(0,800);
    let s = random(1,5);
    strokeWeight(s);
    line(h, w, h+s, w);
    }
  }

  if (random(1,5)<random(1,10)) {
    for (let i = 0; i < 200; i++) {
      let r = random(255);
      let a = random(255);
      let w = random(0,600);
      let h = random(0,800);
      let s = random(1,6);
      strokeWeight(s);
      line(h, w, h+s, w);
      }
    }

    for (let i = 0; i < 200; i++) {
        let r = random(255);
        let a = random(255);
        let w = random(0,600);
        let h = random(0,800);
        let s = random(1,7);
        strokeWeight(s);
        line(h, w, h+s, w);
      }

    strokeWeight(1);

}
