var balloon, balloonimage;
var bg, bgimage;
var obsTop, obsTopimg1, obsTopimg2;
var obsBtm, obsBtmimg1, obsBtmimg2, obsBtmimg3;
var BottomGround, TopGround;


function preload(){
    //adding assets to the game.
    balloonimage = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
    bgimage = loadImage("assets/bg.png");
    obsTopimg1 = loadImage("assets/obsTop1.png");
    obsTopimg2 = loadImage("assets/obsTop2.png");
    obsBtmimg1 = loadImage("assets/obsBottom1.png");
    obsBtmimg2 = loadImage("assets/obsBottom2.png");
    obsBtmimg3 = loadImage("assets/obsBottom3.png");
}

function setup(){
    createCanvas(400,400);

    // creating the background.
    bg = createSprite(165,485,1,1);
    bg.addImage(bgimage);
    bg.scale = 1.3;
    
    // created the balloon and added the animation.
    balloon = createSprite(100,200,50,50);
    balloon.addAnimation("balloon",balloonimage);
    balloon.scale = 0.25;
    
    //creating the top and bottom ground.
    BottomGround = createSprite(200,390,400,20);
    TopGround = createSprite(200,10,400,20)

}

function draw() {
    background("green");

    // if you press the space key the balloon jumps
    if(keyDown("space")){
        balloon.velocityY = -6;
        
    }
    
    //adding gravity to the balloon by adding the positive value to the negative Y velocity
    balloon.velocityY = balloon.velocityY + 0.1;

    spawnObsTop();
    bar();

    drawSprites();    
}

function spawnObsTop(){
    if(frameCount % 60 === 0){

        obsTop = createSprite(400,65,50,50);
        obsTop.velocityX = -5
        obsTop.y = Math.round(random(1,100));
        obsTop.scale = 0.1
        var rand = Math.round(random(1,2));
        
        switch(rand){
            
            case 1:obsTop.addImage(obsTopimg1);
                    break;
            case 2:obsTop.addImage(obsTopimg2);
                    break;
            default:break;
                
        }
        obsTop.lifetime = 100;
        balloon.depth += 1;
    }

}

function bar(){
    
    if(frameCount% 60 === 0){
        var bar = createSprite(400,200,10,800);
        bar.velocityX = -6;
        bar.depth = balloon.depth;
        bar.lifetime = 70;
        bar.visible = false;
    }

}