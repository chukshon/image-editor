import React from 'react'
import { ButtonStyled } from './style'

type ButtonProps = {
  children: any
}
const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
