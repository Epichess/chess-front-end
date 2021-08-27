import { ComponentProps, useContext, useEffect, useState } from "react";
import { BoardContext } from "../../board.context";
import { AbstractBoard, defaultAbstractBoard, fenToAbstractBoard } from "../../../types/board.type";
import { Coord } from "../../../types/coord.type";
import { BoardPiece, PieceColor } from "../../../types/piece.type";
import { SocketContext } from "../../socket.io.context";

export default function BoardProvider({ children }: ComponentProps<any>) {
  const [abstractBoard, setAbstractBoard] = useState<AbstractBoard>(defaultAbstractBoard)
  const [selectedPiece, setSelectedPiece] = useState<BoardPiece | undefined>(undefined)

  const socketContext = useContext(SocketContext);

  const movePiece = (start: Coord, end: Coord) => {
    if (JSON.stringify(start) === JSON.stringify(end)) {
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
    setAbstractBoard({
      squareTable: [...abstractBoard.squareTable],
      sideToMove: abstractBoard.sideToMove === PieceColor.WHITE ? PieceColor.BLACK : PieceColor.WHITE
    })
    if (socketContext.socket !== undefined)
      socketContext.socket.emit('make_move', { 'uuid': '6cca354c-8c0a-4b5b-81dd-f0bac33027f6', 'start': [start.row, start.col], 'end': [end.row, end.col] })
  }

  useEffect(() => {
    if (socketContext.socket) {
      socketContext.socket.emit('ping', {});
      setAbstractBoard(fenToAbstractBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))
    }
  }, [socketContext.socket])

  return (
    <BoardContext.Provider value={{
      abstractBoard,
      selectedPiece,
      selectPiece: setSelectedPiece,
      movePiece
    }}>
      {children}
    </BoardContext.Provider>
  )
}