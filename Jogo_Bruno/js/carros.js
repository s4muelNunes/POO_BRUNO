
 //posições dos carros
//  let xCarros1 = 575;
//  let xCarros2 = 575;
//  let xCarros3 = 575;
 let xCarros = [599, 599, 599, 599, 599, 599]
 let yCarros = [20, 110, 170, 230, 320, 370]
 let velocidadeCarros = [10, 8.7, 7.4, 8.9, 7.5, 6]

 let comprimentoCarros = 80;
 let alturaCarros = 80;

function mostrarCarros() {

    for (let i = 0; i < imagensCarros.length; i++) {
        image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
        
    }

    // image(imagemCarro1, xCarros1, 50, comprimentoCarro, alturaCarros);
    // image(imagemCarro2, xCarros2, 150, 40, 30);
    // image(imagemCarro3, xCarros3, 105, 40, 30);
}


    function movimentoCarro() {
        for (let i = 0; i < imagensCarros.length; i++) {

            xCarros[i] -= velocidadeCarros[i];

            if(xCarros[i] < -50){
                xCarros[i] = 900
            }
    }


    // xCarros1 -= 5;
    // xCarros2 -= 7;
    // xCarros3 -= 6;
}


