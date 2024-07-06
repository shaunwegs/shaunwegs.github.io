//user interface stuff
let commandP
let commandP2
let commandP3
let commandStats = ""
let commandStats2 = ""
let commandStats3 = ""
let commandExe = 0
let commandRun = 0
let commandScore = 0
let commandString = ""
let commandLog = "<font color='#eee'><b><u>&nbsp;...&nbsp;</u></b></font>"
let totalSlides = 5

let userSize = 13
let userLine = 1.6
let userColor = 'darkslategrey'
let userBgColor = 'ghostwhite'
let userFont = "Arial, Helvetica, sans-serif"
let toggled = -3

let img_right;

let loadOnce = 0;
let fontArray = ["Arial, Helvetica, sans-serif", "Verdana, sans-serif", "Tahoma, sans-serif", "Times, serif", "Garamond, serif", "Georgia, serif", "Courier, monospace"]
let fontCount = 0

function setup() {

  
  createCanvas(300, 400);
  background("#333");
  
  //Make the Grid
  rectMode(CENTER)
  
  stroke(70, 70, 150,100)
  strokeWeight(2)
  fill(0,0,0,0)
  rect(150,200,254,354);
  
  //page text for user
  direcInput = createInput("Your answer here");
  direcInput.id("user_input");
  direcButton = createButton("next");
  direcButton.mousePressed(botGo);
  commandP = createP(commandStats)
  commandP2 = createP(commandStats2)
  commandP3 = createP(commandStats3)
  commandStats="<span style='background-color:#eee;'>&nbsp;&nbsp;commandStats Element: <b>"+ String(commandExe) + "&nbsp;&nbsp;</b> <br>&nbsp;&nbsp;Score: <b>" + String(commandScore) + "&nbsp;&nbsp;</b></span>"
  commandStats2="<span style='background-color:#eee;'>&nbsp;&nbsp;commandStats Element: <b>"+ String(commandExe) + "&nbsp;&nbsp;</b> <br>&nbsp;&nbsp;Score: <b>" + String(commandScore) + "&nbsp;&nbsp;</b></span>"
  commandStats3="<span style='background-color:#eee;'>&nbsp;&nbsp;commandStats Element: <b>"+ String(commandExe) + "&nbsp;&nbsp;</b> <br>&nbsp;&nbsp;Score: <b>" + String(commandScore) + "&nbsp;&nbsp;</b></span>"
  logDiv = createDiv("placeholder text");


  usaName = createP("<BR><span style='background-color:#eee; color:RebeccaPurple'>&nbsp;<b>Usability&nbsp;<br>&nbsp;Features&nbsp;&nbsp;</b>")
  txtSizeLabel = createP("<BR><span style='color:#eee;'>&nbsp;<b>Font Size:</b>")
  upButton = createButton("BIGGER");
  downButton = createButton("smaller");
  upButton.mousePressed(textUp);
  downButton.mousePressed(textDown);
  lineSizeLabel = createP("<BR><span style='color:#eee;'>&nbsp;<b>Line Space:</b>")
  upLineButton = createButton("BIGGER");
  downLineButton = createButton("smaller");
  upLineButton.mousePressed(textLineUp);
  downLineButton.mousePressed(textLineDown);
  
  changeFontButton = createButton("Change Font");
  changeFontButton.mousePressed(changeFont);
  
  voiceOverButton = createButton("Toggle Oration");
  maskButton = createButton("Toggle Mask");
  
  usaName.mousePressed(toggleUsa);
  usaName.position(1340, 80)


  txtColorLabel = createP("<BR><span style='color:#eee;'>&nbsp;<b>Font Color:</b>")
  myPicker = createColorPicker('DarkSlateGrey');
  bgColorLabel = createP("<BR><span style='color:#eee;'>&nbsp;<b>BG Color:</b>")
  myPicker2 = createColorPicker('#eee');
  
  direcButton.position(228, 490)
  direcInput.position(32, 490)

  createP("&nbsp;")
  
  //graphics
  imgRight = createDiv('<img src="assets/right-graphic.png" width="300" />');
  imgMe = createDiv('<img src="assets/avatar-me.png" width="200" />');
  
}

let questions = ["> Will you have homework in \n this class?", "> Is the survey for a grade?", "> True or False: We'll only practice \n typing on Mondays.", "> More than anything else, \n I expect you to ____.", "> True or False: Computer Science \n includes programming.", "> Students interested in engineering \n should consider studying _______."]
let answers = ["probably no", "yes", "false", "try", "true", "computer science"]



function draw() {
  imgRight.position(1175,170);
  imgMe.position(95,575);
  changeFontButton.position(1071, 98 * toggled)
  maskButton.position(1218, 98 * toggled)
  voiceOverButton.position(1218, 132 * toggled)  
  
  upButton.position(1110, 34 * toggled)
  downButton.position(1050, 34 * toggled)
  lineSizeLabel.position(925, 25 * toggled)
  upLineButton.position(1110, 59 * toggled)
  downLineButton.position(1050, 59 * toggled)
  txtColorLabel.position(1210, -100 + 100 * toggled)
  myPicker.position(1340, 30 * toggled);
  bgColorLabel.position(1210, 28 * toggled)
  myPicker2.position(1340, 60 * toggled); 
  txtSizeLabel.position(935, -100 + 100 * toggled)

  
  //set values for text elements
  commandP.html(commandStats)
  commandP2.html(commandStats2)
  commandP3.html(commandStats3)
  
  logDiv.position(330, 160)
  logDiv.html(commandLog)
  logDiv.style('background-color', '#333')
  userColor = myPicker.color();
  userBgColor = myPicker2.color();

  
  fill("#333")
  textStyle(BOLD)
  textSize(16)
  noStroke()

  rect(150, 325, 240, 45);
  text("█████████████", 35, 48)

  strokeWeight(1)
  fill(240)
  text(">", 35, commandExe*20 + 50)

  if (commandExe == 0){
    fill("#333")
    text("█", 35, totalSlides*20 + 50)
    text("█", 35, commandExe*20 + 50)
    fill(240)
  } else {
    fill("#333")
    text("█", 35, commandExe*20 + 30)
    fill(240)
  }
  

  
  text("Today's Content", 35, 48)
  stroke(150)
  strokeWeight(1)
  line(35, 51, 70, 51)
  line(80, 51, 160, 51)
  stroke(70, 70, 150,100)
  textStyle(NORMAL)
  textSize(14)
  text("CTE/CS1 Survey", 50, 70)
  text("Typing Baseline", 50, 90)
  text("How to Use this Course", 50, 110)
  text("What is CS?", 50, 130)
  text("Who is CS for?", 50, 150)
  text("Desktop Setup", 50, 170)
  text("GitHub Setup", 50, 190)
  text(questions[commandExe], 32, 320)
  
  if (commandExe == 0) {
    commandP.position(320, 190)
    commandP2.position(740, 260)
    commandP3.position(280, 605)
    
    commandLog = "<font color='#eee'><h3><b><u>&nbsp;Overview of Today&nbsp;</u></b></h3></font>"
    commandStats="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;As it is the beginning of the course, we'll initially just start by setting up a few things we'll use throughout the year. We'll also briefly talk about what CS and CTE are. As we move through the year, we'll regularly practice typing and build a portfolio in addition to the course's content. These will benefit you both in the course, in school, and beyond. </div></td></tr></table>";
    
    commandStats2="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;As we move through the year, we'll regularly reflect on our growth in relation to typing, our portfolio, and our understanding of the course content.<br><br>Will you have homework?<br> &nbsp;&nbsp;Probably not, but you need to be ready to work in class everyday. If you choose not to, you'll have a harder time and probably a lower grade. You'll also more likely need to work outside of class too. Use class time productively and you should do well.<br></div></td></tr></table>";
    
        commandStats3="<table width='280' style='border:5px solid #479D89; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;When you are ready, answer the question above and click the <b>'next'</b> button.<br></div></td></tr></table>";
    
  } else if (commandExe == 1) {
    
    imgMe.position(95,-575);
    imgRight.html('<img src="assets/img-survey.png" width="300" />');
    commandP.position(320, 190)
    commandP2.position(740, 310)
    commandP3.position(1170, 390)
    commandLog = "<font color='#eee'><h3><b><u>&nbsp;CTE/CS1 Survey&nbsp;</u></b></h3></font>"
    
    commandStats="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;&nbsp;&nbsp;As we move through the semester, I'll ask you to fill out a CTE survey several times. This is meant to be information for both you and me, in part for you to see how your own knowledge and opinions change, but also for me to watch for any trends across the course. I use this data as I look at our upcoming lessons and exercises, as well as how I might need to modify the course for next year.<br><br>&nbsp;&nbsp;This is for a grade, so don't just blow it off. We will revisit this again in the future, and you'll also be able to see your perspective over the year.<br></div></td></tr></table>";
    
    commandStats2="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp; This can be useful for both you and me. I look at it across all classes to see trends, and you can see how you are doing personally and consider any changes you specifically may need to make for your own personal growth and improvement.<br><br><center>>> go to the survey >></center> </div></td></tr></table>";
    
        commandStats3="<table width='280' style='border:5px solid #479D89; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;Please notice the Usability Features button above. Please click it and make use of it if it helps you.<br></div></td></tr></table>";
    
  } else if (commandExe == 2) {
    commandP.position(320, 190)
    commandP2.position(740, 250)
    commandP3.position(280, 605)
    commandLog = "<font color='#eee'><h3><b><u>&nbsp;Typing Baseline&nbsp;</u></b></h3></font>"
    
    commandStats="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;&nbsp;&nbsp;While typing doesn't equate to technical prowess, your time is limited. If you really struggle with your typing, you'll take longer to get tasks done than you should, and you'll have less time for learning and as a result potentially feel more stressed. Even if you are a good typer, becoming a better typer can benefit you in the same vein; reducing how long it takes you to do things and giving you more time back for other things.<br></div></td></tr></table>";
    
    commandStats2="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;Generally speaking, most class days you'll start with typing practice. There are lots of places you could practice your typing, however, I've created our own custom typing practice to reinforce concepts from class and let your practice typing related terms and concepts instead of random whatever.<br><br>&nbsp;&nbsp;Today, we're going to do a baseline; this isn't so much about learning to type, but instead seeing where you are, allowing us to later measure improvement and progress. We will periodically benchmark to aid with measuring our progress. <br></div></td></tr></table>";
    
        commandStats3="<table width='280' style='border:5px solid #479D89; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;Ready to type? <br><center><a href='https://shaunwegs.github.io/typing-practice/cs1/01-1.html'>Go to the typing exercise >></a></center></div></td></tr></table>";
    
  } else if (commandExe == 3) {
    
    imgMe.position(95,-575);
    commandP.position(320, 190)
    
    commandP3.position(30, 555)
    commandLog = "<font color='#eee'><h3><b><u>&nbsp;How to use this course...&nbsp;</u></b></h3></font>"
    
    commandStats="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;&nbsp;&nbsp;This course is intended to expand your abilities, whether you're relatively inexperienced or know more than anyone you know. Whatever your skill level, I expect you to spend your time productively, working to expand your capabilities and demonstrate your efforts. More than anything else, I expect you to try.<br></div></td></tr></table>";
    
    commandStats2="<table width='400' style='border:5px solid #9C27B0; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;You will often have resources available to you online, but there will be activities and resources provided offline as well. By having access online, you can go back and review when you need, rewatch, speed up, and/or slow down as you need. Additionally, you can ask for help without interupting the learning of your peers. <br><br>&nbsp;&nbsp;I've prepared a video on my recommendations on how to utilize our lab computers. Access the video in the teal bordered window on the left.</div></td></tr></table>";
    
    commandStats3="<table width='280' style='border:5px solid #479D89; background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"; font-family: "+ userFont +"'>&nbsp;&nbsp;Ready for the video? <br><center>Watch here >> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR <br>Open in New Windor >></center></div></td></tr></table>";
    
  } else if (commandExe == 4) {
    
    commandP.position(320, 190)
    commandLog = "<font color='#eee'><h3><b><u>&nbsp;What is CS?...&nbsp;</u></b></h3></font>"
    commandStats="<table width='600' style='background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"'>&nbsp;&nbsp;Computer science is both the study of computers, as well as their use. While Computer Science is not exclusively programming, programming is a key part of Computer Science. Programming is essentially the practice of writing instructions that a computer can carry out for you. This could be something like a program that calculates interest earned on a bank account, calculates missile trajectory for military operations, or entertains in the form of a video game on your platform of choice. <br><br>&nbsp;&nbsp;The University of Maryland states that the principal areas of study within Computer Science include artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering, bioinformatics and theory of computing.<br><br></div></td></tr></table>";
  }else if (commandExe == 5) {
    
    commandP.position(320, 190)
    commandLog = "<font color='#eee'><h3><b><u>&nbsp;Who is CS for?...&nbsp;</u></b></h3></font>"
    commandStats="<table width='600' style='background-color:"+ userBgColor +"' cellspacing='9' cellpadding='9'><tr><td><div style='color:"+ userColor + "; font-size:"+ userSize +"px; line-height:"+ userLine +"'>&nbsp;&nbsp;Everyone can benefit from at least some study of Computer Science, as it opens up it's own potential area of focus, or other opportunities within just about all other areas of study. Engineering is heavily dependent on Computer Science, but just about every field is now connecting with Computer Science in some capacity. Students interested in any STEM field should absolutely seriously consider serious study of Computer Science.<br><br>From MIT:<br>&nbsp;&nbsp;As technology continues to advance and become essential to nearly every facet of society there are many opportunities for you to apply your interest and skills in computer science. There’s no shortage of tech jobs in tech companies, but you can also look for similar opportunities in industries that may intersect with your other interests – healthcare, education, gaming/entertainment, government, or research just to name a few. <br><br>&nbsp;&nbsp;As you move through our CS program, you'll not only increase your knowledge and capability, but also your awareness of a variety of potential careers that you could pursue.<br><br></div></td></tr></table>";
  }
  
  
  
}





//button-action

function botGo() {
  commandString = String(direcInput.value().toLowerCase());
  if (commandString.includes(answers[commandExe])){
      fill("#0f0")
      text("✓", 265, commandExe*20 + 50)
  }else{
      fill("#f00")
      text("x", 265, commandExe*20 + 50)
  }
  if (commandExe < totalSlides){
  commandExe += 1;
  }
  else if (commandExe >= totalSlides){
    commandExe = 0;
  }
  
  updateStats() 
}

function textUp() {
  userSize += 1
  if (userSize > 22){
    userSize = 22;
  }
}

function textDown() {
  userSize -= 1
  if (userSize < 9){
    userSize = 9;
  }
}

function textLineUp() {
  userLine += 0.1
  if (userLine > 4) {
    userLine = 4
  }
}

function textLineDown() {
  userLine -= 0.1
  if (userLine < 0.9) {
    userLine = 0.9
  }
}

function changeFont() {
  fontCount += 1;
  if (fontCount >= fontArray.length) {
    fontCount = 0;
  }
  userFont = fontArray[fontCount];
}

function toggleUsa() {
  if (toggled == -3) {
    toggled = 1
  } else{
    toggled = -3
  }
}




function updateStats() {  
  commandStats="<span style='background-color:#fff;'>&nbsp;&nbsp;Commands Executed: <b>"+ String(commandExe) + "&nbsp;&nbsp;</b> <br>&nbsp;&nbsp;Score: <b>" + String(commandScore) + "&nbsp;&nbsp;</b>";
}
