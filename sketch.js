
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var left, right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background("white")

	var ball_option={
		isStatic : false,
		restitutionn : 0.3,
		friction : 0,
		denstiy : 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_option);
	World.add(world, ball);

	groundObj = new Ground(width/2, 670, width, 20);

	left = new Ground(700, 600, 20, 120);
	right = new Ground(760, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	Engine.update(engine);

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball, {x : 1, y : 0}, {x : 0, y : 0});
	}
  }

