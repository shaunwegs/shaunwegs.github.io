let buttonYes, buttonNo, buttonA, buttonB, buttonC;
let buttonNoPressed = false;
let buttonYesPressed = false;
let buttonAPressed = false;
let buttonBPressed = false;
let buttonCPressed = false;
let boxMain, talkLeft;
let portNPC;
let portName;
let act = 0;
let scene = 0;
let shot = 0;
let line = 0
let img1, img2, img3
let port1;
let counting = 0;


let song;
let isLooping = false;
let click;

function setup() {
  song = createAudio('assets/sound/moonlight_loop.mp3');
  click = loadSound('assets/sound/on-click.wav');

  boxMain = createDiv('<br><br><br><p><font size = "+2">a MRUU production</font></p><br>click to start');
  boxMain.class("nes-container is-centered");
  boxMain.style('background-color', '#ffb');
  boxMain.size(700, 300);
  img1 = createDiv('<img src="assets/imgs/co-hill-s.gif" />');
  img2 = createDiv('<img src="assets/imgs/co-castle-s.gif" />');
  img3 = createDiv('<img src="assets/imgs/co-castlewall-s.gif" />');
  
  portNPC = createDiv('<p><font size="-2">PPP</font></p>');
  portNPC.class("nes-container is-rounded is-centered");
  portNPC.style('background-color', '#ffb');
  portNPC.size(158, 230);
  port1 = createDiv('<img src="assets/imgs/king.gif" />');
  portName = createP('<p><font size="-2">King Haphe</font></p>');
  

  talkLeft = createDiv('<p>PPP</p>');
  talkLeft.class("nes-balloon from-left");
  talkLeft.style('background-color', '#fff');
  talkLeft.size(470, 110);

  buttonYes = createButton("Yes")
  .mousePressed(()  => buttonYesPressed = true)
  .mouseReleased(() => buttonYesPressed = false);;
  buttonYes.class("nes-btn is-success");

  buttonNo = createButton("No")
  .mousePressed(()  => buttonNoPressed = true)
  .mouseReleased(() => buttonNoPressed = false);;
  buttonNo.class("nes-btn is-error");

  buttonA = createButton("credits")
  .mousePressed(()  => buttonAPressed = true)
  .mouseReleased(() => buttonAPressed = false);;
  buttonA.class("nes-btn");

  buttonB = createButton("Start")
  .mousePressed(()  => buttonBPressed = true)
  .mouseReleased(() => buttonBPressed = false);;
  buttonB.class("nes-btn");

  buttonC = createButton("go back")
  .mousePressed(()  => buttonCPressed = true)
  .mouseReleased(() => buttonCPressed = false);;
  buttonC.class("nes-btn");
}

function draw() {
  if (act == 0){
    if (scene == 0){
      counting++;
      boxMain.position(50, 50)
      portNPC.position(-800, 260)
      port1.position(-575, 260)
      portName.position(-575, 260)
      talkLeft.position(-850, 270)
      buttonYes.position(-538, 400)
      buttonNo.position(-628, 400)
      buttonA.position(606, 360)
      buttonB.position(-628, 400)
      buttonC.position(-628, 400)
      img1.position(-965, 285)
      img2.position(-635, 205)
      img3.position(-575, 260)

      boxMain.html('<br><br><br><p><font size = "+2">a MRUU production</font></p><br>click to start');
      boxMain.style('background-color', '#ffb');
 

      if (buttonAPressed == true) {
        buttonA.position(-348, 280)
        act = 8; // Start
        scene = 0;
        buttonAPressed = false;
        if(isLooping === false) {
          song.loop();
          isLooping = true;
          }
      }
      else if (mouseIsPressed == true && counting > 30) {
        buttonA.position(-348, 280)
        scene = 1;
      }
    }
    else if (scene == 1){
    boxMain.class("nes-container is-dark is-centered");
    boxMain.style('background-color', '#373737');
    boxMain.html('<br><br><br><p><font size = "+2">Last Stand</font></p>');
  
    img1.position(265, 280)
    img2.position(635, 205)
    img3.position(575, 260)
    buttonB.position(348, 260)
    if (buttonBPressed == true) {
      act = 1; // Start
      scene = 0;
      buttonB.position(-348, 280)
      buttonBPressed = false;
    }
  }
  }
  else if (act == 1){
    if (scene == 0){
      if (shot == 0){
        img1.position(247, 245)
        img2.position(635, 153)
        img3.position(575, 208)
        boxMain.class("nes-container is-dark with-title is-centered");
        boxMain.html('<p class="title">Last Stand</p>');
        boxMain.position(50, 50)
        portNPC.position(72, 272)
        portName.position(106, 478)
        port1.position(80, 280)
        talkLeft.position(250, 285)
        talkLeft.html('<p>It has been a long time since I called on you, Marshal.</p>');
        buttonA.position(558, 420)
        buttonA.html('Continue')
          if (buttonAPressed == true) {
            shot = 1; // continue
            buttonAPressed = false;
          }
      } else if (shot == 1){
        talkLeft.html('<p>The kingdom needs you. Will you listen to this old king?</p>');
        buttonA.position(-558, 420)
        buttonYes.position(558, 420)
        buttonNo.position(648, 420)
        if (buttonNoPressed == true) {
          buttonNoPressed = false;
          act = 9; // Game Over
        }
        if (buttonYesPressed == true) {
          buttonYesPressed = false;
          shot = 2; // Game Over
        }
      } else if (shot == 2){
        talkLeft.html('<p>Thank you, Marshal. The night is dark, and evil looms.</p>');
        buttonA.position(558, 420)
        buttonYes.position(-538, 420)
        buttonNo.position(-628, 420)
        if (buttonAPressed == true) {
          shot = 3; // continue
          buttonAPressed = false;
        }
      } else if (shot == 3){
        talkLeft.html('<p>We need you to contract a defense to protect our kingdom.</p>');
        buttonB.position(558, 420)
        buttonYes.position(-538, 420)
        buttonNo.position(-628, 420)
        buttonB.html('Continue')
        if (buttonBPressed == true) {
          shot = 4; // continue
          buttonBPressed = false;
        }
      } else if (shot == 4){
        talkLeft.html('<p>Will you help us? <br>Will you save our kingdom?</p>');
        buttonA.position(-558, 420)
        buttonB.position(-558, 420)
        buttonYes.position(558, 420)
        buttonNo.position(648, 420)
        if (buttonYesPressed == true) {
          buttonYesPressed = false;
          shot = 5; // continue
        }
        if (buttonNoPressed == true) {
          buttonNoPressed = false;
          act = 9; // Game Over
        }
      } else if (shot == 5){
      talkLeft.html('<p>Thank you, Marshal.</p>');
      buttonA.position(-558, 420)
      buttonB.position(-558, 420)
      buttonYes.position(558, 420)
      buttonNo.position(648, 420)
      if (buttonYesPressed == true) {
        shot = 5; // continue
      }
      if (buttonNoPressed == true) {
        act = 9; // Game Over
      }
    }
    }

  }
  else if (act == 8){
    counting = 0;
    boxMain.style('background-color', '#373737');
    boxMain.html('<p><font size = "+2" color="#ddd">Credits</font><br><br><font color="#ddd">UI from NES.css, by B.C.Rikko<br><br>Sound and music from Pixabay<br><br>Coded with the p5.js library<br><br>All art by me</p></font>');
    boxMain.position(50, 50)  
    img1.position(-847, 245)
    img2.position(-835, 153)
    img3.position(-875, 208)
    portNPC.position(-800, 260)
    port1.position(-880, 280)
    portName.position(-806, 478)
    talkLeft.position(-850, 270)
    buttonYes.position(-538, 400)
    buttonNo.position(-628, 400)
    buttonC.position(606, 360)
    if (buttonCPressed == true) {
      act = 0; // back
      scene = 0;
      shot = 0;
      buttonC.position(-348, 280)
      buttonAPressed = false;
      buttonCPressed = false;
    }
  }
  else if (act == 9){
    boxMain.class("nes-container is-dark is-centered");
    boxMain.html('<br><br><br><br><p><font size = "+2" color="#f00">Game Over</font></p>');
    boxMain.position(50, 50)  
    img1.position(-847, 245)
    img2.position(-835, 153)
    img3.position(-875, 208)
    portNPC.position(-800, 260)
    port1.position(-880, 280)
    portName.position(-806, 478)
    talkLeft.position(-850, 270)
    buttonYes.position(-538, 400)
    buttonNo.position(-628, 400)
  }

}

function mousePressed(){
  if(buttonA.clicked()) {
    playSound('mySound')
   if(isLooping === false) {
    song.loop();
    isLooping = true;
    }
  }
  else if(buttonB.clicked()) {
    playSound('mySound')
    if(isLooping === false) {
     song.loop();
     isLooping = true;
     }
   }

   else if(buttonYes.clicked()) {
    playSound('mySound')
    if(isLooping === false) {
     song.loop();
     isLooping = true;
     }
   }

   else if(buttonNo.clicked()) {
    playSound('mySound')
    if(isLooping === false) {
     song.loop();
     isLooping = true;
     }
   }
}

function playSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}