import React, { FC, useState } from 'react'
import * as Styled from './styles'

import ArrowRight from '../../assets/images/arrowRight.svg'

interface CartButtonProps {
  onClick: () => void
}

const CartButton: FC<CartButtonProps> = ({ onClick }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Styled.Root
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick()}
    >
      <Styled.Text>Корзина</Styled.Text>
      <Styled.Separator></Styled.Separator>
      <Styled.Counter>
        {hovered ? (
          <Styled.ArrowImg src={ArrowRight} visible={hovered} />
        ) : (
          <Styled.Text>3</Styled.Text>
        )}
      </Styled.Counter>
    </Styled.Root>
  )
}

export default CartButton
