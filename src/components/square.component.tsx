import React, {SyntheticEvent, useContext, useEffect} from "react";
import styled from "styled-components";
import {AbstractPiece} from "../types/piece.type";
import Piece from "./piece.component";
import {Coord} from "../types/coord.type";
import {BoardContext} from "../context/board.context";

export interface SquareProps{
  coord: Coord
  isLight: boolean,
  isTargeted: boolean,
  isSelected: boolean,
  isChecked: boolean,
  blackPOV: boolean,
  containsPiece: boolean,
  piece?: AbstractPiece,
}

const Cell = styled.div<{isSelected: boolean, isLight: boolean, blackPOV: boolean}>`
    flex: 1;
    background-color: ${props => props.isLight? '#4b5061' : '#EBEBEB'};
    background-color: ${props => props.isSelected && '#90d147'};
    position: relative;
  -webkit-transform: ${props => props.blackPOV && 'rotateX(180deg)'};
  `


const TargetCell = styled.span<{containsPiece: boolean, isTargeted: boolean, isChecked: boolean}>`
  background: 
  ${props => {if(props.isTargeted){
    if (props.containsPiece){
      return 'radial-gradient(transparent 0%, transparent 79%, rgba(20,85,0,0.3) 80%)'
    } else {
      return 'radial-gradient(rgba(20,85,30,0.5) 19%, rgba(0,0,0,0) 20%)'
    }
  }}}
  ${props => props.isChecked && 'radial-gradient(ellipse at center, red 0%, #e70000 25%, rgba(169,0,0,0) 89%, rgba(158,0,0,0) 100%)'};
  width: 100%;
  height: 100%;
  position: absolute;
`

export default function Square({coord, isLight, isTargeted, isSelected, containsPiece, piece, blackPOV, isChecked}: SquareProps){
  const onClick = () => {
    if(boardContext.selectedPiece){
      boardContext.movePiece(boardContext.selectedPiece.coord, coord)
    }
  }

  const boardContext = useContext(BoardContext)
  return(
      <Cell
          isLight = {isLight}
          isSelected = {isSelected}
          blackPOV = {blackPOV}
      >
          <TargetCell containsPiece={piece !== undefined} onClick={onClick} isTargeted={isTargeted} isChecked={isChecked}>
            {piece !== undefined && <Piece
                piece={{
                  coord: coord,
                  abstractPiece: piece
                }}
            />}
          </TargetCell>
      </Cell>
  )
}