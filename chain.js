class Chain {
    constructor(bodyA,bodyB,pointA){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointA : pointA,
            stiffness:1,
            length:400
        }
       this.chain= Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var pointAx = this.chain.bodyA.position.x+this.chain.pointA.x;
        var pointAy = this.chain.bodyA.position.y+this.chain.pointA.y;
        var pointB = this.chain.bodyB.position;
      strokeWeight(3);
      stroke(255);
    line(pointAx,pointAy,pointB.x,pointB.y);
    
    }
}
