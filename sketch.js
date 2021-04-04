const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var roof
var ball
var chain
var boxes=[]
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ball= new Ball(250,25,50)
roof = new Ground(150,20,300,20)
    ground = new Ground(600,height,1200,20);
    
    chain = new Chain(roof.body,ball.body,{x:100,y:0})
    for(var i = 0;i<7;i++){
        var box = new Box(400,100,70,70)
        boxes.push(box)
        var box = new Box(490,100,70,70)
        boxes.push(box)
        var box = new Box(580,100,70,70)
        boxes.push(box)


    }
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0;i<boxes.length;i++){
        boxes[i].display();
    }
    ground.display();
    roof.display();
    chain.display();
    ball.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
