var canvas;
var music;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,590,350,30);
    block1.shapeColor=("green")

    block2 = createSprite(295,590,200,30);
    block2.shapeColor=("orange")

    block3 = createSprite(515,590,200,30);
    block3.shapeColor=("red")

    block4 = createSprite(740,590,220,30);
    block4.shapeColor=("blue")



    //create box sprite and give velocity
    box=createSprite(random(50,750),50,50,50);
    box.shapeColor=("white");
    box.velocityX=5;
    box.velocityY=8;
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box

    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor=("green");
        music.play();

    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor=("red");
        music.play();

    }


    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor=("blue");
        music.play();

    }

    if(block2.isTouching(box)){
        box.shapeColor=("orange");
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
        

    }







    drawSprites();
}
