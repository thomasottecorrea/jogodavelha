
let board = ['','','','','','','','','']
let playertime = 0;
let symbols = ['o','x']
let gameover = false

function handleMove(position){                                                                                                                              //posição passada pelo HandleClick na interface.js

    if (gameover){
        return;
    }
    
    if(board[position]== ''){                                                                                                                               //so faz o comando se o square estiver vazio
    board[position] = symbols[playertime];                                                                                                                  //pega no board a posição que voi passada, e colocar no square o simbolo do jogador da vez

        gameover = iswin();

            if (gameover == false) {

                playertime = (playertime ==0) ? 1 : 0;

            }
    }
    return gameover
}

function iswin(){

    let winstates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [1,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for(let i =0; i<winstates.length; i++){
        let seq = winstates[i];

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
            return true}
    }

    return false

}