var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	box = new Box(430,100,10,10);
	rec1= new dropZone(400,650,220,20);
	rec2= new dropZone(500,600,20,80);
	rec3= new dropZone(300,600,20,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  box.display();
  rec1.display();
  rec2.display();
  rec3.display();
  packageSprite.x= box.body.position.x;
  packageSprite.y= box.body.position.y;
  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyDown(DOWN_ARROW)) {
		Matter.Body.setStatic(box.body, false);
	  }
}



