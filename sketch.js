var xPos=40;
var yPos=10;
var xVel=1;
var yVel=2;

function setup() {
  createCanvas(500, 500);
}

function draw(){
    background(0,300,255);
    
    ellipse(xPos,yPos,20,20,10);
    noStroke();
    
    if(xPos>width || xPos<0){
        
        xVel=-xVel;
    }
    
    if(yPos>height || yPos<0){
        yVel=-yVel;
    }
    xPos+=xVel;
    yPos+=yVel;
}