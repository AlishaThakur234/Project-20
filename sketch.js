var cat,mouse
var catImg,mouseImg,catImg2,mouseImg2
//var garden,gardenImg
var catImg3,mouseImg3

function preload() {
    //load the images here

 //gardenImg = loadAnimation ("garden.png")

catImg = loadAnimation ("images/tomTwo.png","images/tomThree.png");
catImg2 = loadAnimation ("images/tomOne.png")

mouseImg = loadAnimation ("images/jerryTwo.png","images/jerryThree.png")
mouseImg2 = loadAnimation ("images/jerryOne.png")

catImg3 = loadAnimation ("images/tomFour.png");
mouseImg3 = loadAnimation ("images/jerryFour.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

//garden.addAnimation("background",gardenImg)

cat = createSprite (800,700,1,1)
cat.addAnimation ("sitting",catImg2)
cat.addAnimation ("walking",catImg)
cat.scale = 0.15

mouse = createSprite (200,700,1,1)
mouse.addAnimation ("handsUp",mouseImg2)
mouse.addAnimation ("clapping",mouseImg)
mouse.scale = 0.15

mouse.addAnimation ("thumbsUp",mouseImg3)
cat.addAnimation ("stopped",catImg3)

}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
if (keyDown ("left")){
   cat.velocityX = -3
   cat.changeAnimation ("walking",catImg) 
}

if (keyDown ("left")){
    mouse.changeAnimation ("clapping",mouseImg) 
 }

if (cat.x - mouse.x < (cat.width - mouse.width)/2 ){
    mouse.changeAnimation ("thumbsUp",mouseImg3)
    cat.changeAnimation ("stopped",catImg3)
    cat.velocityX = 0
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
