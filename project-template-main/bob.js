class Bob
{
  constructor(x, y, radius) 
  {
    let options = {
      isStatic:false,
      'restitution':1.0,
      'friction':1.4,
      'density':1.0
    };
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    
    
    ellipseMode(RADIUS);
    stroke("#420038");
    fill("#d3ff75");
    circle(pos.x, pos.y, this.radius);
    
  }
}