
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bird;
var bg;
var ob1,ob2,ob3,ob4;

function preload()
{
	bg=loadImage("images/sky.jpg");
}

function setup() {
	createCanvas(1536, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bird = new Bird();
	
	ob1=new Obstacles();
	ob2=new Obstacles();
	ob3=new Obstacles();
	ob4=new Obstacles();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  bird.display();
  
  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
 
}



