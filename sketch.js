var  wall, thickness;

var bullet, speed, weight;

var deformation;




function setup() {
  createCanvas(1200,400);
  

  speed= random(223,331);
  weight= random(30,52);
  thickness= random(22,83);

  bullet= createSprite(50,200,50,20);
  bullet.shapeColor=  "white";
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX= speed;

 deformation=0.5 * weight * speed* speed/22500;

  
  
}

function draw() {
  background(80,80,80);  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor= color(0,255,0)
    }

  }
 
  


  drawSprites();


}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;

  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}