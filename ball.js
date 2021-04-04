class Ball {
    constructor(x, y,radius) {
        var options = {
            restitution:1.0,
            density:1.2,
            airFriction:0.002,
            stiffness:1.5
        }

        this.body = Bodies.circle(x, y,radius, options);
        World.add(world, this.body);
        this.radius = radius;
        

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill(255);

        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }



}