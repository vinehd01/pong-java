let comprimentoTela = 800;
let larguraTela = 600;
let xBolinha = 400;
let yBolinha = 300;
let diametroBolinha = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raioBolinha = diametroBolinha / 2;
let larguraRaquete = 10;
let comprimentoRaquete = 80;
let xMinhaRaquete = 10;
let yMinhaRaquete = (larguraTela / 2) - (comprimentoRaquete / 2);
let xRaqueteOponente = comprimentoTela - larguraRaquete - 10;
let yRaqueteOponente = (larguraTela / 2) - (comprimentoRaquete / 2)
let colidiu = false;
let meuspontos = 0
let pontosoponentes = 0

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background('orange');
  criaBolinha();
  moveBolinha();
  colideBolinha();
  criaMinhaRaquete(xMinhaRaquete, yMinhaRaquete);
  criaMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete()
  colideRaquete();
  colisãoRaquete
  }

function criaBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}
function moveBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}
function colideBolinha(){
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1
  }
}

function criaMinhaRaquete(posiçaoX, posiçaoY){
  rect(posiçaoX, posiçaoY, larguraRaquete, comprimentoRaquete);
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 10;
  }
 
  if (keyIsDown(DOWN_ARROW)) {
    yMinhaRaquete += 10;
  }
}

function colideRaquete(){
  if(
xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete &&
yBolinha - raioBolinha < yMinhaRaquete + comprimentoRaquete &&
yBolinha  + raioBolinha > yMinhaRaquete
  ){
   velocidadeXBolinha *= -1;
 
     }
}


function colisãoRaquete(posiçaoX, posiçãoY){
  (colidiu) = collideRectCircle(xRaqueteOponente,yRaqueteOponente,larguraRaquete,comprimentoRaquete,xBolinha,yBolinha,diametroBolinha)
if (colidiu) velocidadeXBolinha *= -1;
}

function mostraplacar(){
  fill(255);
  textSize(12);
  text(meuspontos, 200, 50);
  text(pontosoponentes, 200, 50);
}

function marcapontos(){
  if (xBolinha < xMinhaRaquete)( 
  pontosoponentes += 1)
  
}