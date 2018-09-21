void setup() {
 size(1050, 1050);
 strokeWeight(4);
 noFill();
 background(40);
 
 translate(0,150);
 
 stroke(255,0,0);
 line(150,150,300,150);
 line(150,150,150,300);
 stroke(0,255,0);
 line(150,300,300,150);
 
 line(450,150,600,150);
 line(450,300,600,300);
 stroke(255,0,0);
 line(450,150,450,300);
 line(600,300,600,150);
 
 ellipse(825,225,150,150);
 stroke(0,255,0);
 ellipse(825,225,144,144);
 
 triangle(450,450,600,450,450,600);
 stroke(255,0,0);
 triangle(600,600,602,452,452,602);
 
 stroke(0,255,0);
 ellipse(225,525,150,150);
 stroke(255,0,0);
 ellipse(225,525,144,144);
 
 stroke(0,255,0);
 line(750,600,900,600);
 line(900,600,900,450);
 stroke(255,0,0);
 line(900,450,750,600);
}
