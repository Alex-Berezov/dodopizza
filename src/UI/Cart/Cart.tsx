import React, { FC, useCallback, useEffect } from 'react'
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('locked')
    } else {
      document.body.classList.remove('locked')
    }
  }, [isOpen])

  return (
    <Styled.Root>
      <Styled.Overlay isOpen={isOpen} onClick={handleOverlayClick} />
      <Styled.ModalWrapper isOpen={isOpen}>
        <Styled.ModalContent>
          <Styled.CloseButton onClick={() => onClose(false)}>
            <svg width='25' height='25' viewBox='0 0 25 25' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
                fill='#fff'
              ></path>
            </svg>
          </Styled.CloseButton>
          {children}
        </Styled.ModalContent>
      </Styled.ModalWrapper>
    </Styled.Root>
  )
}

export default Cart
