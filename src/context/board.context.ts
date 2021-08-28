import {createContext} from "react";
import {AbstractBoard} from "../types/board.type";
import {Coord} from "../types/coord.type";
import {defaultAbstractBoard} from "../types/board.type";
import {BoardPiece} from "../types/piece.type";

export interface Board{
  abstractBoard: AbstractBoard,
  selectedPiece: BoardPiece | undefined,
  selectPiece: (piece: BoardPiece | undefined) => void
  movePiece: (start: Coord, end: Coord) => void
  blackPOV: boolean
  setBlackPOV: (pov: boolean) => void
  targetedSquares?: Coord[]
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
  gameUuid: undefined
}

export const BoardContext = createContext<Board>(defaultValues)