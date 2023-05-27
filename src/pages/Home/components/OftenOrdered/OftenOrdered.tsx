import React, { FC, useState } from 'react'
import * as Styled from './styles'
import { ProductModal } from '../ProductModal'

import peperoniFresh from '../../../../assets/images/peperoni-fresh.webp'
import dodster from '../../../../assets/images/dodster.png'
import { IProducts } from '../../../../models/IProducts'

interface OftenOrderedProps {
  products: IProducts[]
}

const OftenOrdered: FC<OftenOrderedProps> = ({ products }) => {
  const [activeModal, setActiveModal] = useState(false)
  const [product, setProduct] = useState<IProducts>()
  const [some, setSome] = useState('')

  const pizzas = products?.filter((el) => el.category === 'pizzas')
  const snacks = products?.filter((el) => el.category === 'snacks')

  const selectedProduct = (id: number) => {
    setSome('123')
    setProduct(products?.find((el) => el.id === id))
  }

  return (
    <Styled.Root>
      <Styled.H2>Часто заказывают {some}</Styled.H2>

      <Styled.Container>
        <Styled.ContainerItem onClick={() => selectedProduct(pizzas[0].id)}>
          <Styled.ContainerItemPicture>
            <Styled.ContainerItemPictureImg src={peperoniFresh} />
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

        <Styled.ContainerItem>
          <Styled.ContainerItemPicture>
            <Styled.ContainerItemPictureImg src={dodster} />
          </Styled.ContainerItemPicture>
          <Styled.ContainerItemInfo>
            <Styled.ContainerItemInfoTitle>
              {snacks && snacks[0].title}
            </Styled.ContainerItemInfoTitle>
            <Styled.ContainerItemInfoPrice>
              {snacks && snacks[0].price} ₽
            </Styled.ContainerItemInfoPrice>
          </Styled.ContainerItemInfo>
        </Styled.ContainerItem>

        <Styled.ContainerItem>
          <Styled.ContainerItemPicture>
            <Styled.ContainerItemPictureImg src={peperoniFresh} />
          </Styled.ContainerItemPicture>
          <Styled.ContainerItemInfo>
            <Styled.ContainerItemInfoTitle>
              Пепперони фреш
            </Styled.ContainerItemInfoTitle>
            <Styled.ContainerItemInfoPrice>
              от 299 ₽
            </Styled.ContainerItemInfoPrice>
          </Styled.ContainerItemInfo>
        </Styled.ContainerItem>

        <Styled.ContainerItem>
          <Styled.ContainerItemPicture>
            <Styled.ContainerItemPictureImg src={peperoniFresh} />
          </Styled.ContainerItemPicture>
          <Styled.ContainerItemInfo>
            <Styled.ContainerItemInfoTitle>
              Пепперони фреш
            </Styled.ContainerItemInfoTitle>
            <Styled.ContainerItemInfoPrice>
              от 299 ₽
            </Styled.ContainerItemInfoPrice>
          </Styled.ContainerItemInfo>
        </Styled.ContainerItem>
      </Styled.Container>

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
