var car, backdrop, backdrop_img;
var monkey_img, stone_img;


function preload(){

  backdrop_img = loadImage("background.jpg");
  monkey_img = loadImage("monkey1.png");
  stone_img = loadImage("stone.png");
}

function setup() {
  createCanvas(1600,400);
  
  backdrop = createSprite(200, 200, 400, 400);
  backdrop.addImage(backdrop_img);
  backdrop.x = backdrop.width/2;

  car = createSprite(50, 200, 50, 50);
  car.addImage(monkey_img);
  car.velocityX = 2;
  car.scale = 0.3;
  
  
}

function draw() {
  background("black");  
  camera .position.x = car.x;

  //creating the backdrop infinite
  if(backdrop.x < 0){
    backdrop.x = backdrop.width/2;
  }

  spawnObstacles();

  drawSprites();
  
}

function spawnObstacles(){
  if(frameCount % 100 === 0){
  var obstacle = createSprite(car.x + 200, 380, 20, 20);
  obstacle.addImage(stone_img);
  obstacle.scale = 0.1;
  //obstacle.velocityX = -2;
}
 
}