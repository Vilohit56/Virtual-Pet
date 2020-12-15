var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dogimage1 = loadImage("images/dogImg.png");
  dogimage2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog1 = createSprite (250,250,10,10);
  dog1.addImage(dogimage1);
  dog1.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogimage2);
  }

  textSize(15);
  fill("orange");
  text("Press the up arrow key to feed the dog milk", 200, 100);
  text("You have: " + foodS + " Milk left", 200, 70);
} 

function readStock() {
  foodS = data.val
}

function writeStock(x) {
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
})
}



