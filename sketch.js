var batman,batmanAni

function preload(){
    batmanAni = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
}

function setup(){
    createCanvas(400,800)
    
  batman=createSprite(200,730,50,50) 
  batman.addAnimation("batani",batmanAni)
  batman.scale = 0.3
    
}

function draw(){
    background("black")

    drawSprites();
}   

