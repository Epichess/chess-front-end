import {ComponentProps, useEffect, useState} from "react";
import {BoardContext} from "../../board.context";
import {AbstractBoard, defaultAbstractBoard, fenToAbstractBoard} from "../../../types/board.type";
import {Coord} from "../../../types/coord.type";
import {BoardPiece, PieceColor} from "../../../types/piece.type";

export default function BoardProvider({children}: ComponentProps<any>){
  const [abstractBoard, setAbstractBoard] = useState<AbstractBoard>(defaultAbstractBoard)
  const [selectedPiece, setSelectedPiece] = useState<BoardPiece | undefined>(undefined)

  const movePiece = (start: Coord, end: Coord) => {
    if(JSON.stringify(start) === JSON.stringify(end)){
      setSelectedPiece(undefined)
      return
    }
    const startSqr = abstractBoard.squareTable[start.row][start.col]
    const endSqr = abstractBoard.squareTable[end.row][end.col]
    endSqr.hasPiece = true
    startSqr.hasPiece = false
    endSqr.piece = JSON.parse(JSON.stringify(startSqr.piece))
    abstractBoard.squareTable[start.row][start.col].hasPiece = false
    abstractBoard.squareTable[start.row][start.col].piece = undefined
    setSelectedPiece(undefined)
    setAbstractBoard({squareTable: [...abstractBoard.squareTable],
      sideToMove: abstractBoard.sideToMove === PieceColor.WHITE ? PieceColor.BLACK : PieceColor.WHITE})
  }

  useEffect(() => {
    setAbstractBoard(fenToAbstractBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))
  }, [])

  return(
      <BoardContext.Provider value = {{
        abstractBoard,
        selectedPiece,
        selectPiece: setSelectedPiece,
        movePiece
      }}>
        {children}
      </BoardContext.Provider>
  )
}