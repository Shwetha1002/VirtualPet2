var dog, happyDog, database, foodS, foodStock;
var dogImage, happyDogImage;
var addFood, feedDog;
var fedTime, lastFed;
var dogFood;
var gameState;


function preload()
{
	dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  //.ref refers to the location of the value we care about.
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  var dog = createSprite(400, 350 , 50, 50);
  dog.addImage(dogImage);
  dogFood = new Food(100,100, 20,20);
  //happyDog.addImage(happyDogImage);
feed = createButton("Feed your dog now!")
feed.position(400,100);
AddSomeFood = createButton("Add some food to your storage!")
AddSomeFood.position(700,100);

}


function draw() {  
  background(46,139,87);
  dogFood.display();
  fedTime = database.ref('FeedTime', function(data){
    lastFed = data.val();
  } );

  if(gameState = "happyFace"){
    dog.addImage(happyDogImage);

  }

  if(feed.mousePressed){
    dogFood.deductFoodStock(foodS);
    gameState = 3;
    feedDog();
    
  }

  if(AddSomeFood.mousePressed){
    dogFood.addFoodStock(foodS);
    gameState = 0;
    
  }

  drawSprites();
  textSize(20);
  fill ("red")
  text ( "Food:" + foodS, 100,100 );
  //add styles here
 fill("purple")
 
}

function readStock(data){
  foodS= data.val();


}

function feedDog(){
  lastFed = hour();
  dogFood.hide();
}
