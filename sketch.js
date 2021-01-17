var girl,gir_walking, stone,stontImg,coin,coinImg, 
gameState = "play",score = 0
var flag = 0;

function preload (){
girl_running = 
loadAnimation("walk1.png","walk2.png")
  stoneImg = loadImage ("obstacle.png")
  coinImg  = loadImage ("coin1.png")
  bgImg  = loadImage("bg.png")
  //gameOverImg = loadImage ("gameOver.png")
  fwImg = loadImage("fireworks.png")
  fw1Img = loadImage("fireworks1.png")
  fwImg = loadImage("fw1.png")
  hp = loadSound("hp.mp3")
}

function setup(){
  createCanvas(400,400)
  bg= createSprite(0,0,600,600)
  bg.velocityX = -1
  bg.addImage(bgImg)
girl = createSprite(50,350,20,20)
girl . addAnimation("walking",girl_running)
//gameOver = createSprite(200,200,50,50)
  fw = createSprite(200,200)
  fw.addImage(fwImg);
  fw.visible = false
  fw.scale = 1.2

//gameOver.addImage (gameOverImg)


  
ground = createSprite (200,390,1200,20)
  ground.velocityX = -3
coinGrp = new Group ();
stoneGrp = new Group ();

}

  
function draw (){
background  ("black")

 if(gameState === "play") {
     if(girl.isTouching(coinGrp)){
    score = score+2
    text ("Happy Birthday !!",50,50)
    coinGrp.destroyEach()
       
    
       }   
  if(keyDown("space")){
    girl.velocityY= -12
  }
          if(girl.isTouching(stoneGrp)){
    score = 0
    girl.velocityX = 0
  }
   
     if(bg.x<0){
  bg.x= 500;
}
  if(ground.x < 0){
ground.x = 300
} 
 
 }

  
if (girl.isTouching(stoneGrp)){
      gameState = 'end'
      ground.velocityX = 0
       bg.velocityX = 0
      coinGrp.setVelocityXEach(0);
       stoneGrp.setVelocityXEach(0);
       coinGrp.setLifetimeEach(-1)
       stoneGrp.setLifetimeEach(-1);
      
    }
  if(flag ===1)
      {
        hp.play();
        flag =0;
      }

  if(score ===10){
    fw.visible = true;
    score = 15
    
    flag = 1;
    girl.destroy()
    coinGrp.setVisibleEach(false)
    ground.destroy()
    
   
  }

  

  girl.velocityY += 0.5
  girl.collide(ground)
if(score <10){
  spawnCoins ();
}
  //spawnStones ();
  
  drawSprites();
  if(score<10){
    textSize(20)
    fill("black")
    text  ("score = "+score,300,50)
  }

}

  
 


function spawnCoins (){
if(frameCount % 150 === 0){
coin = createSprite (500,500,20,20)
coin .addImage (coinImg)
coin.scale = 0.02
coin.lifeTime = 400
girl.depth = coin.depth +1
coin.velocityX = -3
coin.y = Math.round (random(50,250))
coinGrp.add(coin)
}

}

function spawnStones (){
if(frameCount % 200 === 0){
stone = createSprite (400,350,20,20)
stone .addImage (stoneImg)
stone.scale = 0.2
stone.lifeTime = 400
girl.depth = stone.depth +1
stone.velocityX = -3
stoneGrp.add(stone)
}

}
 

