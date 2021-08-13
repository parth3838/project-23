const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bob4 = new Bob(480,450,20);
    bob3 = new Bob(440,450,20);
	bob2 = new Bob(400,450,20);
	bob1 = new Bob(360,450,20);
	bob = new Bob(320,450,20);

	rope1= new Rope(bob.body,{x:320,y:100});
	rope2= new Rope(bob1.body,{x:360,y:100});
	rope3= new Rope(bob2.body,{x:400,y:100});
	rope4= new Rope(bob3.body,{x:440,y:100});	
	rope5= new Rope(bob4.body,{x:480,y:100});

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");


  rope1.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();


  bob.show();
  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  

  rect(roof.position.x,roof.position.y,230,20);


          

 

  //call display() to show ropes here
  
 
  
  //create ellipse shape for multiple bobs here
 
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob.body,bob.body.position,{x:-30,y:155});
	}
}