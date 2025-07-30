let book;
let bold;
let medium;
let mediumItalic;
let bookItalic;
let boldItalic;

function preload() {
  book = loadFont('data/AntarcticanMono-Book.ttf');
}

function setup() {
 createCanvas(windowWidth, windowHeight);
  }

function draw() {
  background(255);
  noLoop();
}

function loadProject(projectName) {
  clear();
  if (projectName === 'project0'){
    drawTerrain();
  }
  else if (projectName ==='project1'){
    drawRmit();
}
 else if (projectName ==='project2'){
    drawEarth();
}
 else if (projectName ==='project3'){
    drawHuman();
}
 else if (projectName ==='project4'){
    drawBookstore();
}
 else if (projectName ==='project5'){
    drawTruisms();
}
 else if (projectName ==='project6'){
    drawScrpbook();
}
 else if (projectName ==='project7'){
    drawPlay();
}
else {
  console.log('Project "' + projectName + '" not yet implemented.');
}
}

function drawTerrain() {
  background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
 let paragraph = `Freelance graphic design to support TERRAIN in consistent branding and visual language throughout printed matter and digital spaces.
         \n Featuring collaborations with Arc'teryx 'BETA' book launch, and Tait's 'Regenerate: The Grasslands' library for Melbourne Design Week 2025.
       \n  TERRAIN designs for a more-than-human world.`;
    
  text(paragraph, width*0.04, height*0.1, width/2);
}

function drawRmit() {
background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
  let paragraph = `Art director of student led team designing the brand identity and way finding for the RMIT Design Grad Shows 2024. 
\nWe conceptualised the notion of ‘Shaping What’s Next’ by developing a language of shapes to represent the interaction and overlap of different design disciplines, cultures, and individuals. 
`
 text(paragraph, width*0.04, height*0.1, width/2);
}

function drawEarth() {
background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
  let paragraph = `‘Listen, Earth Sings!’ explores the way grief changes with the body, with the seasons. This is expressed through weaving the love that comes from loss into a crocheted artefact, pairing it with a hand-bound journal.
\nThis project is based on personal experiences, and is my interpretation of the poem ‘Spring has Come Back Again’ by Reiner Maria Rilke.`
 text(paragraph, width*0.04, height*0.1, width*0.5);
}

function drawHuman() {
background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
let paragraph = `Cross stitch animation of my personal design manifesto ‘We are the Human Designers’, with 28 completed hand stitched canvases and many, many scanned frames. I combine digital and traditional techniques to recognise everything that comes before and after.
\nI hope to explain who we are and how we exist in this advancing world. This manifesto is not for robots.
\nView the entire video here: 
https://youtu.be/ON6jGOLpD_o `
 text(paragraph, width*0.04, height*0.1, width*0.5);
}

function drawBookstore() {
background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
let paragraph = `Hand-bound book prototype using a variety of second hand paper. In discussion with the independent book publisher Set Margins’, I delve into publishing as a practice, design ideologies, and how these things impact his curation. 
\nIncludes a casual dialogue with Freek Lomme taken over Zoom.`
 text(paragraph, width*0.04, height*0.1, width*0.5);
}

function drawTruisms() {
background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
let paragraph = `This project reinvents Jenny Holzer’s ‘Truisms’ into a new artefact, removing the non-truisms generally found in fortune cookies. It explores the idea of archives and documentation of identity, as well as the reframing of ‘luck’ as a woman’s destiny. 
\nFortune cookies were home-baked, and fortunes are RISO printed on Lokta fibre paper.`
 text(paragraph, width*0.04, height*0.1, width*0.5);
}

function drawScrpbook() {
background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
let paragraph = `Branding and application pack for a speculative design concept, SCRPBOOK. This is a DIY biomaterial book created for the mundane kitchen. It’s an instructional and simple guide on how to create bioplastics using simple tools and ingredients in your household.
\nThis includes book cover and content design, CD audiobook, posters, and bookmarks.`
 text(paragraph, width*0.04, height*0.1, width*0.5);
}

function drawPlay() {
background(255);
  fill(0);
  textSize(30);
  textFont(medium);
  textLeading(29);
let paragraph = `Let's have some fun!`
 text(paragraph, width*0.04, height*0.1, width*0.5);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.loadProject = loadProject;
