
var myVar;
function startTimer() {
  myVar = setInterval(function(){myTimer()},1000);
  timelimit = maxtimelimit;
}

function myTimer() {
  if (timelimit > 0) {
    curmin=Math.floor(timelimit/60);
    cursec=timelimit%60;
    if (curmin!=0) { curtime=curmin+" minutes and "+cursec+" seconds left"; }
              else { curtime=cursec+" seconds left"; }
    $_('timeleft').innerHTML = curtime;
  } else {
    $_('timeleft').innerHTML = timelimit+' - Out of Time - no credit given for answer';
//    clearInterval(myVar);
    checkA();
  }
  timelimit--;
}

var ques = 15;
var pos = 0, posn, choice, cor = 0, rscore = 0;
var maxtimelimit = 179, timelimit = maxtimelimit;
var vs = localStorage.getItem('pit_feb_on_load_counter');
var userFirstName = localStorage.getItem('pit_userFirstName');
var userLastName = localStorage.getItem('pit_userLastName');
var cat1 = localStorage.getItem('pg_cata1');
var cat2 = localStorage.getItem('pg_cata2');
var cat3 = localStorage.getItem('pg_cata3');
var cat4 = localStorage.getItem('pg_cata4');
var tot1 = localStorage.getItem('pg_tota1');
var tot2 = localStorage.getItem('pg_tota2');
var tot3 = localStorage.getItem('pg_tota3');
var tot4 = localStorage.getItem('pg_tota4');
var totas = [0, 0, 0, 0, 0];
var corrs = [0, 0, 0, 0, 0];
var rigoa = [0, 0, 0, 0, 0];
var rigob = [0, 0, 0, 0, 0];
var rigoc = [0, 0, 0, 0, 0];
var rigod = [0, 0, 0, 0, 0];
var totasNames = [
"&nbsp; - CTE Specifics",
"&nbsp; - WAIS & SBISD",
"&nbsp; - Colors & Color Codes",
"&nbsp; - HTML & the Web",
"&nbsp; - Others"
]

if (vs === null) { vs = 0; }
if (cat1 === null) { cat1 = 0; }
if (cat2 === null) { cat2 = 0; }
if (cat3 === null) { cat3 = 0; }
if (cat4 === null) { cat4 = 0; }
if (tot1 === null) { tot1 = 0; }
if (tot2 === null) { tot2 = 0; }
if (tot3 === null) { tot3 = 0; }
if (tot4 === null) { tot4 = 0; }

vs++;
localStorage.setItem("pit_feb_on_load_counter", vs);
if (userFirstName === null) {
    var userFirstName=prompt("Please enter your given name:");
    if (userFirstName=="") { userFirstName="not entered /" }
	localStorage.setItem('pit_userFirstName', userFirstName);}
if (userLastName === null) {
    var userLastName=prompt("Please enter your family name:");
    if (userLastName=="") { userLastName="/ not entered" }
	localStorage.setItem('pit_userLastName', userLastName);}

var questions = [

[
		"In the RGB color model, how do we make red?",
		"cyan and magenta",
		"red is a primary color, we can't make it by mixing",
		"yellow and magenta",
		"yellow and purple",
		"orange and cyan",
		"c", "a", "b" ],

		[
			"In the RGB color model, how do we make blue?",
			"cyan and magenta",
			"blue is a primary color, we can't make it by mixing",
			"yellow and magenta",
			"yellow and purple",
			"orange and cyan",
			"c", "d", "b" ],

			[
				"In the RGB color model, how do we make yellow?",
				"green and blue",
				"yellow is a primary color, we can't make it by mixing",
				"red and green",
				"green and magenta",
				"orange and cyan",
				"c", "a", "c" ],
				[
					"In the RGB color model, how do we make cyan?",
					"blue and magenta",
					"cyan is a primary color, we can't make it by mixing",
					"yellow and magenta",
					"yellow and purple",
					"blue and green",
					"c", "b", "e" ],
			
					[
						"In the RGB color model, how do we make magenta?",
						"cyan and red",
						"magenta is a primary color, we can't make it by mixing",
						"blue and orange",
						"red and purple",
						"blue and red",
						"c", "a", "e" ],
	
			
					[
						"In the color code #ae0691, which of the primary colors has the higest value?",
						"white",
						"yellow",
						"blue",
						"green",
						"red",
						"c", "b", "e" ],

	[
						"In the color code #720691, which of the primary colors has the higest value?",
						"white",
						"yellow",
						"blue",
						"green",
						"red",
						"c", "a", "c" ],
	[
						"In the color code #99b091, which of the primary colors has the higest value?",
						"white",
						"yellow",
						"blue",
						"green",
						"red",
						"c", "e", "d" ],

[
	"In the RGB color model, how do we make green?",
	"yellow and blue",
	"green is a primary color, we can't make it by mixing",
	"yellow and cyan",
	"yellow and purple",
	"orange and cyan",
	"c", "a", "b" ],
		[
	"Related to colors on the computer, where are the three 'primary' colors?",
	"red, green, and blue",
	"red, yellow, and blue",
	"cyan, magenta, and yellow",
	"blue, yellow, and magenta",
	"cyan, green, and red",
	"c", "b", "a" ],

			
					[
						"In a hexadecimal color code, the first pair of values represent?",
						"white",
						"yellow",
						"green",
						"blue",
						"red",
						"c", "b", "e" ],
[
						"In a hexadecimal color code, the middle pair of values represent?",
						"white",
						"yellow",
						"green",
						"blue",
						"red",
						"c", "a", "c" ],
[
						"In a hexadecimal color code, the last pair of values represent?",
						"white",
						"yellow",
						"green",
						"blue",
						"red",
						"c", "a", "d" ],



[
							"Generally speaking, in addition to science courses, if you were interested in a career in science, which of the following areas of study would be the most beneficial related to your desired career...",
							"digital art",
							"graphic design",
							"3d modeling",
							"programming",
							"architecture",
							"a", "e", "d" ],


[
							"Generally speaking, in addition to math courses, if you were interested in a career in mathematics, which of the following areas of study would be the most beneficial related to your desired career...",
							"digital art",
							"graphic design",
							"3d modeling",
							"programming",
							"cosmetology",
							"a", "b", "d" ],

[
							"Generally speaking, in addition to math and science courses, if you were interested in a career in engineering, which of the following areas of study would be the most beneficial related to your desired career...",
							"digital art",
							"graphic design",
							"physical education",
							"3D modeling",
							"culinary",
							"a", "c", "d" ],
[
							"Generally speaking, in addition to math and science courses, if you were interested in a career in engineering, which of the following areas of study would be the most beneficial related to your desired career...",
							"digital art",
							"graphic design",
							"music",
							"programming",
							"architecture",
							"a", "b", "d" ],

		[
							"Generally speaking, the goal of a professional portfolio is to",
							"Chronologically log all of your work for a specific class",
							"Document all of your finished projects over time",
							"Help you get a job, internship, or acceptance into a university program",
							"Convey your personal beliefs and feelings to potential employers",
							"Replicate your resume in a nicer and more comprehensive form",
							"e", "b", "c" ],

	[
							"Generally speaking, your professional portfolio should focus on?",
							"showing that you have learned about all major subject areas in school",
							"Documenting all of your finished projects over time",
							"on the area you want to work in or study",
							"Conveying your personal beliefs and feelings to potential employers",
							"Replicating your resume in a nicer and more comprehensive form",
							"e", "a", "c" ],

		[
		"In SBISD (and on the SBISD CTE website), this course is the 1st level course for which pathways? ",
		"Progamming/Software Development & Cybersecurity",
		"Progamming/Software Development only",
		"Progamming/Software Development & IT Support/Service",
		"IT Support/Service only",
		"Web Design & Design/Multimedia",
		"b", "a", "d" ],
		[
		"The acronym CTE is short for ",
		"Career, Technology, & Entrepreneurship",
		"Career Training Excellence",
		"Career Training Education",
		"Career and Technical Education",
		"College and Technical Excellence",
		"a", "e", "d" ],
			[
		"Completion of this course, with a passing grade earns you",
		"a middle school elective credit",
		"a high school Arts credit",
		"a high school CTE credit",
		"a middle school CTE credit",
		"a middle school Tech Apps credit",
		"a", "e", "c" ],
	[
		"If you want to continue this specific pathway, what should you take next",
		"Computer Maintenance at Guthrie",
		"Cyber Security at Guthrie",
		"Computer Science at WAIS",
		"Principles of Arts at WAIS",
		"IB Diploma CS at WAIS",
		"b", "c", "a" ],

	[
		"If you want to learn Photoshop, 3D modeling, or Video Editing, what should you take next?",
		"Computer Maintenance at Guthrie",
		"Cyber Security at Guthrie",
		"Computer Science at WAIS",
		"Principles of Arts at WAIS",
		"IB Diploma CS at WAIS",
		"b", "a", "d" ],

	[
		"What is the pre-req for 3D Modeling & Animation @ Guthrie?",
		"Computer Maintenance at Guthrie",
		"Cyber Security at Guthrie",
		"Computer Science at WAIS",
		"Principles of Arts at WAIS",
		"IB Diploma CS at WAIS",
		"b", "d", "d" ],

	[
		"What is the pre-req for Photography @ Guthrie?",
		"Computer Maintenance at Guthrie",
		"Cyber Security at Guthrie",
		"Computer Science at WAIS",
		"Principles of Arts at WAIS",
		"IB Diploma CS at WAIS",
		"b", "e", "d" ],

	[
		"What is the pre-req for Video Production @ Guthrie?",
		"Computer Maintenance at Guthrie",
		"Cyber Security at Guthrie",
		"Computer Science at WAIS",
		"Principles of Arts at WAIS",
		"IB Diploma CS at WAIS",
		"b", "c", "d" ],

	[
		"What is the pre-req for Graphic Design @ Guthrie?",
		"Computer Maintenance at Guthrie",
		"Cyber Security at Guthrie",
		"Computer Science at WAIS",
		"Principles of Arts at WAIS",
		"IB Diploma CS at WAIS",
		"b", "a", "d" ],

	[
		"What is the pre-req for CyberSecurity @ Guthrie?",
		"Computer Maintenance at Guthrie",
		"Cyber Security at Guthrie",
		"Computer Science at WAIS",
		"Principles of Arts at WAIS",
		"IB Diploma CS at WAIS",
		"b", "d", "c" ],
	
		[
		"We are a ",
		"district charter, but still a Texas public school",
		"both district and state charter",
		"state charter, but not district charter",
		"neither state not district charter",
		"private school",
		"b", "c", "a" ],

		[
		"While not listed on the SBISD CTE website, Texas says this course also supports which pathway? ",
		"Architectural Design",
		"Programming/Software Development",
		"Filmmaking",
		"IT Support/Service",
		"3D Animation",
		"a", "d", "b" ],

		[
		"While not listed on the SBISD CTE website, Texas says this course also supports which pathway? ",
		"Architectural Design",
		"CyberSecurity",
		"Graphic Design",
		"IT Support/Service",
		"Commercial Photography",
		"a", "c", "b" ],

	[
"This course is part of which CTE pathway",
"Programming & Software Development",
"Graphic Design & Multimedia Arts",
"Digital Communications",
"Engineering",
"IT Support & Services",
"a", "c", "e" ],

	[
		"IB MYP is for grades",
		"6-10",
		"6-8",
		"4-8",
		"9 & 10",
		"11 & 12",
		"b", "c", "a" ],

	[
		"IB CP is for grades",
		"11 & 12",
		"6-10",
		"6-8",
		"4-8",
		"9 & 10",
		"b", "d", "a" ],	[
			"IB DP is for grades",
			"11 & 12",
			"6-10",
			"6-8",
			"4-8",
			"9 & 10",
			"b", "c", "a" ],

	[
		"IB DP is an acronym for",
		"International Baccalaureate Diploma Programme",
		"International Baccalaureate Diplomatic Programme",
		"International Baccalaureate Diagnostic Process",
		"International Baccalaureate Design Program",
		"International Baccalaureate Dynamic Program",
		"d", "e", "a" ],
		[
				"IB CP is an acronym for",
				"International Baccalaureate Career-related Programme",
				"International Baccalaureate Career Program",
				"International Baccalaureate Competency Process",
				"International Baccalaureate Capstone Project",
				"International Baccalaureate Certificate Programme",
				"d", "a", "a" ],





		[
			"CS courses are related to which honor society?",
			"Computer Science Honor Society",
			"National Technical Honor Society",
			"Mu Alpha Theta",
			"Science National Honor Society",
			"National Honor Society",
			"d", "b", "a" ],
			[
			"This course is part of which Texas HS Endorsement?",
			"STEM",
			"Business & Industry",
			"Multidisciplinary",
			"Arts & Humanities",
			"Public Service",
			"a", "c", "b" ],
[
	"This course is part of which subject group in IB MYP?",
	"Design",
	"Sciences",
	"IT",
	"Computing",
	"Math",
	"d", "c", "a" ],

		[
				"Can you take Computer Sciences courses for IB in 11th & 12th?",
				"Yes, for IB MYP",
				"Yes, for both IB CP & DP",
				"Yes, but only for IB DP",
				"Yes, but only for IB CP",
				"No",
				"b", "a", "b" ],
		[
						"Can you take Cyber Security, Computer Maintenance, or other Guthrie courses for IB in 11th & 12th?",
						"Yes, for IB MYP",
						"Yes, but only for IB CP",
						"Yes, for both IB CP & DP",
						"Yes, but only for IB DP",
						"No",
						"b", "d", "b" ],
	[
"While most modern websites and webpages use multiple languages, you could build a site using only",
"Javascript",
"CSS",
"HTML",
"Rust",
"Trick question, you have to use multiple languages to create a website/webpage",
"d", "e", "c" ],	

		[
			"What do the letters in the acronym HTML stand for?",
			"Hyper Technology Material Language",
			"High-frequency Text Markdown Language",
			"HyperText Markup Language",
			"Holographic Technology Machine Language",
			"Hashing Terminal Machine Language",
			"d", "a", "c" ],
	
		[
			"In the acronym HTML, what does the H stand for?",
			"High-fidelity",
			"High-frequency",
			"Hyper",
			"Holographic",
			"Hashing",
			"d", "e", "c" ],
		[
			"In the acronym HTML, what does the T stand for?",
			"Terminal",
			"Technical",
			"Text",
			"Typogaphic",
			"Tele",
			"d", "b", "c" ],
		[
			"In the acronym HTML, what does the M stand for?",
			"Machine",
			"Markdown",
			"Markup",
			"Material",
			"Multi-processing",
			"d", "a", "c" ],
		[
			"In the acronym HTML, what does the L stand for?",
			"Leading",
			"Latency",
			"Language",
			"Log",
			"Link",
			"d", "b", "c" ],
			[
				"Which of the following is NOT true about professional portfolios?",
				"The selection of projects on your portfolio should relate to what you want to do",
				"Portfolios should showcase your talent and abilities",
				"Portfolios must include personal details about your faith and beliefs",
				"Projects on your portfolio should show some of the progress and planning",
				"You should highlight specific skills and abilities in your projects",
				"e", "a", "c" ],
				[
					"Which of the following is NOT true about professional portfolios?",
					"The selection of projects on your portfolio should relate to what you want to do",
					"Portfolios should showcase your talent and abilities",
					"Portfolios should be a comprehensive collection of all of your work",
					"Projects on your portfolio should show some of the progress and planning",
					"You should highlight specific skills and abilities in your projects",
					"e", "b", "c" ],
					[
						"If you are interested in more than one career, <BR>what's generally recommended for your professional portfolios?",
						"Create one portfolio that shows a variety of projects related to all of your different professional interests",
						"Create just one portfolio that's only focused on one interest, use this portfolio regardless of what job you are interviewing for",
						"Create more the one portfolio; each one specifically tailored for each interest",
						"Don't create a portfolio; if you have more than one interest then its better not to have a portfolio",
						"Create a very generic portfolio that doesn't show any specific skills related to any specific career",
						"e", "a", "c" ],
						[
							"Related to a project in your portfolio, <BR>which of the following should NOT be included?",
							"The Problem/Goal and Solution Statements",
							"Sketches and diagrams of the planning",
							"All of these should be included",
							"Images from the finished product",
							"Emphasis on relevant skills/abilities you want to showcase/feature",
							"e", "b", "c" ],

						[
							"Related to a project in your portfolio, <BR>which of the following should NOT be included?",
							"The Problem/Goal and Solution Statements",
							"Sketches and diagrams of the planning",
							"All of these should be included",
							"Images from the finished product",
							"Emphasis on relevant skills/abilities you want to showcase/feature",
							"e", "a", "c" ],

					[
						"Which software are we using to write and edit HTML code?",
						"Notepad",
						"Dreamweaver",
						"Visual Studio Code",
						"Xcode",
						"Webstorm",
						"d", "a", "c" ],	
					[
						"VS Code is made by which company?",
						"Dell",
						"Sony",
						"Microsoft",
						"Apple",
						"Google",
						"e", "a", "c" ],
						
						[
							"The file extension for html is",
							"hyper",
							"page",
							"html",
							"ht",
							"web",
							"d", "e", "c" ],[
							"To create an image, use which type of tag?",
							"a link tag",
							"a font tag",
							"an anchor tag",
							"an image tag",
							"a text tag",
							"d", "b", "d" ],
							[
							"To add colors with basic HTML, we use?",
							"js scripts",
							"python programming",
							"hexidecimal codes",
							"a color tag",
							"css code",
							"d", "a", "c" ],
							[
							"Hexadecimal uses what color system?",
							"js scripts",
							"python programming",
							"RGB",
							"CMYK",
							"RYB",
							"c", "d", "c" ],
							[
							"We call them hexadecimal color codes because",
							"each digit represents one of the 6 primary or secondary colors",
							"they are used to represent hexadecimal colors",
							"each digit can represent 16 different values",
							"the color code has 6 digits",
							"there are 16 different main sections of the hexadecimal color space",
							"c", "a", "c" ],
							[
							"What is the hexadecimal value for white?",
							"#F0F0F0",
							"#0F0F0F",
							"#FF0000",
							"#000000",
							"#FFFFFF",
							"c", "b", "e" ],
							[
							"What is the hexadecimal value for black?",
							"#F0F0F0",
							"#0F0F0F",
							"#FF0000",
							"#000000",
							"#FFFFFF",
							"c", "a", "d" ],
							[
							"What is the hexadecimal value for red?",
							"#0000FF",
							"#00FF00",
							"#FF0000",
							"#FFFF00",
							"#00FFFF",
							"c", "d", "c" ],
							[
							"What is the hexadecimal value for red?",
							"#F0000F",
							"#000F00",
							"#FF0000",
							"#F00000",
							"#0000FF",
							"c", "a", "c" ],
							[
							"What is the hexadecimal value for blue?",
							"#0000FF",
							"#00FF00",
							"#FF0000",
							"#FFFF00",
							"#00FFFF",
							"c", "b", "a" ],
							[
							"What is the hexadecimal value for blue?",
							"#F0000F",
							"#000F00",
							"#FF0000",
							"#00000F",
							"#0000FF",
							"c", "d", "e" ],
							[
							"What is the hexadecimal value for green?",
							"#0000FF",
							"#00FF00",
							"#FF0000",
							"#FFFF00",
							"#00FFFF",
							"c", "a", "b" ],
							[
							"What is the hexadecimal value for yellow?",
							"#0000FF",
							"#00FF00",
							"#FF0000",
							"#FFFF00",
							"#00FFFF",
							"c", "e", "d" ],
							[
							"What is the hexadecimal value for cyan?",
							"#0000FF",
							"#00FF00",
							"#FF0000",
							"#FFFF00",
							"#00FFFF",
							"c", "a", "e" ],
							[
							"What is the hexadecimal value for magenta?",
							"#FF00FF",
							"#00FF00",
							"#FF0000",
							"#FFFF00",
							"#00FFFF",
							"c", "b", "a" ],
							[
							"An HTML document is typically composed of what sections?",
							"head and body",
							"head and main",
							"opening, main, closing",
							"header, body, and footer",
							"main and appendices",
							"d", "c", "a" ],
							[
							"In an HTML document, most content should be contained in the...",
							"body",
							"head",
							"main",
							"header",
							"appendices",
							"d", "b", "a" ],
							[
							"In an HTML document, where should you put the title tag?",
							"body",
							"head",
							"main",
							"header",
							"appendices",
							"d", "e", "b" ],
							[
							"When you go to a website, the name of the website can usually be seen at the top of the window (or on a tab if you have multiple tabs open). <BR>What does the correct tag look like?",
							"&#60;head value='Name of Site' />",
							"&#60;title>Name of Site&#60;/title>",
							"&#60;title value='Name of Site'>&#60;/title>",
							"&#60;header>Name of Site&#60;/header>",
							"&#60;head>Name of Site&#60;/head>",
							"d", "c", "b" ],
[
									"To add a png image to our site, what does the correct tag look like?",
									"&#60;graphic> Name_of_Image.png &#60;/graphic>",
									"&#60;i source='Name_of_Image.png'>&#60;/i>",
									"&#60;img src='Name_of_Image.png' />",
									"&#60;pic='Name_of_Image.png'>",
									"&#60;png val='Name_of_Image' />",
									"d", "a", "c" ],
[
									"We would like to add a picture to our site. <BR>The picture is named jose-antunes-sobrinho.jpg. <BR>How would we write the HTML tags to do this?",
									"&#60;img src='jose-antunes-sobrinho.gif' />",
									"&#60;img src='jose-antunes-sobrinho.png' />",
									"&#60;img src='jose-antunes-sobrinho.jpg' />",
									"&#60;img src='jose-antunes-sobrinho.webp' />",
									"All of these will work.",
									"d", "e", "c" ],

									[
									"You've created a webpage which includes both text and images. <BR>You've sent only the html file to your friend. <BR>What can you probably expect to happen when they load it?",
									"everything will load until the first image; it will not be able to find the image and will not load anything else",
									"everything will load",
									"text will load, but the images won't.",
									"images will load, but the text won't.",
									"nothing will load",
									"d", "a", "c" ],
									[
									"We can add an image to our page using the tag &#60;img src='name_of_image.jpg'/>. <BR>We specify the path for the image in the src attribute. <BR>What does src mean?",
									"src is an acronym for scaleable reloadable content",
									"src is an acronym for synchronized reference content",
									"src is short for source",
									"src doesn't actually mean anything, you just have to remember it",
									"src is an acronym for system resource/content",
									"d", "e", "c" ],

									[
									"We want to change the color of our webpage's background. <BR>Where would we do that?",
									"You can't change the background color of a webpage.",
									"in the table tag",
									"in the body tag",
									"in the head tag",
									"in the html tag",
									"d", "b", "c" ],

									[
									"We want to use an image for the background of our webpage. <BR>Where would we do that?",
									"You can't change the background color of a webpage.",
									"in the table tag",
									"in the body tag",
									"in the head tag",
									"in the html tag",
									"d", "a", "c" ],
									[
									"We have an image on our webpage, but it's too big. <BR>What's a quick way to fix it?",
									"Reload the page to see if it loads smaller.",
									"Delete the image and resave it.",
									"add a width or height attribute in the img tag.",
									"add a size attribute in the img tag.",
									"use javascript to resize it",
									"d", "b", "c" ],
									[
									"The content on our page keeps loading on the left side.<br>How can we get it to load in the middle instead?",
									"You can't change where things load on a webpage without CSS.",
									"wrap the content in &#60;align='center'> and &#60;/align> tags",
									"wrap the content in &#60;center> and &#60;/center> tags",
									"wrap the content in &#60;middle> and &#60;/middle> tags",
									"in the body tag, add the align='middle' attribute.",
									"d", "a", "c" ],


									[
									"We have a website with some text that should be red. How could we use HTML to make it red?",
									"&#60;font color='#FF0000'>Red Text&#60;/font>",
									"&#60;font style='#FF0000'>Red Text&#60;/font>",
									"&#60;font color='#00FF00'>Red Text&#60;/font>",
									"&#60;text style='#FF00FF'>Red Text&#60;/text>",
									"&#60;color='#F00'>Red Text&#60;/color>",
									"d", "e", "a" ],
									[
									"We have a website with some text that should be green. How could we use HTML to make it green?",
									"&#60;font color='#FFFF00'>Green Text&#60;/font>",
									"&#60;font style='#FF0000'>Green Text&#60;/font>",
									"&#60;font color='#00FF00'>Green Text&#60;/font>",
									"&#60;text style='#00FFFF'>Green Text&#60;/text>",
									"&#60;color='#00F'>Green Text&#60;/color>",
									"d", "b", "c" ],
									[
									"We have a website with some text that should be blue. How could we use HTML to make it blue?",
									"&#60;font color='#FFFF00'>Blue Text&#60;/font>",
									"&#60;font style='#FF00FF'>Blue Text&#60;/font>",
									"&#60;font color='#0000FF'>Blue Text&#60;/font>",
									"&#60;text style='#0000FF'>Blue Text&#60;/text>",
									"&#60;color='#0F0'>Blue Text&#60;/color>",
									"d", "a", "c" ],
									[
									"We would like to organize data and information on a website. What should we use for this?",
									"BR Tags",
									"Text Boxes",
									"Tables",
									"CSS",
									"Javascript",
									"d", "a", "c" ],


									[
									"The tags &#60;tr> and &#60;td> are both related to what HTML element?",
									"Text",
									"Tables",
									"Lists",
									"Images",
									"Links",
									"d", "a", "b" ],
									[
									"When we create a table, we can use &#60;TR> tags.<br>What does TR stand for?",
									"Tabulated Reference",
									"Table Resource",
									"Table Row",
									"Text Reference",
									"Tabulated Resource",
									"d", "e", "c" ],
									[
									"When we create a table, we can use &#60;TD> tags.<br>What does TD stand for?",
									"Tabulated Documentation",
									"Table Document",
									"Table Data",
									"Text Data",
									"Text DocType",
									"d", "e", "c" ],
									[
									"To create a table, what tag do we start with?",
									"&#60;table>",
									"&#60;table begin>",
									"&#60;td>",
									"&#60;tr>",
									"&#60;tabulate>",
									"d", "b", "a" ],
									[
									"When working with tables, all TD tags should be nested inside what tags?",
									"&#60;tr> tags",
									"&#60;row> tags",
									"&#60;tabulation> tags",
									"&#60;data> tags",
									"&#60;list> tags",
									"d", "c", "a" ],
									[
										"Look at the example HTML below.<br>&#60;table><br>&#60;tr><br>&#60;td>&#60;/td>&#60;td>&#60;/td>&#60;td>&#60;/td><br>&#60;/tr><br>&#60;tr><br>&#60;td>&#60;/td>&#60;td>&#60;/td>&#60;td>&#60;/td><br>&#60;/tr><br>&#60;/table><br>How many columns will this table have?",
										"3",
										"2",
										"1",
										"4",
										"5",
										"d", "b", "a" ],
										[
											"Look at the example HTML below.<br>&#60;table><br>&#60;tr><br>&#60;td>&#60;/td>&#60;td>&#60;/td>&#60;td>&#60;/td><br>&#60;/tr><br>&#60;tr><br>&#60;td>&#60;/td>&#60;td>&#60;/td>&#60;td>&#60;/td><br>&#60;/tr><br>&#60;/table><br>How many rows will this table have?",
											"2",
											"3",
											"1",
											"4",
											"5",
											"d", "c", "a" ],
										[
											"Look at the example HTML below.<br>&#60;table><br>&#60;tr><br>&#60;td>&#60;/td>&#60;td>&#60;/td>&#60;td>&#60;/td><br>&#60;/tr><br>&#60;/table><br>How many rows will this table have?",
											"2",
											"3",
											"1",
											"4",
											"5",
											"d", "b", "c" ],
											[
												"Look at the example HTML below.<br>&#60;table><br>&#60;tr><br>&#60;td>&#60;/td>&#60;td>&#60;/td>&#60;td>&#60;/td>&#60;td>&#60;/td><br>&#60;/tr><br>&#60;/table><br>How many columns will this table have?",
												"2",
												"3",
												"1",
												"4",
												"5",
												"d", "a", "d" ],


];

function now() {

  var now = new Date();

  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

  time[0] = time[0] || 12;

  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }

  return "Taken at " +time.join(":") + " " + suffix + " on " + date.join("/");
}

function attemptid() {
  var lI = new Date();
  var il = [ lI.getMonth(), lI.getDate()+11];
  var i1 = [ lI.getHours()+12, lI.getMinutes()+13];
  return "<br>Attempt ID: " +il.join("") +i1.join("") + idSum() +l1 +vs;
}

var questionOrder = [];
function setQuestionOrder() {
  questionOrder.length = 0;
  for (var i=0; i<questions.length; i++) { questionOrder.push(i); }
  questionOrder.sort(randOrd);   // alert(questionOrder);  // shuffle display order
  pos = 0;  posn = questionOrder[pos];
}

function showOf() {
		var ofof = '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="30.7"><path fill="#1E3D6F" d="M24.9 15.7A99.8 99.8 0 0 0 25 25l-4.8.6A42.1 42.1 0 0 1 20 21a150.7 150.7 0 0 1-.1-5.4h-2.3l-.6-4.5 3 .4v-1.1c0-1 .3-2.1.9-3 .6-1 1.8-1.8 3.5-2.3.9-.3 1.8-.4 2.8-.4 1 0 1.7.1 2.3.4l1.3.9c.3.3.6.8.7 1.5L28.1 10l-.7-1.1c-.3-.4-.6-.5-.9-.5-.4 0-.8.3-1 1a29.1 29.1 0 0 0-.2 1.5l-.2 1h2.6v3.8h-2.8z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M24.9 15.7A99.8 99.8 0 0 0 25 25l-4.8.6A42.1 42.1 0 0 1 20 21a150.7 150.7 0 0 1-.1-5.4h-2.3l-.6-4.5 3 .4v-1.1c0-1 .3-2.1.9-3 .6-1 1.8-1.8 3.5-2.3.9-.3 1.8-.4 2.8-.4 1 0 1.7.1 2.3.4l1.3.9c.3.3.6.8.7 1.5L28.1 10l-.7-1.1c-.3-.4-.6-.5-.9-.5-.4 0-.8.3-1 1a29.1 29.1 0 0 0-.2 1.5l-.2 1h2.6v3.8h-2.8z"/><path fill="#1E3D6F" d="M24.9 15.7A99.8 99.8 0 0 0 25 25l-4.8.6A42.1 42.1 0 0 1 20 21a150.7 150.7 0 0 1-.1-5.4h-2.3l-.6-4.5 3 .4v-1.1c0-1 .3-2.1.9-3 .6-1 1.8-1.8 3.5-2.3.9-.3 1.8-.4 2.8-.4 1 0 1.7.1 2.3.4l1.3.9c.3.3.6.8.7 1.5L28.1 10l-.7-1.1c-.3-.4-.6-.5-.9-.5-.4 0-.8.3-1 1a29.1 29.1 0 0 0-.2 1.5l-.2 1h2.6v3.8h-2.8z"/><path d="M26.4 14.2a99.8 99.8 0 0 0 .1 9.3l-4.8.6a42.1 42.1 0 0 1-.2-4.5 150.7 150.7 0 0 1-.1-5.4H19l-.6-4.5 3 .4V9c0-1 .3-2.1.9-3 .6-1 1.8-1.8 3.5-2.3.9-.3 1.8-.4 2.8-.4 1 0 1.7.1 2.3.4l1.3.9c.3.3.6.8.7 1.5l-3.4 2.3-.7-1.1c-.3-.4-.6-.5-.9-.5-.4 0-.8.3-1 1a29.1 29.1 0 0 0-.2 1.5l-.2 1h2.6v3.8h-2.8z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M26.4 14.2a99.8 99.8 0 0 0 .1 9.3l-4.8.6a42.1 42.1 0 0 1-.2-4.5 150.7 150.7 0 0 1-.1-5.4H19l-.6-4.5 3 .4V9c0-1 .3-2.1.9-3 .6-1 1.8-1.8 3.5-2.3.9-.3 1.8-.4 2.8-.4 1 0 1.7.1 2.3.4l1.3.9c.3.3.6.8.7 1.5l-3.4 2.3-.7-1.1c-.3-.4-.6-.5-.9-.5-.4 0-.8.3-1 1a29.1 29.1 0 0 0-.2 1.5l-.2 1h2.6v3.8h-2.8z"/><path fill="#FFCB31" d="M26.4 14.2a99.8 99.8 0 0 0 .1 9.3l-4.8.6a42.1 42.1 0 0 1-.2-4.5 150.7 150.7 0 0 1-.1-5.4H19l-.6-4.5 3 .4V9c0-1 .3-2.1.9-3 .6-1 1.8-1.8 3.5-2.3.9-.3 1.8-.4 2.8-.4 1 0 1.7.1 2.3.4l1.3.9c.3.3.6.8.7 1.5l-3.4 2.3-.7-1.1c-.3-.4-.6-.5-.9-.5-.4 0-.8.3-1 1a29.1 29.1 0 0 0-.2 1.5l-.2 1h2.6v3.8h-2.8z"/><path fill="#1E3D6F" d="M12.3 16.8c.5.2.8.6 1.1 1l.7 1.4a6.6 6.6 0 0 1 0 3l-.2 1.2a4 4 0 0 1-.5 1L12.1 26c-.4.5-1 .8-1.5 1a6.4 6.4 0 0 1-2.9.8 4.8 4.8 0 0 1-2.8-1c-.6-.4-1-1-1.4-1.9a7 7 0 0 1-.5-2.6c0-1.6.5-2.8 1.4-3.8.8-.8 1.6-1.5 2.4-1.9a5.6 5.6 0 0 1 5.5.2zm-.6 1.6c0 .5-.3 1-.7 1.4-.4.3-.7.5-1 .5l-.6-.1-.2-.8c0-.3 0-.6.3-1a2 2 0 0 1 .9-.6c-.4 0-.8 0-1.2.2-.5.2-.8.4-1 .7-.4.2-.6.5-.8.8a2 2 0 0 0-.2 1c0 .6.2 1 .8 1.5.5.3 1 .5 1.5.5s.9-.2 1.2-.5c.4-.3.7-.7.9-1.2.2-.5.2-1 .2-1.5v-.9z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M12.3 16.8c.5.2.8.6 1.1 1l.7 1.4a6.6 6.6 0 0 1 0 3l-.2 1.2a4 4 0 0 1-.5 1L12.1 26c-.4.5-1 .8-1.5 1a6.4 6.4 0 0 1-2.9.8 4.8 4.8 0 0 1-2.8-1c-.6-.4-1-1-1.4-1.9a7 7 0 0 1-.5-2.6c0-1.6.5-2.8 1.4-3.8.8-.8 1.6-1.5 2.4-1.9a5.6 5.6 0 0 1 5.5.2zm-.6 1.6c0 .5-.3 1-.7 1.4-.4.3-.7.5-1 .5l-.6-.1-.2-.8c0-.3 0-.6.3-1a2 2 0 0 1 .9-.6c-.4 0-.8 0-1.2.2-.5.2-.8.4-1 .7-.4.2-.6.5-.8.8a2 2 0 0 0-.2 1c0 .6.2 1 .8 1.5.5.3 1 .5 1.5.5s.9-.2 1.2-.5c.4-.3.7-.7.9-1.2.2-.5.2-1 .2-1.5v-.9z"/><path fill="#1E3D6F" d="M12.3 16.8c.5.2.8.6 1.1 1l.7 1.4a6.6 6.6 0 0 1 0 3l-.2 1.2a4 4 0 0 1-.5 1L12.1 26c-.4.5-1 .8-1.5 1a6.4 6.4 0 0 1-2.9.8 4.8 4.8 0 0 1-2.8-1c-.6-.4-1-1-1.4-1.9a7 7 0 0 1-.5-2.6c0-1.6.5-2.8 1.4-3.8.8-.8 1.6-1.5 2.4-1.9a5.6 5.6 0 0 1 5.5.2zm-.6 1.6c0 .5-.3 1-.7 1.4-.4.3-.7.5-1 .5l-.6-.1-.2-.8c0-.3 0-.6.3-1a2 2 0 0 1 .9-.6c-.4 0-.8 0-1.2.2-.5.2-.8.4-1 .7-.4.2-.6.5-.8.8a2 2 0 0 0-.2 1c0 .6.2 1 .8 1.5.5.3 1 .5 1.5.5s.9-.2 1.2-.5c.4-.3.7-.7.9-1.2.2-.5.2-1 .2-1.5v-.9z"/><path d="M13.8 15.3c.5.2.8.6 1.1 1l.7 1.4a6.6 6.6 0 0 1 0 3l-.2 1.2a4 4 0 0 1-.5 1l-1.3 1.6c-.4.5-1 .8-1.5 1a6.4 6.4 0 0 1-2.9.8 4.8 4.8 0 0 1-2.8-1c-.6-.4-1-1-1.4-1.9a7 7 0 0 1-.5-2.6C4.5 19.2 5 18 6 17c.8-.8 1.6-1.5 2.4-1.9a5.6 5.6 0 0 1 5.5.2zm-.6 1.6c0 .5-.3 1-.7 1.4-.4.3-.7.5-1 .5l-.6-.1-.2-.8c0-.3 0-.6.3-1a2 2 0 0 1 .9-.6c-.4 0-.8 0-1.2.2-.5.2-.8.4-1 .7-.4.2-.6.5-.8.8a2 2 0 0 0-.2 1c0 .6.2 1 .8 1.5.5.3 1 .5 1.5.5s.9-.2 1.2-.5c.4-.3.7-.7.9-1.2.2-.5.2-1 .2-1.5V17z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M13.8 15.3c.5.2.8.6 1.1 1l.7 1.4a6.6 6.6 0 0 1 0 3l-.2 1.2a4 4 0 0 1-.5 1l-1.3 1.6c-.4.5-1 .8-1.5 1a6.4 6.4 0 0 1-2.9.8 4.8 4.8 0 0 1-2.8-1c-.6-.4-1-1-1.4-1.9a7 7 0 0 1-.5-2.6C4.5 19.2 5 18 6 17c.8-.8 1.6-1.5 2.4-1.9a5.6 5.6 0 0 1 5.5.2zm-.6 1.6c0 .5-.3 1-.7 1.4-.4.3-.7.5-1 .5l-.6-.1-.2-.8c0-.3 0-.6.3-1a2 2 0 0 1 .9-.6c-.4 0-.8 0-1.2.2-.5.2-.8.4-1 .7-.4.2-.6.5-.8.8a2 2 0 0 0-.2 1c0 .6.2 1 .8 1.5.5.3 1 .5 1.5.5s.9-.2 1.2-.5c.4-.3.7-.7.9-1.2.2-.5.2-1 .2-1.5V17z"/><path fill="#FFCB31" d="M13.8 15.3c.5.2.8.6 1.1 1l.7 1.4a6.6 6.6 0 0 1 0 3l-.2 1.2a4 4 0 0 1-.5 1l-1.3 1.6c-.4.5-1 .8-1.5 1a6.4 6.4 0 0 1-2.9.8 4.8 4.8 0 0 1-2.8-1c-.6-.4-1-1-1.4-1.9a7 7 0 0 1-.5-2.6C4.5 19.2 5 18 6 17c.8-.8 1.6-1.5 2.4-1.9a5.6 5.6 0 0 1 5.5.2zm-.6 1.6c0 .5-.3 1-.7 1.4-.4.3-.7.5-1 .5l-.6-.1-.2-.8c0-.3 0-.6.3-1a2 2 0 0 1 .9-.6c-.4 0-.8 0-1.2.2-.5.2-.8.4-1 .7-.4.2-.6.5-.8.8a2 2 0 0 0-.2 1c0 .6.2 1 .8 1.5.5.3 1 .5 1.5.5s.9-.2 1.2-.5c.4-.3.7-.7.9-1.2.2-.5.2-1 .2-1.5V17z"/></svg>';
		return ofof;}

		function ballGo() {
		var ballball = '<svg xmlns="http://www.w3.org/2000/svg" width="377" height="310"><circle fill="#D14D36" stroke="#46515B" stroke-width="14" stroke-linecap="square" cx="187.341" cy="155.528" r="142.999"/><path fill="#FDFDFE" stroke="#46515B" stroke-width="14" stroke-linecap="square" d="M231.282 289.614c75.267-23.925 116.886-104.333 92.96-179.601L51.681 196.652c23.925 75.267 104.335 116.886 179.601 92.962z"/><circle fill="#FFF" stroke="#46515B" stroke-width="14" stroke-linecap="square" cx="190.371" cy="155.528" r="45.485"/><path fill="#1E3D6F" d="M358.907 116.668c1.53 1.521 2.619 3.279 3.265 5.277.646 1.997.922 4.108.829 6.331a27.179 27.179 0 0 1-1.143 6.685 33.025 33.025 0 0 1-2.045 5.218c-.812 1.631-1.688 3.088-2.631 4.371-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.032-6.922 2.52c-2.244.489-4.385.7-6.42.636a22.67 22.67 0 0 1-5.825-.928c-2.182-.653-4.151-1.615-5.911-2.883s-3.167-2.662-4.223-4.181c-1.715-2.583-2.731-5.677-3.049-9.282-.318-3.604.061-7.204 1.137-10.797 1.854-6.184 5.133-10.642 9.838-13.371 4.029-2.344 7.922-3.855 11.678-4.534 3.755-.679 7.339-.507 10.752.516 2.002.6 3.852 1.427 5.551 2.48 1.696 1.054 3.393 2.437 5.089 4.148zm-4.209 5.786c-1.021 1.819-2.479 3.256-4.373 4.31-1.896 1.055-3.537 1.374-4.923.959-.693-.208-1.255-.571-1.687-1.093-.585-.847-.647-2.04-.187-3.579.354-1.181 1.095-2.231 2.224-3.151s2.641-1.46 4.533-1.62c-1.693-.508-3.425-.677-5.195-.508s-3.373.59-4.807 1.266a13.12 13.12 0 0 0-3.739 2.612c-1.061 1.066-1.783 2.242-2.168 3.525-.715 2.387-.181 4.616 1.604 6.688 1.661 1.924 3.415 3.162 5.263 3.716 1.822.546 3.622.422 5.398-.375 1.777-.795 3.323-2.038 4.642-3.727 1.315-1.689 2.256-3.47 2.817-5.344.384-1.282.584-2.509.598-3.679z"/><path fill="none" stroke="#1E3D6F" stroke-width="15" stroke-linecap="square" d="M358.907 116.668c1.53 1.521 2.619 3.279 3.265 5.277.646 1.997.922 4.108.829 6.331a27.179 27.179 0 0 1-1.143 6.685 33.025 33.025 0 0 1-2.045 5.218c-.812 1.631-1.688 3.088-2.631 4.371-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.032-6.922 2.52c-2.244.489-4.385.7-6.42.636a22.67 22.67 0 0 1-5.825-.928c-2.182-.653-4.151-1.615-5.911-2.883s-3.167-2.662-4.223-4.181c-1.715-2.583-2.731-5.677-3.049-9.282-.318-3.604.061-7.204 1.137-10.797 1.854-6.184 5.133-10.642 9.838-13.371 4.029-2.344 7.922-3.855 11.678-4.534 3.755-.679 7.339-.507 10.752.516 2.002.6 3.852 1.427 5.551 2.48 1.696 1.054 3.393 2.437 5.089 4.148zm-4.209 5.786c-1.021 1.819-2.479 3.256-4.373 4.31-1.896 1.055-3.537 1.374-4.923.959-.693-.208-1.255-.571-1.687-1.093-.585-.847-.647-2.04-.187-3.579.354-1.181 1.095-2.231 2.224-3.151s2.641-1.46 4.533-1.62c-1.693-.508-3.425-.677-5.195-.508s-3.373.59-4.807 1.266a13.12 13.12 0 0 0-3.739 2.612c-1.061 1.066-1.783 2.242-2.168 3.525-.715 2.387-.181 4.616 1.604 6.688 1.661 1.924 3.415 3.162 5.263 3.716 1.822.546 3.622.422 5.398-.375 1.777-.795 3.323-2.038 4.642-3.727 1.315-1.689 2.256-3.47 2.817-5.344.384-1.282.584-2.509.598-3.679z"/><path fill="#1E3D6F" d="M358.907 116.668c1.53 1.521 2.619 3.279 3.265 5.277.646 1.997.922 4.108.829 6.331a27.179 27.179 0 0 1-1.143 6.685 33.025 33.025 0 0 1-2.045 5.218c-.812 1.631-1.688 3.088-2.631 4.371-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.032-6.922 2.52c-2.244.489-4.385.7-6.42.636a22.67 22.67 0 0 1-5.825-.928c-2.182-.653-4.151-1.615-5.911-2.883s-3.167-2.662-4.223-4.181c-1.715-2.583-2.731-5.677-3.049-9.282-.318-3.604.061-7.204 1.137-10.797 1.854-6.184 5.133-10.642 9.838-13.371 4.029-2.344 7.922-3.855 11.678-4.534 3.755-.679 7.339-.507 10.752.516 2.002.6 3.852 1.427 5.551 2.48 1.696 1.054 3.393 2.437 5.089 4.148zm-4.209 5.786c-1.021 1.819-2.479 3.256-4.373 4.31-1.896 1.055-3.537 1.374-4.923.959-.693-.208-1.255-.571-1.687-1.093-.585-.847-.647-2.04-.187-3.579.354-1.181 1.095-2.231 2.224-3.151s2.641-1.46 4.533-1.62c-1.693-.508-3.425-.677-5.195-.508s-3.373.59-4.807 1.266a13.12 13.12 0 0 0-3.739 2.612c-1.061 1.066-1.783 2.242-2.168 3.525-.715 2.387-.181 4.616 1.604 6.688 1.661 1.924 3.415 3.162 5.263 3.716 1.822.546 3.622.422 5.398-.375 1.777-.795 3.323-2.038 4.642-3.727 1.315-1.689 2.256-3.47 2.817-5.344.384-1.282.584-2.509.598-3.679z"/><g><path d="M363.907 111.668c1.53 1.521 2.619 3.279 3.265 5.277.646 1.997.922 4.108.829 6.331a27.179 27.179 0 0 1-1.143 6.685 33.025 33.025 0 0 1-2.045 5.218c-.812 1.631-1.688 3.088-2.631 4.371-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.032-6.922 2.52c-2.244.489-4.385.7-6.42.636a22.67 22.67 0 0 1-5.825-.928c-2.182-.653-4.151-1.615-5.911-2.883s-3.167-2.662-4.223-4.181c-1.715-2.583-2.731-5.677-3.049-9.282-.318-3.604.061-7.204 1.137-10.797 1.854-6.184 5.133-10.642 9.838-13.371 4.029-2.344 7.922-3.855 11.678-4.534 3.755-.679 7.339-.507 10.752.516 2.002.6 3.852 1.427 5.551 2.48 1.696 1.054 3.393 2.437 5.089 4.148zm-4.209 5.786c-1.021 1.819-2.479 3.256-4.373 4.31-1.896 1.055-3.537 1.374-4.923.959-.693-.208-1.255-.571-1.687-1.093-.585-.847-.647-2.04-.187-3.579.354-1.181 1.095-2.231 2.224-3.151s2.641-1.46 4.533-1.62c-1.693-.508-3.425-.677-5.195-.508s-3.373.59-4.807 1.266a13.12 13.12 0 0 0-3.739 2.612c-1.061 1.066-1.783 2.242-2.168 3.525-.715 2.387-.181 4.616 1.604 6.688 1.661 1.924 3.415 3.162 5.263 3.716 1.822.546 3.622.422 5.398-.375 1.777-.795 3.323-2.038 4.642-3.727 1.315-1.689 2.256-3.47 2.817-5.344.384-1.282.584-2.509.598-3.679z"/><path fill="none" stroke="#3070B3" stroke-width="15" stroke-linecap="square" d="M363.907 111.668c1.53 1.521 2.619 3.279 3.265 5.277.646 1.997.922 4.108.829 6.331a27.179 27.179 0 0 1-1.143 6.685 33.025 33.025 0 0 1-2.045 5.218c-.812 1.631-1.688 3.088-2.631 4.371-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.032-6.922 2.52c-2.244.489-4.385.7-6.42.636a22.67 22.67 0 0 1-5.825-.928c-2.182-.653-4.151-1.615-5.911-2.883s-3.167-2.662-4.223-4.181c-1.715-2.583-2.731-5.677-3.049-9.282-.318-3.604.061-7.204 1.137-10.797 1.854-6.184 5.133-10.642 9.838-13.371 4.029-2.344 7.922-3.855 11.678-4.534 3.755-.679 7.339-.507 10.752.516 2.002.6 3.852 1.427 5.551 2.48 1.696 1.054 3.393 2.437 5.089 4.148zm-4.209 5.786c-1.021 1.819-2.479 3.256-4.373 4.31-1.896 1.055-3.537 1.374-4.923.959-.693-.208-1.255-.571-1.687-1.093-.585-.847-.647-2.04-.187-3.579.354-1.181 1.095-2.231 2.224-3.151s2.641-1.46 4.533-1.62c-1.693-.508-3.425-.677-5.195-.508s-3.373.59-4.807 1.266a13.12 13.12 0 0 0-3.739 2.612c-1.061 1.066-1.783 2.242-2.168 3.525-.715 2.387-.181 4.616 1.604 6.688 1.661 1.924 3.415 3.162 5.263 3.716 1.822.546 3.622.422 5.398-.375 1.777-.795 3.323-2.038 4.642-3.727 1.315-1.689 2.256-3.47 2.817-5.344.384-1.282.584-2.509.598-3.679z"/><path fill="#FFCB31" d="M363.907 111.668c1.53 1.521 2.619 3.279 3.265 5.277.646 1.997.922 4.108.829 6.331a27.179 27.179 0 0 1-1.143 6.685 33.025 33.025 0 0 1-2.045 5.218c-.812 1.631-1.688 3.088-2.631 4.371-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.032-6.922 2.52c-2.244.489-4.385.7-6.42.636a22.67 22.67 0 0 1-5.825-.928c-2.182-.653-4.151-1.615-5.911-2.883s-3.167-2.662-4.223-4.181c-1.715-2.583-2.731-5.677-3.049-9.282-.318-3.604.061-7.204 1.137-10.797 1.854-6.184 5.133-10.642 9.838-13.371 4.029-2.344 7.922-3.855 11.678-4.534 3.755-.679 7.339-.507 10.752.516 2.002.6 3.852 1.427 5.551 2.48 1.696 1.054 3.393 2.437 5.089 4.148zm-4.209 5.786c-1.021 1.819-2.479 3.256-4.373 4.31-1.896 1.055-3.537 1.374-4.923.959-.693-.208-1.255-.571-1.687-1.093-.585-.847-.647-2.04-.187-3.579.354-1.181 1.095-2.231 2.224-3.151s2.641-1.46 4.533-1.62c-1.693-.508-3.425-.677-5.195-.508s-3.373.59-4.807 1.266a13.12 13.12 0 0 0-3.739 2.612c-1.061 1.066-1.783 2.242-2.168 3.525-.715 2.387-.181 4.616 1.604 6.688 1.661 1.924 3.415 3.162 5.263 3.716 1.822.546 3.622.422 5.398-.375 1.777-.795 3.323-2.038 4.642-3.727 1.315-1.689 2.256-3.47 2.817-5.344.384-1.282.584-2.509.598-3.679z"/></g><g><path fill="#1E3D6F" d="M304.674 55.466l22.644 1.29-31.768 102.528-22.786-3.052 31.91-100.766z"/><path fill="none" stroke="#1E3D6F" stroke-width="15" stroke-linecap="square" d="M304.674 55.466l22.644 1.29-31.768 102.528-22.786-3.052 31.91-100.766z"/><path fill="#1E3D6F" d="M304.674 55.466l22.644 1.29-31.768 102.528-22.786-3.052 31.91-100.766z"/><g><path d="M309.674 50.466l22.644 1.29-31.768 102.528-22.786-3.052 31.91-100.766z"/><path fill="none" stroke="#3070B3" stroke-width="15" stroke-linecap="square" d="M309.674 50.466l22.644 1.29-31.768 102.528-22.786-3.052 31.91-100.766z"/><path fill="#FFCB31" d="M309.674 50.466l22.644 1.29-31.768 102.528-22.786-3.052 31.91-100.766z"/></g></g><g><path fill="#1E3D6F" d="M283.276 60.877c1.53 1.521 2.618 3.28 3.265 5.277.645 1.997.922 4.107.828 6.331a27.138 27.138 0 0 1-1.142 6.685 33.016 33.016 0 0 1-2.046 5.217c-.811 1.631-1.688 3.088-2.631 4.372-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.031-6.921 2.52c-2.245.489-4.385.7-6.42.635a22.67 22.67 0 0 1-5.825-.927c-2.182-.653-4.152-1.615-5.912-2.883-1.759-1.267-3.166-2.661-4.223-4.18-1.715-2.583-2.731-5.678-3.048-9.282-.319-3.604.06-7.204 1.136-10.797 1.854-6.184 5.133-10.641 9.838-13.371 4.029-2.344 7.923-3.856 11.679-4.534 3.754-.679 7.338-.507 10.752.516a22.99 22.99 0 0 1 5.55 2.481c1.697 1.053 3.394 2.436 5.09 4.146zm-4.209 5.787c-1.021 1.819-2.479 3.256-4.374 4.31-1.896 1.054-3.537 1.374-4.923.958-.692-.208-1.255-.571-1.687-1.092-.585-.847-.647-2.041-.187-3.58.354-1.18 1.096-2.231 2.225-3.151 1.128-.92 2.64-1.46 4.534-1.621a13.488 13.488 0 0 0-5.197-.507c-1.771.169-3.373.59-4.806 1.265a13.107 13.107 0 0 0-3.74 2.613c-1.06 1.066-1.782 2.242-2.167 3.525-.715 2.387-.182 4.616 1.604 6.689 1.661 1.924 3.415 3.163 5.263 3.716 1.822.546 3.621.422 5.398-.375 1.776-.795 3.323-2.038 4.641-3.727 1.316-1.689 2.256-3.47 2.817-5.344.385-1.283.585-2.51.599-3.679z"/><path fill="none" stroke="#1E3D6F" stroke-width="15" stroke-linecap="square" d="M283.276 60.877c1.53 1.521 2.618 3.28 3.265 5.277.645 1.997.922 4.107.828 6.331a27.138 27.138 0 0 1-1.142 6.685 33.016 33.016 0 0 1-2.046 5.217c-.811 1.631-1.688 3.088-2.631 4.372-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.031-6.921 2.52c-2.245.489-4.385.7-6.42.635a22.67 22.67 0 0 1-5.825-.927c-2.182-.653-4.152-1.615-5.912-2.883-1.759-1.267-3.166-2.661-4.223-4.18-1.715-2.583-2.731-5.678-3.048-9.282-.319-3.604.06-7.204 1.136-10.797 1.854-6.184 5.133-10.641 9.838-13.371 4.029-2.344 7.923-3.856 11.679-4.534 3.754-.679 7.338-.507 10.752.516a22.99 22.99 0 0 1 5.55 2.481c1.697 1.053 3.394 2.436 5.09 4.146zm-4.209 5.787c-1.021 1.819-2.479 3.256-4.374 4.31-1.896 1.054-3.537 1.374-4.923.958-.692-.208-1.255-.571-1.687-1.092-.585-.847-.647-2.041-.187-3.58.354-1.18 1.096-2.231 2.225-3.151 1.128-.92 2.64-1.46 4.534-1.621a13.488 13.488 0 0 0-5.197-.507c-1.771.169-3.373.59-4.806 1.265a13.107 13.107 0 0 0-3.74 2.613c-1.06 1.066-1.782 2.242-2.167 3.525-.715 2.387-.182 4.616 1.604 6.689 1.661 1.924 3.415 3.163 5.263 3.716 1.822.546 3.621.422 5.398-.375 1.776-.795 3.323-2.038 4.641-3.727 1.316-1.689 2.256-3.47 2.817-5.344.385-1.283.585-2.51.599-3.679z"/><path fill="#1E3D6F" d="M283.276 60.877c1.53 1.521 2.618 3.28 3.265 5.277.645 1.997.922 4.107.828 6.331a27.138 27.138 0 0 1-1.142 6.685 33.016 33.016 0 0 1-2.046 5.217c-.811 1.631-1.688 3.088-2.631 4.372-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.031-6.921 2.52c-2.245.489-4.385.7-6.42.635a22.67 22.67 0 0 1-5.825-.927c-2.182-.653-4.152-1.615-5.912-2.883-1.759-1.267-3.166-2.661-4.223-4.18-1.715-2.583-2.731-5.678-3.048-9.282-.319-3.604.06-7.204 1.136-10.797 1.854-6.184 5.133-10.641 9.838-13.371 4.029-2.344 7.923-3.856 11.679-4.534 3.754-.679 7.338-.507 10.752.516a22.99 22.99 0 0 1 5.55 2.481c1.697 1.053 3.394 2.436 5.09 4.146zm-4.209 5.787c-1.021 1.819-2.479 3.256-4.374 4.31-1.896 1.054-3.537 1.374-4.923.958-.692-.208-1.255-.571-1.687-1.092-.585-.847-.647-2.041-.187-3.58.354-1.18 1.096-2.231 2.225-3.151 1.128-.92 2.64-1.46 4.534-1.621a13.488 13.488 0 0 0-5.197-.507c-1.771.169-3.373.59-4.806 1.265a13.107 13.107 0 0 0-3.74 2.613c-1.06 1.066-1.782 2.242-2.167 3.525-.715 2.387-.182 4.616 1.604 6.689 1.661 1.924 3.415 3.163 5.263 3.716 1.822.546 3.621.422 5.398-.375 1.776-.795 3.323-2.038 4.641-3.727 1.316-1.689 2.256-3.47 2.817-5.344.385-1.283.585-2.51.599-3.679z"/><g><path d="M288.276 55.877c1.53 1.521 2.618 3.28 3.265 5.277.645 1.997.922 4.107.828 6.331a27.138 27.138 0 0 1-1.142 6.685 33.016 33.016 0 0 1-2.046 5.217c-.811 1.631-1.688 3.088-2.631 4.372-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.031-6.921 2.52c-2.245.489-4.385.7-6.42.635a22.67 22.67 0 0 1-5.825-.927c-2.182-.653-4.152-1.615-5.912-2.883-1.759-1.267-3.166-2.661-4.223-4.18-1.715-2.583-2.731-5.678-3.048-9.282-.319-3.604.06-7.204 1.136-10.797 1.854-6.184 5.133-10.641 9.838-13.371 4.029-2.344 7.923-3.856 11.679-4.534 3.754-.679 7.338-.507 10.752.516a22.99 22.99 0 0 1 5.55 2.481c1.697 1.053 3.394 2.436 5.09 4.146zm-4.209 5.787c-1.021 1.819-2.479 3.256-4.374 4.31-1.896 1.054-3.537 1.374-4.923.958-.692-.208-1.255-.571-1.687-1.092-.585-.847-.647-2.041-.187-3.58.354-1.18 1.096-2.231 2.225-3.151 1.128-.92 2.64-1.46 4.534-1.621a13.488 13.488 0 0 0-5.197-.507c-1.771.169-3.373.59-4.806 1.265a13.107 13.107 0 0 0-3.74 2.613c-1.06 1.066-1.782 2.242-2.167 3.525-.715 2.387-.182 4.616 1.604 6.689 1.661 1.924 3.415 3.163 5.263 3.716 1.822.546 3.621.422 5.398-.375 1.776-.795 3.323-2.038 4.641-3.727 1.316-1.689 2.256-3.47 2.817-5.344.385-1.283.585-2.51.599-3.679z"/><path fill="none" stroke="#3070B3" stroke-width="15" stroke-linecap="square" d="M288.276 55.877c1.53 1.521 2.618 3.28 3.265 5.277.645 1.997.922 4.107.828 6.331a27.138 27.138 0 0 1-1.142 6.685 33.016 33.016 0 0 1-2.046 5.217c-.811 1.631-1.688 3.088-2.631 4.372-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.031-6.921 2.52c-2.245.489-4.385.7-6.42.635a22.67 22.67 0 0 1-5.825-.927c-2.182-.653-4.152-1.615-5.912-2.883-1.759-1.267-3.166-2.661-4.223-4.18-1.715-2.583-2.731-5.678-3.048-9.282-.319-3.604.06-7.204 1.136-10.797 1.854-6.184 5.133-10.641 9.838-13.371 4.029-2.344 7.923-3.856 11.679-4.534 3.754-.679 7.338-.507 10.752.516a22.99 22.99 0 0 1 5.55 2.481c1.697 1.053 3.394 2.436 5.09 4.146zm-4.209 5.787c-1.021 1.819-2.479 3.256-4.374 4.31-1.896 1.054-3.537 1.374-4.923.958-.692-.208-1.255-.571-1.687-1.092-.585-.847-.647-2.041-.187-3.58.354-1.18 1.096-2.231 2.225-3.151 1.128-.92 2.64-1.46 4.534-1.621a13.488 13.488 0 0 0-5.197-.507c-1.771.169-3.373.59-4.806 1.265a13.107 13.107 0 0 0-3.74 2.613c-1.06 1.066-1.782 2.242-2.167 3.525-.715 2.387-.182 4.616 1.604 6.689 1.661 1.924 3.415 3.163 5.263 3.716 1.822.546 3.621.422 5.398-.375 1.776-.795 3.323-2.038 4.641-3.727 1.316-1.689 2.256-3.47 2.817-5.344.385-1.283.585-2.51.599-3.679z"/><path fill="#FFCB31" d="M288.276 55.877c1.53 1.521 2.618 3.28 3.265 5.277.645 1.997.922 4.107.828 6.331a27.138 27.138 0 0 1-1.142 6.685 33.016 33.016 0 0 1-2.046 5.217c-.811 1.631-1.688 3.088-2.631 4.372-.945 1.283-1.913 2.322-2.905 3.115-2.34 1.928-4.694 3.487-7.065 4.679s-4.678 2.031-6.921 2.52c-2.245.489-4.385.7-6.42.635a22.67 22.67 0 0 1-5.825-.927c-2.182-.653-4.152-1.615-5.912-2.883-1.759-1.267-3.166-2.661-4.223-4.18-1.715-2.583-2.731-5.678-3.048-9.282-.319-3.604.06-7.204 1.136-10.797 1.854-6.184 5.133-10.641 9.838-13.371 4.029-2.344 7.923-3.856 11.679-4.534 3.754-.679 7.338-.507 10.752.516a22.99 22.99 0 0 1 5.55 2.481c1.697 1.053 3.394 2.436 5.09 4.146zm-4.209 5.787c-1.021 1.819-2.479 3.256-4.374 4.31-1.896 1.054-3.537 1.374-4.923.958-.692-.208-1.255-.571-1.687-1.092-.585-.847-.647-2.041-.187-3.58.354-1.18 1.096-2.231 2.225-3.151 1.128-.92 2.64-1.46 4.534-1.621a13.488 13.488 0 0 0-5.197-.507c-1.771.169-3.373.59-4.806 1.265a13.107 13.107 0 0 0-3.74 2.613c-1.06 1.066-1.782 2.242-2.167 3.525-.715 2.387-.182 4.616 1.604 6.689 1.661 1.924 3.415 3.163 5.263 3.716 1.822.546 3.621.422 5.398-.375 1.776-.795 3.323-2.038 4.641-3.727 1.316-1.689 2.256-3.47 2.817-5.344.385-1.283.585-2.51.599-3.679z"/></g></g><foreignObject x="0" y="95" width="265" height="150"><center>';
		return ballball;}

		function rubiGo() {
		var score0 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h58.3v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score1 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h99.5v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score2 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h140.7v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score3 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h181.8v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score4 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h223.1v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score5 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h264.4v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score6 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h305.6v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score7 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h345.4v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';
		var score8 = '<center><svg xmlns="http://www.w3.org/2000/svg" width="414" height="94"><path fill="#00AEEF" d="M13 12h388v69H13z"/><g opacity=".5" fill="#FFF" stroke="#000" stroke-miterlimit="10"><path d="M13 12h58.3v69H13zM71.3 12h82.4v69H71.3zM153.7 12h82.4v69h-82.4zM236.1 12h82.4v69h-82.4zM318.6 12H401v69h-82.4z"/></g><path d="M50.6 45.8c0 9.2-3.4 14.2-9.4 14.2-5.3 0-8.9-5-9-13.9 0-9 4-14 9.5-14 5.6 0 8.9 5 8.9 13.7zm-14.7.4c0 7 2.2 11 5.5 11 3.7 0 5.5-4.4 5.5-11.3 0-6.6-1.7-11-5.5-11-3.2 0-5.5 4-5.5 11.3zM95 36h-.1l-4.7 2.5-.7-2.8 5.9-3.1h3v27H95V36zM118.5 47v2.7h-10.3V47h10.3zM122 59.6v-2.3l3-2.8c6.8-6.5 10-10 10-14 0-2.8-1.3-5.4-5.4-5.4a9.2 9.2 0 0 0-5.7 2.3l-1.2-2.6c2-1.5 4.6-2.7 7.7-2.7 5.8 0 8.2 4 8.2 7.9 0 5-3.6 9-9.3 14.5l-2.1 2h12.1v3h-17.2zM168 55.4c1 .6 3.5 1.7 6 1.7 4.7 0 6.1-3 6.1-5.3 0-3.7-3.4-5.4-7-5.4h-2v-2.7h2c2.7 0 6-1.4 6-4.6 0-2.1-1.3-4-4.7-4a10 10 0 0 0-5.4 1.7l-1-2.6c1.5-1 4.2-2 7.1-2 5.3 0 7.7 3 7.7 6.3 0 2.8-1.6 5.2-5 6.4 3.4.7 6 3.2 6 7 0 4.3-3.3 8.1-9.8 8.1-3 0-5.7-1-7-1.8l1-2.8zM198.6 47v2.7h-10.3V47h10.3zM218.1 59.6v-7.4h-12.5v-2.4l12-17.2h4v16.7h3.8v3h-3.8v7.3h-3.5zm0-10.3v-9c0-1.4 0-2.8.2-4.2h-.2a77 77 0 0 1-2.2 4l-6.6 9.2h8.8zM268 35.6h-10.3l-1 7 2.2-.2c2 0 4.2.5 5.8 1.5a7.7 7.7 0 0 1 3.9 6.9c0 5.3-4.2 9.2-10 9.2-3 0-5.5-.8-6.8-1.6l1-2.8a12 12 0 0 0 5.7 1.5c3.4 0 6.4-2.3 6.4-5.9 0-3.5-2.4-6-7.8-6-1.5 0-2.7.2-3.7.3l1.7-13h13v3.1zM283.4 47v2.7H273V47h10.3zM302.4 35.1c-.8 0-1.7 0-2.8.2a11 11 0 0 0-9.3 9.6 8 8 0 0 1 6.6-3.1c4.8 0 8.1 3.4 8.1 8.7 0 5-3.3 9.5-9 9.5s-9.5-4.5-9.5-11.5c0-5.3 2-9.5 4.6-12.2a17.6 17.6 0 0 1 11.3-4.2v3zm-1 15.6c0-3.8-2.3-6.2-5.6-6.2a6 6 0 0 0-5.2 3.3c-.3.5-.5 1-.5 1.7.1 4.4 2.2 7.7 6 7.7 3.1 0 5.3-2.6 5.3-6.5zM349.6 32.6V35l-11.8 24.6H334l11.8-24h-13.3v-3h17zM363.5 47v2.7h-10.3V47h10.3zM366.8 52.7c0-3.4 2-5.8 5.3-7.2v-.1c-3-1.5-4.3-3.8-4.3-6.1 0-4.3 3.6-7.2 8.4-7.2 5.2 0 7.8 3.3 7.8 6.7 0 2.2-1.1 4.7-4.4 6.3 3.3 1.4 5.4 3.8 5.4 7 0 4.8-4 8-9.2 8-5.6 0-9-3.4-9-7.4zm14.5-.2c0-3.2-2.3-4.8-6-5.9-3 1-4.8 3-4.8 5.6-.1 2.7 2 5.2 5.4 5.2 3.3 0 5.4-2 5.4-4.9zm-10-13.5c0 2.7 2 4.2 5.1 5 2.3-.8 4.1-2.4 4.1-4.9 0-2.1-1.3-4.4-4.5-4.4-3 0-4.7 2-4.7 4.3z"/></svg><center>';


		if (cat1 > 10 && cat1/tot1 > 80) { return score2;  }
  else if (cat1 > 5 && cat1/tot1 > 50) { return score1; }
  else { return score0; }




		return score0;}

				function ballEnd() {
		var ballclose = '</center></foreignObject></svg>';
		return ballclose;}

function bigLet(val) {
	var tots = "<span style='float: right;'>";
	var str = val.toString();
	for (var i = 0; i < str.length; i++) {
        tots += pushNumb(str.charAt(i));
}
	tots += "</span>"
	return tots;
}

function showNum(val) {
	var tots = "";
	var str = val.toString();
	for (var i = 0; i < str.length; i++) {
        tots += pushNum(str.charAt(i));
}
	return tots;
}

function pushNum(val2) {
	if (val2 == "0") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="22.7" height="35.3"><path fill="#1E3D6F" d="M10.7 9.5c1.4 0 2.5.3 3.4.9s1.7 1.3 2.3 2.3.9 2 1 3 .4 2.3.4 3.5v.5a12.4 12.4 0 0 1-4 7.9A5.9 5.9 0 0 1 10 29c-1.4 0-2.6-.3-3.7-1S4.3 26.4 3.7 25a15.3 15.3 0 0 1 .6-12c.5-1 1.4-1.9 2.4-2.5s2.4-1 4-1zm-.5 6.3c-.6 0-1.1.2-1.5.6s-.7 1-.8 1.5l-.3 2c0 .4.1 1 .3 1.4s.5.9 1 1.2.9.5 1.4.5c.7 0 1.2-.3 1.6-.5s.6-.6.8-1 .4-1.2.4-1.9c0-1.1-.3-2-.8-2.7s-1.2-1-2-1.1z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M10.7 9.5c1.4 0 2.5.3 3.4.9s1.7 1.3 2.3 2.3.9 2 1 3 .4 2.3.4 3.5v.5a12.4 12.4 0 0 1-4 7.9A5.9 5.9 0 0 1 10 29c-1.4 0-2.6-.3-3.7-1S4.3 26.4 3.7 25a15.3 15.3 0 0 1 .6-12c.5-1 1.4-1.9 2.4-2.5s2.4-1 4-1zm-.5 6.3c-.6 0-1.1.2-1.5.6s-.7 1-.8 1.5l-.3 2c0 .4.1 1 .3 1.4s.5.9 1 1.2.9.5 1.4.5c.7 0 1.2-.3 1.6-.5s.6-.6.8-1 .4-1.2.4-1.9c0-1.1-.3-2-.8-2.7s-1.2-1-2-1.1z"/><path fill="#1E3D6F" d="M10.7 9.5c1.4 0 2.5.3 3.4.9s1.7 1.3 2.3 2.3.9 2 1 3 .4 2.3.4 3.5v.5a12.4 12.4 0 0 1-4 7.9A5.9 5.9 0 0 1 10 29c-1.4 0-2.6-.3-3.7-1S4.3 26.4 3.7 25a15.3 15.3 0 0 1 .6-12c.5-1 1.4-1.9 2.4-2.5s2.4-1 4-1zm-.5 6.3c-.6 0-1.1.2-1.5.6s-.7 1-.8 1.5l-.3 2c0 .4.1 1 .3 1.4s.5.9 1 1.2.9.5 1.4.5c.7 0 1.2-.3 1.6-.5s.6-.6.8-1 .4-1.2.4-1.9c0-1.1-.3-2-.8-2.7s-1.2-1-2-1.1z"/><path d="M12.2 8c1.4 0 2.5.3 3.4.9s1.7 1.3 2.3 2.3.9 2 1 3 .4 2.3.4 3.5v.5a12.4 12.4 0 0 1-4 7.9 5.9 5.9 0 0 1-3.9 1.5c-1.4 0-2.6-.3-3.7-1S5.8 25 5.2 23.5a15.3 15.3 0 0 1 .6-12c.5-1 1.4-1.9 2.4-2.5s2.4-1 4-1zm-.5 6.3c-.6 0-1.1.2-1.5.6s-.7 1-.8 1.5l-.3 2c0 .4.1 1 .3 1.4s.5.9 1 1.2.9.5 1.4.5c.7 0 1.2-.3 1.6-.5s.6-.6.8-1 .4-1.2.4-1.9c0-1.1-.3-2-.8-2.7s-1.2-1-2-1.1z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M12.2 8c1.4 0 2.5.3 3.4.9s1.7 1.3 2.3 2.3.9 2 1 3 .4 2.3.4 3.5v.5a12.4 12.4 0 0 1-4 7.9 5.9 5.9 0 0 1-3.9 1.5c-1.4 0-2.6-.3-3.7-1S5.8 25 5.2 23.5a15.3 15.3 0 0 1 .6-12c.5-1 1.4-1.9 2.4-2.5s2.4-1 4-1zm-.5 6.3c-.6 0-1.1.2-1.5.6s-.7 1-.8 1.5l-.3 2c0 .4.1 1 .3 1.4s.5.9 1 1.2.9.5 1.4.5c.7 0 1.2-.3 1.6-.5s.6-.6.8-1 .4-1.2.4-1.9c0-1.1-.3-2-.8-2.7s-1.2-1-2-1.1z"/><path fill="#FFCB31" d="M12.2 8c1.4 0 2.5.3 3.4.9s1.7 1.3 2.3 2.3.9 2 1 3 .4 2.3.4 3.5v.5a12.4 12.4 0 0 1-4 7.9 5.9 5.9 0 0 1-3.9 1.5c-1.4 0-2.6-.3-3.7-1S5.8 25 5.2 23.5a15.3 15.3 0 0 1 .6-12c.5-1 1.4-1.9 2.4-2.5s2.4-1 4-1zm-.5 6.3c-.6 0-1.1.2-1.5.6s-.7 1-.8 1.5l-.3 2c0 .4.1 1 .3 1.4s.5.9 1 1.2.9.5 1.4.5c.7 0 1.2-.3 1.6-.5s.6-.6.8-1 .4-1.2.4-1.9c0-1.1-.3-2-.8-2.7s-1.2-1-2-1.1z"/></svg>'}
	else if (val2 == "1") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="35.3"><path fill="#1E3D6F" d="M11.7 29.6l-5.2.2.2-17.2-3 .3.5-3 7.4-2.3.1 22z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M11.7 29.6l-5.2.2.2-17.2-3 .3.5-3 7.4-2.3.1 22z"/><path fill="#1E3D6F" d="M11.7 29.6l-5.2.2.2-17.2-3 .3.5-3 7.4-2.3.1 22z"/><path d="M13.2 28l-5.2.3.2-17.2-3 .3.5-3 7.4-2.3.1 22z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M13.2 28l-5.2.3.2-17.2-3 .3.5-3 7.4-2.3.1 22z"/><path fill="#FFCB31" d="M13.2 28l-5.2.3.2-17.2-3 .3.5-3 7.4-2.3.1 22z"/></svg>';}
		else if (val2 == "2") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="24.3" height="35.3"><path fill="#1E3D6F" d="M12.3 20A4.9 4.9 0 0 0 9 22.3c-.8 1.4-1.4 2.5-1.6 3.4L19 24.3l-1.3 3.6L3 29.7c0-2.4.3-4.5.7-6 .4-1.7.8-3 1.3-3.9.5-.9 1-1.5 1.5-1.9.5-.4 1-.7 1.6-.9.8 0 1.5-.2 2.3-.6.8-.3 1.6-.8 2.3-1.4.7-.6 1.3-1.2 1.7-1.8.5-.5.7-1 .7-1.3 0-.1 0-.2-.2-.2l-.6-.1-2 .1-1.5.3a29.8 29.8 0 0 0-5.2 2l-.2-.6-.5-1.4a236.5 236.5 0 0 0-1-3.4 263.6 263.6 0 0 1 5.3-1.4 31 31 0 0 1 5.1-.5c.7 0 1.3 0 1.8.2l1.5.5a4.5 4.5 0 0 1 2 2.4c.2.4.3.8.2 1.3 0 .8-.2 1.6-.6 2.5a12.3 12.3 0 0 1-4.1 5 8 8 0 0 1-2.8 1.3z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M12.3 20A4.9 4.9 0 0 0 9 22.3c-.8 1.4-1.4 2.5-1.6 3.4L19 24.3l-1.3 3.6L3 29.7c0-2.4.3-4.5.7-6 .4-1.7.8-3 1.3-3.9.5-.9 1-1.5 1.5-1.9.5-.4 1-.7 1.6-.9.8 0 1.5-.2 2.3-.6.8-.3 1.6-.8 2.3-1.4.7-.6 1.3-1.2 1.7-1.8.5-.5.7-1 .7-1.3 0-.1 0-.2-.2-.2l-.6-.1-2 .1-1.5.3a29.8 29.8 0 0 0-5.2 2l-.2-.6-.5-1.4a236.5 236.5 0 0 0-1-3.4 263.6 263.6 0 0 1 5.3-1.4 31 31 0 0 1 5.1-.5c.7 0 1.3 0 1.8.2l1.5.5a4.5 4.5 0 0 1 2 2.4c.2.4.3.8.2 1.3 0 .8-.2 1.6-.6 2.5a12.3 12.3 0 0 1-4.1 5 8 8 0 0 1-2.8 1.3z"/><path fill="#1E3D6F" d="M12.3 20A4.9 4.9 0 0 0 9 22.3c-.8 1.4-1.4 2.5-1.6 3.4L19 24.3l-1.3 3.6L3 29.7c0-2.4.3-4.5.7-6 .4-1.7.8-3 1.3-3.9.5-.9 1-1.5 1.5-1.9.5-.4 1-.7 1.6-.9.8 0 1.5-.2 2.3-.6.8-.3 1.6-.8 2.3-1.4.7-.6 1.3-1.2 1.7-1.8.5-.5.7-1 .7-1.3 0-.1 0-.2-.2-.2l-.6-.1-2 .1-1.5.3a29.8 29.8 0 0 0-5.2 2l-.2-.6-.5-1.4a236.5 236.5 0 0 0-1-3.4 263.6 263.6 0 0 1 5.3-1.4 31 31 0 0 1 5.1-.5c.7 0 1.3 0 1.8.2l1.5.5a4.5 4.5 0 0 1 2 2.4c.2.4.3.8.2 1.3 0 .8-.2 1.6-.6 2.5a12.3 12.3 0 0 1-4.1 5 8 8 0 0 1-2.8 1.3z"/><path d="M13.8 18.4a4.9 4.9 0 0 0-3.2 2.5c-.8 1.4-1.4 2.5-1.6 3.4l11.6-1.5-1.3 3.6-14.8 1.8c0-2.4.3-4.5.7-6 .4-1.7.8-3 1.3-3.9.5-.9 1-1.5 1.5-1.9.5-.4 1-.7 1.6-.9.8 0 1.5-.2 2.3-.6.8-.3 1.6-.8 2.3-1.4.7-.6 1.3-1.2 1.7-1.8.5-.5.7-1 .7-1.3 0-.1 0-.2-.2-.2l-.6-.1-2 .1-1.5.3a29.8 29.8 0 0 0-5.2 2l-.2-.6-.5-1.4a248.2 248.2 0 0 0-1-3.4 263.6 263.6 0 0 1 5.3-1.4 31 31 0 0 1 5.1-.5c.7 0 1.3 0 1.8.2l1.5.5a4.5 4.5 0 0 1 2 2.4c.2.4.3.8.2 1.3 0 .8-.2 1.6-.6 2.5a12.3 12.3 0 0 1-4.1 5 8 8 0 0 1-2.8 1.3z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M13.8 18.4a4.9 4.9 0 0 0-3.2 2.5c-.8 1.4-1.4 2.5-1.6 3.4l11.6-1.5-1.3 3.6-14.8 1.8c0-2.4.3-4.5.7-6 .4-1.7.8-3 1.3-3.9.5-.9 1-1.5 1.5-1.9.5-.4 1-.7 1.6-.9.8 0 1.5-.2 2.3-.6.8-.3 1.6-.8 2.3-1.4.7-.6 1.3-1.2 1.7-1.8.5-.5.7-1 .7-1.3 0-.1 0-.2-.2-.2l-.6-.1-2 .1-1.5.3a29.8 29.8 0 0 0-5.2 2l-.2-.6-.5-1.4a248.2 248.2 0 0 0-1-3.4 263.6 263.6 0 0 1 5.3-1.4 31 31 0 0 1 5.1-.5c.7 0 1.3 0 1.8.2l1.5.5a4.5 4.5 0 0 1 2 2.4c.2.4.3.8.2 1.3 0 .8-.2 1.6-.6 2.5a12.3 12.3 0 0 1-4.1 5 8 8 0 0 1-2.8 1.3z"/><path fill="#FFCB31" d="M13.8 18.4a4.9 4.9 0 0 0-3.2 2.5c-.8 1.4-1.4 2.5-1.6 3.4l11.6-1.5-1.3 3.6-14.8 1.8c0-2.4.3-4.5.7-6 .4-1.7.8-3 1.3-3.9.5-.9 1-1.5 1.5-1.9.5-.4 1-.7 1.6-.9.8 0 1.5-.2 2.3-.6.8-.3 1.6-.8 2.3-1.4.7-.6 1.3-1.2 1.7-1.8.5-.5.7-1 .7-1.3 0-.1 0-.2-.2-.2l-.6-.1-2 .1-1.5.3a29.8 29.8 0 0 0-5.2 2l-.2-.6-.5-1.4a248.2 248.2 0 0 0-1-3.4 263.6 263.6 0 0 1 5.3-1.4 31 31 0 0 1 5.1-.5c.7 0 1.3 0 1.8.2l1.5.5a4.5 4.5 0 0 1 2 2.4c.2.4.3.8.2 1.3 0 .8-.2 1.6-.6 2.5a12.3 12.3 0 0 1-4.1 5 8 8 0 0 1-2.8 1.3z"/></svg>';}
		else if (val2 == "3") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="35.3"><path fill="#1E3D6F" d="M9.4 16.2l.5.1c.6 0 1.3-.1 2-.5.8-.4 1.4-.9 2-1.4.4-.6.7-1 .7-1.3 0-.2 0-.3-.2-.3l-.5-.1h-1.7a34.5 34.5 0 0 0-6 .9l-.6.6-.6.5-.1-.5-.4-1.5a289.9 289.9 0 0 0-1-3.4A261.3 261.3 0 0 1 8.9 8a31.4 31.4 0 0 1 5.1-.4c.7 0 1.2.2 1.8.3l1.4.6a4.5 4.5 0 0 1 2 2.4l.1.8c0 1-1 2.4-2.7 4.1l.3.2.8.4 1 1c.4.4.7 1 1 1.6a7 7 0 0 1 1 3.8c0 .6-.2 1.1-.5 1.6-.5 1.1-1.2 2-2.2 2.5-1 .5-1.9.9-2.9 1a13.3 13.3 0 0 1-4.4-.1l-7-1.8 1-3.6a32 32 0 0 0 5.6 1.3c1.4 0 2.5 0 3.3-.4.8-.3 1.3-.7 1.5-1.2.2-.4.4-.8.4-1.2 0-.3-.2-.7-.6-1.3-.4-.5-.8-.8-1-.9-1.6.5-3.2.8-4.8.9l.3-3.5z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M9.4 16.2l.5.1c.6 0 1.3-.1 2-.5.8-.4 1.4-.9 2-1.4.4-.6.7-1 .7-1.3 0-.2 0-.3-.2-.3l-.5-.1h-1.7a34.5 34.5 0 0 0-6 .9l-.6.6-.6.5-.1-.5-.4-1.5a289.9 289.9 0 0 0-1-3.4A261.3 261.3 0 0 1 8.9 8a31.4 31.4 0 0 1 5.1-.4c.7 0 1.2.2 1.8.3l1.4.6a4.5 4.5 0 0 1 2 2.4l.1.8c0 1-1 2.4-2.7 4.1l.3.2.8.4 1 1c.4.4.7 1 1 1.6a7 7 0 0 1 1 3.8c0 .6-.2 1.1-.5 1.6-.5 1.1-1.2 2-2.2 2.5-1 .5-1.9.9-2.9 1a13.3 13.3 0 0 1-4.4-.1l-7-1.8 1-3.6a32 32 0 0 0 5.6 1.3c1.4 0 2.5 0 3.3-.4.8-.3 1.3-.7 1.5-1.2.2-.4.4-.8.4-1.2 0-.3-.2-.7-.6-1.3-.4-.5-.8-.8-1-.9-1.6.5-3.2.8-4.8.9l.3-3.5z"/><path fill="#1E3D6F" d="M9.4 16.2l.5.1c.6 0 1.3-.1 2-.5.8-.4 1.4-.9 2-1.4.4-.6.7-1 .7-1.3 0-.2 0-.3-.2-.3l-.5-.1h-1.7a34.5 34.5 0 0 0-6 .9l-.6.6-.6.5-.1-.5-.4-1.5a289.9 289.9 0 0 0-1-3.4A261.3 261.3 0 0 1 8.9 8a31.4 31.4 0 0 1 5.1-.4c.7 0 1.2.2 1.8.3l1.4.6a4.5 4.5 0 0 1 2 2.4l.1.8c0 1-1 2.4-2.7 4.1l.3.2.8.4 1 1c.4.4.7 1 1 1.6a7 7 0 0 1 1 3.8c0 .6-.2 1.1-.5 1.6-.5 1.1-1.2 2-2.2 2.5-1 .5-1.9.9-2.9 1a13.3 13.3 0 0 1-4.4-.1l-7-1.8 1-3.6a32 32 0 0 0 5.6 1.3c1.4 0 2.5 0 3.3-.4.8-.3 1.3-.7 1.5-1.2.2-.4.4-.8.4-1.2 0-.3-.2-.7-.6-1.3-.4-.5-.8-.8-1-.9-1.6.5-3.2.8-4.8.9l.3-3.5z"/><path d="M11 14.7l.4.1c.6 0 1.3-.1 2-.5.8-.4 1.4-.9 2-1.4.4-.6.7-1 .7-1.3 0-.2 0-.3-.2-.3l-.5-.1h-1.7a34.5 34.5 0 0 0-6 .9l-.6.6-.6.5-.1-.5-.4-1.5a289.9 289.9 0 0 0-1-3.4 261.3 261.3 0 0 1 5.4-1.2 31.4 31.4 0 0 1 5.1-.4c.7 0 1.2.2 1.8.3l1.4.6a4.5 4.5 0 0 1 2 2.4l.1.8c0 1-1 2.4-2.7 4.1l.3.2.8.4 1 1c.4.4.7 1 1 1.6a7 7 0 0 1 1 3.8c0 .6-.2 1.1-.5 1.6-.5 1.1-1.2 2-2.2 2.5-1 .5-1.9.9-2.9 1a13.3 13.3 0 0 1-4.4-.1l-7-1.8 1-3.6a32 32 0 0 0 5.6 1.3c1.4 0 2.5 0 3.3-.4.8-.3 1.3-.7 1.5-1.2.2-.4.4-.8.4-1.2 0-.3-.2-.7-.6-1.3-.4-.5-.8-.8-1-.9-1.6.5-3.2.8-4.8.9l.3-3.5z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M11 14.7l.4.1c.6 0 1.3-.1 2-.5.8-.4 1.4-.9 2-1.4.4-.6.7-1 .7-1.3 0-.2 0-.3-.2-.3l-.5-.1h-1.7a34.5 34.5 0 0 0-6 .9l-.6.6-.6.5-.1-.5-.4-1.5a289.9 289.9 0 0 0-1-3.4 261.3 261.3 0 0 1 5.4-1.2 31.4 31.4 0 0 1 5.1-.4c.7 0 1.2.2 1.8.3l1.4.6a4.5 4.5 0 0 1 2 2.4l.1.8c0 1-1 2.4-2.7 4.1l.3.2.8.4 1 1c.4.4.7 1 1 1.6a7 7 0 0 1 1 3.8c0 .6-.2 1.1-.5 1.6-.5 1.1-1.2 2-2.2 2.5-1 .5-1.9.9-2.9 1a13.3 13.3 0 0 1-4.4-.1l-7-1.8 1-3.6a32 32 0 0 0 5.6 1.3c1.4 0 2.5 0 3.3-.4.8-.3 1.3-.7 1.5-1.2.2-.4.4-.8.4-1.2 0-.3-.2-.7-.6-1.3-.4-.5-.8-.8-1-.9-1.6.5-3.2.8-4.8.9l.3-3.5z"/><path fill="#FFCB31" d="M11 14.7l.4.1c.6 0 1.3-.1 2-.5.8-.4 1.4-.9 2-1.4.4-.6.7-1 .7-1.3 0-.2 0-.3-.2-.3l-.5-.1h-1.7a34.5 34.5 0 0 0-6 .9l-.6.6-.6.5-.1-.5-.4-1.5a289.9 289.9 0 0 0-1-3.4 261.3 261.3 0 0 1 5.4-1.2 31.4 31.4 0 0 1 5.1-.4c.7 0 1.2.2 1.8.3l1.4.6a4.5 4.5 0 0 1 2 2.4l.1.8c0 1-1 2.4-2.7 4.1l.3.2.8.4 1 1c.4.4.7 1 1 1.6a7 7 0 0 1 1 3.8c0 .6-.2 1.1-.5 1.6-.5 1.1-1.2 2-2.2 2.5-1 .5-1.9.9-2.9 1a13.3 13.3 0 0 1-4.4-.1l-7-1.8 1-3.6a32 32 0 0 0 5.6 1.3c1.4 0 2.5 0 3.3-.4.8-.3 1.3-.7 1.5-1.2.2-.4.4-.8.4-1.2 0-.3-.2-.7-.6-1.3-.4-.5-.8-.8-1-.9-1.6.5-3.2.8-4.8.9l.3-3.5z"/></svg>';}
		else if (val2 == "4") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="22.7" height="35.3"><path fill="#1E3D6F" d="M3.6 8.2l5-.5-.7 6.8 3.4.7L12 7l5.8-.7-2.3 23c-.4.3-1 .4-1.9.4a18.1 18.1 0 0 1-3.2-.3l.6-10.6-8-1.2.6-9.4z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M3.6 8.2l5-.5-.7 6.8 3.4.7L12 7l5.8-.7-2.3 23c-.4.3-1 .4-1.9.4a18.1 18.1 0 0 1-3.2-.3l.6-10.6-8-1.2.6-9.4z"/><path fill="#1E3D6F" d="M3.6 8.2l5-.5-.7 6.8 3.4.7L12 7l5.8-.7-2.3 23c-.4.3-1 .4-1.9.4a18.1 18.1 0 0 1-3.2-.3l.6-10.6-8-1.2.6-9.4z"/><path d="M5.1 6.7l5-.5-.7 6.8 3.4.7.7-8.2 5.8-.7-2.3 23c-.4.3-1 .4-1.9.4a18.1 18.1 0 0 1-3.2-.3l.6-10.6-8-1.2.6-9.4z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M5.1 6.7l5-.5-.7 6.8 3.4.7.7-8.2 5.8-.7-2.3 23c-.4.3-1 .4-1.9.4a18.1 18.1 0 0 1-3.2-.3l.6-10.6-8-1.2.6-9.4z"/><path fill="#FFCB31" d="M5.1 6.7l5-.5-.7 6.8 3.4.7.7-8.2 5.8-.7-2.3 23c-.4.3-1 .4-1.9.4a18.1 18.1 0 0 1-3.2-.3l.6-10.6-8-1.2.6-9.4z"/></svg>';}
		else if (val2 == "5") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="35.3"><path fill="#1E3D6F" d="M6.7 20.4A128 128 0 0 0 4.5 8.8a43.1 43.1 0 0 0 7.9 1 49.4 49.4 0 0 0 9.5-.6l-.3 4.1a40.2 40.2 0 0 1-5.8.8 19.5 19.5 0 0 1-6-.6L10 17a63.4 63.4 0 0 1 6 0c.8.2 1.4.4 1.8.7l.3.1.7.5 1 1 .9 1.7a7 7 0 0 1 .6 4c0 .5-.3 1-.5 1.5-.7 1-1.5 1.8-2.4 2.3s-2 .7-3 .8a13.2 13.2 0 0 1-4.4-.5l-7-2.4 1.4-3.5a31.8 31.8 0 0 0 5.5 1.8c1.4.2 2.5.2 3.3-.1.8-.3 1.4-.7 1.6-1.1l.5-1.1c0-.4 0-.8-.5-1.4-.4-.6-.7-1-1-1-1 .3-3.7.3-8 0z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M6.7 20.4A128 128 0 0 0 4.5 8.8a43.1 43.1 0 0 0 7.9 1 49.4 49.4 0 0 0 9.5-.6l-.3 4.1a40.2 40.2 0 0 1-5.8.8 19.5 19.5 0 0 1-6-.6L10 17a63.4 63.4 0 0 1 6 0c.8.2 1.4.4 1.8.7l.3.1.7.5 1 1 .9 1.7a7 7 0 0 1 .6 4c0 .5-.3 1-.5 1.5-.7 1-1.5 1.8-2.4 2.3s-2 .7-3 .8a13.2 13.2 0 0 1-4.4-.5l-7-2.4 1.4-3.5a31.8 31.8 0 0 0 5.5 1.8c1.4.2 2.5.2 3.3-.1.8-.3 1.4-.7 1.6-1.1l.5-1.1c0-.4 0-.8-.5-1.4-.4-.6-.7-1-1-1-1 .3-3.7.3-8 0z"/><path fill="#1E3D6F" d="M6.7 20.4A128 128 0 0 0 4.5 8.8a43.1 43.1 0 0 0 7.9 1 49.4 49.4 0 0 0 9.5-.6l-.3 4.1a40.2 40.2 0 0 1-5.8.8 19.5 19.5 0 0 1-6-.6L10 17a63.4 63.4 0 0 1 6 0c.8.2 1.4.4 1.8.7l.3.1.7.5 1 1 .9 1.7a7 7 0 0 1 .6 4c0 .5-.3 1-.5 1.5-.7 1-1.5 1.8-2.4 2.3s-2 .7-3 .8a13.2 13.2 0 0 1-4.4-.5l-7-2.4 1.4-3.5a31.8 31.8 0 0 0 5.5 1.8c1.4.2 2.5.2 3.3-.1.8-.3 1.4-.7 1.6-1.1l.5-1.1c0-.4 0-.8-.5-1.4-.4-.6-.7-1-1-1-1 .3-3.7.3-8 0z"/><path d="M8.2 19A128 128 0 0 0 6 7.2a43.1 43.1 0 0 0 7.9 1 49.4 49.4 0 0 0 9.5-.6l-.3 4.1a40.2 40.2 0 0 1-5.8.8 19.5 19.5 0 0 1-6-.6l.1 3.6a63.4 63.4 0 0 1 6 0c.8.2 1.4.4 1.8.7l.3.1.7.5 1 1 .9 1.7a7 7 0 0 1 .6 4c0 .5-.3 1-.5 1.5-.7 1-1.5 1.8-2.4 2.3s-2 .7-3 .8a13.2 13.2 0 0 1-4.4-.5l-7-2.4 1.4-3.5a31.8 31.8 0 0 0 5.5 1.8c1.4.2 2.5.2 3.3-.1.8-.3 1.4-.7 1.6-1.1l.5-1.1c0-.4 0-.8-.5-1.4-.4-.6-.7-1-1-1-1 .3-3.7.3-8 0z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M8.2 19A128 128 0 0 0 6 7.2a43.1 43.1 0 0 0 7.9 1 49.4 49.4 0 0 0 9.5-.6l-.3 4.1a40.2 40.2 0 0 1-5.8.8 19.5 19.5 0 0 1-6-.6l.1 3.6a63.4 63.4 0 0 1 6 0c.8.2 1.4.4 1.8.7l.3.1.7.5 1 1 .9 1.7a7 7 0 0 1 .6 4c0 .5-.3 1-.5 1.5-.7 1-1.5 1.8-2.4 2.3s-2 .7-3 .8a13.2 13.2 0 0 1-4.4-.5l-7-2.4 1.4-3.5a31.8 31.8 0 0 0 5.5 1.8c1.4.2 2.5.2 3.3-.1.8-.3 1.4-.7 1.6-1.1l.5-1.1c0-.4 0-.8-.5-1.4-.4-.6-.7-1-1-1-1 .3-3.7.3-8 0z"/><path fill="#FFCB31" d="M8.2 19A128 128 0 0 0 6 7.2a43.1 43.1 0 0 0 7.9 1 49.4 49.4 0 0 0 9.5-.6l-.3 4.1a40.2 40.2 0 0 1-5.8.8 19.5 19.5 0 0 1-6-.6l.1 3.6a63.4 63.4 0 0 1 6 0c.8.2 1.4.4 1.8.7l.3.1.7.5 1 1 .9 1.7a7 7 0 0 1 .6 4c0 .5-.3 1-.5 1.5-.7 1-1.5 1.8-2.4 2.3s-2 .7-3 .8a13.2 13.2 0 0 1-4.4-.5l-7-2.4 1.4-3.5a31.8 31.8 0 0 0 5.5 1.8c1.4.2 2.5.2 3.3-.1.8-.3 1.4-.7 1.6-1.1l.5-1.1c0-.4 0-.8-.5-1.4-.4-.6-.7-1-1-1-1 .3-3.7.3-8 0z"/></svg>';}
		else if (val2 == "6") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="25.7" height="35.3"><path fill="#1E3D6F" d="M10.4 18.8l1.2-.4 1.4-.2c.6 0 1 .1 1.3.4h.4l.8.4c.4.2.6.5 1 1l1.2 1.4a7.2 7.2 0 0 1 1.3 3.8c0 .5-.1 1.1-.3 1.6a7.1 7.1 0 0 1-3.8 4 8.6 8.6 0 0 1-3.7.8 10.8 10.8 0 0 1-4.1-.5 5.8 5.8 0 0 1-3.8-3.8v-1c0-.6 0-1.5.2-2.5l.9-3.3 1-2.6a16.9 16.9 0 0 1 6.9-7.3c1.8-1.1 4-2 6.6-2.4l-3 4.7a42 42 0 0 0-4 3.6c-.8 1-1.3 1.7-1.5 2.3zm3.6 5c-.3-.7-.6-1.2-1.2-1.6s-1.2-.6-1.8-.6l-.6.1c-.3.1-.7.3-1 .7l-1.2 1-.7 1.1v.5c0 .7.2 1.3.7 1.9s1.2 1 2.1 1l.6-.1c.8-.1 1.4-.3 1.9-.7s.8-.7 1-1.1.3-.9.3-1.3l-.1-.9z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M10.4 18.8l1.2-.4 1.4-.2c.6 0 1 .1 1.3.4h.4l.8.4c.4.2.6.5 1 1l1.2 1.4a7.2 7.2 0 0 1 1.3 3.8c0 .5-.1 1.1-.3 1.6a7.1 7.1 0 0 1-3.8 4 8.6 8.6 0 0 1-3.7.8 10.8 10.8 0 0 1-4.1-.5 5.8 5.8 0 0 1-3.8-3.8v-1c0-.6 0-1.5.2-2.5l.9-3.3 1-2.6a16.9 16.9 0 0 1 6.9-7.3c1.8-1.1 4-2 6.6-2.4l-3 4.7a42 42 0 0 0-4 3.6c-.8 1-1.3 1.7-1.5 2.3zm3.6 5c-.3-.7-.6-1.2-1.2-1.6s-1.2-.6-1.8-.6l-.6.1c-.3.1-.7.3-1 .7l-1.2 1-.7 1.1v.5c0 .7.2 1.3.7 1.9s1.2 1 2.1 1l.6-.1c.8-.1 1.4-.3 1.9-.7s.8-.7 1-1.1.3-.9.3-1.3l-.1-.9z"/><path fill="#1E3D6F" d="M10.4 18.8l1.2-.4 1.4-.2c.6 0 1 .1 1.3.4h.4l.8.4c.4.2.6.5 1 1l1.2 1.4a7.2 7.2 0 0 1 1.3 3.8c0 .5-.1 1.1-.3 1.6a7.1 7.1 0 0 1-3.8 4 8.6 8.6 0 0 1-3.7.8 10.8 10.8 0 0 1-4.1-.5 5.8 5.8 0 0 1-3.8-3.8v-1c0-.6 0-1.5.2-2.5l.9-3.3 1-2.6a16.9 16.9 0 0 1 6.9-7.3c1.8-1.1 4-2 6.6-2.4l-3 4.7a42 42 0 0 0-4 3.6c-.8 1-1.3 1.7-1.5 2.3zm3.6 5c-.3-.7-.6-1.2-1.2-1.6s-1.2-.6-1.8-.6l-.6.1c-.3.1-.7.3-1 .7l-1.2 1-.7 1.1v.5c0 .7.2 1.3.7 1.9s1.2 1 2.1 1l.6-.1c.8-.1 1.4-.3 1.9-.7s.8-.7 1-1.1.3-.9.3-1.3l-.1-.9z"/><path d="M11.9 17.3l1.2-.4 1.4-.2c.6 0 1 .1 1.3.4h.4l.8.4c.4.2.6.5 1 1l1.2 1.4a7.2 7.2 0 0 1 1.3 3.8c0 .5-.1 1.1-.3 1.6a7.1 7.1 0 0 1-3.8 4 8.6 8.6 0 0 1-3.7.8 10.8 10.8 0 0 1-4.1-.5 5.8 5.8 0 0 1-3.8-3.8v-1c0-.6 0-1.5.2-2.5L6 19l1-2.6A16.9 16.9 0 0 1 13.8 9c1.8-1.1 4-2 6.6-2.4l-3 4.7a42 42 0 0 0-4 3.6c-.8 1-1.3 1.7-1.5 2.3zm3.6 5c-.3-.7-.6-1.2-1.2-1.6s-1.2-.6-1.8-.6l-.6.1c-.3.1-.7.3-1 .7l-1.2 1L9 23v.5c0 .7.2 1.3.7 1.9s1.2 1 2.1 1l.6-.1c.8-.1 1.4-.3 1.9-.7s.8-.7 1-1.1.3-.9.3-1.3l-.1-.9z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M11.9 17.3l1.2-.4 1.4-.2c.6 0 1 .1 1.3.4h.4l.8.4c.4.2.6.5 1 1l1.2 1.4a7.2 7.2 0 0 1 1.3 3.8c0 .5-.1 1.1-.3 1.6a7.1 7.1 0 0 1-3.8 4 8.6 8.6 0 0 1-3.7.8 10.8 10.8 0 0 1-4.1-.5 5.8 5.8 0 0 1-3.8-3.8v-1c0-.6 0-1.5.2-2.5L6 19l1-2.6A16.9 16.9 0 0 1 13.8 9c1.8-1.1 4-2 6.6-2.4l-3 4.7a42 42 0 0 0-4 3.6c-.8 1-1.3 1.7-1.5 2.3zm3.6 5c-.3-.7-.6-1.2-1.2-1.6s-1.2-.6-1.8-.6l-.6.1c-.3.1-.7.3-1 .7l-1.2 1L9 23v.5c0 .7.2 1.3.7 1.9s1.2 1 2.1 1l.6-.1c.8-.1 1.4-.3 1.9-.7s.8-.7 1-1.1.3-.9.3-1.3l-.1-.9z"/><path fill="#FFCB31" d="M11.9 17.3l1.2-.4 1.4-.2c.6 0 1 .1 1.3.4h.4l.8.4c.4.2.6.5 1 1l1.2 1.4a7.2 7.2 0 0 1 1.3 3.8c0 .5-.1 1.1-.3 1.6a7.1 7.1 0 0 1-3.8 4 8.6 8.6 0 0 1-3.7.8 10.8 10.8 0 0 1-4.1-.5 5.8 5.8 0 0 1-3.8-3.8v-1c0-.6 0-1.5.2-2.5L6 19l1-2.6A16.9 16.9 0 0 1 13.8 9c1.8-1.1 4-2 6.6-2.4l-3 4.7a42 42 0 0 0-4 3.6c-.8 1-1.3 1.7-1.5 2.3zm3.6 5c-.3-.7-.6-1.2-1.2-1.6s-1.2-.6-1.8-.6l-.6.1c-.3.1-.7.3-1 .7l-1.2 1L9 23v.5c0 .7.2 1.3.7 1.9s1.2 1 2.1 1l.6-.1c.8-.1 1.4-.3 1.9-.7s.8-.7 1-1.1.3-.9.3-1.3l-.1-.9z"/></svg>';}
		else if (val2 == "7") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35.3"><path fill="#1E3D6F" d="M16.8 11l-13-1.1V5.2L24 7 15 30l-5.6.5 7.3-19.7z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M16.8 11l-13-1.1V5.2L24 7 15 30l-5.6.5 7.3-19.7z"/><path fill="#1E3D6F" d="M16.8 11l-13-1.1V5.2L24 7 15 30l-5.6.5 7.3-19.7z"/><path d="M18.3 9.4l-13-1V3.7l20.3 1.7-9 23.2-5.6.5 7.3-19.7z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M18.3 9.4l-13-1V3.7l20.3 1.7-9 23.2-5.6.5 7.3-19.7z"/><path fill="#FFCB31" d="M18.3 9.4l-13-1V3.7l20.3 1.7-9 23.2-5.6.5 7.3-19.7z"/></svg>';}
			else if (val2 == "8") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="26.2" height="31.9" viewBox="-5.3 -7.6 26.2 31.9"><path d="M6.2 21.8a13 13 0 0 1-4.7-.6c-1.1-.4-2-1-2.8-1.8a6.7 6.7 0 0 1-1.6-2.6l-.2-2c0-1 .1-2 .5-3A6 6 0 0 1-1 9.4C-.5 8.9.1 8.4.8 8l1.6-.8C-.6 6.2-2 4.6-2 2.7c0-.6.2-1.2.5-1.9A5.5 5.5 0 0 1 1-1.9a9 9 0 0 1 4-.8l1.4.1c1.5.1 2.7.3 3.6.5s1.7.6 2.4 1.2C13-.3 13.6.5 14 1.5l.2.6c0 .4-.2.8-.5 1.3a260.4 260.4 0 0 1-2.7 3.3l.4.1 1 .5 1.2 1c.4.5.9 1 1.3 1.7 1 1.6 1.5 3 1.5 4.3a5 5 0 0 1-.4 2 7.4 7.4 0 0 1-2 3 9 9 0 0 1-2.8 1.6 13.1 13.1 0 0 1-5 1zm-.8-10.6l-1.7.8c-.7.4-1 .9-1 1.3l-.2.3c-.2.3-.2.6-.2.9 0 1 1 1.6 3.3 1.8h.6c1.2 0 2.1-.2 2.7-.7.6-.4 1-1 1.2-1.5.2-.5.2-1 .2-1.4 0-.4-.2-.9-.8-1.5-.5-.5-1-.9-1.3-1-1 .5-1.9.8-2.8 1zm-2-8.5v.4c0 .2 0 .3.2.4l.8.5 1.5.7L7.5 4l1-.5c.2-.1.3-.3.3-.4l-.2-.4c-.3-.2-.6-.4-1.2-.5L6 1.8c-1.2 0-2 .3-2.4 1z"/><path fill="none" stroke="#1E3D6F" stroke-width="4" stroke-miterlimit="10" d="M6.2 21.8a13 13 0 0 1-4.7-.6c-1.1-.4-2-1-2.8-1.8a6.7 6.7 0 0 1-1.6-2.6l-.2-2c0-1 .1-2 .5-3A6 6 0 0 1-1 9.4C-.5 8.9.1 8.4.8 8l1.6-.8C-.6 6.2-2 4.6-2 2.7c0-.6.2-1.2.5-1.9A5.5 5.5 0 0 1 1-1.9a9 9 0 0 1 4-.8l1.4.1c1.5.1 2.7.3 3.6.5s1.7.6 2.4 1.2C13-.3 13.6.5 14 1.5l.2.6c0 .4-.2.8-.5 1.3a260.4 260.4 0 0 1-2.7 3.3l.4.1 1 .5 1.2 1c.4.5.9 1 1.3 1.7 1 1.6 1.5 3 1.5 4.3a5 5 0 0 1-.4 2 7.4 7.4 0 0 1-2 3 9 9 0 0 1-2.8 1.6 13.1 13.1 0 0 1-5 1zm-.8-10.6l-1.7.8c-.7.4-1 .9-1 1.3l-.2.3c-.2.3-.2.6-.2.9 0 1 1 1.6 3.3 1.8h.6c1.2 0 2.1-.2 2.7-.7.6-.4 1-1 1.2-1.5.2-.5.2-1 .2-1.4 0-.4-.2-.9-.8-1.5-.5-.5-1-.9-1.3-1-1 .5-1.9.8-2.8 1zm-2-8.5v.4c0 .2 0 .3.2.4l.8.5 1.5.7L7.5 4l1-.5c.2-.1.3-.3.3-.4l-.2-.4c-.3-.2-.6-.4-1.2-.5L6 1.8c-1.2 0-2 .3-2.4 1z"/><path fill="#1E3D6F" d="M6.2 21.8a13 13 0 0 1-4.7-.6c-1.1-.4-2-1-2.8-1.8a6.7 6.7 0 0 1-1.6-2.6l-.2-2c0-1 .1-2 .5-3A6 6 0 0 1-1 9.4C-.5 8.9.1 8.4.8 8l1.6-.8C-.6 6.2-2 4.6-2 2.7c0-.6.2-1.2.5-1.9A5.5 5.5 0 0 1 1-1.9a9 9 0 0 1 4-.8l1.4.1c1.5.1 2.7.3 3.6.5s1.7.6 2.4 1.2C13-.3 13.6.5 14 1.5l.2.6c0 .4-.2.8-.5 1.3a260.4 260.4 0 0 1-2.7 3.3l.4.1 1 .5 1.2 1c.4.5.9 1 1.3 1.7 1 1.6 1.5 3 1.5 4.3a5 5 0 0 1-.4 2 7.4 7.4 0 0 1-2 3 9 9 0 0 1-2.8 1.6 13.1 13.1 0 0 1-5 1zm-.8-10.6l-1.7.8c-.7.4-1 .9-1 1.3l-.2.3c-.2.3-.2.6-.2.9 0 1 1 1.6 3.3 1.8h.6c1.2 0 2.1-.2 2.7-.7.6-.4 1-1 1.2-1.5.2-.5.2-1 .2-1.4 0-.4-.2-.9-.8-1.5-.5-.5-1-.9-1.3-1-1 .5-1.9.8-2.8 1zm-2-8.5v.4c0 .2 0 .3.2.4l.8.5 1.5.7L7.5 4l1-.5c.2-.1.3-.3.3-.4l-.2-.4c-.3-.2-.6-.4-1.2-.5L6 1.8c-1.2 0-2 .3-2.4 1z"/><g><path d="M8.3 20a11.7 11.7 0 0 1-4.7-.7c-1.1-.4-2-1-2.8-1.7a6.7 6.7 0 0 1-1.6-2.7c-.2-.6-.3-1.2-.3-2 0-1 .2-2 .6-3A6 6 0 0 1 1 7.6a23.3 23.3 0 0 1 3.3-2.1C1.6 4.3.1 2.8.1.9c0-.7.2-1.3.5-2A5.5 5.5 0 0 1 3-3.7 9 9 0 0 1 7-4.5h1.4c1.5.1 2.7.3 3.7.5a6 6 0 0 1 2.3 1.2c.7.6 1.3 1.4 1.8 2.4l.1.6c0 .4-.1.9-.4 1.3L14.8 3l-1.6 1.8.4.2.9.4 1.3 1c.5.5.9 1 1.3 1.8 1 1.5 1.5 3 1.5 4.3a5 5 0 0 1-.4 1.9 7.4 7.4 0 0 1-2 3 9 9 0 0 1-2.8 1.6 13 13 0 0 1-5 1zM7.4 9.3a5 5 0 0 0-1.6.7c-.7.5-1 1-1 1.3l-.2.4c-.2.3-.3.5-.3.8 0 1 1.1 1.6 3.4 1.8h.6c1.2 0 2.1-.2 2.7-.6.6-.5 1-1 1.2-1.5l.2-1.5c0-.4-.2-.8-.8-1.4s-1-1-1.3-1l-2.9 1zM5.6.9c-.2 0-.2.2-.2.3 0 .2 0 .3.3.4.1.2.4.3.8.5l1.5.7a330 330 0 0 0 2.5-1.3c.2-.1.3-.3.3-.4l-.1-.4L9.5.2C9 0 8.5 0 8 0 6.8 0 6 .3 5.6.9z"/><path fill="none" stroke="#3070B3" stroke-width="4" stroke-miterlimit="10" d="M8.3 20a11.7 11.7 0 0 1-4.7-.7c-1.1-.4-2-1-2.8-1.7a6.7 6.7 0 0 1-1.6-2.7c-.2-.6-.3-1.2-.3-2 0-1 .2-2 .6-3A6 6 0 0 1 1 7.6a23.3 23.3 0 0 1 3.3-2.1C1.6 4.3.1 2.8.1.9c0-.7.2-1.3.5-2A5.5 5.5 0 0 1 3-3.7 9 9 0 0 1 7-4.5h1.4c1.5.1 2.7.3 3.7.5a6 6 0 0 1 2.3 1.2c.7.6 1.3 1.4 1.8 2.4l.1.6c0 .4-.1.9-.4 1.3L14.8 3l-1.6 1.8.4.2.9.4 1.3 1c.5.5.9 1 1.3 1.8 1 1.5 1.5 3 1.5 4.3a5 5 0 0 1-.4 1.9 7.4 7.4 0 0 1-2 3 9 9 0 0 1-2.8 1.6 13 13 0 0 1-5 1zM7.4 9.3a5 5 0 0 0-1.6.7c-.7.5-1 1-1 1.3l-.2.4c-.2.3-.3.5-.3.8 0 1 1.1 1.6 3.4 1.8h.6c1.2 0 2.1-.2 2.7-.6.6-.5 1-1 1.2-1.5l.2-1.5c0-.4-.2-.8-.8-1.4s-1-1-1.3-1l-2.9 1zM5.6.9c-.2 0-.2.2-.2.3 0 .2 0 .3.3.4.1.2.4.3.8.5l1.5.7a330 330 0 0 0 2.5-1.3c.2-.1.3-.3.3-.4l-.1-.4L9.5.2C9 0 8.5 0 8 0 6.8 0 6 .3 5.6.9z"/><path fill="#FFCB31" d="M8.3 20a11.7 11.7 0 0 1-4.7-.7c-1.1-.4-2-1-2.8-1.7a6.7 6.7 0 0 1-1.6-2.7c-.2-.6-.3-1.2-.3-2 0-1 .2-2 .6-3A6 6 0 0 1 1 7.6a23.3 23.3 0 0 1 3.3-2.1C1.6 4.3.1 2.8.1.9c0-.7.2-1.3.5-2A5.5 5.5 0 0 1 3-3.7 9 9 0 0 1 7-4.5h1.4c1.5.1 2.7.3 3.7.5a6 6 0 0 1 2.3 1.2c.7.6 1.3 1.4 1.8 2.4l.1.6c0 .4-.1.9-.4 1.3L14.8 3l-1.6 1.8.4.2.9.4 1.3 1c.5.5.9 1 1.3 1.8 1 1.5 1.5 3 1.5 4.3a5 5 0 0 1-.4 1.9 7.4 7.4 0 0 1-2 3 9 9 0 0 1-2.8 1.6 13 13 0 0 1-5 1zM7.4 9.3a5 5 0 0 0-1.6.7c-.7.5-1 1-1 1.3l-.2.4c-.2.3-.3.5-.3.8 0 1 1.1 1.6 3.4 1.8h.6c1.2 0 2.1-.2 2.7-.6.6-.5 1-1 1.2-1.5l.2-1.5c0-.4-.2-.8-.8-1.4s-1-1-1.3-1l-2.9 1zM5.6.9c-.2 0-.2.2-.2.3 0 .2 0 .3.3.4.1.2.4.3.8.5l1.5.7a330 330 0 0 0 2.5-1.3c.2-.1.3-.3.3-.4l-.1-.4L9.5.2C9 0 8.5 0 8 0 6.8 0 6 .3 5.6.9z"/></g></svg>';}
	else if (val2 == "9") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="25.7" height="35.3"><path fill="#1E3D6F" d="M13.7 17.8l-.8.3h-1c-.9 0-1.5-.1-1.8-.4-.3 0-.8-.3-1.4-.7s-1.3-1.1-2-2.2c-.5-.7-.8-1.4-1-2l-.3-1.7c0-.6.1-1.2.3-1.7C6.3 8.1 7 7 8 6.4S9.9 5 10.8 4.8a11.6 11.6 0 0 1 3.2-.3c1.3 0 2.3.2 3.3.6s1.8.8 2.4 1.5 1.1 1.4 1.4 2.2v1a22.4 22.4 0 0 1-2.2 8.5 611.5 611.5 0 0 1-4 7.4c-.8 1.3-1.6 2.6-2.6 3.8s-2 2-3 2.7L5.6 32a317.4 317.4 0 0 0 6.9-11.5c.7-1.4 1.2-2.3 1.3-2.8zm-2.4-5.2c.3.7.8 1.1 1.5 1.1.5 0 1 0 1.4-.3l1.1-.7c.3-.3.5-.5.5-.7V12a6 6 0 0 0 .2-1c0-1-.7-1.6-2-1.6h-.7c-.7.2-1.2.4-1.6.8s-.6 1-.6 1.5c0 .4 0 .7.2 1z"/><path fill="none" stroke="#1E3D6F" stroke-width="5" stroke-linecap="square" d="M13.7 17.8l-.8.3h-1c-.9 0-1.5-.1-1.8-.4-.3 0-.8-.3-1.4-.7s-1.3-1.1-2-2.2c-.5-.7-.8-1.4-1-2l-.3-1.7c0-.6.1-1.2.3-1.7C6.3 8.1 7 7 8 6.4S9.9 5 10.8 4.8a11.6 11.6 0 0 1 3.2-.3c1.3 0 2.3.2 3.3.6s1.8.8 2.4 1.5 1.1 1.4 1.4 2.2v1a22.4 22.4 0 0 1-2.2 8.5 611.5 611.5 0 0 1-4 7.4c-.8 1.3-1.6 2.6-2.6 3.8s-2 2-3 2.7L5.6 32a317.4 317.4 0 0 0 6.9-11.5c.7-1.4 1.2-2.3 1.3-2.8zm-2.4-5.2c.3.7.8 1.1 1.5 1.1.5 0 1 0 1.4-.3l1.1-.7c.3-.3.5-.5.5-.7V12a6 6 0 0 0 .2-1c0-1-.7-1.6-2-1.6h-.7c-.7.2-1.2.4-1.6.8s-.6 1-.6 1.5c0 .4 0 .7.2 1z"/><path fill="#1E3D6F" d="M13.7 17.8l-.8.3h-1c-.9 0-1.5-.1-1.8-.4-.3 0-.8-.3-1.4-.7s-1.3-1.1-2-2.2c-.5-.7-.8-1.4-1-2l-.3-1.7c0-.6.1-1.2.3-1.7C6.3 8.1 7 7 8 6.4S9.9 5 10.8 4.8a11.6 11.6 0 0 1 3.2-.3c1.3 0 2.3.2 3.3.6s1.8.8 2.4 1.5 1.1 1.4 1.4 2.2v1a22.4 22.4 0 0 1-2.2 8.5 611.5 611.5 0 0 1-4 7.4c-.8 1.3-1.6 2.6-2.6 3.8s-2 2-3 2.7L5.6 32a317.4 317.4 0 0 0 6.9-11.5c.7-1.4 1.2-2.3 1.3-2.8zm-2.4-5.2c.3.7.8 1.1 1.5 1.1.5 0 1 0 1.4-.3l1.1-.7c.3-.3.5-.5.5-.7V12a6 6 0 0 0 .2-1c0-1-.7-1.6-2-1.6h-.7c-.7.2-1.2.4-1.6.8s-.6 1-.6 1.5c0 .4 0 .7.2 1z"/><path d="M15.2 16.3l-.8.3h-1c-.9 0-1.5-.1-1.8-.4-.3 0-.8-.3-1.4-.7s-1.3-1.1-2-2.2c-.5-.7-.8-1.4-1-2L7 9.6c0-.6.1-1.2.3-1.7.6-1.3 1.3-2.4 2.3-3s1.9-1.3 2.8-1.5a11.6 11.6 0 0 1 3.2-.3c1.3 0 2.3.2 3.3.6s1.8.8 2.4 1.5 1.1 1.4 1.4 2.2v1a22.4 22.4 0 0 1-2.2 8.5 611.5 611.5 0 0 1-4 7.4c-.8 1.3-1.6 2.6-2.6 3.8s-2 2-3 2.7L7 30.6A317.4 317.4 0 0 0 14 19c.7-1.4 1.2-2.3 1.3-2.8zM12.8 11c.3.7.8 1.1 1.5 1.1.5 0 1 0 1.4-.3l1.1-.7c.3-.3.5-.5.5-.7v-.1a6 6 0 0 0 .2-1c0-1-.7-1.6-2-1.6h-.7c-.7.2-1.2.4-1.6.8s-.6 1-.6 1.5c0 .4 0 .7.2 1z"/><path fill="none" stroke="#3070B3" stroke-width="5" stroke-linecap="square" d="M15.2 16.3l-.8.3h-1c-.9 0-1.5-.1-1.8-.4-.3 0-.8-.3-1.4-.7s-1.3-1.1-2-2.2c-.5-.7-.8-1.4-1-2L7 9.6c0-.6.1-1.2.3-1.7.6-1.3 1.3-2.4 2.3-3s1.9-1.3 2.8-1.5a11.6 11.6 0 0 1 3.2-.3c1.3 0 2.3.2 3.3.6s1.8.8 2.4 1.5 1.1 1.4 1.4 2.2v1a22.4 22.4 0 0 1-2.2 8.5 611.5 611.5 0 0 1-4 7.4c-.8 1.3-1.6 2.6-2.6 3.8s-2 2-3 2.7L7 30.6A317.4 317.4 0 0 0 14 19c.7-1.4 1.2-2.3 1.3-2.8zM12.8 11c.3.7.8 1.1 1.5 1.1.5 0 1 0 1.4-.3l1.1-.7c.3-.3.5-.5.5-.7v-.1a6 6 0 0 0 .2-1c0-1-.7-1.6-2-1.6h-.7c-.7.2-1.2.4-1.6.8s-.6 1-.6 1.5c0 .4 0 .7.2 1z"/><path fill="#FFCB31" d="M15.2 16.3l-.8.3h-1c-.9 0-1.5-.1-1.8-.4-.3 0-.8-.3-1.4-.7s-1.3-1.1-2-2.2c-.5-.7-.8-1.4-1-2L7 9.6c0-.6.1-1.2.3-1.7.6-1.3 1.3-2.4 2.3-3s1.9-1.3 2.8-1.5a11.6 11.6 0 0 1 3.2-.3c1.3 0 2.3.2 3.3.6s1.8.8 2.4 1.5 1.1 1.4 1.4 2.2v1a22.4 22.4 0 0 1-2.2 8.5 611.5 611.5 0 0 1-4 7.4c-.8 1.3-1.6 2.6-2.6 3.8s-2 2-3 2.7L7 30.6A317.4 317.4 0 0 0 14 19c.7-1.4 1.2-2.3 1.3-2.8zM12.8 11c.3.7.8 1.1 1.5 1.1.5 0 1 0 1.4-.3l1.1-.7c.3-.3.5-.5.5-.7v-.1a6 6 0 0 0 .2-1c0-1-.7-1.6-2-1.6h-.7c-.7.2-1.2.4-1.6.8s-.6 1-.6 1.5c0 .4 0 .7.2 1z"/></svg>';}
}

function pushNumb(val2) {
	if (val2 == "0") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="93.9" height="140.9"><path fill="#1E3D6F" d="M45.9 19.7c5.8.1 10.7 1.8 14.6 5 4 3.1 7 7.4 9.3 12.6 2.2 5.3 3.7 11 4.5 17 .8 6 1.1 12.3 1 18.8v3c-.3 6.6-2 14-5.2 22.2A63 63 0 0 1 57.5 119c-5.2 5.5-10.8 8.3-17 8.1-6-.1-11.3-2-15.7-5.8a36.4 36.4 0 0 1-10.3-17.5c-2.5-8-3.7-18-3.8-30 .1-6.4.7-12.6 1.8-18.8 1-6.2 2.8-12 5.4-17.4a34 34 0 0 1 10.8-13c4.7-3.3 10.4-5 17.2-5zM43 53.9c-2.7-.1-5 1-6.6 3.2s-2.9 5-3.6 8.4c-.8 3.3-1.2 6.7-1.3 10.3 0 2.8.4 5.5 1.2 8.2.8 2.7 2 5 3.8 6.7a8.7 8.7 0 0 0 6.2 2.7c2.8-.3 5-1.2 6.6-2.5 1.7-1.3 3-3.2 4-5.8 1-2.6 1.5-6 1.7-9.9.1-6.3-.9-11.4-3-15.2a11 11 0 0 0-9-6.1z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M45.9 19.7c5.8.1 10.7 1.8 14.6 5 4 3.1 7 7.4 9.3 12.6 2.2 5.3 3.7 11 4.5 17 .8 6 1.1 12.3 1 18.8v3c-.3 6.6-2 14-5.2 22.2A63 63 0 0 1 57.5 119c-5.2 5.5-10.8 8.3-17 8.1-6-.1-11.3-2-15.7-5.8a36.4 36.4 0 0 1-10.3-17.5c-2.5-8-3.7-18-3.8-30 .1-6.4.7-12.6 1.8-18.8 1-6.2 2.8-12 5.4-17.4a34 34 0 0 1 10.8-13c4.7-3.3 10.4-5 17.2-5zM43 53.9c-2.7-.1-5 1-6.6 3.2s-2.9 5-3.6 8.4c-.8 3.3-1.2 6.7-1.3 10.3 0 2.8.4 5.5 1.2 8.2.8 2.7 2 5 3.8 6.7a8.7 8.7 0 0 0 6.2 2.7c2.8-.3 5-1.2 6.6-2.5 1.7-1.3 3-3.2 4-5.8 1-2.6 1.5-6 1.7-9.9.1-6.3-.9-11.4-3-15.2a11 11 0 0 0-9-6.1z"/><path fill="#1E3D6F" d="M45.9 19.7c5.8.1 10.7 1.8 14.6 5 4 3.1 7 7.4 9.3 12.6 2.2 5.3 3.7 11 4.5 17 .8 6 1.1 12.3 1 18.8v3c-.3 6.6-2 14-5.2 22.2A63 63 0 0 1 57.5 119c-5.2 5.5-10.8 8.3-17 8.1-6-.1-11.3-2-15.7-5.8a36.4 36.4 0 0 1-10.3-17.5c-2.5-8-3.7-18-3.8-30 .1-6.4.7-12.6 1.8-18.8 1-6.2 2.8-12 5.4-17.4a34 34 0 0 1 10.8-13c4.7-3.3 10.4-5 17.2-5zM43 53.9c-2.7-.1-5 1-6.6 3.2s-2.9 5-3.6 8.4c-.8 3.3-1.2 6.7-1.3 10.3 0 2.8.4 5.5 1.2 8.2.8 2.7 2 5 3.8 6.7a8.7 8.7 0 0 0 6.2 2.7c2.8-.3 5-1.2 6.6-2.5 1.7-1.3 3-3.2 4-5.8 1-2.6 1.5-6 1.7-9.9.1-6.3-.9-11.4-3-15.2a11 11 0 0 0-9-6.1z"/><path d="M52.9 12.7c5.8.1 10.7 1.8 14.6 5 4 3.1 7 7.4 9.3 12.6 2.2 5.3 3.7 11 4.5 17 .8 6 1.1 12.3 1 18.8v3c-.3 6.6-2 14-5.2 22.2A63 63 0 0 1 64.5 112c-5.2 5.5-10.8 8.3-17 8.1-6-.1-11.3-2-15.7-5.8a36.4 36.4 0 0 1-10.3-17.5c-2.5-8-3.7-18-3.8-30 .1-6.4.7-12.6 1.8-18.8 1-6.2 2.8-12 5.4-17.4a34 34 0 0 1 10.9-13c4.6-3.3 10.3-5 17-5zM50 46.9c-2.7-.1-5 1-6.6 3.2s-2.9 5-3.6 8.4c-.8 3.3-1.2 6.7-1.3 10.3 0 2.8.4 5.5 1.2 8.2.8 2.7 2 5 3.8 6.7a8.7 8.7 0 0 0 6.2 2.7c2.8-.3 5-1.2 6.6-2.5 1.7-1.3 3-3.2 4-5.8 1-2.6 1.5-6 1.7-9.9.1-6.3-.9-11.4-3-15.2a11 11 0 0 0-9-6.1z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M52.9 12.7c5.8.1 10.7 1.8 14.6 5 4 3.1 7 7.4 9.3 12.6 2.2 5.3 3.7 11 4.5 17 .8 6 1.1 12.3 1 18.8v3c-.3 6.6-2 14-5.2 22.2A63 63 0 0 1 64.5 112c-5.2 5.5-10.8 8.3-17 8.1-6-.1-11.3-2-15.7-5.8a36.4 36.4 0 0 1-10.3-17.5c-2.5-8-3.7-18-3.8-30 .1-6.4.7-12.6 1.8-18.8 1-6.2 2.8-12 5.4-17.4a34 34 0 0 1 10.9-13c4.6-3.3 10.3-5 17-5zM50 46.9c-2.7-.1-5 1-6.6 3.2s-2.9 5-3.6 8.4c-.8 3.3-1.2 6.7-1.3 10.3 0 2.8.4 5.5 1.2 8.2.8 2.7 2 5 3.8 6.7a8.7 8.7 0 0 0 6.2 2.7c2.8-.3 5-1.2 6.6-2.5 1.7-1.3 3-3.2 4-5.8 1-2.6 1.5-6 1.7-9.9.1-6.3-.9-11.4-3-15.2a11 11 0 0 0-9-6.1z"/><path fill="#FFCB31" d="M52.9 12.7c5.8.1 10.7 1.8 14.6 5 4 3.1 7 7.4 9.3 12.6 2.2 5.3 3.7 11 4.5 17 .8 6 1.1 12.3 1 18.8v3c-.3 6.6-2 14-5.2 22.2A63 63 0 0 1 64.5 112c-5.2 5.5-10.8 8.3-17 8.1-6-.1-11.3-2-15.7-5.8a36.4 36.4 0 0 1-10.3-17.5c-2.5-8-3.7-18-3.8-30 .1-6.4.7-12.6 1.8-18.8 1-6.2 2.8-12 5.4-17.4a34 34 0 0 1 10.9-13c4.6-3.3 10.3-5 17-5zM50 46.9c-2.7-.1-5 1-6.6 3.2s-2.9 5-3.6 8.4c-.8 3.3-1.2 6.7-1.3 10.3 0 2.8.4 5.5 1.2 8.2.8 2.7 2 5 3.8 6.7a8.7 8.7 0 0 0 6.2 2.7c2.8-.3 5-1.2 6.6-2.5 1.7-1.3 3-3.2 4-5.8 1-2.6 1.5-6 1.7-9.9.1-6.3-.9-11.4-3-15.2a11 11 0 0 0-9-6.1z"/></svg>'}
	else if (val2 == "1") {
		return '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="74" height="141"><path fill="#1E3D6F" d="M50 128H23l7-84H14l4-14 37-9-5 107z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M50 128H23l7-84H14l4-14 37-9-5 107z"/><path fill="#1E3D6F" d="M50 128H23l7-84H14l4-14 37-9-5 107z"/><path d="M57 121H30l7-84H21l4-14 37-9-5 107z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M57 121H30l7-84H21l4-14 37-9-5 107z"/><path fill="#FFCB31" d="M57 121H30l7-84H21l4-14 37-9-5 107z"/></svg>';}
		else if (val2 == "2") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="97" height="140.9"><path fill="#1E3D6F" d="M48.2 80.6c-5 1.5-9 5.4-12 11.8-3 6.3-4.9 11.4-5.8 15.3l44.5-8.2L70 116 13.4 126c.2-11 1-20.2 2.2-27.6A75.4 75.4 0 0 1 20.2 81c1.8-4 3.7-7 5.6-8.9A22 22 0 0 1 32 68c3 0 5.9-1 9-2.8a51.1 51.1 0 0 0 15-15c1.6-2.7 2.4-4.7 2.5-6 0-.7-.2-1.1-.6-1.2-.8-.2-1.6-.4-2.6-.4-1.6 0-4 .3-7.4 1l-6 1.2c-1.9.2-4.3 1-7.3 2.5A107.3 107.3 0 0 0 22 54.3l-.8-2.3a375.1 375.1 0 0 1-4.5-15.5c-1-3.3-1.6-5.4-2-6.3l10.4-3.7a166.6 166.6 0 0 1 20.4-5.6 49 49 0 0 1 16.2 0c2 .5 4 1.3 5.8 2.4 1.8 1 3.4 2.5 4.8 4.2 1.4 1.8 2.5 3.8 3.4 6.2.6 1.7.9 3.6.8 5.9 0 3.5-.8 7.3-2.3 11.6A59.2 59.2 0 0 1 59 74.4c-3.4 3-7 5-10.8 6.2z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M48.2 80.6c-5 1.5-9 5.4-12 11.8-3 6.3-4.9 11.4-5.8 15.3l44.5-8.2L70 116 13.4 126c.2-11 1-20.2 2.2-27.6A75.4 75.4 0 0 1 20.2 81c1.8-4 3.7-7 5.6-8.9A22 22 0 0 1 32 68c3 0 5.9-1 9-2.8a51.1 51.1 0 0 0 15-15c1.6-2.7 2.4-4.7 2.5-6 0-.7-.2-1.1-.6-1.2-.8-.2-1.6-.4-2.6-.4-1.6 0-4 .3-7.4 1l-6 1.2c-1.9.2-4.3 1-7.3 2.5A107.3 107.3 0 0 0 22 54.3l-.8-2.3a375.1 375.1 0 0 1-4.5-15.5c-1-3.3-1.6-5.4-2-6.3l10.4-3.7a166.6 166.6 0 0 1 20.4-5.6 49 49 0 0 1 16.2 0c2 .5 4 1.3 5.8 2.4 1.8 1 3.4 2.5 4.8 4.2 1.4 1.8 2.5 3.8 3.4 6.2.6 1.7.9 3.6.8 5.9 0 3.5-.8 7.3-2.3 11.6A59.2 59.2 0 0 1 59 74.4c-3.4 3-7 5-10.8 6.2z"/><path fill="#1E3D6F" d="M48.2 80.6c-5 1.5-9 5.4-12 11.8-3 6.3-4.9 11.4-5.8 15.3l44.5-8.2L70 116 13.4 126c.2-11 1-20.2 2.2-27.6A75.4 75.4 0 0 1 20.2 81c1.8-4 3.7-7 5.6-8.9A22 22 0 0 1 32 68c3 0 5.9-1 9-2.8a51.1 51.1 0 0 0 15-15c1.6-2.7 2.4-4.7 2.5-6 0-.7-.2-1.1-.6-1.2-.8-.2-1.6-.4-2.6-.4-1.6 0-4 .3-7.4 1l-6 1.2c-1.9.2-4.3 1-7.3 2.5A107.3 107.3 0 0 0 22 54.3l-.8-2.3a375.1 375.1 0 0 1-4.5-15.5c-1-3.3-1.6-5.4-2-6.3l10.4-3.7a166.6 166.6 0 0 1 20.4-5.6 49 49 0 0 1 16.2 0c2 .5 4 1.3 5.8 2.4 1.8 1 3.4 2.5 4.8 4.2 1.4 1.8 2.5 3.8 3.4 6.2.6 1.7.9 3.6.8 5.9 0 3.5-.8 7.3-2.3 11.6A59.2 59.2 0 0 1 59 74.4c-3.4 3-7 5-10.8 6.2z"/><path d="M55.2 73.6c-5 1.5-9 5.4-12 11.8-3 6.3-4.9 11.4-5.8 15.3l44.5-8.2L77 109 20.4 119c.2-11 1-20.2 2.2-27.6A75.4 75.4 0 0 1 27.2 74c1.8-4 3.7-7 5.6-8.9A22 22 0 0 1 39 61c3 0 5.9-1 9-2.8a51.1 51.1 0 0 0 15-15c1.6-2.7 2.4-4.7 2.5-6 0-.7-.2-1.1-.6-1.2-.8-.2-1.6-.4-2.6-.4-1.6 0-4 .3-7.4 1l-6 1.2c-1.9.2-4.3 1-7.3 2.5A107.3 107.3 0 0 0 29 47.3l-.8-2.3a375.1 375.1 0 0 1-4.5-15.5c-1-3.3-1.6-5.4-2-6.3l10.4-3.7a166.6 166.6 0 0 1 20.4-5.6 49 49 0 0 1 16.2 0c2 .5 4 1.3 5.8 2.4 1.8 1 3.4 2.5 4.8 4.2 1.4 1.8 2.5 3.8 3.4 6.2.6 1.7.9 3.6.8 5.9 0 3.5-.8 7.3-2.3 11.6A59.2 59.2 0 0 1 66 67.4c-3.4 3-7 5-10.8 6.2z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M55.2 73.6c-5 1.5-9 5.4-12 11.8-3 6.3-4.9 11.4-5.8 15.3l44.5-8.2L77 109 20.4 119c.2-11 1-20.2 2.2-27.6A75.4 75.4 0 0 1 27.2 74c1.8-4 3.7-7 5.6-8.9A22 22 0 0 1 39 61c3 0 5.9-1 9-2.8a51.1 51.1 0 0 0 15-15c1.6-2.7 2.4-4.7 2.5-6 0-.7-.2-1.1-.6-1.2-.8-.2-1.6-.4-2.6-.4-1.6 0-4 .3-7.4 1l-6 1.2c-1.9.2-4.3 1-7.3 2.5A107.3 107.3 0 0 0 29 47.3l-.8-2.3a375.1 375.1 0 0 1-4.5-15.5c-1-3.3-1.6-5.4-2-6.3l10.4-3.7a166.6 166.6 0 0 1 20.4-5.6 49 49 0 0 1 16.2 0c2 .5 4 1.3 5.8 2.4 1.8 1 3.4 2.5 4.8 4.2 1.4 1.8 2.5 3.8 3.4 6.2.6 1.7.9 3.6.8 5.9 0 3.5-.8 7.3-2.3 11.6A59.2 59.2 0 0 1 66 67.4c-3.4 3-7 5-10.8 6.2z"/><path fill="#FFCB31" d="M55.2 73.6c-5 1.5-9 5.4-12 11.8-3 6.3-4.9 11.4-5.8 15.3l44.5-8.2L77 109 20.4 119c.2-11 1-20.2 2.2-27.6A75.4 75.4 0 0 1 27.2 74c1.8-4 3.7-7 5.6-8.9A22 22 0 0 1 39 61c3 0 5.9-1 9-2.8a51.1 51.1 0 0 0 15-15c1.6-2.7 2.4-4.7 2.5-6 0-.7-.2-1.1-.6-1.2-.8-.2-1.6-.4-2.6-.4-1.6 0-4 .3-7.4 1l-6 1.2c-1.9.2-4.3 1-7.3 2.5A107.3 107.3 0 0 0 29 47.3l-.8-2.3a375.1 375.1 0 0 1-4.5-15.5c-1-3.3-1.6-5.4-2-6.3l10.4-3.7a166.6 166.6 0 0 1 20.4-5.6 49 49 0 0 1 16.2 0c2 .5 4 1.3 5.8 2.4 1.8 1 3.4 2.5 4.8 4.2 1.4 1.8 2.5 3.8 3.4 6.2.6 1.7.9 3.6.8 5.9 0 3.5-.8 7.3-2.3 11.6A59.2 59.2 0 0 1 66 67.4c-3.4 3-7 5-10.8 6.2z"/></svg>';}
		else if (val2 == "3") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="105" height="140.9"><path fill="#1E3D6F" d="M39.7 66.5l1.6.3c2.6 0 5.3-1 8.2-3.4 2.9-2.3 5.3-5 7.3-8 2-3.1 3-5.5 3-7 0-.8-.3-1.3-.9-1.5-.6-.2-1.3-.3-2.2-.3-1.7 0-4 .1-6.9.5a109.4 109.4 0 0 0-17.6 4c-2.8 1-4.7 1.8-5.8 2.6-.9.7-1.8 1.8-2.8 3.4l-1.9 3-.9-2.6a484.1 484.1 0 0 1-4.6-17.9l-2-7.2L24.8 28a162.4 162.4 0 0 1 21.3-6.5c3.4-.7 6.7-1 10-1 2.5.1 4.8.4 7 1a19 19 0 0 1 11 7.5c1.3 2 2.5 4.3 3.4 7 .4 1.2.6 2.4.6 3.8-.2 5.4-3.4 13-10 22.7.3 0 .8.3 1.5.6s1.7 1 3 2A44.4 44.4 0 0 1 81.5 78c3.2 7 4.8 13.6 4.7 19.6 0 3.1-.5 6-1.4 8.6a28.3 28.3 0 0 1-19.7 20 41.5 41.5 0 0 1-17.7.8l-28.8-7 3.5-19c4.6 1.5 8.8 2.7 12.5 3.5a56 56 0 0 0 10.1 1.3c5.8 0 10.2-.9 13.2-3s5-4.4 5.8-6.8c.9-2.4 1.3-4.5 1.4-6.2 0-1.8-1-4-2.8-6.7-1.8-2.7-3.3-4.2-4.4-4.5a54 54 0 0 1-19 6l.8-18z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M39.7 66.5l1.6.3c2.6 0 5.3-1 8.2-3.4 2.9-2.3 5.3-5 7.3-8 2-3.1 3-5.5 3-7 0-.8-.3-1.3-.9-1.5-.6-.2-1.3-.3-2.2-.3-1.7 0-4 .1-6.9.5a109.4 109.4 0 0 0-17.6 4c-2.8 1-4.7 1.8-5.8 2.6-.9.7-1.8 1.8-2.8 3.4l-1.9 3-.9-2.6a484.1 484.1 0 0 1-4.6-17.9l-2-7.2L24.8 28a162.4 162.4 0 0 1 21.3-6.5c3.4-.7 6.7-1 10-1 2.5.1 4.8.4 7 1a19 19 0 0 1 11 7.5c1.3 2 2.5 4.3 3.4 7 .4 1.2.6 2.4.6 3.8-.2 5.4-3.4 13-10 22.7.3 0 .8.3 1.5.6s1.7 1 3 2A44.4 44.4 0 0 1 81.5 78c3.2 7 4.8 13.6 4.7 19.6 0 3.1-.5 6-1.4 8.6a28.3 28.3 0 0 1-19.7 20 41.5 41.5 0 0 1-17.7.8l-28.8-7 3.5-19c4.6 1.5 8.8 2.7 12.5 3.5a56 56 0 0 0 10.1 1.3c5.8 0 10.2-.9 13.2-3s5-4.4 5.8-6.8c.9-2.4 1.3-4.5 1.4-6.2 0-1.8-1-4-2.8-6.7-1.8-2.7-3.3-4.2-4.4-4.5a54 54 0 0 1-19 6l.8-18z"/><path fill="#1E3D6F" d="M39.7 66.5l1.6.3c2.6 0 5.3-1 8.2-3.4 2.9-2.3 5.3-5 7.3-8 2-3.1 3-5.5 3-7 0-.8-.3-1.3-.9-1.5-.6-.2-1.3-.3-2.2-.3-1.7 0-4 .1-6.9.5a109.4 109.4 0 0 0-17.6 4c-2.8 1-4.7 1.8-5.8 2.6-.9.7-1.8 1.8-2.8 3.4l-1.9 3-.9-2.6a484.1 484.1 0 0 1-4.6-17.9l-2-7.2L24.8 28a162.4 162.4 0 0 1 21.3-6.5c3.4-.7 6.7-1 10-1 2.5.1 4.8.4 7 1a19 19 0 0 1 11 7.5c1.3 2 2.5 4.3 3.4 7 .4 1.2.6 2.4.6 3.8-.2 5.4-3.4 13-10 22.7.3 0 .8.3 1.5.6s1.7 1 3 2A44.4 44.4 0 0 1 81.5 78c3.2 7 4.8 13.6 4.7 19.6 0 3.1-.5 6-1.4 8.6a28.3 28.3 0 0 1-19.7 20 41.5 41.5 0 0 1-17.7.8l-28.8-7 3.5-19c4.6 1.5 8.8 2.7 12.5 3.5a56 56 0 0 0 10.1 1.3c5.8 0 10.2-.9 13.2-3s5-4.4 5.8-6.8c.9-2.4 1.3-4.5 1.4-6.2 0-1.8-1-4-2.8-6.7-1.8-2.7-3.3-4.2-4.4-4.5a54 54 0 0 1-19 6l.8-18z"/><path d="M46.7 59.5l1.6.3c2.6 0 5.3-1 8.2-3.4 2.9-2.3 5.3-5 7.3-8 2-3.1 3-5.5 3-7 0-.8-.3-1.3-.9-1.5-.6-.2-1.3-.3-2.2-.3-1.7 0-4 .1-6.9.5a109.4 109.4 0 0 0-17.6 4c-2.8 1-4.7 1.8-5.8 2.6-.9.7-1.8 1.8-2.8 3.4l-1.9 3-.9-2.6a484.1 484.1 0 0 1-4.6-17.9l-2-7.2L31.8 21a162.4 162.4 0 0 1 21.3-6.5c3.4-.7 6.7-1 10-1 2.5.1 4.8.4 7 1a19 19 0 0 1 11 7.5c1.3 2 2.5 4.3 3.4 7 .4 1.2.6 2.4.6 3.8-.2 5.4-3.4 13-10 22.7.3 0 .8.3 1.5.6s1.7 1 3 2A44.4 44.4 0 0 1 88.5 71c3.2 7 4.8 13.6 4.7 19.6 0 3.1-.5 6-1.4 8.6a28.3 28.3 0 0 1-19.7 20 41.5 41.5 0 0 1-17.7.8l-28.8-7 3.5-19c4.6 1.5 8.8 2.7 12.5 3.5a56 56 0 0 0 10.1 1.3c5.8 0 10.2-.9 13.2-3s5-4.4 5.8-6.8c.9-2.4 1.3-4.5 1.4-6.2 0-1.8-1-4-2.8-6.7-1.8-2.7-3.3-4.2-4.4-4.5a54 54 0 0 1-19 6l.8-18z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M46.7 59.5l1.6.3c2.6 0 5.3-1 8.2-3.4 2.9-2.3 5.3-5 7.3-8 2-3.1 3-5.5 3-7 0-.8-.3-1.3-.9-1.5-.6-.2-1.3-.3-2.2-.3-1.7 0-4 .1-6.9.5a109.4 109.4 0 0 0-17.6 4c-2.8 1-4.7 1.8-5.8 2.6-.9.7-1.8 1.8-2.8 3.4l-1.9 3-.9-2.6a484.1 484.1 0 0 1-4.6-17.9l-2-7.2L31.8 21a162.4 162.4 0 0 1 21.3-6.5c3.4-.7 6.7-1 10-1 2.5.1 4.8.4 7 1a19 19 0 0 1 11 7.5c1.3 2 2.5 4.3 3.4 7 .4 1.2.6 2.4.6 3.8-.2 5.4-3.4 13-10 22.7.3 0 .8.3 1.5.6s1.7 1 3 2A44.4 44.4 0 0 1 88.5 71c3.2 7 4.8 13.6 4.7 19.6 0 3.1-.5 6-1.4 8.6a28.3 28.3 0 0 1-19.7 20 41.5 41.5 0 0 1-17.7.8l-28.8-7 3.5-19c4.6 1.5 8.8 2.7 12.5 3.5a56 56 0 0 0 10.1 1.3c5.8 0 10.2-.9 13.2-3s5-4.4 5.8-6.8c.9-2.4 1.3-4.5 1.4-6.2 0-1.8-1-4-2.8-6.7-1.8-2.7-3.3-4.2-4.4-4.5a54 54 0 0 1-19 6l.8-18z"/><path fill="#FFCB31" d="M46.7 59.5l1.6.3c2.6 0 5.3-1 8.2-3.4 2.9-2.3 5.3-5 7.3-8 2-3.1 3-5.5 3-7 0-.8-.3-1.3-.9-1.5-.6-.2-1.3-.3-2.2-.3-1.7 0-4 .1-6.9.5a109.4 109.4 0 0 0-17.6 4c-2.8 1-4.7 1.8-5.8 2.6-.9.7-1.8 1.8-2.8 3.4l-1.9 3-.9-2.6a484.1 484.1 0 0 1-4.6-17.9l-2-7.2L31.8 21a162.4 162.4 0 0 1 21.3-6.5c3.4-.7 6.7-1 10-1 2.5.1 4.8.4 7 1a19 19 0 0 1 11 7.5c1.3 2 2.5 4.3 3.4 7 .4 1.2.6 2.4.6 3.8-.2 5.4-3.4 13-10 22.7.3 0 .8.3 1.5.6s1.7 1 3 2A44.4 44.4 0 0 1 88.5 71c3.2 7 4.8 13.6 4.7 19.6 0 3.1-.5 6-1.4 8.6a28.3 28.3 0 0 1-19.7 20 41.5 41.5 0 0 1-17.7.8l-28.8-7 3.5-19c4.6 1.5 8.8 2.7 12.5 3.5a56 56 0 0 0 10.1 1.3c5.8 0 10.2-.9 13.2-3s5-4.4 5.8-6.8c.9-2.4 1.3-4.5 1.4-6.2 0-1.8-1-4-2.8-6.7-1.8-2.7-3.3-4.2-4.4-4.5a54 54 0 0 1-19 6l.8-18z"/></svg>';}
		else if (val2 == "4") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="97" height="140.9"><path fill="#1E3D6F" d="M15.7 28.2L37 26.4l-3.5 31.3 14.3 3.4 3.7-37.5 25-3-11.8 106.1c-1.8.8-4.6 1.2-8.3 1.1a73.3 73.3 0 0 1-14-1.5l4-48.5L12 71.4l3.7-43.2z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M15.7 28.2L37 26.4l-3.5 31.3 14.3 3.4 3.7-37.5 25-3-11.8 106.1c-1.8.8-4.6 1.2-8.3 1.1a73.3 73.3 0 0 1-14-1.5l4-48.5L12 71.4l3.7-43.2z"/><path fill="#1E3D6F" d="M15.7 28.2L37 26.4l-3.5 31.3 14.3 3.4 3.7-37.5 25-3-11.8 106.1c-1.8.8-4.6 1.2-8.3 1.1a73.3 73.3 0 0 1-14-1.5l4-48.5L12 71.4l3.7-43.2z"/><path d="M22.7 21.2L44 19.4l-3.5 31.3 14.3 3.4 3.7-37.5 25-3-11.8 106.1c-1.8.8-4.6 1.2-8.3 1.1a73.3 73.3 0 0 1-14-1.5l4-48.5L19 64.4l3.7-43.2z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M22.7 21.2L44 19.4l-3.5 31.3 14.3 3.4 3.7-37.5 25-3-11.8 106.1c-1.8.8-4.6 1.2-8.3 1.1a73.3 73.3 0 0 1-14-1.5l4-48.5L19 64.4l3.7-43.2z"/><path fill="#FFCB31" d="M22.7 21.2L44 19.4l-3.5 31.3 14.3 3.4 3.7-37.5 25-3-11.8 106.1c-1.8.8-4.6 1.2-8.3 1.1a73.3 73.3 0 0 1-14-1.5l4-48.5L19 64.4l3.7-43.2z"/></svg>';}
		else if (val2 == "5") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="106" height="140.9"><path fill="#1E3D6F" d="M30.1 88.3c-1.3-6-3.9-15.8-7.6-29.4-3.7-13.6-6-21.8-7-24.4l6.4.3a169.7 169.7 0 0 0 43.7-4.5 103.7 103.7 0 0 0 17-5.9l1 19.9A138.9 138.9 0 0 1 62 51.9c-5.6 1.4-11 2-16.3 2-2.5-.1-4.8-.4-7-.9l2.2 17.1a167 167 0 0 1 13.3-3c3.4-.5 6.5-.7 9.5-.7 3 .1 5.6.6 7.4 1.6l1.3.5c.7.3 1.7 1 3 2A40.4 40.4 0 0 1 83.7 82a39.6 39.6 0 0 1 4.4 18A27.3 27.3 0 0 1 68 126.2a42 42 0 0 1-17 .7l-27.7-6.6 3.3-17.4c4.4 1.5 8.5 2.6 12 3.3 3.7.7 7 1 9.8 1.2 5.6 0 9.8-.8 12.7-2.8 3-1.9 4.8-4 5.6-6.2a18 18 0 0 0 1.3-5.7c0-1.6-.8-3.7-2.6-6.1-1.8-2.5-3.2-3.9-4.3-4.2-3.8 2-14.2 3.9-30.9 5.8z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M30.1 88.3c-1.3-6-3.9-15.8-7.6-29.4-3.7-13.6-6-21.8-7-24.4l6.4.3a169.7 169.7 0 0 0 43.7-4.5 103.7 103.7 0 0 0 17-5.9l1 19.9A138.9 138.9 0 0 1 62 51.9c-5.6 1.4-11 2-16.3 2-2.5-.1-4.8-.4-7-.9l2.2 17.1a167 167 0 0 1 13.3-3c3.4-.5 6.5-.7 9.5-.7 3 .1 5.6.6 7.4 1.6l1.3.5c.7.3 1.7 1 3 2A40.4 40.4 0 0 1 83.7 82a39.6 39.6 0 0 1 4.4 18A27.3 27.3 0 0 1 68 126.2a42 42 0 0 1-17 .7l-27.7-6.6 3.3-17.4c4.4 1.5 8.5 2.6 12 3.3 3.7.7 7 1 9.8 1.2 5.6 0 9.8-.8 12.7-2.8 3-1.9 4.8-4 5.6-6.2a18 18 0 0 0 1.3-5.7c0-1.6-.8-3.7-2.6-6.1-1.8-2.5-3.2-3.9-4.3-4.2-3.8 2-14.2 3.9-30.9 5.8z"/><path fill="#1E3D6F" d="M30.1 88.3c-1.3-6-3.9-15.8-7.6-29.4-3.7-13.6-6-21.8-7-24.4l6.4.3a169.7 169.7 0 0 0 43.7-4.5 103.7 103.7 0 0 0 17-5.9l1 19.9A138.9 138.9 0 0 1 62 51.9c-5.6 1.4-11 2-16.3 2-2.5-.1-4.8-.4-7-.9l2.2 17.1a167 167 0 0 1 13.3-3c3.4-.5 6.5-.7 9.5-.7 3 .1 5.6.6 7.4 1.6l1.3.5c.7.3 1.7 1 3 2A40.4 40.4 0 0 1 83.7 82a39.6 39.6 0 0 1 4.4 18A27.3 27.3 0 0 1 68 126.2a42 42 0 0 1-17 .7l-27.7-6.6 3.3-17.4c4.4 1.5 8.5 2.6 12 3.3 3.7.7 7 1 9.8 1.2 5.6 0 9.8-.8 12.7-2.8 3-1.9 4.8-4 5.6-6.2a18 18 0 0 0 1.3-5.7c0-1.6-.8-3.7-2.6-6.1-1.8-2.5-3.2-3.9-4.3-4.2-3.8 2-14.2 3.9-30.9 5.8z"/><path d="M37.1 81.3c-1.3-6-3.9-15.8-7.6-29.4-3.7-13.6-6-21.8-7-24.4l6.4.3a169.7 169.7 0 0 0 43.7-4.5 103.7 103.7 0 0 0 17-5.9l1 19.9A138.9 138.9 0 0 1 69 44.9c-5.6 1.4-11 2-16.3 2-2.5-.1-4.8-.4-7-.9l2.2 17.1a167 167 0 0 1 13.3-3c3.4-.5 6.5-.7 9.5-.7 3 .1 5.6.6 7.4 1.6l1.3.5c.7.3 1.7 1 3 2A40.4 40.4 0 0 1 90.7 75 39.6 39.6 0 0 1 95 93 27.3 27.3 0 0 1 75 119.2a42 42 0 0 1-17 .7l-27.7-6.6L33.5 96c4.4 1.5 8.5 2.6 12 3.3 3.7.7 7 1 9.8 1.2 5.6 0 9.8-.8 12.7-2.8 3-1.9 4.8-4 5.6-6.2a18 18 0 0 0 1.3-5.7c0-1.6-.8-3.7-2.6-6.1-1.8-2.5-3.2-3.9-4.3-4.2-3.8 2-14.2 3.9-30.9 5.8z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M37.1 81.3c-1.3-6-3.9-15.8-7.6-29.4-3.7-13.6-6-21.8-7-24.4l6.4.3a169.7 169.7 0 0 0 43.7-4.5 103.7 103.7 0 0 0 17-5.9l1 19.9A138.9 138.9 0 0 1 69 44.9c-5.6 1.4-11 2-16.3 2-2.5-.1-4.8-.4-7-.9l2.2 17.1a167 167 0 0 1 13.3-3c3.4-.5 6.5-.7 9.5-.7 3 .1 5.6.6 7.4 1.6l1.3.5c.7.3 1.7 1 3 2A40.4 40.4 0 0 1 90.7 75 39.6 39.6 0 0 1 95 93 27.3 27.3 0 0 1 75 119.2a42 42 0 0 1-17 .7l-27.7-6.6L33.5 96c4.4 1.5 8.5 2.6 12 3.3 3.7.7 7 1 9.8 1.2 5.6 0 9.8-.8 12.7-2.8 3-1.9 4.8-4 5.6-6.2a18 18 0 0 0 1.3-5.7c0-1.6-.8-3.7-2.6-6.1-1.8-2.5-3.2-3.9-4.3-4.2-3.8 2-14.2 3.9-30.9 5.8z"/><path fill="#FFCB31" d="M37.1 81.3c-1.3-6-3.9-15.8-7.6-29.4-3.7-13.6-6-21.8-7-24.4l6.4.3a169.7 169.7 0 0 0 43.7-4.5 103.7 103.7 0 0 0 17-5.9l1 19.9A138.9 138.9 0 0 1 69 44.9c-5.6 1.4-11 2-16.3 2-2.5-.1-4.8-.4-7-.9l2.2 17.1a167 167 0 0 1 13.3-3c3.4-.5 6.5-.7 9.5-.7 3 .1 5.6.6 7.4 1.6l1.3.5c.7.3 1.7 1 3 2A40.4 40.4 0 0 1 90.7 75 39.6 39.6 0 0 1 95 93 27.3 27.3 0 0 1 75 119.2a42 42 0 0 1-17 .7l-27.7-6.6L33.5 96c4.4 1.5 8.5 2.6 12 3.3 3.7.7 7 1 9.8 1.2 5.6 0 9.8-.8 12.7-2.8 3-1.9 4.8-4 5.6-6.2a18 18 0 0 0 1.3-5.7c0-1.6-.8-3.7-2.6-6.1-1.8-2.5-3.2-3.9-4.3-4.2-3.8 2-14.2 3.9-30.9 5.8z"/></svg>';}
		else if (val2 == "6") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="91" height="140.9"><path fill="#1E3D6F" d="M36.3 72.3c1-.8 2.4-1.6 4.3-2.3a18 18 0 0 1 5.3-1.3c2.2-.1 3.8.3 5 1.3l1.3.3c.7.2 1.7.7 3 1.5a37 37 0 0 1 9.1 10 35.9 35.9 0 0 1 5.9 16c.2 2.7 0 5.1-.6 7.4-1.2 4.8-3 8.7-5.3 11.8a26.4 26.4 0 0 1-15 10.4c-2.3.5-4.3.9-6 1a34.5 34.5 0 0 1-15.5-1.2 24.4 24.4 0 0 1-9.4-6.2 27 27 0 0 1-5.9-9.6 16 16 0 0 1-.6-4c-.2-2.9-.1-6.8.3-11.6a150 150 0 0 1 2-14.5 80.4 80.4 0 0 1 11.6-29.5A68.3 68.3 0 0 1 64.7 23L55 44.5a110.7 110.7 0 0 0-14 17.2 26.5 26.5 0 0 0-4.8 10.6zm14.8 21c-1-3-2.7-5.3-5-6.8a10.7 10.7 0 0 0-6.6-2c-.7 0-1.5.2-2.3.6-1 .4-2.4 1.4-3.9 3a28.7 28.7 0 0 0-4 5 13.6 13.6 0 0 0-2 5v2c.2 3 1.3 5.8 3.3 8.3 2 2.6 4.7 3.7 8.3 3.5a15 15 0 0 0 9-3.6c1.6-1.6 2.7-3.4 3.3-5.3a16.8 16.8 0 0 0-.1-9.7z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M36.3 72.3c1-.8 2.4-1.6 4.3-2.3a18 18 0 0 1 5.3-1.3c2.2-.1 3.8.3 5 1.3l1.3.3c.7.2 1.7.7 3 1.5a37 37 0 0 1 9.1 10 35.9 35.9 0 0 1 5.9 16c.2 2.7 0 5.1-.6 7.4-1.2 4.8-3 8.7-5.3 11.8a26.4 26.4 0 0 1-15 10.4c-2.3.5-4.3.9-6 1a34.5 34.5 0 0 1-15.5-1.2 24.4 24.4 0 0 1-9.4-6.2 27 27 0 0 1-5.9-9.6 16 16 0 0 1-.6-4c-.2-2.9-.1-6.8.3-11.6a150 150 0 0 1 2-14.5 80.4 80.4 0 0 1 11.6-29.5A68.3 68.3 0 0 1 64.7 23L55 44.5a110.7 110.7 0 0 0-14 17.2 26.5 26.5 0 0 0-4.8 10.6zm14.8 21c-1-3-2.7-5.3-5-6.8a10.7 10.7 0 0 0-6.6-2c-.7 0-1.5.2-2.3.6-1 .4-2.4 1.4-3.9 3a28.7 28.7 0 0 0-4 5 13.6 13.6 0 0 0-2 5v2c.2 3 1.3 5.8 3.3 8.3 2 2.6 4.7 3.7 8.3 3.5a15 15 0 0 0 9-3.6c1.6-1.6 2.7-3.4 3.3-5.3a16.8 16.8 0 0 0-.1-9.7z"/><path fill="#1E3D6F" d="M36.3 72.3c1-.8 2.4-1.6 4.3-2.3a18 18 0 0 1 5.3-1.3c2.2-.1 3.8.3 5 1.3l1.3.3c.7.2 1.7.7 3 1.5a37 37 0 0 1 9.1 10 35.9 35.9 0 0 1 5.9 16c.2 2.7 0 5.1-.6 7.4-1.2 4.8-3 8.7-5.3 11.8a26.4 26.4 0 0 1-15 10.4c-2.3.5-4.3.9-6 1a34.5 34.5 0 0 1-15.5-1.2 24.4 24.4 0 0 1-9.4-6.2 27 27 0 0 1-5.9-9.6 16 16 0 0 1-.6-4c-.2-2.9-.1-6.8.3-11.6a150 150 0 0 1 2-14.5 80.4 80.4 0 0 1 11.6-29.5A68.3 68.3 0 0 1 64.7 23L55 44.5a110.7 110.7 0 0 0-14 17.2 26.5 26.5 0 0 0-4.8 10.6zm14.8 21c-1-3-2.7-5.3-5-6.8a10.7 10.7 0 0 0-6.6-2c-.7 0-1.5.2-2.3.6-1 .4-2.4 1.4-3.9 3a28.7 28.7 0 0 0-4 5 13.6 13.6 0 0 0-2 5v2c.2 3 1.3 5.8 3.3 8.3 2 2.6 4.7 3.7 8.3 3.5a15 15 0 0 0 9-3.6c1.6-1.6 2.7-3.4 3.3-5.3a16.8 16.8 0 0 0-.1-9.7z"/><path d="M43.3 65.3c1-.8 2.4-1.6 4.3-2.3a18 18 0 0 1 5.3-1.3c2.2-.1 3.8.3 5 1.3l1.3.3c.7.2 1.7.7 3 1.5a37 37 0 0 1 9.1 10 35.9 35.9 0 0 1 5.9 16c.2 2.7 0 5.1-.6 7.4-1.2 4.8-3 8.7-5.3 11.8a26.4 26.4 0 0 1-15 10.4c-2.3.5-4.3.9-6 1a34.5 34.5 0 0 1-15.5-1.2 24.4 24.4 0 0 1-9.4-6.2 27 27 0 0 1-5.9-9.6 16 16 0 0 1-.6-3.9c-.2-3-.1-6.9.3-11.7a150 150 0 0 1 2-14.5 80.4 80.4 0 0 1 11.6-29.5A68.3 68.3 0 0 1 71.7 16L62 37.5a110.7 110.7 0 0 0-14 17.2 26.5 26.5 0 0 0-4.8 10.6zm14.8 21c-1-3-2.7-5.3-5-6.8a10.7 10.7 0 0 0-6.6-2c-.7 0-1.5.2-2.3.6-1 .4-2.4 1.4-3.9 3a28.7 28.7 0 0 0-4 5 13.5 13.5 0 0 0-2 5v2c.2 3 1.3 5.8 3.3 8.3 2 2.6 4.7 3.7 8.3 3.5a15 15 0 0 0 9-3.6c1.6-1.6 2.7-3.4 3.3-5.3a16.8 16.8 0 0 0-.1-9.7z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M43.3 65.3c1-.8 2.4-1.6 4.3-2.3a18 18 0 0 1 5.3-1.3c2.2-.1 3.8.3 5 1.3l1.3.3c.7.2 1.7.7 3 1.5a37 37 0 0 1 9.1 10 35.9 35.9 0 0 1 5.9 16c.2 2.7 0 5.1-.6 7.4-1.2 4.8-3 8.7-5.3 11.8a26.4 26.4 0 0 1-15 10.4c-2.3.5-4.3.9-6 1a34.5 34.5 0 0 1-15.5-1.2 24.4 24.4 0 0 1-9.4-6.2 27 27 0 0 1-5.9-9.6 16 16 0 0 1-.6-3.9c-.2-3-.1-6.9.3-11.7a150 150 0 0 1 2-14.5 80.4 80.4 0 0 1 11.6-29.5A68.3 68.3 0 0 1 71.7 16L62 37.5a110.7 110.7 0 0 0-14 17.2 26.5 26.5 0 0 0-4.8 10.6zm14.8 21c-1-3-2.7-5.3-5-6.8a10.7 10.7 0 0 0-6.6-2c-.7 0-1.5.2-2.3.6-1 .4-2.4 1.4-3.9 3a28.7 28.7 0 0 0-4 5 13.5 13.5 0 0 0-2 5v2c.2 3 1.3 5.8 3.3 8.3 2 2.6 4.7 3.7 8.3 3.5a15 15 0 0 0 9-3.6c1.6-1.6 2.7-3.4 3.3-5.3a16.8 16.8 0 0 0-.1-9.7z"/><path fill="#FFCB31" d="M43.3 65.3c1-.8 2.4-1.6 4.3-2.3a18 18 0 0 1 5.3-1.3c2.2-.1 3.8.3 5 1.3l1.3.3c.7.2 1.7.7 3 1.5a37 37 0 0 1 9.1 10 35.9 35.9 0 0 1 5.9 16c.2 2.7 0 5.1-.6 7.4-1.2 4.8-3 8.7-5.3 11.8a26.4 26.4 0 0 1-15 10.4c-2.3.5-4.3.9-6 1a34.5 34.5 0 0 1-15.5-1.2 24.4 24.4 0 0 1-9.4-6.2 27 27 0 0 1-5.9-9.6 16 16 0 0 1-.6-3.9c-.2-3-.1-6.9.3-11.7a150 150 0 0 1 2-14.5 80.4 80.4 0 0 1 11.6-29.5A68.3 68.3 0 0 1 71.7 16L62 37.5a110.7 110.7 0 0 0-14 17.2 26.5 26.5 0 0 0-4.8 10.6zm14.8 21c-1-3-2.7-5.3-5-6.8a10.7 10.7 0 0 0-6.6-2c-.7 0-1.5.2-2.3.6-1 .4-2.4 1.4-3.9 3a28.7 28.7 0 0 0-4 5 13.5 13.5 0 0 0-2 5v2c.2 3 1.3 5.8 3.3 8.3 2 2.6 4.7 3.7 8.3 3.5a15 15 0 0 0 9-3.6c1.6-1.6 2.7-3.4 3.3-5.3a16.8 16.8 0 0 0-.1-9.7z"/></svg>';}
		else if (val2 == "7") {
		return '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="110" height="141"><path fill="#1E3D6F" d="M60 47l-48-6 1-17 74 8-36 89-21 1 30-75z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M60 47l-48-6 1-17 74 8-36 89-21 1 30-75z"/><path fill="#1E3D6F" d="M60 47l-48-6 1-17 74 8-36 89-21 1 30-75z"/><path d="M67 40l-48-6 1-17 74 8-36 89-21 1 30-75z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M67 40l-48-6 1-17 74 8-36 89-21 1 30-75z"/><path fill="#FFCB31" d="M67 40l-48-6 1-17 74 8-36 89-21 1 30-75z"/></svg>';}
			else if (val2 == "8") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="102" height="140.9"><path fill="#1E3D6F" d="M44.8 126.2a40.3 40.3 0 0 1-17.6-3c-4-2-7.4-4.6-10-7.9a30.4 30.4 0 0 1-6.6-20c0-4.5.8-8.8 2.2-13 1.4-4.2 3.5-7.7 6.3-10.5 2-2 4.2-3.8 6.7-5.4 2.5-1.6 4.5-2.7 5.8-3.4C21 58 15.7 51.3 15.9 43c0-2.7.7-5.4 1.8-8.2 2.4-5.5 5.6-9.4 9.7-11.5a29 29 0 0 1 14.4-3.1c1.7 0 3.5.2 5.4.4 5.5.6 10 1.4 13.3 2.4a21 21 0 0 1 8.8 5.4c2.5 2.5 4.6 6 6.3 10.6.3.9.5 1.7.5 2.6 0 1.7-.6 3.5-1.7 5.4-1 2-2.5 4.2-4.4 6.6l-6 7.7c.4 0 .9.2 1.6.5.8.3 1.8 1 3.2 2 1.4 1 3 2.6 4.6 4.6 1.7 2 3.3 4.6 4.8 7.5 3.5 6.8 5.2 13 5 18.8a32.5 32.5 0 0 1-19.8 28 42.7 42.7 0 0 1-18.6 3.5zm-2.5-45.9a18 18 0 0 0-6 3.3c-2.6 2-4 3.7-4 5.3l-.8 1.7a9.2 9.2 0 0 0-1 3.6c0 4.5 4 7.2 12.2 8.1l2.5.2c4.4.1 7.7-.8 10-2.8 2.3-2 3.8-4.1 4.5-6.4a24 24 0 0 0 1-6.2c0-1.7-.9-3.8-2.9-6.4-2-2.6-3.5-4-4.7-4.3-3.5 1.6-7.1 3-10.8 4zm-6.2-36.9a3 3 0 0 0-.7 1.6c0 .6.3 1.2 1 1.8.6.6 1.6 1.2 3 2l5.5 3.4a1130.7 1130.7 0 0 0 9.6-5.5c.8-.6 1.2-1.2 1.2-1.8a2 2 0 0 0-.7-1.6 10 10 0 0 0-4.2-2.5 18 18 0 0 0-5.7-1c-4.3-.2-7.3 1-9 3.6z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M44.8 126.2a40.3 40.3 0 0 1-17.6-3c-4-2-7.4-4.6-10-7.9a30.4 30.4 0 0 1-6.6-20c0-4.5.8-8.8 2.2-13 1.4-4.2 3.5-7.7 6.3-10.5 2-2 4.2-3.8 6.7-5.4 2.5-1.6 4.5-2.7 5.8-3.4C21 58 15.7 51.3 15.9 43c0-2.7.7-5.4 1.8-8.2 2.4-5.5 5.6-9.4 9.7-11.5a29 29 0 0 1 14.4-3.1c1.7 0 3.5.2 5.4.4 5.5.6 10 1.4 13.3 2.4a21 21 0 0 1 8.8 5.4c2.5 2.5 4.6 6 6.3 10.6.3.9.5 1.7.5 2.6 0 1.7-.6 3.5-1.7 5.4-1 2-2.5 4.2-4.4 6.6l-6 7.7c.4 0 .9.2 1.6.5.8.3 1.8 1 3.2 2 1.4 1 3 2.6 4.6 4.6 1.7 2 3.3 4.6 4.8 7.5 3.5 6.8 5.2 13 5 18.8a32.5 32.5 0 0 1-19.8 28 42.7 42.7 0 0 1-18.6 3.5zm-2.5-45.9a18 18 0 0 0-6 3.3c-2.6 2-4 3.7-4 5.3l-.8 1.7a9.2 9.2 0 0 0-1 3.6c0 4.5 4 7.2 12.2 8.1l2.5.2c4.4.1 7.7-.8 10-2.8 2.3-2 3.8-4.1 4.5-6.4a24 24 0 0 0 1-6.2c0-1.7-.9-3.8-2.9-6.4-2-2.6-3.5-4-4.7-4.3-3.5 1.6-7.1 3-10.8 4zm-6.2-36.9a3 3 0 0 0-.7 1.6c0 .6.3 1.2 1 1.8.6.6 1.6 1.2 3 2l5.5 3.4a1130.7 1130.7 0 0 0 9.6-5.5c.8-.6 1.2-1.2 1.2-1.8a2 2 0 0 0-.7-1.6 10 10 0 0 0-4.2-2.5 18 18 0 0 0-5.7-1c-4.3-.2-7.3 1-9 3.6z"/><path fill="#1E3D6F" d="M44.8 126.2a40.3 40.3 0 0 1-17.6-3c-4-2-7.4-4.6-10-7.9a30.4 30.4 0 0 1-6.6-20c0-4.5.8-8.8 2.2-13 1.4-4.2 3.5-7.7 6.3-10.5 2-2 4.2-3.8 6.7-5.4 2.5-1.6 4.5-2.7 5.8-3.4C21 58 15.7 51.3 15.9 43c0-2.7.7-5.4 1.8-8.2 2.4-5.5 5.6-9.4 9.7-11.5a29 29 0 0 1 14.4-3.1c1.7 0 3.5.2 5.4.4 5.5.6 10 1.4 13.3 2.4a21 21 0 0 1 8.8 5.4c2.5 2.5 4.6 6 6.3 10.6.3.9.5 1.7.5 2.6 0 1.7-.6 3.5-1.7 5.4-1 2-2.5 4.2-4.4 6.6l-6 7.7c.4 0 .9.2 1.6.5.8.3 1.8 1 3.2 2 1.4 1 3 2.6 4.6 4.6 1.7 2 3.3 4.6 4.8 7.5 3.5 6.8 5.2 13 5 18.8a32.5 32.5 0 0 1-19.8 28 42.7 42.7 0 0 1-18.6 3.5zm-2.5-45.9a18 18 0 0 0-6 3.3c-2.6 2-4 3.7-4 5.3l-.8 1.7a9.2 9.2 0 0 0-1 3.6c0 4.5 4 7.2 12.2 8.1l2.5.2c4.4.1 7.7-.8 10-2.8 2.3-2 3.8-4.1 4.5-6.4a24 24 0 0 0 1-6.2c0-1.7-.9-3.8-2.9-6.4-2-2.6-3.5-4-4.7-4.3-3.5 1.6-7.1 3-10.8 4zm-6.2-36.9a3 3 0 0 0-.7 1.6c0 .6.3 1.2 1 1.8.6.6 1.6 1.2 3 2l5.5 3.4a1130.7 1130.7 0 0 0 9.6-5.5c.8-.6 1.2-1.2 1.2-1.8a2 2 0 0 0-.7-1.6 10 10 0 0 0-4.2-2.5 18 18 0 0 0-5.7-1c-4.3-.2-7.3 1-9 3.6z"/><path d="M51.8 119.2a40.3 40.3 0 0 1-17.6-3c-4-2-7.4-4.6-10-7.9a30.4 30.4 0 0 1-6.6-20c0-4.5.8-8.8 2.2-13 1.4-4.2 3.5-7.7 6.3-10.5 2-2 4.2-3.8 6.7-5.4 2.5-1.6 4.5-2.7 5.8-3.4C28 51 22.7 44.3 22.9 36c0-2.7.7-5.4 1.8-8.2 2.4-5.5 5.6-9.4 9.7-11.5a29 29 0 0 1 14.4-3.1c1.7 0 3.5.2 5.4.4 5.5.6 10 1.4 13.3 2.4a21 21 0 0 1 8.8 5.4c2.5 2.5 4.6 6 6.3 10.6.3.9.5 1.7.5 2.6 0 1.7-.6 3.5-1.7 5.4-1 2-2.5 4.2-4.4 6.6l-6 7.7c.4 0 .9.2 1.6.5.8.3 1.8 1 3.2 2 1.4 1 3 2.6 4.6 4.6 1.7 2 3.3 4.6 4.8 7.5 3.5 6.8 5.2 13 5 18.8a32.5 32.5 0 0 1-19.8 28 42.7 42.7 0 0 1-18.6 3.5zm-2.5-45.9a18 18 0 0 0-6 3.3c-2.6 2-4 3.7-4 5.3l-.8 1.7a9.2 9.2 0 0 0-1 3.6c0 4.5 4 7.2 12.2 8.1l2.5.2c4.4.1 7.7-.8 10-2.8 2.3-2 3.8-4.1 4.5-6.4a24 24 0 0 0 1-6.2c0-1.7-.9-3.8-2.9-6.4-2-2.6-3.5-4-4.7-4.3-3.5 1.6-7.1 3-10.8 4zm-6.2-36.9a3 3 0 0 0-.7 1.6c0 .6.3 1.2 1 1.8.6.6 1.6 1.2 3 2l5.5 3.4a1130.7 1130.7 0 0 0 9.6-5.5c.8-.6 1.2-1.2 1.2-1.8a2 2 0 0 0-.7-1.6 10 10 0 0 0-4.2-2.5 18 18 0 0 0-5.7-1c-4.3-.2-7.3 1-9 3.6z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M51.8 119.2a40.3 40.3 0 0 1-17.6-3c-4-2-7.4-4.6-10-7.9a30.4 30.4 0 0 1-6.6-20c0-4.5.8-8.8 2.2-13 1.4-4.2 3.5-7.7 6.3-10.5 2-2 4.2-3.8 6.7-5.4 2.5-1.6 4.5-2.7 5.8-3.4C28 51 22.7 44.3 22.9 36c0-2.7.7-5.4 1.8-8.2 2.4-5.5 5.6-9.4 9.7-11.5a29 29 0 0 1 14.4-3.1c1.7 0 3.5.2 5.4.4 5.5.6 10 1.4 13.3 2.4a21 21 0 0 1 8.8 5.4c2.5 2.5 4.6 6 6.3 10.6.3.9.5 1.7.5 2.6 0 1.7-.6 3.5-1.7 5.4-1 2-2.5 4.2-4.4 6.6l-6 7.7c.4 0 .9.2 1.6.5.8.3 1.8 1 3.2 2 1.4 1 3 2.6 4.6 4.6 1.7 2 3.3 4.6 4.8 7.5 3.5 6.8 5.2 13 5 18.8a32.5 32.5 0 0 1-19.8 28 42.7 42.7 0 0 1-18.6 3.5zm-2.5-45.9a18 18 0 0 0-6 3.3c-2.6 2-4 3.7-4 5.3l-.8 1.7a9.2 9.2 0 0 0-1 3.6c0 4.5 4 7.2 12.2 8.1l2.5.2c4.4.1 7.7-.8 10-2.8 2.3-2 3.8-4.1 4.5-6.4a24 24 0 0 0 1-6.2c0-1.7-.9-3.8-2.9-6.4-2-2.6-3.5-4-4.7-4.3-3.5 1.6-7.1 3-10.8 4zm-6.2-36.9a3 3 0 0 0-.7 1.6c0 .6.3 1.2 1 1.8.6.6 1.6 1.2 3 2l5.5 3.4a1130.7 1130.7 0 0 0 9.6-5.5c.8-.6 1.2-1.2 1.2-1.8a2 2 0 0 0-.7-1.6 10 10 0 0 0-4.2-2.5 18 18 0 0 0-5.7-1c-4.3-.2-7.3 1-9 3.6z"/><path fill="#FFCB31" d="M51.8 119.2a40.3 40.3 0 0 1-17.6-3c-4-2-7.4-4.6-10-7.9a30.4 30.4 0 0 1-6.6-20c0-4.5.8-8.8 2.2-13 1.4-4.2 3.5-7.7 6.3-10.5 2-2 4.2-3.8 6.7-5.4 2.5-1.6 4.5-2.7 5.8-3.4C28 51 22.7 44.3 22.9 36c0-2.7.7-5.4 1.8-8.2 2.4-5.5 5.6-9.4 9.7-11.5a29 29 0 0 1 14.4-3.1c1.7 0 3.5.2 5.4.4 5.5.6 10 1.4 13.3 2.4a21 21 0 0 1 8.8 5.4c2.5 2.5 4.6 6 6.3 10.6.3.9.5 1.7.5 2.6 0 1.7-.6 3.5-1.7 5.4-1 2-2.5 4.2-4.4 6.6l-6 7.7c.4 0 .9.2 1.6.5.8.3 1.8 1 3.2 2 1.4 1 3 2.6 4.6 4.6 1.7 2 3.3 4.6 4.8 7.5 3.5 6.8 5.2 13 5 18.8a32.5 32.5 0 0 1-19.8 28 42.7 42.7 0 0 1-18.6 3.5zm-2.5-45.9a18 18 0 0 0-6 3.3c-2.6 2-4 3.7-4 5.3l-.8 1.7a9.2 9.2 0 0 0-1 3.6c0 4.5 4 7.2 12.2 8.1l2.5.2c4.4.1 7.7-.8 10-2.8 2.3-2 3.8-4.1 4.5-6.4a24 24 0 0 0 1-6.2c0-1.7-.9-3.8-2.9-6.4-2-2.6-3.5-4-4.7-4.3-3.5 1.6-7.1 3-10.8 4zm-6.2-36.9a3 3 0 0 0-.7 1.6c0 .6.3 1.2 1 1.8.6.6 1.6 1.2 3 2l5.5 3.4a1130.7 1130.7 0 0 0 9.6-5.5c.8-.6 1.2-1.2 1.2-1.8a2 2 0 0 0-.7-1.6 10 10 0 0 0-4.2-2.5 18 18 0 0 0-5.7-1c-4.3-.2-7.3 1-9 3.6z"/></svg>';}
	else if (val2 == "9") {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="90" height="140.9"><path fill="#1E3D6F" d="M47.5 68.2c-.7.5-1.7 1-3 1.5-1.4.5-2.7.9-4 1-3 .6-5.4.4-7-.6-1.2 0-3-.5-5.8-1.5-2.7-1-5.7-3.4-9-6.9a31.6 31.6 0 0 1-4.9-6.6 20.2 20.2 0 0 1-2.2-6.2c-.3-2.2-.3-4.3.2-6.3 1.2-5.3 3.4-9.6 6.7-12.8a30 30 0 0 1 10-6.8 46 46 0 0 1 12.3-3.4c4.7-.7 9-.8 13 0 4 .7 7.3 2 10.2 4 2.8 2.1 5 4.6 6.6 7.5.4.6.7 1.7 1 3.2.6 3.9.5 9.3-.2 16.2S69.7 63 68.2 67l-4.6 13.2a283 283 0 0 1-6.4 16.6c-2.3 5.4-5 10.6-7.9 15.5-3 5-6.2 9-9.6 11.9l-14.9 1.7a1243.8 1243.8 0 0 0 19.4-46.5c2-5.4 3.1-9.1 3.3-11.1zM35.2 50.7a5.8 5.8 0 0 0 6.6 3.1 13 13 0 0 0 4.9-2c1.6-1 3-2.1 4-3.4 1.1-1.2 1.6-2 1.5-2.7v-.5a21.3 21.3 0 0 0 0-3.4c-.7-4-3.6-5.6-8.7-4.8l-2.5.6a10 10 0 0 0-5.8 3.8 7.8 7.8 0 0 0-1.3 5.9 9 9 0 0 0 1.3 3.4z"/><path fill="none" stroke="#1E3D6F" stroke-width="20" stroke-linecap="square" d="M47.5 68.2c-.7.5-1.7 1-3 1.5-1.4.5-2.7.9-4 1-3 .6-5.4.4-7-.6-1.2 0-3-.5-5.8-1.5-2.7-1-5.7-3.4-9-6.9a31.6 31.6 0 0 1-4.9-6.6 20.2 20.2 0 0 1-2.2-6.2c-.3-2.2-.3-4.3.2-6.3 1.2-5.3 3.4-9.6 6.7-12.8a30 30 0 0 1 10-6.8 46 46 0 0 1 12.3-3.4c4.7-.7 9-.8 13 0 4 .7 7.3 2 10.2 4 2.8 2.1 5 4.6 6.6 7.5.4.6.7 1.7 1 3.2.6 3.9.5 9.3-.2 16.2S69.7 63 68.2 67l-4.6 13.2a283 283 0 0 1-6.4 16.6c-2.3 5.4-5 10.6-7.9 15.5-3 5-6.2 9-9.6 11.9l-14.9 1.7a1243.8 1243.8 0 0 0 19.4-46.5c2-5.4 3.1-9.1 3.3-11.1zM35.2 50.7a5.8 5.8 0 0 0 6.6 3.1 13 13 0 0 0 4.9-2c1.6-1 3-2.1 4-3.4 1.1-1.2 1.6-2 1.5-2.7v-.5a21.3 21.3 0 0 0 0-3.4c-.7-4-3.6-5.6-8.7-4.8l-2.5.6a10 10 0 0 0-5.8 3.8 7.8 7.8 0 0 0-1.3 5.9 9 9 0 0 0 1.3 3.4z"/><path fill="#1E3D6F" d="M47.5 68.2c-.7.5-1.7 1-3 1.5-1.4.5-2.7.9-4 1-3 .6-5.4.4-7-.6-1.2 0-3-.5-5.8-1.5-2.7-1-5.7-3.4-9-6.9a31.6 31.6 0 0 1-4.9-6.6 20.2 20.2 0 0 1-2.2-6.2c-.3-2.2-.3-4.3.2-6.3 1.2-5.3 3.4-9.6 6.7-12.8a30 30 0 0 1 10-6.8 46 46 0 0 1 12.3-3.4c4.7-.7 9-.8 13 0 4 .7 7.3 2 10.2 4 2.8 2.1 5 4.6 6.6 7.5.4.6.7 1.7 1 3.2.6 3.9.5 9.3-.2 16.2S69.7 63 68.2 67l-4.6 13.2a283 283 0 0 1-6.4 16.6c-2.3 5.4-5 10.6-7.9 15.5-3 5-6.2 9-9.6 11.9l-14.9 1.7a1243.8 1243.8 0 0 0 19.4-46.5c2-5.4 3.1-9.1 3.3-11.1zM35.2 50.7a5.8 5.8 0 0 0 6.6 3.1 13 13 0 0 0 4.9-2c1.6-1 3-2.1 4-3.4 1.1-1.2 1.6-2 1.5-2.7v-.5a21.3 21.3 0 0 0 0-3.4c-.7-4-3.6-5.6-8.7-4.8l-2.5.6a10 10 0 0 0-5.8 3.8 7.8 7.8 0 0 0-1.3 5.9 9 9 0 0 0 1.3 3.4z"/><path d="M54.5 61.2c-.7.5-1.7 1-3 1.5-1.4.5-2.7.9-4 1-3 .6-5.4.4-7-.6-1.2 0-3-.5-5.8-1.5-2.7-1-5.7-3.4-9-6.9a31.6 31.6 0 0 1-4.9-6.6 20.2 20.2 0 0 1-2.2-6.2c-.4-2.2-.3-4.3.2-6.3 1.2-5.3 3.4-9.6 6.7-12.8a30 30 0 0 1 10-6.8 46 46 0 0 1 12.3-3.4c4.7-.7 9-.8 13 0 4 .7 7.3 2 10.2 4 2.8 2.1 5 4.6 6.6 7.5.4.6.7 1.7 1 3.2.6 3.9.5 9.3-.2 16.2S76.7 56 75.2 60l-4.6 13.2a283 283 0 0 1-6.4 16.6c-2.3 5.4-5 10.6-7.9 15.5-3 5-6.2 9-9.6 11.9l-14.9 1.7a1243.8 1243.8 0 0 0 19.4-46.5c2-5.4 3.1-9.1 3.3-11.1zM42.2 43.7a5.8 5.8 0 0 0 6.6 3.1 13 13 0 0 0 4.9-2c1.6-1 3-2.1 4-3.4 1.1-1.2 1.6-2 1.5-2.7v-.5a21.3 21.3 0 0 0 0-3.4c-.7-4-3.6-5.6-8.7-4.8l-2.5.6a10 10 0 0 0-5.8 3.8 7.8 7.8 0 0 0-1.3 5.9 9 9 0 0 0 1.3 3.4z"/><path fill="none" stroke="#3070B3" stroke-width="20" stroke-linecap="square" d="M54.5 61.2c-.7.5-1.7 1-3 1.5-1.4.5-2.7.9-4 1-3 .6-5.4.4-7-.6-1.2 0-3-.5-5.8-1.5-2.7-1-5.7-3.4-9-6.9a31.6 31.6 0 0 1-4.9-6.6 20.2 20.2 0 0 1-2.2-6.2c-.4-2.2-.3-4.3.2-6.3 1.2-5.3 3.4-9.6 6.7-12.8a30 30 0 0 1 10-6.8 46 46 0 0 1 12.3-3.4c4.7-.7 9-.8 13 0 4 .7 7.3 2 10.2 4 2.8 2.1 5 4.6 6.6 7.5.4.6.7 1.7 1 3.2.6 3.9.5 9.3-.2 16.2S76.7 56 75.2 60l-4.6 13.2a283 283 0 0 1-6.4 16.6c-2.3 5.4-5 10.6-7.9 15.5-3 5-6.2 9-9.6 11.9l-14.9 1.7a1243.8 1243.8 0 0 0 19.4-46.5c2-5.4 3.1-9.1 3.3-11.1zM42.2 43.7a5.8 5.8 0 0 0 6.6 3.1 13 13 0 0 0 4.9-2c1.6-1 3-2.1 4-3.4 1.1-1.2 1.6-2 1.5-2.7v-.5a21.3 21.3 0 0 0 0-3.4c-.7-4-3.6-5.6-8.7-4.8l-2.5.6a10 10 0 0 0-5.8 3.8 7.8 7.8 0 0 0-1.3 5.9 9 9 0 0 0 1.3 3.4z"/><path fill="#FFCB31" d="M54.5 61.2c-.7.5-1.7 1-3 1.5-1.4.5-2.7.9-4 1-3 .6-5.4.4-7-.6-1.2 0-3-.5-5.8-1.5-2.7-1-5.7-3.4-9-6.9a31.6 31.6 0 0 1-4.9-6.6 20.2 20.2 0 0 1-2.2-6.2c-.4-2.2-.3-4.3.2-6.3 1.2-5.3 3.4-9.6 6.7-12.8a30 30 0 0 1 10-6.8 46 46 0 0 1 12.3-3.4c4.7-.7 9-.8 13 0 4 .7 7.3 2 10.2 4 2.8 2.1 5 4.6 6.6 7.5.4.6.7 1.7 1 3.2.6 3.9.5 9.3-.2 16.2S76.7 56 75.2 60l-4.6 13.2a283 283 0 0 1-6.4 16.6c-2.3 5.4-5 10.6-7.9 15.5-3 5-6.2 9-9.6 11.9l-14.9 1.7a1243.8 1243.8 0 0 0 19.4-46.5c2-5.4 3.1-9.1 3.3-11.1zM42.2 43.7a5.8 5.8 0 0 0 6.6 3.1 13 13 0 0 0 4.9-2c1.6-1 3-2.1 4-3.4 1.1-1.2 1.6-2 1.5-2.7v-.5a21.3 21.3 0 0 0 0-3.4c-.7-4-3.6-5.6-8.7-4.8l-2.5.6a10 10 0 0 0-5.8 3.8 7.8 7.8 0 0 0-1.3 5.9 9 9 0 0 0 1.3 3.4z"/></svg>';}
}

function idSum(){
 return sumChars(userFirstName);
 }
function charToNumber (s, i) {
    return parseInt(s.charAt(i), 36) - 9;
}
function sumChars (s) {
	str = s.replace(/\s+/g, '');
    var i = str.length, r = 0;
    while (--i >= 0) r += charToNumber(str, i);
    return r;
}

function $_(IDS) { return document.getElementById(IDS); }
function randOrd() { return (Math.round(Math.random())-0.5); }
function renderResults(){
  var test = $_("test");
  localStorage.setItem("pg_cata1", cat1);
  localStorage.setItem("pg_cata2", cat2);
  localStorage.setItem("pg_cata3", cat3);
  localStorage.setItem("pg_cata4", cat4);
  localStorage.setItem("pg_tota1", tot1);
  localStorage.setItem("pg_tota2", tot2);
  localStorage.setItem("pg_tota3", tot3);
  localStorage.setItem("pg_tota4", tot4);
  $_("test_status").innerHTML = "<h1>Principles of IT, February Test</h1><h2>Attempt #" +vs;
  $_('timeleft').innerHTML = '</h2>'; l1 = ques - cor;
  test.innerHTML = "";
  test.innerHTML += "<h1>Results for " + userFirstName + "</h1>";
  test.innerHTML += now();
  test.innerHTML += attemptid();
    test.innerHTML += "<table id='render'><tr><td valign='top'><p id='render1'></p><br></td><td><p id='render2'></p></td></tr></table>";
  render1.innerHTML += "<br><h1>Percentage Correct</h1><br>"
  render1.innerHTML += bigLet((cor/rscore*100).toFixed(0));
  render1.innerHTML += "<br><br>"
  render2.innerHTML += "<br><h3>Attempt #"+vs +" for " + userFirstName +" "+ userLastName +"."
  render2.innerHTML += now();
  render2.innerHTML += "<h3><br>Screenshot & upload your results!</h3><br><br><h1>Categories</h1>"
  render2.innerHTML += "<br>Correct Answers:<br>"
  render2.innerHTML += "<span>" + showNum(corrs[0]) + showOf() + showNum(totas[0]) + "</span><span>" + totasNames[0] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[1]) + showOf() + showNum(totas[1]) + "</span><span>" + totasNames[1] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[2]) + showOf() + showNum(totas[2]) + "</span><span>" + totasNames[2] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[3]) + showOf() + showNum(totas[3]) + "</span><span>" + totasNames[3] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[4]) + showOf() + showNum(totas[4]) + "</span><span>" + totasNames[4] + "</span><br>";

  if (vs < 500) {
     test.innerHTML += '<button onclick="location.reload()">Re-test</a> ';
  } else if (vs === 500) {
     test.innerHTML += '<br>No chances remaining. Submit your screenshots. ';
  }
  setQuestionOrder();
  cor = 0;
  clearInterval(myVar);
  return false;
}

function noMore(){
 var test = $_("test");
    $_("test_status").innerHTML = "Additional Attempt Denied <BR> Student: "+ userFirstName + " " + userLastName;
  $_('timeleft').innerHTML = '';
  test.innerHTML += "<br>You've already made the maximum number of attempts. ";
  test.innerHTML += "<br>No more attempts available.";
  clearInterval(myVar);
  return false;
}

function renderQuestion() {
  var test = $_("test");
  var ques = ques;
  $_("test_status").innerHTML = "<h1>Principles of IT: February Test</h1><h2>- Student: "+userFirstName + " " + userLastName+"<br> - Attempt #"+window.vs +" - Q: "+(pos+1)+"/"+ques+"</h2>";
  if (rscore != 0) { $_("test_status").innerHTML += '<br>Currently: ~'+(cor/rscore*100).toFixed(0)+'% correct'; }
  var question = questions[posn][0];
  var chA = questions[posn][1];
  var chB = questions[posn][2];
  var chC = questions[posn][3];
  var chD = questions[posn][4];
  var chE = questions[posn][5];
  var cata = questions[posn][6];
  test.innerHTML = "<h3>"+question+"</h3>";
  var randInt = Math.random()*10;
  if (randInt<1) {
        test.innerHTML += "<label><input type='radio' name='choices' value='b'> "+chB+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='c'> "+chC+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='a'> "+chA+"</label><br>";
		test.innerHTML += "<label><input type='radio' name='choices' value='e'> "+chE+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='d'> "+chD+"</label><br><br>";
  } else if (randInt<2) {
        test.innerHTML += "<label><input type='radio' name='choices' value='c'> "+chC+"</label><br>";
		test.innerHTML += "<label><input type='radio' name='choices' value='e'> "+chE+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='d'> "+chD+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='a'> "+chA+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='b'> "+chB+"</label><br><br>";
  } else if (randInt<3) {
        test.innerHTML += "<label><input type='radio' name='choices' value='d'> "+chD+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='b'> "+chB+"</label><br>";
		test.innerHTML += "<label><input type='radio' name='choices' value='e'> "+chE+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='c'> "+chC+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='a'> "+chA+"</label><br><br>";
  } else if (randInt<4) {
        test.innerHTML += "<label><input type='radio' name='choices' value='a'> "+chA+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='b'> "+chB+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='c'> "+chC+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='d'> "+chD+"</label><br>";
		test.innerHTML += "<label><input type='radio' name='choices' value='e'> "+chE+"</label><br><br>";
  } else {
		test.innerHTML += "<label><input type='radio' name='choices' value='e'> "+chE+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='a'> "+chA+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='d'> "+chD+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='b'> "+chB+"</label><br>";
        test.innerHTML += "<label><input type='radio' name='choices' value='c'> "+chC+"</label><br><br>";
  }
  test.innerHTML += "<button onclick='checkA()'>Submit Answer</button>";
  timelimit = maxtimelimit;
  clearInterval(myVar);
  startTimer();
}

function checkA(){
  choice = ""
  var choices = document.getElementsByName("choices");
  for (var i=0; i<choices.length; i++) {
    if (choices[i].checked) { choice = choices[i].value; }
  }

  rscore++;
  if (questions[posn][6] == "a" && timelimit > 0) { totas[0]++;
    if (questions[posn][7] == "a" && timelimit > 0) { rigoa[0]++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { rigob[0]++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { rigoc[0]++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { rigod[0]++; }
	if (questions[posn][7] == "a" && timelimit > 0) { tot1++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { tot2++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { tot3++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { tot4++; }  }
  else if (questions[posn][6] == "b" && timelimit > 0) { totas[1]++;
    if (questions[posn][7] == "a" && timelimit > 0) { rigoa[1]++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { rigob[1]++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { rigoc[1]++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { rigod[1]++; }
	if (questions[posn][7] == "a" && timelimit > 0) { tot1++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { tot2++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { tot3++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { tot4++; }  }
  else if (questions[posn][6] == "c" && timelimit > 0) { totas[2]++;
    if (questions[posn][7] == "a" && timelimit > 0) { rigoa[2]++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { rigob[2]++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { rigoc[2]++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { rigod[2]++; }
	if (questions[posn][7] == "a" && timelimit > 0) { tot1++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { tot2++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { tot3++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { tot4++; }  }
  else if (questions[posn][6] == "d" && timelimit > 0) { totas[3]++;
    if (questions[posn][7] == "a" && timelimit > 0) { rigoa[3]++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { rigob[3]++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { rigoc[3]++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { rigod[3]++; }
	if (questions[posn][7] == "a" && timelimit > 0) { tot1++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { tot2++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { tot3++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { tot4++; }  }
  else if (questions[posn][6] == "e" && timelimit > 0) { totas[4]++;
    if (questions[posn][7] == "a" && timelimit > 0) { rigoa[4]++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { rigob[4]++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { rigoc[4]++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { rigod[4]++; }
	if (questions[posn][7] == "a" && timelimit > 0) { tot1++; }
  	else if (questions[posn][7] == "b" && timelimit > 0) { tot2++; }
  	else if (questions[posn][7] == "c" && timelimit > 0) { tot3++; }
  	else if (questions[posn][7] == "d" && timelimit > 0) { tot4++; } }
  if (choice == questions[posn][8] && timelimit > 0) { cor++;
     if (questions[posn][6] == "a" && timelimit > 0) { corrs[0]++; }
     if (questions[posn][6] == "b" && timelimit > 0) { corrs[1]++; }
     if (questions[posn][6] == "c" && timelimit > 0) { corrs[2]++; }
     if (questions[posn][6] == "d" && timelimit > 0) { corrs[3]++; }
     if (questions[posn][6] == "e" && timelimit > 0) { corrs[4]++; }
	 if (questions[posn][7] == "a" && timelimit > 0) { cat1++; }
     if (questions[posn][7] == "b" && timelimit > 0) { cat2++; }
     if (questions[posn][7] == "c" && timelimit > 0) { cat3++; }
     if (questions[posn][7] == "d" && timelimit > 0) { cat4++; }}
  pos++;  posn = questionOrder[pos];
  if (pos < 25) { renderQuestion(); } else { renderResults(); }
}

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

window.onload = function() {
  if (vs > 3000) {
    noMore();
	return;
  }
  setQuestionOrder();
  renderQuestion();
}
