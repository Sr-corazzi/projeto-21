var papibaquigrafo,desinquivincavador,papibaquigrafoImg,desinquivincavadorImg,Hipopotomonstrosesquipedaliofobia,HipopotomonstrosesquipedaliofobiaImg,lemuel;

function preload() {
    desinquivincavadorImg=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    papibaquigrafoImg=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png")
    HipopotomonstrosesquipedaliofobiaImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    lemuel=createSprite(-7000,400,60,100);
    papibaquigrafo=createSprite(900,400,50,50);
    Hipopotomonstrosesquipedaliofobia=createSprite(500,400,1482,1241);
    desinquivincavador=createSprite(300,400,50,50);
    Hipopotomonstrosesquipedaliofobia.addImage(HipopotomonstrosesquipedaliofobiaImg);
    desinquivincavador.addAnimation("shtr",desinquivincavadorImg);
    papibaquigrafo.addAnimation("jra",papibaquigrafoImg);
    desinquivincavador.scale = 0.05;
    papibaquigrafo.scale = 0.2;
    papibaquigrafo.depth=Hipopotomonstrosesquipedaliofobia.depth;
    papibaquigrafo.depth++;
    lemuel.depth=Hipopotomonstrosesquipedaliofobia.depth;
    lemuel.depth++;
}

function draw() {

    background(255);
    keyPressed();
    if(papibaquigrafo.x-desinquivincavador.x>papibaquigrafo.width/2+desinquivincavador.width/2&&papibaquigrafo.x-desinquivincavador.x<papibaquigrafo.width/2+desinquivincavador.width/2||papibaquigrafo.isTouching(desinquivincavador)){
    papibaquigrafo.x=9153;
    desinquivincavador.x=6233;
    lemuel.x=500;    
    }
    
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
papibaquigrafo.velocityX=-3;

}
