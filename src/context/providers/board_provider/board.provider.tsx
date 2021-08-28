import { ComponentProps, useContext, useEffect, useState } from "react";
import { BoardContext } from "../../board.context";
import { AbstractBoard, defaultAbstractBoard, fenToAbstractBoard } from "../../../types/board.type";
import { Coord } from "../../../types/coord.type";
import { BoardPiece, PieceColor } from "../../../types/piece.type";
import { SocketContext } from "../../socket.io.context";

export default function BoardProvider({ children }: ComponentProps<any>) {
  const [abstractBoard, setAbstractBoard] = useState<AbstractBoard>(defaultAbstractBoard)
  const [selectedPiece, setSelectedPiece] = useState<BoardPiece | undefined>(undefined)
  const [gameUuid, setGameUuid] = useState<string | undefined>(undefined)

  const socketContext = useContext(SocketContext);

  useEffect(() => {
    socketContext.socket.on('pong', function (msg) {
      console.log(msg);
    })

    socketContext.socket.on('create_game', function (msg) {
      console.log('create')
      const data = JSON.parse(msg['data']);
      setGameUuid(data[0]['fields']['uuid']);
      console.log('UUID: ' + JSON.parse(msg['data'])[0]['fields']['uuid'])
    })

    socketContext.socket.on('join_game', function (msg) {
      console.log('join')
      const data = JSON.parse(msg['data']);
      setGameUuid(data[0]['fields']['uuid']);
      console.log('UUID: ' + JSON.parse(msg['data'])[0]['fields']['uuid'])
    })

    socketContext.socket.on('make_move', function (msg) {
      console.log(msg);
    })

    socketContext.newGame();
    setAbstractBoard(fenToAbstractBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))
  }, [])


  const movePieceLocal = (start: Coord, end: Coord) => {
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
  }

  const movePiece = (start: Coord, end: Coord) => {
    socketContext.movePiece(start, end, 1, gameUuid!)
  }

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