const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird;
var chain;
var log6


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    background(0);
    engine = Engine.create();
    world = engine.world;
    log6 = new Log(600,200,100,10); 
       
    bird = new Bird(100,100);
    chain = new Chain(bird.body,log6.body);   
  
}

function draw(){
    //background(backgroundImg);
    Engine.update(engine);
   
   
    bird.display();
    //platform.display();

    log6.display();
    chain.display();

   //constrainedLog.display();
   

}
