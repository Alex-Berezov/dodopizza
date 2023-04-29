import React, { FC, useState } from 'react'
import * as Styled from './styles'

import ArrowRight from '../../assets/images/arrowRight.svg'

const CartButton: FC = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <Styled.Root
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Styled.Text>Корзина</Styled.Text>
      <Styled.Separator></Styled.Separator>
      <Styled.Counter>
        {hovered ? (
          <Styled.ArrowImg src={ArrowRight} />
        ) : (
          <Styled.Text>3</Styled.Text>
        )}
      </Styled.Counter>
    </Styled.Root>
  )
}

export default CartButton
