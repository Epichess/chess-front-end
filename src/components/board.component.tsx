import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {AbstractBoard} from "../types/board.type";
import Square from "./square.component";
import {BoardContext} from "../context/board.context";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 800px;
  background-color: red;
  &:hover{
    cursor: pointer;
  }
`

const BoardRow = styled.div`
  flex: 1;
  display: flex;
`

export interface BoardProps{
}

export default function Board(){
  const boardContext = useContext(BoardContext)
  const [abstractBoard, setAbstractBoard] = useState<AbstractBoard>(boardContext.abstractBoard)

  useEffect(() => {
    setAbstractBoard(boardContext.abstractBoard)
  }, [boardContext.abstractBoard])

  const isSquareSelected = (row: number, col: number): boolean => {
    if (boardContext.selectedPiece === undefined){
      return false
    }

    return(row === boardContext.selectedPiece.coord.row && col === boardContext.selectedPiece.coord.col)
  }

  return(
      <BoardContainer>
        {abstractBoard.squareTable.map((boardRow, rowIndex) =>
            <BoardRow key={`${rowIndex}`}>{boardRow.map((square, colIndex) =>
                <Square
                    key={`${colIndex}`}
                    coord={{row: rowIndex,
                            col: colIndex}}
                    isLight={(rowIndex + colIndex) % 2 === 1}
                    isSelected={isSquareSelected(rowIndex, colIndex)}
                    isTargeted={false}
                    containsPiece={square.hasPiece}
                    piece={square.piece}
                />
              )}</BoardRow>) }
      </BoardContainer>
  )
}