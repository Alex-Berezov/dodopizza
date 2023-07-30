import React, { FC } from 'react'
import * as Styled from './styles'
import { IProducts } from '../../models/IProducts'
import { useDispatch } from 'react-redux'
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../../store/reducers/cartSlice'

interface CartItemProps {
  cartItems: IProducts[]
}

interface PizzasItemProps {
  id: number
  selectedSize: string
  selectedDough: string
}

const CartItem: FC<CartItemProps> = ({ cartItems }) => {
  const dispatch = useDispatch()

  const IncreaseQuantity = ({ id, selectedSize, selectedDough }: PizzasItemProps) => {
    dispatch(increaseQuantity({ id, selectedSize, selectedDough }))
  }

  const DecreaseQuantity = ({ id, selectedSize, selectedDough }: PizzasItemProps) => {
    dispatch(decreaseQuantity({ id, selectedSize, selectedDough }))
  }

  const DeleteItem = ({ id, selectedSize, selectedDough }: PizzasItemProps) => {
    dispatch(removeFromCart({ id, selectedSize, selectedDough }))
  }

  return (
    <Styled.Root>
      <Styled.CartItems>
        {cartItems?.map((product) => (
          <Styled.CartItem key={`${product.selectedSize}-${product.selectedDough}-${product.id}`}>
            <Styled.DeleteBtn
              onClick={() => {
                if (product.selectedSize && product.selectedDough) {
                  DeleteItem({
                    id: product.id,
                    selectedSize: product.selectedSize!,
                    selectedDough: product.selectedDough!,
                  })
                }
              }}
            >
              <svg fill="none" viewBox="0 0 24 24">
                <path
                  d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z"
                  fill="#000"
                ></path>
              </svg>
            </Styled.DeleteBtn>
            <Styled.Header>
              <Styled.Picture>
                <Styled.Img src={product.image ? product.image : product.pizzasImages?.main} alt="Product image" />
              </Styled.Picture>
              <Styled.OrderInfo>
                <Styled.OrderInfoTitle>{product.title}</Styled.OrderInfoTitle>
                <Styled.OrderInfoParam>
                  Средняя {product.selectedSize && product.pizzaSizes ? product.pizzaSizes[product.selectedSize] : ''}{' '}
                  см, {product.selectedDough ? product.pizzaDough?.[product.selectedDough] : ''}, традиционное тесто
                </Styled.OrderInfoParam>
              </Styled.OrderInfo>
            </Styled.Header>
            <Styled.Footer>
              <Styled.Price>{product.price} ₽</Styled.Price>
              <Styled.CounterWrapper>
                <Styled.Counter>
                  <Styled.MinusBtn
                    onClick={() => {
                      if (product.selectedSize && product.selectedDough) {
                        DecreaseQuantity({
                          id: product.id,
                          selectedSize: product.selectedSize!,
                          selectedDough: product.selectedDough!,
                        })
                      }
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" className="icon">
                      <rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
                    </svg>
                  </Styled.MinusBtn>
                  <Styled.Count>{product.quantity}</Styled.Count>
                  <Styled.PlusBtn
                    onClick={() => {
                      if (product.selectedSize && product.selectedDough) {
                        IncreaseQuantity({
                          id: product.id,
                          selectedSize: product.selectedSize!,
                          selectedDough: product.selectedDough!,
                        })
                      }
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" className="icon">
                      <g fill="#454B54">
                        <rect x="4" width="2" height="10" ry="1"></rect>
                        <rect y="4" width="10" height="2" rx="1"></rect>
                      </g>
                    </svg>
                  </Styled.PlusBtn>
                </Styled.Counter>
              </Styled.CounterWrapper>
            </Styled.Footer>
          </Styled.CartItem>
        ))}
      </Styled.CartItems>
    </Styled.Root>
  )
}

export default CartItem
