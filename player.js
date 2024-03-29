import inquirer from "inquirer"
import {Board} from "./board"

const MOVE_LIST=[
    '0 (Top Left)',
    '1 (Top Middle)',
    '2 (Top Right)',
    '3 (Middle Left)',
    '4 (Middle Middle)',
    '5 (Middle Right)',
    '6 (Bottom Left)',
    '7 (Bottom Middle)',
    '0 (Bottom Right)',
]

export class Player{
constructor(order){
    this.order=order
    this.name=`Player ${order}`

    }

  async init() {
    const ans = await inquirer.prompt({
        name:'name',
        type:'input',
        message:'What is the name?',
        default:`Player ${this.order}`
    })
    if(ans.name){
        this.name=ans.name
    }
}
async calcMove(board){
    const legalMoveList = MOVE_LIST.filter((_,index)=>!board.table[index])
    
    const ans = await inquirer.prompt({
            name:'move',
            type:'list',
            message:`${this.name} Chose Your Move.`,
            choices:legalMoveList
        })
    return MOVE_LIST.findIndex(move=>move===ans.move)

}

}