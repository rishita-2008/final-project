var ball,cup;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10;
var cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20;
var cardboard21,cardboard22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28,cardboard29,cardboard30
var tries =0;
var gameState= "level1";

function setup(){
createCanvas(400,400);  
 ball = createSprite(8,8,20,20);//ball
 cup = createSprite(395,395,10,80);//the cup at the end
 cardboard1 = createSprite(25,40,100,20);
 cardboard2 = createSprite(120,45,20,90);
 cardboard3 = createSprite(50,140,100,20);
 cardboard4 = createSprite(50,200,20,100);
 cardboard5 = createSprite(100,90,130,20);
 cardboard6 = createSprite(145,130,20,100);
 cardboard7 = createSprite(100,225,20,100);
 cardboard8 = createSprite(150,265,100,20);
 cardboard9 = createSprite(160,350,20,100);
 cardboard10 = createSprite(50,330,100,20);
 cardboard11 = createSprite(50,360,20,80);
 cardboard12 = createSprite(190,220,100,20);
 cardboard13 = createSprite(235,260,20,100);
 cardboard14 = createSprite(210,90,100,20);
 cardboard15 = createSprite(350,260,150,20);
 cardboard16 = createSprite(370,310,20,110);
 cardboard17 = createSprite(350,50,20,100);
 cardboard18 = createSprite(270,150,150,20);
 cardboard19 = createSprite(315,350,20,100);
 cardboard20 = createSprite(270,40,150,20);
 cardboard21 = createSprite(350,140,20,90);
 cardboard22 = createSprite(230,390,150,20);
 cardboard23 = createSprite(230,390,150,20)
 cardboard24 = createSprite(230,390,150,20)
 cardboard24 = createSprite(230,390,150,20)
 cardboard25 = createSprite(230,390,150,20)
 cardboard26 = createSprite(230,390,150,20)
 cardboard27 = createSprite(230,390,150,20)
 cardboard28 = createSprite(230,390,150,20)
 cardboard29 = createSprite(230,390,150,20)
 cardboard30 = createSprite(230,390,150,20)

}

function draw() {
  background("lightgreen");
  fill("green");
 
  text(mouseX+","+mouseY,mouseX,mouseY);
  cup.shapeColor= "yellow";//color of the cup
  ball.shapeColor= "black";
  edges = createEdgeSprites();
  ball.bounceOff(edges);
  ball.velocityX=0;
  ball.velocityY=0;
  fill("red")
  textSize(15)
  text("cup",367,372)
  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -5;
  }
  if (keyDown(DOWN_ARROW)) {
    ball.velocityY=5;
    ball.velocityX=0;
  }
  if (keyDown(LEFT_ARROW)) {
    ball.velocityX=-5;
    ball.velocityY=0;
  }
  if (keyDown(RIGHT_ARROW)) {
    ball.velocityX=5;
    ball.velocityY=0;
  }

  if (ball.isTouching(cardboard1) || ball.isTouching(cardboard2) || ball.isTouching(cardboard3) || ball.isTouching(cardboard4) 
    ||ball.isTouching(cardboard5) || ball.isTouching(cardboard6) || ball.isTouching(cardboard7) || ball.isTouching(cardboard8)
    ||ball.isTouching(cardboard9) || ball.isTouching(cardboard10) || ball.isTouching(cardboard11) || ball.isTouching(cardboard12)
    ||ball.isTouching(cardboard13) || ball.isTouching(cardboard14) || ball.isTouching(cardboard15) || ball.isTouching(cardboard16) 
    ||ball.isTouching(cardboard17) || ball.isTouching(cardboard18) || ball.isTouching(cardboard19) || ball.isTouching(cardboard20)
    ||ball.isTouching(cardboard21) || ball.isTouching(cardboard22) || ball.isTouching(cardboard23) || ball.isTouching(cardboard24)
    ||ball.isTouching(cardboard25) || ball.isTouching(cardboard26) || ball.isTouching(cardboard27) || ball.isTouching(cardboard28)
    ||ball.isTouching(cardboard29) || ball.isTouching(cardboard30)) {
    
    ball.x=10;
    ball.y=10;
    tries++;
  }
     
                  
if (ball.isTouching(cup) && gameState == "level1") {
  textSize(26)
  fill("red")
  text("YOU PASSED LEVEL 1",170,190);
  reset();
  gameState == "level2";
}   

if (ball.isTouching(cup) && gameState == "level2") {
  textSize(26)
  fill("red")
  text("YOU PASSED LEVEL 2",170,190);
  reset();
  gameState == "level3";
} 

if (ball.isTouching(cup) && gameState == "level3") {
  textSize(26)
  fill("red")
  text("YOU WIN",170,190);
  gameState == "end";
} 

  drawSprites();
  textSize(25);
  text("Tries: "+tries,500,200);
  if(gameState == "level1"){
    text("LEVEL 1", 500,250);
  }else if(gameState == "level2"){
    text("LEVEL 2", 500,250);
  }else if(gameState == "level3"){
    text("LEVEL 3", 500,250);
  }
}

function obstacles(){
  if(gameState == "level2"){freq = 200;}
  if(gameState == "level3"){freq = 100;}
  if(frameCount%freq === 0){
     var obs = createSprite(random(50,350), random(50,350),50,50);
       if(obs.x< 200){
          if(obs.y>200){
          obs.velocityX = 3;
          obs.velocityY = -1;
         }else{
          obs.velocityX = 4;
          obs.velocityY = 1;
         }
      }else{
          if(obs.y>200){
              obs.velocityX = -2;
              obs.velocityY = -4;
             }else{
              obs.velocityX = -2;
              obs.velocityY = 3;
             }
      }
       /* var rand = Math.round(random(1,3));
      switch(rand){
          case 1: obs.addAnimation();
          obs.scale = 0.2;
          break;
          case 2: obs.addAnimation();
          obs.scale = 0.2;
          break;
          case 3: obs.addAnimation();
          obs.scale = 0.2;
          break;
          default: break;
      }
      */
      obs.lifetime = 400;
      obsGrp.add(obs);
  }
}
  
  function reset(){
      //gameOver.visible = false;
      //restart.visible = false;
      obsGrp.destroyEach();
      ball.x = 10;
      ball.y = 10;
      tries = 0;
   
    }