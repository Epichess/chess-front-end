import {createContext} from "react";
import {AbstractBoard} from "../types/AbstractBoard";
import {Coord} from "../types/Coord";

export interface Board{
  abstractBoard: AbstractBoard,
  selectedPiece: Coord | undefined,
  selectPiece: (coord: Coord | undefined) => void
  movePiece: (start: Coord, end: Coord) => void
}

const defaultValues = {
  abstractBoard: {squareTable: []},
  selectedPiece: undefined,
  selectPiece: () => {},
  movePiece: () => {}
}

export const BoardContext = createContext<Board>(defaultValues)