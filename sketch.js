
var rainfall ;

var x ;
var y ;
var yspeed ;
var drops = [];


function preload(){
rainfall = loadImage("rain.jpg");
}
function setup() {
   x = random(width);
   y = random(-100,-200);
   yspeed = random(4,10);
   drops.push(100);
var canvas = createCanvas(640,320);
 for(var i = 0;i < drops.length;i++){
  drops[i] = new Drop();
  

 }
 
 
  
 
}

function draw() {
  background(230,230,250);
  image(rainfall,0,0,640,320);
  rainfall.velocityY = -2;
  for(var i = 0;i <drops.length;i++){
    drops[i].fall();
    drops[i].show();

   } 
  
 
}