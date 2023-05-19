import React, { FC, useState } from 'react'
import * as Styled from './styles'

import { IProducts } from '../../../../models/IProducts'
import { ProductModal } from '../ProductModal'

interface ProductsBlockProps {
  products: IProducts[]
}

// const initialProductState = {
//   id: 0,
//   category: '',
//   title: '',
//   isPizza: true,
//   price: 0,
// }

const ProductsBlock: FC<ProductsBlockProps> = ({ products }) => {
  const [activeModal, setActiveModal] = useState(false)
  const [product, setProduct] = useState<IProducts>()

  const pizzas = products?.filter((el) => el.category === 'pizzas')
  const snacks = products?.filter((el) => el.category === 'snacks')
  const drinks = products?.filter((el) => el.category === 'drinks')

  const selectedProduct = (category: string, id: number) => {
    setActiveModal(true)
    const selectedItem = products
      ?.filter((el) => el.category === category)
      .filter((item) => item.id === id)
    setProduct(selectedItem[0])
  }

  return (
    <Styled.Root>
      <Styled.H2 id='pizzas'>Пицца</Styled.H2>
      <Styled.ProductList>
        {pizzas?.map((item) => {
          return (
            <Styled.ProductItem
              key={item.id}
              onClick={() => selectedProduct(item.category, item.id)}
            >
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
            <Styled.ProductItem
              key={item.id}
              onClick={() => selectedProduct(item.category, item.id)}
            >
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
            <Styled.ProductItem
              key={item.id}
              isDrinks={true}
              onClick={() => selectedProduct(item.category, item.id)}
            >
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

      <ProductModal
        active={activeModal}
        setActive={setActiveModal}
        product={product}
      />
    </Styled.Root>
  )
}

export default ProductsBlock
