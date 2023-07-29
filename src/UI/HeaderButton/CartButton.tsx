import React, { FC, useState } from 'react'
import * as Styled from './styles'

import ArrowRight from '../../assets/images/arrowRight.svg'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/reducers/cartSlice'

interface CartButtonProps {
  onClick: () => void
}

const CartButton: FC<CartButtonProps> = ({ onClick }) => {
  const [hovered, setHovered] = useState(false)
  const cartItems = useSelector(selectCartItems)
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity ?? 0), 0)

  return (
    <Styled.Root onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => onClick()}>
      <Styled.Text>Корзина</Styled.Text>
      <Styled.Separator></Styled.Separator>
      <Styled.Counter>
        {hovered ? <Styled.ArrowImg src={ArrowRight} visible={hovered} /> : <Styled.Text>{totalItems}</Styled.Text>}
      </Styled.Counter>
    </Styled.Root>
  )
}

export default CartButton
