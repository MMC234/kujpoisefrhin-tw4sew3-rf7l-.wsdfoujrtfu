var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){


  bgImg = loadImage("assets/RM.png")
lut= loadImage("assets/lotaMathaus.png")
pe=loadImage("assets/pele-5.png")
Premier=loadImage("assets/p.png")
jut=loadImage("assets/jut.jpg")
}

function setup() {

 

  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.5
  
Bordas=createEdgeSprites()

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(pe)
   player.scale = 0.1
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   Yu= createSprite(displayWidth-1150, displayHeight-200, 50, 50);
   Yu.addImage(lut)
   Yu.scale = 0.5
    Yu.debug = true
    Yu.setCollider("rectangle",0,0,300,300)
    Yu.velocityX=4
    Yu.velocityY=2
}

function draw() {
  background(0); 

Yu.bounceOff(Bordas)


  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
