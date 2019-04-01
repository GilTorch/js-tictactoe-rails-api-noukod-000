// Code your JavaScript / jQuery solution here


$(document).ready(function(){
    
   console.log("I AM READY!!")
  

    
const squares=document.querySelectorAll('td')
const messageDiv = document.getElementById('message');
const gamesDiv = document.getElementById('games');
const saveButton = document.getElementById('save');
const previousButton = document.getElementById('previous');
const clearButton = document.getElementById('clear');

let board=["","","","","","","","",""]

const WIN_COMBINATIONS = [
    [0,1,2], // Top row
    [3,4,5], // Middle row
    [6,7,8], // Bottom row
    [0,3,6], // Left vertical
    [1,4,7], // middle vertical
    [2,5,8], // bottom vertical
    [0,4,8], // left diagonal
    [2,4,6]  // right diagonal
  ]


let turn=0;


function player(){
    return turn%2===0 ? 'X' : 'O'
}

function updateState(cell){
    cell.innerHTML=player();
}

function setMessage(message){
    messageDiv.innerHTML=message;
}

function checkWinner(){

    let board=getBoardState();
    
    let won=null
    WIN_COMBINATIONS.forEach((function(winCombination){
        const winIndex1=winCombination[0];
        const winIndex2=winCombination[1];
        const winIndex3=winCombination[2];

        const position1 = board[winIndex1] // load the value of the board at win_index_1
        const position2 = board[winIndex2] // load the value of the board at win_index_2
        const position3 = board[winIndex3] // load the value of the board at win_index_3

        if((position1 == "X" && position2 == "X" && position3 == "X")){
            setMessage("Player X Won!");
            won=true // return the win_combination indexes that won.
        }

        if((position1 == "O" && position2 == "O" && position3 == "O")){
            setMessage("Player O Won!");
            won=true
        }
    }))

    return won;
}

function getBoardState(){
    return board=Array.from(squares).map(s => s.innerHTML);;
}

function boardIsFull(){
    board=getBoardState();
    board.forEach((cell)=>{
        console.log(cell==="");
    })
    // return is_full;
}

function resetGame(){
    squares.forEach((square)=>square.innerHTML="")
    turn=0;

}

function doTurn(square){
    console.log(boardIsFull())
    updateState(square)
    turn++;
    if(checkWinner()){
        resetGame();
    }
}

function attachListeners(){
    console.log('attach listeners called')
    squares.forEach((square)=>square.addEventListener('click',onClickCallBack))
    
}

function onClickCallBack(event){
    doTurn(event.target);
}
attachListeners();

    
})



// let turn=0;
// let board=['','', '', '', '', '', '', '', ''];

