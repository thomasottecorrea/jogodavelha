document.addEventListener('DOMContentLoaded', ()=>{                                                              //o eventListener vai esperar um evento acontecer e avisar quando ele ocorre

    let squares = document.querySelectorAll(".square");                                                          //retorna uma lista de elementos presentes no documento array de squares

    squares.forEach((square)=>{                                                                                  //e para cada quadrado dentro da array vai acionar um addeventlistener
        square.addEventListener('click', handleClick)                                                           //acionando um eventlistener quando ocorrer um 'click', que vai gerar a função HandleClick que ainda nao foi criada
    })

})

function handleClick(event){
                                                                                                                //target é o elemento que recebeu o evento
    /* console.log(event.target) */;                                                                                  //função handle click vai precisar de um evento (click) que quando isso acontecer vai imprimir onde aconteceu determinado evento (square 1, 2, 3...)

    let square = event.target;                                                                                  //o quadrado vai simbolizar onde foi clicado
    let position = square.id;                                                                                    //pegar o id do square e chamar de posição


    if (playertime == 0) {
        playername = "espadas";
    }else{
        playername = "ouros";
    }


    if (handleMove(position)){

        setTimeout(() => {
            alert("O jogo acabou, o vencedor foi o player " + playername)
        },10);    
    };                                                                                                           //passa pro handlemove do script game a posição que foi acionada
    updateSquares();                                                                                             //chama a proxima função
}

function updateSquares(){                                                                                       //após ja ter a posição colocada na array, ele faz uma varredura e se o square for diferente de vazio, vai adicionar o simbolo no html

    let squares = document.querySelectorAll(".square");                                                         //queryselectorAll retorna uma lista de elementos presente no documento

    squares.forEach((square)=>{                                                                                 //squares é a lista de square (classe html)
        let position = square.id;                                                                               //retorna o valor do elemento clicado
        let symbol = board[position]

        if(symbol != ''){                                                                                       //se simbolo for difenente de vazio
            square.innerHTML = `<div class='${symbol}'></div>`                                                   //dentro do square, vai ser inserido no html uma classe que vai mudar entre x e o, colocando o desenho no board
        }
})
}

function reset(){
    board = ['','','','','','','','',''];
    playertime = 0;
    gameover = false;
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
    
        if (symbol == "") {
          square.innerHTML = `<div class='${symbol}'></div>`;
        }
      });
    
}