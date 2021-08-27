import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {AbstractBoard} from "../types/board.type";
import Square from "./square.component";
import {BoardContext} from "../context/board.context";
import logo_board from '../assets/logo_board.png'
import logo_anarchychess from "../assets/logo_anarchychess.png";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32vw;
  height: 32vw;
  mix-blend-mode: normal;
  opacity: 0.8;
  box-shadow: 5px 5px 5px grey;
`

const BoardRow = styled.div`
  flex: 1;
  display: flex;
  &:hover{
    cursor: pointer;
  }
  box-shadow: 5px 5px 5px grey;
`

const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 40vw;
  height: 37vw;
  box-shadow: 5px 5px 5px grey;
`

const Lines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 32vw;
  margin-right: 1vw;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 32vw;
  margin-top: 1vw;
`

const CoordinatesText = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 0.8vw;
  line-height: 0.8vw;
  color: #7C7C7C;
`

const Logo = styled.img`
  align-self: flex-end;
  height: 10vw;
  margin-left: -8vw;
  margin-bottom: -4vw;

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
      <Rectangle>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '32vw'}}>
              <div style={{ display: 'flex', flexDirection: 'row'}}>
                  <Logo src={logo_anarchychess}/>
                <Lines>
                  <CoordinatesText>
                      8
                  </CoordinatesText>
                    <CoordinatesText>
                        7
                    </CoordinatesText>
                    <CoordinatesText>
                        6
                    </CoordinatesText>
                    <CoordinatesText>
                        5
                    </CoordinatesText>
                    <CoordinatesText>
                        4
                    </CoordinatesText>
                    <CoordinatesText>
                        3
                    </CoordinatesText>
                    <CoordinatesText>
                        2
                    </CoordinatesText>
                    <CoordinatesText>
                        1
                    </CoordinatesText>
                </Lines>
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
              </div>
            <Columns>
              <CoordinatesText>
                  a
              </CoordinatesText>
              <CoordinatesText>
                  b
              </CoordinatesText>
              <CoordinatesText>
                  c
              </CoordinatesText>
              <CoordinatesText>
                  d
              </CoordinatesText>
              <CoordinatesText>
                  e
              </CoordinatesText>
              <CoordinatesText>
                  f
              </CoordinatesText>
              <CoordinatesText>
                  g
              </CoordinatesText>
              <CoordinatesText>
                  h
              </CoordinatesText>
          </Columns>
          </div>
      </Rectangle>
  )
}