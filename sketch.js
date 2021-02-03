
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var backgrounnd, Background;
var score=0
var gamestate="play"
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  Background = loadImage("jungle.jpg");
  
 
}



function setup() {
  createCanvas(400,400);
  backgrounnd = createSprite(200,200,100,100)
  backgrounnd.addImage(Background)
  backgrounnd.scale=0.75
  backgrounnd.velocityX=-8
  monkey = createSprite(60,300,100,100);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.25;
  
  invisibleGround=createSprite(200,390,400,20)
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  invisibleGround.visible=false

  
}


function draw() {
  //background("black")
  if (gamestate == "play"){
  if (backgrounnd.x<0){
    backgrounnd.x=200
  }
  if (keyDown("Space") && monkey.y>300){
    monkey.velocityY=-18
  }
  monkey.velocityY=monkey.velocityY+0.8
  console.log(monkey.y)
  
    monkey.collide(invisibleGround)
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
    score=score+1
  }
  if (monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach()
    gamestate="end"
    
  }
  
  spawnBanana();
  spawnObstacles();
  drawSprites();
text("Score = "+ score,300,50);
}
if (gamestate==="end"){
  background("black")
    textSize(30)
    fill ("red")
    text("Game Over",100,200)

}

}
function spawnBanana(){
  if (frameCount % 70 === 0){
    banana = createSprite(400,Math.round(random(150,200)))
    banana.velocityX=-8
    banana.addImage(bananaImage)
    banana.scale=0.2;
    bananaGroup.add(banana);
  }
}
function spawnObstacles(){
  if (frameCount % 100 === 0){
    obstacle = createSprite(400,Math.round(random(340,340 )))
    obstacle.velocityX=-8
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.25;
    obstacleGroup.add(obstacle);
  }
}







