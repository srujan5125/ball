var ball;
function setup() {
  createCanvas(400,400);
ball= createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
if(keyDown (UP_ARROW)){
  ball.y-=5

}

if(keyDown (DOWN_ARROW)){
  ball.y+=5

}

if(keyDown (LEFT_ARROW)){
  ball.x-=5

}

if(keyDown(RIGHT_ARROW)){
ball.x+=5

}








drawSprites()

}




