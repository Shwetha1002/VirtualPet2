class Food{
    constructor(){
        this.image = loadImage("milk.png")
        this.foodstock = foodStock;
    }

    getFoodStock(){
        var FoodStockLoc = database.ref('Food');
        FoodStockLoc.on("value", function(data){
            foodS= data.val();
        })
    }

  

 deductFoodStock(food){

    
    if(food === 0){
      food = 0;
      
      database.ref('/').update({
        Food: food
      
        });
     // text (" Sorry! You don't have any food now! Please add some more before feeding the dog", 200, 200)
    }
    else{
      food = food -1;
      gameState = "happyFace";
      database.ref('/').update({
        Food: food
      
        });
    }
    
   
    }
 

 addFoodStock(foods){
  if(foods === 20){
    foods = 20;
    database.ref('/').update({
      Food: foods
      }); 
 
  }
  else{
    foods = foods + 1;
    database.ref('/').update({
      Food: foods
      });
  }
  
  
  
 }

 display(){
  
   if(gameState === 3)  { 
  var pos =this.body.position;

  imageMode(CENTER);
  image(this.image, pos.x, pos.y, 100,100);
   }

   else{

   }
  
   var x= 80, y = 100;

   for(var i = 0; i < this.foodstock; i++){
     if(i%10 ==0){
       x = 80;
       y = y+ 50;
     }
    image(this.imageMode, x , y , 50 ,50);
    x = x + 30;
   }
   
   
   
  
}





 
    






















}