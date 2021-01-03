const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
 
    b1 = new Building(700,300,40,50);
    b2 = new Building(700,250,40,50);
    b3 = new Building(700,200,40,50);
    b4 = new Building(700,150,40,50);
    b5 = new Building(700,100,40,50);

    b6 = new Building(900,300,40,50);
    b7 = new Building(900,250,40,50);
    b8 = new Building(900,200,40,50);
    b9 = new Building(900,150,40,50);
    b10 = new Building(900,100,40,50);

    ball = new Building(500,300,30,30);

    slingshot = new SlingShot(ball.body,{x:500, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  
    ground.display();
    fill("red");
    b1.display();
    fill("red");
    b2.display();
    fill("red");
    b3.display();
    fill("red");
    b4.display();
    fill("red");
    b5.display();
     fill("black");
    ball.display();

    fill("red");
    b6.display();
    fill("red");
    b7.display();
    fill("red");
    b8.display();
    fill("red");
    b9.display();
    fill("red");
    b10.display();
     

}

function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


