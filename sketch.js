var hr, mn, sc;
var scAngle, mnAngle, hrAngle;




function setup() {
  createCanvas(800,400);

  
  

  angleMode(DEGREES);

  
  
  


  

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360); 
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
  translate(200, 200);

    push();
    rotate(scAngle);
    
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 0, 100);
    pop();

    push();
    rotate(mnAngle);
    
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 0, 100);
    pop();

    push();
    rotate(hrAngle);
    
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 0, 100);
    pop();


  drawSprites();


}