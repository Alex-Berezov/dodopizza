import React from 'react'
import * as Styled from './styles'

interface AddToCartButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <Styled.AddToCartButton onClick={onClick}>
      {children}
    </Styled.AddToCartButton>
  )
}

export default AddToCartButton
