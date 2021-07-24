import React, {useContext} from "react";
import {AbstractPiece, BoardPiece, PieceColor, PieceKind} from "../types/piece.type";
import wp from '../assets/pieces/cburnett/wp.svg'
import wn from '../assets/pieces/cburnett/wn.svg'
import wb from '../assets/pieces/cburnett/wb.svg'
import wr from '../assets/pieces/cburnett/wr.svg'
import wq from '../assets/pieces/cburnett/wq.svg'
import wk from '../assets/pieces/cburnett/wk.svg'
import bp from '../assets/pieces/cburnett/bp.svg'
import bn from '../assets/pieces/cburnett/bn.svg'
import bb from '../assets/pieces/cburnett/bb.svg'
import br from '../assets/pieces/cburnett/br.svg'
import bq from '../assets/pieces/cburnett/bq.svg'
import bk from '../assets/pieces/cburnett/bk.svg'
import styled from "styled-components";
import {BoardContext} from "../context/board.context";

export interface PieceProps{
  piece: BoardPiece
}

const PieceImg = styled.img`
    height: 100%;
  `

export default function Piece({piece}:PieceProps){
  const boardContext = useContext(BoardContext)

  const onClick = () => {
    if (boardContext.selectedPiece) {
      if(boardContext.selectedPiece.abstractPiece.pieceColor === piece.abstractPiece.pieceColor){
        console.log(boardContext.selectedPiece.abstractPiece.pieceColor)
        console.log(piece.abstractPiece.pieceColor)
        boardContext.selectPiece(undefined)
      }else{
        console.log(boardContext.selectedPiece.abstractPiece.pieceColor)
        console.log(piece.abstractPiece.pieceColor)
        boardContext.movePiece(boardContext.selectedPiece.coord, piece.coord)
      }
    } else {
      if(boardContext.abstractBoard.sideToMove === piece.abstractPiece.pieceColor) {
         boardContext.selectPiece(piece)
      }
    }
  }

  return(
      <PieceImg
          src = {abstractPieceToSvg(piece.abstractPiece)}
          alt = 'chessPiece'
          onClick={onClick}
      />
  )
}

function abstractPieceToSvg(piece: AbstractPiece){
  switch (piece.pieceKind){
    case PieceKind.PAWN:
      switch (piece.pieceColor){
        case PieceColor.WHITE:
          return wp
        case PieceColor.BLACK:
          return bp
      }
      break;
    case PieceKind.KNIGHT:
      switch (piece.pieceColor){
        case PieceColor.WHITE:
          return wn
        case PieceColor.BLACK:
          return bn
      }
      break;
    case PieceKind.BISHOP:
      switch (piece.pieceColor){
        case PieceColor.WHITE:
          return wb
        case PieceColor.BLACK:
          return bb
      }
      break;
    case PieceKind.ROOK:
      switch (piece.pieceColor){
        case PieceColor.WHITE:
          return wr
        case PieceColor.BLACK:
          return br
      }
      break;
    case PieceKind.QUEEN:
      switch (piece.pieceColor){
        case PieceColor.WHITE:
          return wq
        case PieceColor.BLACK:
          return bq
      }
      break;
    case PieceKind.KING:
      switch (piece.pieceColor){
        case PieceColor.WHITE:
          return wk
        case PieceColor.BLACK:
          return bk
      }
      break;
  }
  return ''
}