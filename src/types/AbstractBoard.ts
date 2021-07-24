import {AbstractSquare} from "./AbstractSquare";
import {charToPiece} from "./AbstractPiece";

export interface AbstractBoard{
  squareTable: AbstractSquare[][]
}

export function fenToAbstractBoard(fen: string): AbstractBoard{
  const board: AbstractSquare[][] = []
  const boardRows = fen.split(' ')[0].split('/');
  for (const rowString of boardRows){
    const row = []
    for (const c of rowString.split("")){
      if (c.match(/[0-9]/)){
        for (let i = 0; i < parseInt(c); i++){
          row.push({hasPiece: false})
        }
      } else {
        row.push({
          hasPiece: true,
          piece: charToPiece(c)
        })
      }
    }
    board.push(row)
  }
  return {
    squareTable: board
  }
}

