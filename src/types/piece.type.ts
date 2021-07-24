import {Coord} from "./coord.type";

// This interface represents a piece that we can show on-screen (props for the piece component)
export interface BoardPiece{
  abstractPiece: AbstractPiece,
  coord: Coord
}

// This interface represents an abstract chess piece
export interface AbstractPiece {
  pieceKind: PieceKind,
  pieceColor: PieceColor,
}

export enum PieceKind{
  "NONE" = 0,
  "PAWN" = 1,
  "KNIGHT" = 2,
  "BISHOP"= 3,
  "ROOK"= 4,
  "QUEEN"= 5,
  "KING"= 6
}

export enum PieceColor{
  "WHITE" = 1,
  "BLACK" = 0,
}

export function charToPiece(c: string): AbstractPiece{
  let piece: AbstractPiece = {
    pieceKind: PieceKind.NONE,
    pieceColor: PieceColor.BLACK
  }

  if (c.toUpperCase() === c){
    piece.pieceColor = PieceColor.WHITE
  }

  if (charToPieceKind.has(c.toLowerCase())){
    piece.pieceKind = charToPieceKind.get(c.toLowerCase())!
  }

  return piece;
}

export const charToPieceKind: Map<string, PieceKind> = new Map([
    ['p', PieceKind.PAWN],
    ['n', PieceKind.KNIGHT],
    ['b', PieceKind.BISHOP],
    ['r', PieceKind.ROOK],
    ['q', PieceKind.QUEEN],
    ['k', PieceKind.KING]
])


