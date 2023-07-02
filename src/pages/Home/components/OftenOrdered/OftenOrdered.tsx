import React, { FC, useState } from 'react'
import * as Styled from './styles'
import { ProductModal } from '../ProductModal'
import { IProducts } from '../../../../models/IProducts'
import { OftenOrderedSkeleton } from '../../../../components/Skeletons/OftenOrderedSkeleton'
import { productsAPI } from '../../../../services/ProductsService'

const OftenOrdered: FC = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [product, setProduct] = useState<IProducts>()
  const { data: products } = productsAPI.useFetchAllProductsQuery(undefined) as { data: IProducts[] }

  const pizzas = products?.filter((el) => el.category === 'pizzas')
  const snacks = products?.filter((el) => el.category === 'snacks')

  const selectedProduct = (id: number) => {
    setProduct(products?.find((el) => el.id === id))
    setActiveModal(true)
  }

  return (
    <Styled.Root>
      <Styled.H2>Часто заказывают</Styled.H2>

      {products?.length ? (
        <Styled.Container>
          <Styled.ContainerItem
            onClick={() => selectedProduct(pizzas && pizzas[0].id)}
          >
            <Styled.ContainerItemPicture>
              <Styled.ContainerItemPictureImg
                src={pizzas && pizzas[0].pizzasImages?.main}
              />
            </Styled.ContainerItemPicture>
            <Styled.ContainerItemInfo>
              <Styled.ContainerItemInfoTitle>
                {pizzas && pizzas[0].title}
              </Styled.ContainerItemInfoTitle>
              <Styled.ContainerItemInfoPrice>
                от {pizzas && pizzas[0].price} ₽
              </Styled.ContainerItemInfoPrice>
            </Styled.ContainerItemInfo>
          </Styled.ContainerItem>

          <Styled.ContainerItem
            onClick={() => selectedProduct(pizzas && pizzas[3].id)}
          >
            <Styled.ContainerItemPicture>
              <Styled.ContainerItemPictureImg
                src={pizzas && pizzas[3].pizzasImages?.main}
              />
            </Styled.ContainerItemPicture>
            <Styled.ContainerItemInfo>
              <Styled.ContainerItemInfoTitle>
                {pizzas && pizzas[3].title}
              </Styled.ContainerItemInfoTitle>
              <Styled.ContainerItemInfoPrice>
                от {pizzas && pizzas[3].price} ₽
              </Styled.ContainerItemInfoPrice>
            </Styled.ContainerItemInfo>
          </Styled.ContainerItem>

          <Styled.ContainerItem
            onClick={() => selectedProduct(snacks && snacks[0].id)}
          >
            <Styled.ContainerItemPicture>
              <Styled.ContainerItemPictureImg src={snacks && snacks[0].image} />
            </Styled.ContainerItemPicture>
            <Styled.ContainerItemInfo>
              <Styled.ContainerItemInfoTitle>
                {snacks && snacks[0].title}
              </Styled.ContainerItemInfoTitle>
              <Styled.ContainerItemInfoPrice>
                от {snacks && snacks[0].price} ₽
              </Styled.ContainerItemInfoPrice>
            </Styled.ContainerItemInfo>
          </Styled.ContainerItem>

          <Styled.ContainerItem
            onClick={() => selectedProduct(snacks && snacks[3].id)}
          >
            <Styled.ContainerItemPicture>
              <Styled.ContainerItemPictureImg src={snacks && snacks[3].image} />
            </Styled.ContainerItemPicture>
            <Styled.ContainerItemInfo>
              <Styled.ContainerItemInfoTitle>
                {snacks && snacks[3].title}
              </Styled.ContainerItemInfoTitle>
              <Styled.ContainerItemInfoPrice>
                от {snacks && snacks[3].price} ₽
              </Styled.ContainerItemInfoPrice>
            </Styled.ContainerItemInfo>
          </Styled.ContainerItem>
        </Styled.Container>
      ) : (
        <OftenOrderedSkeleton />
      )}

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

export default OftenOrdered
