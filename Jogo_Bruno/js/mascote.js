//Posição do mascote
let yMascote = 460;
let xMascote = 40;
let meusPontos = 0;


let colisao = false;

function verificaColisao() {
    for (let i = 0; i < imagensCarros.length; i++){

    colisao = collideRectCircle(xCarros[i], yCarros[i],
    comprimentoCarros, alturaCarros, xMascote, yMascote, 100);
        if (colisao){
        //Quando colidir volta ao ponto inicial
            yMascote = 460
        if (meusPontos > 0){
        //Quando colodir tirar 1 ponto
            meusPontos -= 1;
    }               
   }
  }
}


function mostrarMascote() {
    image(imagemDoMascote, xMascote, yMascote, 60, 60);
}
function incluirPontos() {


    text(meusPontos, 20, 25)
    fill(color(250, 0, 0))
    textSize(21)

    if (yMascote < 0){
        xMascote = 40
        yMascote = 460;
        meusPontos ++;
    }
    
}
function movimentoMascote() {
    
    if(keyIsDown(UP_ARROW)){
        yMascote -= 4;
    }

    if(keyIsDown(DOWN_ARROW)){
        yMascote += 4;
    }

    if(keyIsDown(LEFT_ARROW)){
        xMascote -= 4;
    }

    if(keyIsDown(RIGHT_ARROW)){
        xMascote += 4;
    }
}

