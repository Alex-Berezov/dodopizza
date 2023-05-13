import React, { FC } from 'react'
import * as Styled from './styles'

import Cheese from '../../../../assets/images/cheese.webp'
import { IProducts } from '../../../../models/IProducts'

interface ProductsBlockProps {
  products: IProducts[]
}

const ProductsBlock: FC<ProductsBlockProps> = ({ products }) => {
  const pizzas = products?.filter((el) => el.category === 'pizzas')
  const snacks = products?.filter((el) => el.category === 'snacks')
  const drinks = products?.filter((el) => el.category === 'drinks')

  return (
    <Styled.Root>
      <Styled.H2 id='pizzas'>Пицца</Styled.H2>
      <Styled.ProductList>
        {pizzas?.map((item) => {
          return (
            <Styled.ProductItem key={item.id}>
              <Styled.Main>
                <Styled.MainPicture src={item.pizzasImages?.main} />
                <Styled.MainTitle>{item.title}</Styled.MainTitle>
                <Styled.MainDescription>
                  {item.description}
                </Styled.MainDescription>
              </Styled.Main>
              <Styled.Footer>
                <Styled.FooterPrice>от {item.price} ₽</Styled.FooterPrice>
                <Styled.FooterButton>Выбрать</Styled.FooterButton>
              </Styled.Footer>
            </Styled.ProductItem>
          )
        })}
      </Styled.ProductList>

      <Styled.H2 id='snacks'>Закуски</Styled.H2>
      <Styled.ProductList>
        {snacks?.map((item) => {
          return (
            <Styled.ProductItem key={item.id}>
              <Styled.Main>
                <Styled.MainPicture src={item.image} />
                <Styled.MainTitle>{item.title}</Styled.MainTitle>
                <Styled.MainDescription>
                  {item.description}
                </Styled.MainDescription>
              </Styled.Main>
              <Styled.Footer>
                <Styled.FooterPrice>от {item.price} ₽</Styled.FooterPrice>
                <Styled.FooterButton>Выбрать</Styled.FooterButton>
              </Styled.Footer>
            </Styled.ProductItem>
          )
        })}
      </Styled.ProductList>

      <Styled.H2 id='drinks'>Напитки</Styled.H2>
      <Styled.ProductList>
        {drinks?.map((item) => {
          return (
            <Styled.ProductItem key={item.id} isDrinks={true}>
              <Styled.Main>
                <Styled.MainPicture src={item.image} />
                <Styled.MainTitle>{item.title}</Styled.MainTitle>
                <Styled.MainDescription>
                  {item.description}
                </Styled.MainDescription>
              </Styled.Main>
              <Styled.Footer>
                <Styled.FooterPrice>от {item.price} ₽</Styled.FooterPrice>
                <Styled.FooterButton>Выбрать</Styled.FooterButton>
              </Styled.Footer>
            </Styled.ProductItem>
          )
        })}
      </Styled.ProductList>
    </Styled.Root>
  )
}

export default ProductsBlock
