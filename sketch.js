// Melinda Buckner ©2016 HomeWork4
var ed = 20;
var ex = 150;
var ey = 200;
var speed =2;

function setup(){
  createCanvas(600,600)
}
function draw(){
  background(80,80,80);

  fill(255)
  ellipse(ex,ey,ed);

  fill(0)
  rect(20,20,20,20);

  fill(0)
  rect(500,500,30,30);

  fill(0)
  rect(300,400,40,40);

  fill(0)
  rect(100,200,30,30);

  push();
  fill(0);
  translate(width*0.2, height*0.5);
  rotate(frameCount/80.0);
  rect(20,20,10,10);

  push();
  fill(0);
  translate(width*0.1, height*0.3);
  rotate(frameCount/100.0);
  rect(60,60,10,10);

  push();
  fill(0);
  translate(width/2, height/5);
  rotate(frameCount/100.0);
  rect(10,10,10,10);

  push();
  fill(0);
  translate(width*0.2, height*0.5);
  rotate(frameCount/100.0);
  rect(30,30,10,10);

  push();
  fill(0);
  translate(width/2, height/5);
  rotate(frameCount/100.0);
  rect(50,50,20,20);

  if(keyIsPressed) {
    if(key == "w"){
      println("forward");
      ey-=speed;
    }
    if(key == "a"){
      println("left");
      ex-=speed;
    }
    if(key == "s"){
      println("back");
      ey+=speed;
    }
    if(key == "d"){
      println("right");
      ex+=speed;
    }
  }
}
