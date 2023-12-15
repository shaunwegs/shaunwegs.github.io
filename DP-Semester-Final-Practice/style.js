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

var pos = 0, posn, choice, cor = 0, rscore = 0;
var maxtimelimit = 179, timelimit = maxtimelimit;
var vs = localStorage.getItem('csmt_on_load_counter');
var userFirstName = localStorage.getItem('csmt_userFirstName');
var userLastName = localStorage.getItem('csmt_userLastName');
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
"&nbsp; - Policy & the Room",
"&nbsp; - Software",
"&nbsp; - Hardware",
"&nbsp; - History",
"&nbsp; - Code"
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
localStorage.setItem("csmt_on_load_counter", vs);
if (userFirstName === null) {
    var userFirstName=prompt("Please enter your given name:");
    if (userFirstName=="") { userFirstName="not entered /" }
	localStorage.setItem('csmt_userFirstName', userFirstName);}
if (userLastName === null) {
    var userLastName=prompt("Please enter your family name:");
    if (userLastName=="") { userLastName="/ not entered" }
	localStorage.setItem('csmt_userLastName', userLastName);}

var questions = [

	[
"Much of the technology today's internet is built upon was originally built in response to",
"efforts during World War 2 to decrypt Nazi communications",
"Government backed competitor to break up the monopoly Bell Labs held for nearly a decade",
"partnership with Cern",
"concerns during the Cold War with Russia",
"the origin of the internet was a multi-faceted solution that related to all of these",
"d", "d", "d" ],
	[
"Which term best matches the following definition?<br><br><i>unique identifier or name</i>",
"HTTP",
"URI/URL",
"HTML",
"web",
"browser",
"b", "b", "b" ],
	[
"Where does SQL run?",
"on the user's computer",
"on the web server",
"between the web server and the user's computer",
"SQL is not a programming language, so there is nothing to 'run'",
"SQL doesn't run directly, but due to its relationship with HTML, it 'runs' or is processed on the user's computer",
"b", "b", "b" ],
	[
"Data is sent over the internet in the form of",
"flops",
"packets",
"ram",
"flags",
"modems",
"b", "b", "b" ],
	[
"http://    www   .     w3    .    org     /    P3P/Overview.html <br><br>Refer to the URL above, 'http://' is the...",
"top-level domain",
"protocol identifier",
"path",
"subdomain",
"domain",
"b", "b", "b" ],
	[
"http://    www   .     w3    .    org     /    P3P/Overview.html <br><br>Refer to the URL above, 'P3P/Overview.html' is the...",
"top-level domain",
"path",
"protocol identifier",
"subdomain",
"domain",
"b", "b", "b" ],
	[
"http://    www   .     w3    .    org     /    P3P/Overview.html <br><br>Refer to the URL above, 'www' is the...",
"top-level domain",
"subdomain",
"path",
"protocol identifier",
"domain",
"b", "b", "b" ],
	[
"http://    www   .     w3    .    org     /    P3P/Overview.html <br><br>Refer to the URL above, 'w3' is the...",
"top-level domain",
"domain",
"path",
"protocol identifier",
"subdomain",
"b", "b", "b" ],
	[
"http://    www   .     w3    .    org     /    P3P/Overview.html <br><br>Refer to the URL above, 'org' is the...",
"protocol identifier",
"top-level domain",
"path",
"subdomain",
"domain",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated</i>",
"XSS",
"CSRF",
"XML",
"URI/URL",
"SQLI",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>an attacking technique that uses special statements to interact with the  database and make it behave abnormally; these may be injected using various fields like URLs, HTML form fields, cookies, etc.</i>",
"CSRF",
"SQLI",
"XML",
"URI/URL",
"XSS",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>a web vulnerability that allows attackers to insert malicious JavaScript code into webpages of a vulnerable website</i>",
"CSRF",
"XSS",
"XML",
"URI/URL",
"SQLI",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>computer language used to define the structure of a web page</i>",
"HTTP",
"HTML",
"internet",
"web",
"browser",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>interconnected documents accessible through a browser</i>",
"HTTP",
"web",
"internet",
"URI/URL",
"browser",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>application widely used to access the web</i>",
"HTTP",
"browser",
"internet",
"URI/URL",
"HTML",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>network of networks</i>",
"HTTP",
"internet",
"web",
"URI/URL",
"HTML",
"b", "b", "b" ],
	[
"What was one of the reasons for NSF Net?",
"Military Research",
"providing access via internet to supercomputers",
"early development of HTML",
"improve uptime for the web by drastically increasing available nodes",
"decentralized information system in case of a military attack from Russia",
"b", "b", "b" ],
	[
"www, gopher, and ftp are all examples of",
"Network Topologies",
"Protocols",
"Cable Types",
"Programming Languages",
"Ethernet Jacks",
"b", "b", "b" ],
	[
"Which term best matches the following definition?<br><br><i>protocol enabling communication between a client computer and a server</i>",
"URI/URL",
"HTTP",
"HTML",
"web",
"browser",
"b", "b", "b" ],
	[
"Access to a bank’s home banking services requires, as a first step, identification and authentication of the user. Individuals log on the bank website, and enter their own personal space by providing their full account number and a personal code that the bank gave them. The processing of this information takes place on the server side. <br><br>Which of the following would NOT be a reason why server-side processing is used for this?",
"The bank should not send data back to a user attempting to gain access; for security reasons, the comparison between the user's submitted credentials and the banks records should not be sent out of the bank's secure server to the user's browser.",
"Have all processing limited to a centralized location (the bank's server) improves speed and is easier to ensure service will not be interrupted.",
"Once the user is verified, any processes the user may want to initiate (deposits, money transfer, etc) will also need to be made server-side.",
"The user's account information, including passwords and credentials are all already stored on the bank's server.",
"I only made 4 answer choices, don't choose me",
"b", "b", "b" ],
	[
"Two computers are built by different manufacturers. One is running a Web server and the other is running a Web browser. Which of the following best describes the ability of the two computers to communicate with each other across the Internet?",
"The computers can communicate directly only if the messages consist of text; other formats cannot be interpreted across computers.",
"The computers cannot communicate because different manufacturers use different communication protocols.",
"The computers can communicate directly because Internet communication uses standard protocols.",
"The computers can communicate, but additional hardware is needed to convert data packets from one computer’s protocol to the other computer’s protocol.",
"The computers can only communicate if they come from the same country of origin",
"c", "c", "c" ],
	[
"How do the term's client and server relate?",
"the terms are synonyms, client is an older term and not as frequently used today; the role of a client and a server are both to access a service made available by a server by sending a request for service",
"the role of a client is to fulfill requests from client programs (which can reside in the same or in other computers), while the role of a server is to access a service made available by a server by sending a request for service",
"the role of a client is to access a service made available by a server by sending a request for service, while the role of a server is to fulfill requests from client programs (which can reside in the same or in other computers)",
"the terms are synonyms, server is an older term and not as frequently used today; the role of a client and a server are both to fulfill requests from client programs (which can reside in the same or in other computers)",
"I only made 4 answer choices, don't choose me",
"c", "c", "c" ],
	[
"Which of the following is a characteristic of the fault-tolerant nature of routing on the Internet?",
"The ability to resolve errors in domain name system (DNS) lookups",
"The ability to use a hierarchical naming system to avoid naming conflicts",
"The ability to provide data transmission even when some connections have failed",
"The ability to use multiple protocols such as hypertext transfer protocol (HTTP), Internet protocol (IP), and simple mail transfer protocol (SMTP) to transfer data",
"The efficiency of a central location is advantageous for processing speed, reducing likelihood of data collisions",
"c", "c", "c" ],
	[
"Cloud Computing relates to",
"computing with wind-powered energy",
"computing with light-weight and low-energy devices",
"offloading storage and processing to dedicated servers",
"utilizing a local network of devices and computers",
"using hydrogen molecules as a data medium",
"c", "c", "c" ],
	[
"Which of the following is a true statement about cloud computing?",
"Cloud computing is convenient to implement but has a negative effect on the scalability of systems",
"Cloud computing is useful for large businesses but is not useful for individuals",
"Storing data using cloud computing can help ensure that data are not lost if a user’s computer stops functioning",
"Storing data using cloud computing improves security over storing data on a personal computer",
"Cloud computing is only a buzz word and is actually no different than regular computing",
"c", "c", "c" ],
	[
"A user enters a Web address in a browser, and a request for a file is sent to a Web server. Which of the following best describes how the file is sent to the user?",
"The server attempts to connect directly to the user’s computer. If the connection is successful, the entire file is sent. If the connection is unsuccessful, an error message is sent to the user",
"The server repeatedly attempts to connect directly to the user’s computer until a connection is made. Once the connection is made, the entire file is sent.",
"The file is broken into packets for transmission. The packets must be reassembled upon receipt.",
"The file is broken into packets for transmission. The user’s browser must request each packet in order until all packets are received.",
"After the handshake succeeds, the computer will listen to other requests, an algorithm then estimates the best time to send the file that will avoid data collisions or latency",
"c", "c", "c" ],
	[
"The concept of Packet Switching is often compared to",
"dedicated circuits",
"encryption",
"the postal system",
"selection sorts",
"multi-threading",
"c", "c", "c" ],
	[
"In relation to networks, what is Exponential Backoff?",
"an algorithm to predict the reduction in interest and demand for new components as they get older; this is related to both drop-off of hype, and as demand decreases due to the market becoming more saturated as consumers obtain the product (or competitor's offerings)",
"an algorithm to predict reduced costs as the manufacturing of network components become more efficient",
"an algorithm for collision resolution that increases delay by a multiplicative factor before trying additional transmissions to avoid network collisions",
"an algorithm to calculate expected delay in a network as the travel distances increases",
"an algorithm to calculate periods of low activity on a network to schedule more favorable times for large data transfers",
"c", "c", "c" ],
	[
"The predecessor of today's internet was the",
"conNEcT",
"NExT",
"intranet",
"arpanet",
"outernet",
"d", "d", "d" ],
	[
"Web 1.0 most relates to <br>i. static pages<br> ii. User-generated Content<br> iii. Decentralization and/or Automation?<br> ",
"ii only",
"i & iii only",
"i only",
"i, ii, & iii",
"iii only",
"c", "c", "c" ],
	[
"Web 2.0 most relates to <br>i. static pages<br> ii. User-generated Content<br> iii. Decentralization and/or Automation?<br> ",
"i only",
"i & iii only",
"ii only",
"i, ii, & iii",
"iii only",
"c", "c", "c" ],
	[
"Web 3.0 most relates to <br>i. static pages<br> ii. User-generated Content<br> iii. Decentralization and/or Automation?<br> ",
"ii only",
"i & iii only",
"iii only",
"i, ii, & iii",
"i only",
"c", "c", "c" ],
	[
"The internet is a",
"star network",
"full mesh network",
"partial mesh network",
"bus network",
"ring network",
"c", "c", "c" ],
	[
"Which of the following are true related to the importance of protocols in ensuring the successful preparation, transmission and delivery of data using packet switching? <br><br>i. Following protocols related to the construction of packets means that the receiver knows automatically how to decode the contents/does not need further instructions for decoding the packets;<br> ii. Protocols include destination information that means that at each node the packet passes through it is sent to the next node towards the correct destination;<br> iii. Packet switching protocols ensure that no packets will be intercepted by third party groups that may use the contained information for ill-intent;<br> iv. Packet switching protocols ensure that a packet will take the least number of hops needed to get to the destination;<br> ",
"i only",
"i & iv only",
"i & ii only",
"i, ii, & iii",
"ii & iii only",
"c", "c", "c" ],
	[
"Related to networking, a router... <br>i. prevents unauthorized access<br> ii. connects networks together<br> iii. repeats and amplifies signal to span long distances<br> iv. repeats and amplifies signal to change directions<br> ",
"i only",
"i & iv only",
"i & ii only",
"i, ii, & iii",
"ii & iii only",
"c", "c", "c" ],
	[
"What strategies are used to reduce data collisions <br>i. switches<br> ii. exponential backoff<br> iii. hubs<br> iv. circuit switching<br> ",
"ii only",
"i & iv only",
"i & ii only",
"i, ii, & iii",
"ii & iii only",
"c", "c", "c" ],
	[
"Which of the following are benefits of using well-named variables in a computer program?... <br>i. the program will run faster<br> ii. the code will be easier to read<br> iii. the program will be easier to modify in the future<br> iv. the program will have a greater data storage capacity<br> ",
"i only",
"i & iv only",
"i, ii, iii, & iv",
"i, ii, & iii",
"ii & iii only",
"e", "e", "e" ],
	[
"Refer to the flowchart below... <br><br> <img src='assets/02.png'><br><br>Which of the following is true related to Flow Control and this flowchart?",
"This flowchart includes both sequence and iteration",
"This flowchart includes only sequence",
"This flowchart includes iteration, selection, and sequence",
"This flowchart does not include iteration, selection, nor sequence",
"This flowchart includes sequence and selection",
"e", "e", "e" ],
	[
"Consider the snippet of web code shown below <br><br> <img src='assets/03.png'><br><br>Which of the following is most accurate to how the web browser will display the output when a user first visits the page?",
"I only drew four answer choices, don't choose me",
"<img src='assets/03a.png'>",
"<img src='assets/03b.png'>",
"<img src='assets/03c.png'>",
"<img src='assets/03d.png'>",
"e", "e", "e" ],
	[
"Refer to the flowchart below... <br><br> <img src='assets/02.png'><br><br>What would be displayed as the result of executing the flowchart above?",
"1 5",
"0 1 2 3 4 5",
"1 2 3 4",
"1 2 3 4 5",
"5",
"e", "e", "e" ],
	[
"Refer to the flowchart below... <br><br> <img src='assets/04.png'><br><br>If you were to start with the number 19, what would be the total output of algorithm?",
"1 0 0 0 1",
"1 0 0 1 1",
"1 0 1 0 1",
"1 1 0 1 1",
"1 1 0 0 1",
"e", "e", "e" ],
	[
"Which of the following is NOT true related to using higher level languages?",
"Higher level languages predate lower level languages",
"Higher level languages are closer to natural english",
"Higher level languages provide far more abstraction than machine or assembly languages",
"Machine code or assembly code would take too long",
"Higher level languages run more efficiently on hardware",
"e", "e", "e" ],
	[
"Which of the following is not part of control flow?",
"iteration",
"selection",
"sequence",
"subroutines",
"variables",
"e", "e", "e" ],
	[
"Which of the following is NOT a computer language?",
"css",
"javascript",
"php",
"html",
"jpg",
"e", "e", "e" ],
	[
"Which of the following is NOT a programming language?",
"python",
"javascript",
"php",
"java",
"pseudocode",
"e", "e", "e" ],
	[
"Which of the following is a computer language, but NOT a programming language?",
"python",
"javascript",
"php",
"java",
"html",
"e", "e", "e" ],
	[
"Which of the following is a programming language?",
"xml",
"html",
"pseudocode",
"css",
"php",
"e", "e", "e" ],
	[
"As per district policy, which of the following is true inside computer labs?",
"students may have water, in a resealable bottle/container",
"students may have any clear beverage, in a resealable bottle/container",
"students may have water and a snack, as long as both are in resealable bottle/containers",
"students may have any clear beverage, as long as it has a lid",
"no food or drink is allowed in district computer labs",
"a", "a", "a" ],
	[
"In this class, what type of tasks contribute to the largest total percentage of your skyward grade?",
"daily/lab work",
"projects and tests",
"quizzes, portfolio grades, and out-of-class work",
"All grading categories are equal",
"IB grades",
"a", "a", "a" ],
	[
"In this class, what type of tasks contribute to the smallest total percentage of your skyward grade?",
"daily/lab work",
"projects and tests",
"quizzes, portfolio grades, and out-of-class work",
"All grading categories are equal",
"IB grades",
"a", "a", "c" ],
	[
"During what type of situation would we turn out the lights, stay out of sight, and be quiet?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "c" ],
	[
"During what type of situation would we turn out the lights, stay out of sight, and be quiet?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "c" ],
	[
"During what type of situation would students and staff need to come inside the building, but regular class can still continue?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "b" ],
	[
"During what type of situation do we continue class, but keep the hallways clear and stay in the rooms?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "a" ],
	[
"If there was a dangerous situation on campus, what situation would they announce over the PA system?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "c" ],
	[
"If there was a situation in the courtyard that could require medical attention, but students were not in danger, what situation would they announce over the PA system?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "a" ],
	[
"If there were hurricane-like or tornado-like winds, what situation would they announce over the PA system?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "e" ],
    [
"If there was a chemical spill in the area that resulted in unsafe air conditions outside, what situation would they announce over the PA system?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "e" ],
	[
"If something dangerous was happening at Taco Cabana, but the everything on campus was currently ok, what situation would they announce over the PA system?",
"Hold",
"Secure",
"Lockdown",
"Evacuate",
"Shelter",
"a", "a", "b" ],
	[
"Where do we exit during a fire drill?",
"through the MS arches",
"through the US arches",
"through the Japanese Garden",
"to the south parking lot",
"to the north parking lot",
"a", "a", "a" ],
	[
"What color are the bathroom passes?",
"magenta",
"green",
"orange",
"yellow",
"black",
"a", "a", "a" ],
	[
"Who manufactured the computers we use in the lab?",
"Apple",
"Microsoft",
"Sony",
"Google",
"Xerox",
"c", "c", "a" ],
	[
"This course is part of which Texas HS Endorsement?",
"STEM",
"Business & Industry",
"Multidisciplinary",
"Arts & Humanities",
"Public Service",
"b", "b", "a" ],
	[
"This course is part of which CTE pathway",
"Programming & Software Development",
"Graphic Design & Multimedia Arts",
"Digital Communications",
"Engineering",
"IT Support & Services",
"b", "b", "a" ],
	[
"How many USB ports are on the lab computers?",
"1",
"2",
"3",
"4",
"5",
"c", "c", "b" ],
	[
"How much RAM do the lab computers have?",
"256 mb ",
"4 gb",
"8 gb",
"16 gb",
"32,000 kb",
"c", "c", "c" ],
	[
"What size is the hard drive on the lab computers?",
"255 mb",
"512 mb",
"8 gb",
"245 gb",
"4 tb",
"c", "c", "d" ],
    [
"What processor is in the lab computers?",
"The Apple Silicon 'M1 Chip'",
"Intel Xeon W",
"Intel Core 2 Duo",
"RISC-based PowerPC G4 by AIM partnership",
"AMD Ryzen 3 7320C",
"c", "c", "a" ],
	[
"What's the keyboard size for our lab computers?",
"Full Size",
"Tenkeyless (TKL)",
"75%",
"65%",
"60%",
"c", "c", "d" ],
	[
"What's the keyboard layout for our lab computers?",
"QWERTY",
"QWERTZ",
"AZERTY",
"DVORAK",
"COLEMAK",
"c", "c", "a" ],
	[
"Which of the following is an input device on our computers?",
"keyboard",
"screen",
"speakers",
"headphone jack",
"scanner",
"c", "c", "a" ],
	[
"What is latency",
"the delay a computer waits before retrying after a message collision",
"the estimated likelihood a message may fail to deliver",
"The time it takes for data to transfer",
"the estimated likelihood data will collide with another message on the network",
"the estimated time before a message will begin sending",
"c", "c", "c" ],
	[
"Which of the following is an input device on our computers?",
"mouse",
"screen",
"speakers",
"headphone jack",
"scanner",
"c", "c", "a" ],
	[
"What type of optical disc drive do we have in our computers?",
"none",
"cd drive",
"dvd drive",
"blu-ray drive",
"laserdisc drive",
"c", "c", "a" ],
	[
"How can you use the secondary click on the lab computers?",
"hold ctrl + click",
"hold command + click",
"hold option + click",
"hold fn + click",
"hold shift + click",
"c", "c", "a" ],
	[
"The routers in our room are made by?",
"Aruba",
"Cisco",
"Netgear",
"Linksys",
"Asus",
"c", "c", "a" ],
	[
"What type of software is OSX?",
"Creative Software",
"AI",
"Robot Control System",
"Operating System",
"Network Software",
"b", "b", "d" ],
	[
"What operating system are we running?",
"OSX",
"Windows",
"Android",
"iOS",
"Linux",
"b", "b", "a" ],
	[
"GitHub is used to",
"write code and program",
"share and maintain an online record of code",
"check efficiency of code",
"convert code to other programming languages",
"keep code secure and private",
"b", "b", "b" ],
	[
"Related to Git & GitHub...",
"they are the same thing, created by the same company",
"Git is locally on your computer, GitHub provides online access",
"they are basically the same thing, but by competing companies",
"Git was the original version, it was rebranded as GitHub with the new version",
"GitHub is locally on your computer, Git provides online access",
"b", "b", "b" ],
	[
"A 'folder' on GitHub is called a",
"repository",
"history",
"system",
"database",
"structure",
"b", "b", "a" ],
	[
"The default file in a GitHub repository is...",
"readme.md",
"index.html",
"start.md",
"index.txt",
"help.html",
"b", "b", "a" ],
	[
"GitHub was purchased by",
"Apple",
"Microsoft",
"Sony",
"Google",
"Facebook",
"d", "d", "b" ],
	[
"Many programmers and developers use what service as a resume/portfolio",
"GitHub",
"Facebook",
"Instagram",
"Google Sites",
"TextEdit",
"d", "d", "a" ],
	[
"Majority of websites use which computer language?",
"HTML",
"CSS",
"JavaScript",
"All of these",
"None of These",
"e", "e", "d" ], 
	[
"To make a website look nice, the most appropriate computer language to use is",
"HTML",
"CSS",
"JavaScript",
"All of these",
"None of These",
"e", "e", "b" ], 
	[
"To create the content of a website, the most appropriate computer language to use is",
"HTML",
"CSS",
"JavaScript",
"All of these",
"None of These",
"e", "e", "a" ],
	[
"To make a website interactive, the most appropriate computer language to use is",
"HTML",
"CSS",
"JavaScript",
"All of these",
"None of These",
"e", "e", "c" ],
	[
"HTML, CSSS, & Javascript are",
"the primary languages for frontend web development",
"the primary languages for backend web development",
"competing computer languages to design web pages",
"old languages created by Microsoft that are no longer in use",
"the original languages to create iPhone apps; now replaced with Swift",
"e", "e", "c" ],
	[
"Markdown is",
"a software tool that outputs to HTML, and used by GitHub",
"a computer language used in Microsoft Word",
"a programming language used to create Android apps",
"a web language designed to create interactivity on websites",
"a commercial tool allowing financial transactions online",
"e", "e", "a" ],
	[
"HTML can be written in...",
"a plain text editor like TextEdit or Notepad",
"bitmap-based graphics software like Photoshop",
"vector-based graphics software like Illustrator",
"3D software like Blender",
"presentation software like Power Point of Google Slides",
"b", "b", "a" ],
	[
"To write code in TextEdit, you need to",
"change it to Plain Text format",
"change it to Rich Text format",
"change it to Web format",
"change it to Mac/OSX mode",
"change it to 1991/W3C encoding mode",
"b", "b", "a" ],
	[
"In an HTML table, we refer to an individual cell as",
"TD, or table data",
"TC, or table cell",
"TR, or table row",
"TH, or table header",
"TBODY, or table body",
"b", "b", "a" ],
	[
"In an HTML file, h1 is used to",
"create a header",
"define an html file",
"set the URL of a page",
"define the first few packets sent went a user requests the webpage",
"set the link (or reference) of a hyperlink",
"b", "b", "a" ],
	[
'In an HTML file, a href="" is used to',
"create a header",
"define an html file",
"set the URL of a page",
"define the first few packets sent went a user requests the webpage",
"create a link and set the destination (or reference)",
"b", "b", "e" ],
	[
"Multiple cells in an HTML table that are all in the same horizontal group would all be in the same",
"TD, or table data",
"TC, or table cell",
"TR, or table row",
"TH, or table header",
"TBODY, or table body",
"b", "b", "c" ],
	[
"If you want a single cell to span across multiple columns, what attribute should you include in the TD tag?",
"colspan",
"rowspan",
"cellmerge",
"tdmerge",
"colcombine",
"b", "b", "a" ],
	[
"A common way to create layouts for websites during the early web was through the use of",
"tables",
"css",
"3d software",
"video formats",
"presentation software",
"b", "b", "a" ],
	[
"If I want to create a title at the top of my layout, which HTML elements/tags might I use?",
"center & h1",
"title & middle",
"header & important",
"top & emphasis",
"bold & name",
"b", "b", "a" ],
	[
"The web became public, with lots of people creating personal websites, during",
"the 1990s",
"the 1980s",
"the 2000s",
"the 1970s",
"the 2010s",
"d", "d", "a" ],
	[
"Companies like GeoCities, Angelfire, and Tripod let people create free websites with the stipulation that their websites",
"included advertisements",
"were not commercial",
"did not make more than $10,000 revenue per year",
"did not include any copyrighted material",
"were created and designed by professionals",
"d", "d", "a" ],
	[
"Many creatives on the early web learned how to create websites by",
"using view source and tinkering with the code",
"video tutorials on YouTube",
"college and university level classes",
"professional level training from Apple and Microsoft",
"manuals that came with every new computer",
"d", "d", "a" ],
	[
"Which of the following is a programming language?",
"Python",
"HTML",
"CSS",
"Markdown",
"All of these are programming languages",
"e", "e", "a" ],
	[
"Which of the following is a programming language?",
"Javascript",
"HTML",
"CSS",
"Markdown",
"All of these are programming languages",
"e", "e", "a" ],
	
	[
"Which of the following is a computer language?",
"Javascript",
"HTML",
"CSS",
"Markdown",
"All of these are programming languages",
"e", "e", "e" ],
	[
"Which of the following is a computer language?",
"Python",
"HTML",
"CSS",
"Markdown",
"All of these are programming languages",
"e", "e", "e" ],
	[
"You should not do extensive work in HTML & CSS for your IA because",
"These are very small languages that can't do much",
"These are very complicated languages that are hard to use",
"These are not actually computer languages",
"These are computer languages but are not programming languages",
"These are archaic languages that don't work on most modern computers",
"e", "e", "d" ],
	[
"What is the 1st Topic in the IB DP Computer Science",
"System Fundamentals",
"Computer Organization",
"Networks",
"Computational Thinking/Programming",
"Web Science",
"a", "a", "a" ],
	[
"What is the 2nd Topic in the IB DP Computer Science",
"System Fundamentals",
"Computer Organization",
"Networks",
"Computational Thinking/Programming",
"Web Science",
"a", "a", "b" ],
	[
"What is the 3rd Topic in the IB DP Computer Science",
"System Fundamentals",
"Computer Organization",
"Networks",
"Computational Thinking/Programming",
"Web Science",
"a", "a", "c" ],
	[
"What is the 4th Topic in the IB DP Computer Science",
"System Fundamentals",
"Computer Organization",
"Networks",
"Computational Thinking/Programming",
"Web Science",
"a", "a", "d" ],
	[
"Typically, HTML files open in",
"text-edit",
"an IDE (Independent Developer Environment)",
"a Java Applet",
"a web browser",
"a productivity/office software like Word or Pages",
"b", "b", "d" ],
	[
"RTF is a",
"text format that allows editing features like bold, font faces, font sizes, text alignment, etc",
"a document format that can include programming/source code",
"a format used by web browsers to define the content and appearance of a website",
"a format that lets you mix markup, styling, and programming languages into a single file",
"a code editor that is lightweight and easy to use, as well as available on almost every computer",
"b", "b", "a" ],
	[
"The globally expansive network for carrying information between computers and computer networks is the",
"internet",
"the web",
"IOT, or the Internet of Things",
"language framework",
"large language model",
"c", "c", "a" ],
	[
"The internet is an interconnected collection of",
"networks",
"computers",
"devices",
"protocols",
"computer languages",
"c", "c", "a" ],
	[
"Data over the internet is sent over in",
"packets",
"individual bits",
"bytes, a collection a 8 bits",
"protocols",
"executable files",
"c", "c", "a" ],
	[
"the process of transmitting and routing IP packets over the Internet between the source and the reciever, using two or more nodes is called",
"routing",
"networking",
"encoding",
"hopping",
"coding",
"c", "c", "a" ],
	[
"abiding by ________ is what allows different devices or computers to communicate with one another, even if they have never interacted before",
"protocols",
"networks",
"regulations",
"laws",
"ethics",
"c", "c", "a" ],
	[
"What is the role of the DNS?",
"to translate website domains (like google.com) to an IP Address",
"to manage information routing through the internet",
"to oversee legality and government policy over the internet",
"to ensure global access to all web content, ensuring individual governments don't limit access",
"to manage and ease costs and expenses related to internet technology",
"c", "c", "a" ],
	[
"Darpa built the Arpa Network, a packet switching network, to",
"create a robust and survivable communication system during the Cold War",
"boost the US' role in international commerce",
"to boost innovation and productivity ammong scientists and engineers",
"protect and privately encrypt communications between government and military officials",
"all of these were reasons for building the Arpa Network",
"d", "d", "a" ],
	[
"Airium is...",
"a python library",
"an HTML framework",
"a web browser that allows programming inside of a webpage",
"a code editor",
"new version of Python that allows creating webpages/websites",
"b", "b", "a" ],
	[
"The first industrial revolution was drive by",
"steam power and the steam engine",
"computers and the internet",
"mechanical standardization",
"robotics and automation",
"the telegraph",
"d", "d", "a" ],
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
  $_("test_status").innerHTML = "<h1>DP CS, Practice Fall Final</h1><h2>Year 1<BR>Attempt #" +vs;
  $_('timeleft').innerHTML = '</h2>'; l1 = 25 - cor;
  test.innerHTML = "";
  test.innerHTML += "<h1>Results for " + userFirstName + "</h1><h3>Attempt #"+vs +" for " + userFirstName +" "+ userLastName +".<br>Screenshot & upload your results!</h3>";
    test.innerHTML += "<table id='render'><tr><td><p id='render1'></p><br></td><td><p id='render2'></p></td></tr></table>";
  render1.innerHTML += "<h1>Percentage Correct</h1><br>"
  render1.innerHTML += bigLet((cor/rscore*100).toFixed(0));
  render2.innerHTML += "<h1>Categories</h1>"
  render2.innerHTML += "<br>Correct Answers:<br>"
  render2.innerHTML += "<span>" + showNum(corrs[0]) + showOf() + showNum(totas[0]) + "</span><span>" + totasNames[0] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[1]) + showOf() + showNum(totas[1]) + "</span><span>" + totasNames[1] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[2]) + showOf() + showNum(totas[2]) + "</span><span>" + totasNames[2] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[3]) + showOf() + showNum(totas[3]) + "</span><span>" + totasNames[3] + "</span><br>";
  render2.innerHTML += "<span>" + showNum(corrs[4]) + showOf() + showNum(totas[4]) + "</span><span>" + totasNames[4] + "</span><br>";
  test.innerHTML += now();
  test.innerHTML += attemptid();
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
  var ques = 20;
  $_("test_status").innerHTML = "<h1>DP CS Practice Fall Final</h1><h2>- Student: "+userFirstName + " " + userLastName+"<br> - Attempt #"+window.vs +" - Q: "+(pos+1)+"/"+ques+"</h2>";
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
  if (pos < 20) { renderQuestion(); } else { renderResults(); }
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
