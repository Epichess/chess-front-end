import {AbstractSquare} from "./AbstractSquare";
import {charToPiece, PieceColor} from "./AbstractPiece";

export interface AbstractBoard{
  squareTable: AbstractSquare[][]
  sideToMove: PieceColor
}

export const defaultAbstractBoard: AbstractBoard = {
  squareTable: [],
  sideToMove: PieceColor.WHITE
}

export function fenToAbstractBoard(fen: string): AbstractBoard{
  const board: AbstractSquare[][] = []
  const fen_fields = fen.split(' ')
  const boardRows = fen_fields[0].split('/');
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

  let sideToMove: PieceColor = PieceColor.WHITE;
  if (fen_fields[1] === 'b'){
    sideToMove = PieceColor.BLACK
  }
  return {
    squareTable: board,
    sideToMove: sideToMove
  }
}

