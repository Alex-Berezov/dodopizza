import React, { FC, useCallback } from 'react'
import * as Styled from './styles'

interface CartProps {
  isOpen: boolean
  onClose: (bool: boolean) => void
  children: React.ReactNode
}

const Cart: FC<CartProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose(false)
      }
    },
    [onClose]
  )

  return (
    <Styled.Root>
      <Styled.Overlay isOpen={isOpen} onClick={handleOverlayClick} />
      <Styled.ModalWrapper isOpen={isOpen}>
        <Styled.ModalContent>
          <Styled.CloseButton onClick={() => onClose(false)}>
            &times;
          </Styled.CloseButton>
          {children}
        </Styled.ModalContent>
      </Styled.ModalWrapper>
    </Styled.Root>
  )
}

export default Cart
