import { Board } from './board';
import { Player } from './player';

export const startGame = async (board, firstPlayer, secondPlayer)=>{
    board = new Board()
    firstPlayer =  newPlayer(1)
    await firstPlayer.init()
    
    secondPlayer =  newPlayer(2)
    await secondPlayer.init()

    let turn = 0
    for(let i=0;i<9;i++){
        const inTurnPlayer = (turn%2+1===1)?firstPlayer:secondPlayer
        await board.place(inTurnPlayer)
        board.print()
    
    if(board.checkIsWin(inTurnPlayer)){
        console.log(`${inTurnPlayer}won!`)
        return
    }
    turn++
}
console.log('Draw!')
}
