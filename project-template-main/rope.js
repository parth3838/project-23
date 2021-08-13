class Rope{
	constructor(bodyA,pointB)
	{
     
		var options = {

			bodyA:bodyA,
			pointB:pointB,
			 length:100, 
			 stiffness:0.1

		}
		

	//create rope constraint here
	this.pointB = pointB
	this.rope = Constraint.create(options);
    World.add(world,this.rope);
	}


    //create display() here 

	show(){

		var pointA = this.rope.bodyA.position;
		var pointB = this.pointB;

		strokeWeight(4);


       line(pointA.x,pointA.y,pointB.x,pointB.y);
	}

}

