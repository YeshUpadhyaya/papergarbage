
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperImg
function preload()
{
	paperImg=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(400,350,10,{density:4})
	World.add(world,ball);
	g1=new Box(400,690,width,10)
	b1=new Box (600,620,10,100)
	b2=new Box (475,620,10,100)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER);
  image(paperImg,ball.position.x,ball.position.y,20,20)
  b1.display()
  g1.display()
  b2.display()
  if(keyDown("space")){
	Matter.Body.applyForce(ball, {x:ball.position.x,y:ball.position.y}, {x:2,y:-30})
	
  }
  console.log(ball.position.x)
  drawSprites();
 
}



