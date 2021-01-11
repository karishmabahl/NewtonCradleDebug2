
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject,bobObject1,bobObject2,bobObject3, bobObject4,bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(720,400,bobDiameter);
	bobObject2=new Bob(760,400,bobDiameter);
	bobObject3=new Bob(800,400,bobDiameter);
	bobObject4=new Bob(840,400,bobDiameter);
	bobObject5=new Bob(880,400,bobDiameter);
	
	
	//Create a Ground
	
	roofObject = new Roof(800,50,400,20);
	


	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	//Create the Bodies Here.


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

	 roofObject.display();
	 rope1.display()
     rope2.display()
     rope3.display()
     rope4.display()
     rope5.display()	
     bobObject1.display();
     bobObject2.display();
     bobObject3.display();
     bobObject4.display();
     bobObject5.display();
    
  
  drawSprites();
 
}
//function keyPressed() {
//	if (keyCode === UP_ARROW) {

//	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
//	}
//}


