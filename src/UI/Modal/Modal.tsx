import React, { FC } from 'react'
import * as Styled from './styles'

interface ModalProps {
  active: boolean
  setActive: (bool: boolean) => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <Styled.Root modalActive={active} onClick={() => setActive(false)}>
      <Styled.Content
        contentActive={active}
        onClick={(e) => e.stopPropagation()}
      >
        <Styled.CloseButton onClick={() => setActive(false)}>
          <svg width='15' height='15' viewBox='0 0 25 25' fill='none'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
              fill='#000'
            ></path>
          </svg>
        </Styled.CloseButton>
        {children}
      </Styled.Content>
    </Styled.Root>
  )
}

export default Modal
