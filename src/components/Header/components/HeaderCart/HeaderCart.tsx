import React, { FC } from 'react'
import * as Styled from './styles'
import { Cart } from '../../../../UI/Cart'
import { AddToCartButton } from '../../../../UI/AddToCartButton'
import { CartItem } from '../../../../UI/CartItem'
import { useSelector } from 'react-redux'
import { selectCartItems } from "../../../../store/reducers/cartSlice"

interface HeaderCartProps {
  cartIsOpen: boolean
  setCartIsOpen: (bool: boolean) => void
}

const HeaderCart: FC<HeaderCartProps> = ({ cartIsOpen, setCartIsOpen }) => {
  const cartItems = useSelector(selectCartItems)

  console.log('====================================');
  console.log('cartItems >>', cartItems);
  console.log('====================================');

  const totalItems = cartItems.reduce((total, item) => total + (item.quantity ?? 0), 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity ?? 0), 0)

  console.log('====================================');
  console.log('totalItems >>', totalItems);
  console.log('====================================');

  const heandleClick = () => {
    console.log('Click')
  }

  return (
    <Styled.Root>
      <Cart isOpen={cartIsOpen} onClose={setCartIsOpen}>
        <Styled.Title>{totalItems} товара на {totalPrice} ₽</Styled.Title>

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
