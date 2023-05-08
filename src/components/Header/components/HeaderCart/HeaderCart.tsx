import React, { FC } from 'react'
import * as Styled from './styles'
import { Cart } from '../../../../UI/Cart'
import { AddToCartButton } from '../../../../UI/AddToCartButton'
import { CartItem } from '../../../../UI/CartItem'

interface HeaderCartProps {
  cartIsOpen: boolean
  setCartIsOpen: (bool: boolean) => void
}

const HeaderCart: FC<HeaderCartProps> = ({ cartIsOpen, setCartIsOpen }) => {
  const heandleClick = () => {
    console.log('Click')
  }

  return (
    <Styled.Root>
      <Cart isOpen={cartIsOpen} onClose={setCartIsOpen}>
        <Styled.Title>2 товара на 688 ₽</Styled.Title>

        <CartItem />

        <Styled.Footer>
          <Styled.Summary>
            <span>2 товара</span>
            <span>на сумму</span>
            <span>688 ₽</span>
          </Styled.Summary>
          <AddToCartButton onClick={heandleClick}>
            Оформить заказ
          </AddToCartButton>
        </Styled.Footer>
      </Cart>
    </Styled.Root>
  )
}

export default HeaderCart
