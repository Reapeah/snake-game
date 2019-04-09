let snek;
let apple;
function setup(){
  createCanvas(500,500);
  snek = new Snake();
  apple = new Apple(240,200,20,20);
  frameRate(8);
}
var x = 250;
var y = 250;
var value = 0;
function draw(){
  fill(255,255,255);
  background(181);
  //grid();
  snek.show();
  snek.update();
  apple.show();
  if(snek.defeat()){
    background(255,255,255);
    noLoop();
  }
  if (snek.hit(apple.x,apple.y)){
    replace();
  keyPressed();
  }
}
function replace(){
  apXX=floor(random(0,25))*20;
  apYY=floor(random(0,25))*20;
  for(var i=0;i<snek.body.length-1;i++){
    if(apXX==snek.body[i].x||apYY==snek.body[i].y)
      replace();
    }
    apple.x=apXX;
    apple.y=apYY;
    snek.grow();}
function keyPressed() {
  if (keyCode === LEFT_ARROW && value != 2) {
    snek.setDir(-20,0);
    for(var i=0;i<1000;i++)
    {;}
    value=1;
  }
  if (keyCode === RIGHT_ARROW && value != 1) {
    snek.setDir(20,0);
    for(var i=0;i<1000;i++)
    {;}
    value=2;
  }
  if (keyCode === UP_ARROW && value != 4) {
    snek.setDir(0,-20);
    for(var i=0;i<1000;i++)
    {;}
    value=3;
  }
  if (keyCode === DOWN_ARROW && value != 3) {
    snek.setDir(0,20);
    for(var i=0;i<1000;i++)
    {;}
    value=4;
  }

}

function grid(){
  var xM = 0;
  for(var i=0;i < floor(500/20);i++,xM+=20){
    stroke(0);
    strokeWeight(1);
    line(0,xM,500,xM);
    line(xM, 0, xM , 500);
    }
}
