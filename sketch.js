var garden,rabbit;
var gardenImg,rabbitImg;
var manzana,hoja,hojaO

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  manzanaImg = loadImage("apple.png");
  hojaImg = loadImage("leaf.png")
  hojaOImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
 //Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,360,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  
  aparecerManzanas();

  aparecerHojaO();
  
  drawSprites();
}

//crea la funcion para aparecer manzanas
function aparecerManzanas (){
  if (frameCount % 80 === 0) {
     manzana = createSprite(200,100,40,10);
    manzana.x = Math.round(random(10,200));
    manzana.addImage(manzanaImg);
    manzana.scale = 0.1;
    manzana.velocityY = 3;
   manzana.lifetime = 134;
    
  }
}


function aparecerHojaO (){
  if (frameCount % 80 === 0) {
     hojaO = createSprite(200,100,40,10);
    hojaO.x = Math.round(random(10,200));
    hojaO.addImage(hojaOImg);
    hojaO.scale = 0.1;
    hojaO.velocityY = 3;
    hojaO.lifetime = 134;
    
  }
}