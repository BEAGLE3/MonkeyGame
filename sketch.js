  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score,ground;
  var score=0;

function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {

  monkey=createSprite(50,310,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(300,385,600,30);
  ground.velocityX=-3;
  ground.shapeColor=("green");
  
  FoodGroup=new Group();
  obstacleGroup=new Group();

}


function draw() {
 
  createCanvas(600,400);
  background("skyblue");

  text("SURVIVAL TIME:"+score,300,30)
  score = score + Math.round(getFrameRate()/60);
  
  if(ground.x<300){
  ground.x=ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>100){
  monkey.velocityY=-20;
  }
  
  monkey.velocityY=monkey.velocityY+1;
  
  if(monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach();
  }
                    
  obstacle();
  banana();
    
  monkey.collide(ground);

  drawSprites();
}

function obstacle(){
  if(frameCount%300===0){
  var stone=createSprite(580,350,10,10);
  stone.addImage(obstacleImage);
  stone.scale=0.2;
  stone.velocityX=-5;
  stone.lifetime=120;
    
  obstacleGroup.add(stone);
  }
}
  
function banana(){
  if(frameCount%100===0){
  var bananas=createSprite(580,10,10,10);
  bananas.addImage(bananaImage);
  bananas.scale=0.1;
  bananas.velocityX=-6;
  bananas.y=Math.round(random(120,200));
  bananas.lifetime=95;
      
  FoodGroup.add(bananas);   
  }
}
