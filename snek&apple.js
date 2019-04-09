class Snake{
  constructor(){
    this.len = 1;
    this.body = [];
    this.body[0] = createVector(0,0);
    this.xMove = 0;
    this.yMove = 0;
  }
    hit(apx,apy){
      if(this.body[this.body.length-1].x==apx&&this.body[this.body.length-1].y==apy){
        return true;
      }
      return false;
    }
    defeat(){
        var x = this.body[this.body.length-1].x;
        var y = this.body[this.body.length-1].y;
        if(x > 500 ||x < 0 ||y > 500 || y < 0){
          return true;
        }
        for (var i = 0;i < this.body.length-1;i++){
          var part = this.body[i];
          if(part.x == x && part.y == y){
            for(var i=0;i<this.body.length-1;i++){
              console.log(this.body.x,this.body.y);
            }
            return true
          }
        }
        return false;
    }
    grow(){
      let head = this.body[this.body.length-1].copy();
      this.body.push(head);
    }
    setDir(x,y){
      this.xMove =x;
      this.yMove =y;
    }
    update(){

      let head= this.body[this.body.length-1].copy();
      this.body.shift();
      head.x+= this.xMove;
      head.y+= this.yMove;
      this.body.push(head);
    }
    show(){
    for(var i=0;i < this.body.length;i++){
      rect(this.body[i].x,this.body[i].y,20,20);
    }
  }
}

class Apple{
  constructor(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  }
    show(){
      fill(100,100,250);
      noStroke();
      rect(this.x,this.y,this.w,this.h);
  }


}
