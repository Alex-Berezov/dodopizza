import React from 'react'
import * as Styled from './styles'

const CartItem = () => {
  return (
    <Styled.Root>
      <Styled.DeleteBtn>
        <svg fill='none' viewBox='0 0 24 24'>
          <path
            d='M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z'
            fill='#000'
          ></path>
        </svg>
      </Styled.DeleteBtn>
      <Styled.Header>
        <Styled.Picture>
          <Styled.Img src='/' alt='Product image' />
        </Styled.Picture>
        <Styled.OrderInfo>
          <Styled.OrderInfoTitle>Пепперони фреш</Styled.OrderInfoTitle>
          <Styled.OrderInfoParam>
            Средняя 30 см, традиционное тесто
          </Styled.OrderInfoParam>
        </Styled.OrderInfo>
      </Styled.Header>
      <Styled.Footer>
        <Styled.Price>519 ₽</Styled.Price>
        <Styled.CounterWrapper>
          <Styled.Counter>
            <Styled.MinusBtn>
              <svg width='10' height='10' viewBox='0 0 10 10' className='icon'>
                <rect fill='#454B54' y='4' width='10' height='2' rx='1'></rect>
              </svg>
            </Styled.MinusBtn>
            <Styled.Count>1</Styled.Count>
            <Styled.PlusBtn>
              <svg width='10' height='10' viewBox='0 0 10 10' className='icon'>
                <g fill='#454B54'>
                  <rect x='4' width='2' height='10' ry='1'></rect>
                  <rect y='4' width='10' height='2' rx='1'></rect>
                </g>
              </svg>
            </Styled.PlusBtn>
          </Styled.Counter>
        </Styled.CounterWrapper>
      </Styled.Footer>
    </Styled.Root>
  )
}

export default CartItem
