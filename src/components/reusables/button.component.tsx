import React, {ComponentProps} from 'react';
import styled, { css } from "styled-components";


const outlinedButton = () => css`
  border: 6px solid #EC1722;
  border-radius: 5px;
  color: #EC1722;
`

const CustomButton = styled.div<{variant?: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  min-height: 2rem;
  ${props => props.variant === 'outlined' && outlinedButton()}
  &:hover{
    cursor: pointer;
  }
`

export interface ButtonProps extends ComponentProps<any>{
  variant?: string
}

export default function Button({children, variant}: ButtonProps){
  return(
  <CustomButton
    variant = {variant}
  >
    {children}
  </CustomButton>
  )
}