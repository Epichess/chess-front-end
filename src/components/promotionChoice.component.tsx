import React from 'react';
import {PieceColor} from "../types/piece.type";
import styled from "styled-components";

export interface PromotionChoiceProps {
  color: PieceColor
}

const PieceChoice = styled.img`
  width : 80px; height : 80px;
  -moz-border-radius : 60px;
  -webkit-border-radius : 60px;
  border-radius : 80px;
  display: block;
  background: rgba(143, 143, 143, 0.527);
`

const PromotionChoice = ({color} : PromotionChoiceProps) => {
  return (
      <>
      {color === PieceColor.BLACK ?
          <div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/bq.svg" className="piece-promote" alt = "bq"/>
            </div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/bn.svg" className="piece-promote" alt = "bn"/>
            </div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/br.svg" className="piece-promote" alt = "br"/>
            </div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/bb.svg" className="piece-promote" alt = "bb"/>
            </div>
          </div>
        :
          <div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/wq.svg" className="piece-promote" alt = "wq"/>
            </div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/wn.svg" className="piece-promote" alt = "wn"/>
            </div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/wr.svg" className="piece-promote" alt = "wr"/>
            </div>
            <div>
              <PieceChoice src="../assets/pieces/cburnett/wb.svg" className="piece-promote" alt = "wb"/>
            </div>
          </div>
    }
        </>
  );
}

export default PromotionChoice;
