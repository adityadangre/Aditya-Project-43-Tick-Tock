var hr, min, sec;
var sa, ma, ha;

function setup() {
  createCanvas(600,600); 
  angleMode(DEGREES);
}

function draw() {
  background("black");
  
  textSize(30);
  fill("lightgreen");
  stroke("blue");
  strokeWeight(3);
  text("Time:- " + hr + " : " + min + " : " + sec, 190, 550);

  textSize(50);
  fill("lightgreen");
  stroke("blue");
  strokeWeight(4);
  text("Tick Tock By Aditya", 70, 60);

  fill("white");
  textSize(20);   
  var x1=290, y1=135;
  text("12",x1,y1);
  text("01",x1+90, y1+20);
  text("02",x1+150, y1+85);
  text("03",x1+170,y1+170 );
  text("04",x1+150,y1+250 );
  text("05",x1+95,y1+315 );
  text("06",x1,y1+340 );
  text("07",x1-95,y1+315);
  text("08",x1-155,y1+255);
  text("09",x1-170,y1+170);
  text("10",x1-150,y1+85);
  text("11",x1-90,y1+20);

  translate(300,300);
  rotate(-90);
  
  hr=hour();
  min=minute();
  sec=second();

  sa=map(sec,0,60,0,360);
  ma=map(min,0,60,0,360);
  ha=map(hr%12,0,12,0,360);

  push()
  rotate(sa)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(ma)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(ha)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,360,sa)

  stroke(0,255,0)
  arc(0,0,280,280,360,ma)

  stroke(0,0,255)
  arc(0,0,260,260,360,ha)

  drawSprites();
}