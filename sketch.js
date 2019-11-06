var movingrect , fixedrect;



function setup() {
  createCanvas(800,400);
 
movingrect=createSprite(200, 200, 50, 30);
movingrect.shapeColor="blue";

fixedrect=createSprite(300,200,50,30);
fixedrect.shapeColor="blue";

movingrect.velocityY=-3;
fixedrect.velocityY=+3;

}

function draw() {
  background(0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && 
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 
    ) {
 
      movingrect.velocityX=movingrect.velocityX*(-1);
      fixedrect.velocityX=fixedrect.velocityX*(-1);

}
else if( movingrect.y-fixedrect.y< fixedrect.height/2+movingrect.height/2 &&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
  {
    movingrect.velocityY=movingrect.velocityY*(-1);
    fixedrect.velocityY=fixedrect.velocityY*(-1);

  }



  drawSprites();
}