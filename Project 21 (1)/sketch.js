
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var groundObj;
var leftSide;
var rightSide;
var engine;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);

	var balls_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(260, 100, 10, balls_options) 
	World.add(world, ball);
	groundObj=new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1250,600,20,120)

	console.log(ball)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 50, 50)
	groundObj.display();
	leftSide.display();
	rightSide.display();
  
	Engine.run(engine);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 19, y:-30})
	}}


