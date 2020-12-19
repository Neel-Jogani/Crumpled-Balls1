class Paper {
    constructor (x,y,r){
    var options={
        restitution: 0.8,
        friction: 0.5,
        density: 1.2
    }
    this.r=20;
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }
     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke("grey");
        strokeWeight(4);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop(); 
     }
}