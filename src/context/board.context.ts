import {createContext} from "react";
import {AbstractBoard} from "../types/board.type";
import {Coord} from "../types/coord.type";
import {defaultAbstractBoard} from "../types/board.type";
import {BoardPiece} from "../types/piece.type";
import {GameModes} from "../types/gameModes.type";

export interface Board{
  abstractBoard: AbstractBoard,
  selectedPiece: BoardPiece | undefined,
  selectPiece: (piece: BoardPiece | undefined) => void
  movePiece: (start: Coord, end: Coord) => void
  blackPOV: boolean
  setBlackPOV: (pov: boolean) => void
  targetedSquares?: Coord[]
  isWhiteKingChecked: boolean
  isBlackKingChecked: boolean
  isGameOver: boolean
  gameMode: GameModes
  setGameMode: (gameMode: GameModes) => void
  gameUuid?: string
}

const defaultValues = {
  abstractBoard: defaultAbstractBoard,
  selectedPiece: undefined,
  selectPiece: () => {},
  movePiece: () => {},
  blackPOV: false,
  setBlackPOV: () => {},
  targetedSquares: undefined,
  isWhiteKingChecked: false,
  isBlackKingChecked: false,
  isGameOver: false,
  gameMode: GameModes.NONE,
  setGameMode: () => {},
  gameUuid: undefined
}

export const BoardContext = createContext<Board>(defaultValues)