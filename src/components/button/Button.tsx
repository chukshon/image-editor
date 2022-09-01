import React from 'react'
import { ButtonStyled } from './style'

type ButtonProps = {
  children: any
  isActive?: boolean
  activeStatus?: boolean
  onClick?: () => void
}
const Button = ({ children, activeStatus, onClick, isActive }: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      activeStatus={activeStatus}
      active={isActive}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
