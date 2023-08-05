import React, { FC } from 'react'
import * as Styled from './styles'
import { Cart } from '../../../../UI/Cart'
import { AddToCartButton } from '../../../../UI/AddToCartButton'
import { CartItem } from '../../../../UI/CartItem'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../../../store/reducers/cartSlice'

interface HeaderCartProps {
  cartIsOpen: boolean
  setCartIsOpen: (bool: boolean) => void
}

const HeaderCart: FC<HeaderCartProps> = ({ cartIsOpen, setCartIsOpen }) => {
  const cartItems = useSelector(selectCartItems)
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity ?? 0), 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity ?? 0), 0)

  const heandleClick = () => {
    alert('Дальнейшую функциональность я не стал разрабатывать.')
  }

  return (
    <Styled.Root>
      <Cart isOpen={cartIsOpen} onClose={setCartIsOpen}>
        <Styled.Title>
          {totalItems} товара на {totalPrice} ₽
        </Styled.Title>

        <CartItem cartItems={cartItems} />

        <Styled.Footer>
          <Styled.Summary>
            <span>{totalItems} товара</span>
            <span>на сумму</span>
            <span>{totalPrice} ₽</span>
          </Styled.Summary>
          <AddToCartButton onClick={heandleClick}>Оформить заказ</AddToCartButton>
        </Styled.Footer>
      </Cart>
    </Styled.Root>
  )
}

export default HeaderCart
