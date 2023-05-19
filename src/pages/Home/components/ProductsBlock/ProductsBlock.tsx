import React, { FC, useCallback, useState } from 'react'
import * as Styled from './styles'

import { IProducts } from '../../../../models/IProducts'
import { ProductModal } from '../ProductModal'

interface ProductsBlockProps {
  products: IProducts[]
}

//TODO: Add conditional rendering
//TODO: Add Skeleton as a Prender
const ProductsBlock: FC<ProductsBlockProps> = ({ products }) => {
  const [activeModal, setActiveModal] = useState(false)
  const [product, setProduct] = useState<IProducts>()

  const pizzas = products?.filter((el) => el.category === 'pizzas')
  const snacks = products?.filter((el) => el.category === 'snacks')
  const drinks = products?.filter((el) => el.category === 'drinks')

  const selectedProduct = useCallback(
    (category: string, id: number) => {
      setActiveModal(true)
      const selectedItem = products
        ?.filter((el) => el.category === category)
        .filter((item) => item.id === id)
      setProduct(selectedItem[0])
    },
    [products]
  )

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

      {product && (
        <ProductModal
          active={activeModal}
          setActive={setActiveModal}
          product={product}
        />
      )}
    </Styled.Root>
  )
}

export default ProductsBlock
