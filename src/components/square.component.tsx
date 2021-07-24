import React, {useContext} from "react";
import styled from "styled-components";
import {AbstractPiece} from "../types/AbstractPiece";
import Piece from "./piece.component";
import {Coord} from "../types/Coord";
import {BoardContext} from "../context/board.context";

export interface SquareProps{
  coord: Coord
  isLight: boolean,
  isTargeted: boolean,
  isSelected: boolean,
  containsPiece: boolean,
  piece?: AbstractPiece
}

const Cell = styled.div<{isSelected: boolean, isLight: boolean}>`
    flex: 1;
    background-color: ${props => props.isLight? '#703104' : '#E19762'};
    background-color: ${props => props.isSelected && '#90d147'};
  `

export default function Square({coord, isLight, isTargeted, isSelected, containsPiece, piece}: SquareProps){

  const onClick = () => {
    console.log('got here')
    if(boardContext.selectedPiece){
      boardContext.movePiece(boardContext.selectedPiece, coord)
    }
  }

  const boardContext = useContext(BoardContext)
  return(
    <Cell
        onClick={onClick}
        isLight = {isLight}
        isSelected = {isSelected}
    >
      {piece !== undefined && <Piece
          coord={coord}
          abstractPiece={piece}
      />}
    </Cell>
  )
}