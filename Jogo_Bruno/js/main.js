

    //Na função STUP definomos as configurações de largura e altura
    function setup() {
        
        createCanvas(900, 500);

    }

    // Na função de desenho definimos o que será exibido
    function draw() {
        
        background(imagemDaEstrada);
        //O IMAGE permite manipular o objeto no eixo X e Y como também W e H (Witdh e Height)
        mostrarCarros();
        movimentoCarro();
        movimentoMascote();
        mostrarMascote();
        incluirPontos();
        verificaColisao();
    }