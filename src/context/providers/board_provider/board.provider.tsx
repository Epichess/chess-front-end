import {ComponentProps, useContext, useEffect, useState} from "react";
import {BoardContext} from "../../board.context";
import {AbstractBoard, defaultAbstractBoard, fenToAbstractBoard} from "../../../types/board.type";
import {Coord} from "../../../types/coord.type";
import {BoardPiece} from "../../../types/piece.type";
import {SocketContext} from "../../socket.io.context";
import {GameModes} from "../../../types/gameModes.type";

export default function BoardProvider({ children }: ComponentProps<any>) {
  const [abstractBoard, setAbstractBoard] = useState<AbstractBoard>(defaultAbstractBoard)
  const [selectedPiece, setSelectedPiece] = useState<BoardPiece | undefined>(undefined)
  const [gameUuid, setGameUuid] = useState<string | undefined>(undefined)
  const [targetedSquares, setTargetedSquares] = useState<Coord[] | undefined>(undefined)
  const [blackPOV, setBlackPOV] = useState<boolean>(false);
  const [isWhiteKingChecked, setIsWhiteKingChecked] = useState<boolean>(false);
  const [isBlackKingChecked, setIsBlackKingChecked] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [gameMode, setGameMode] = useState<GameModes>(GameModes.LOCAL);

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

    socketContext.socket.on('ask_move', function (msg) {
      console.log('asking moves')
      setTargetedSquares(msg)
    })

    socketContext.newGame();
    setAbstractBoard(fenToAbstractBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))
  }, [])

  useEffect(() => {
    if(gameUuid){
      socketContext.socket.on('make_move', function (msg) {
        console.log(msg);
        if (msg['isMoveValid']) {
          setAbstractBoard(fenToAbstractBoard(msg['fen']))
          setIsBlackKingChecked(msg.isKingCheck.b)
          setIsWhiteKingChecked(msg.isKingCheck.w)
          setIsGameOver(msg.isGameOver)

          if(gameMode === GameModes.IA){
            if (!msg.isAIMove){
              socketContext.makeMoveAI(gameUuid!)
            }
          }
        }
        setSelectedPiece(undefined)
      })
    }
  }, [gameUuid]);



  const selectPiece = (piece: BoardPiece | undefined) => {
    setSelectedPiece(piece)
    if(piece){
      socketContext.askMove(piece.coord, gameUuid!)
    } else {
      setTargetedSquares(undefined)
    }
  }

  const movePiece = (start: Coord, end: Coord) => {
    if (JSON.stringify(start) === JSON.stringify(end)) {
      setSelectedPiece(undefined)
      return
    }
    socketContext.movePiece(start, end, 6, gameUuid!)
    setTargetedSquares(undefined)
  }

  return (
    <BoardContext.Provider value={{
      abstractBoard,
      selectedPiece,
      selectPiece,
      movePiece,
      blackPOV,
      setBlackPOV,
      targetedSquares,
      isWhiteKingChecked,
      isBlackKingChecked,
      isGameOver,
      gameMode,
      setGameMode,
      gameUuid
    }}>
      {children}
    </BoardContext.Provider>
  )
}