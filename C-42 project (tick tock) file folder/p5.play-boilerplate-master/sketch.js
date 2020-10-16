
 var hr,mn,sc;
 var mnAngle,hrAngle,scAngle




function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);

  
}

function draw() {
  background(0);  
  drawSprites();

  translate(170,170);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360); 
  mnAngle = map(mn,0,60,0,360); 
  hrAngle = map(hr % 12,0,12,0,360); 

 

  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0);
  pop();

  push();
  stroke(255,0,0);
  noFill();
  strokeWeight(7)
  arc(0,0,260,260,0,scAngle);
  pop();


  push();
  stroke(0,255,0);
  noFill();
  strokeWeight(7)
  arc(0,0,240,240,0,mnAngle);
  pop();

  push();
  stroke(0,0,255);
  noFill();
  strokeWeight(7)
  arc(0,0,220,220,0,hrAngle);
  pop();
  





}




















