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
  const [product, setProduct] = useState()

  const pizzas = products?.filter((el) => el.category === 'pizzas')
  const snacks = products?.filter((el) => el.category === 'snacks')

  return (
    <Styled.Root>
      <Styled.H2>Часто заказывают</Styled.H2>

      <Styled.Container>
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
            <Styled.ContainerItemPictureImg src={dodster} />
          </Styled.ContainerItemPicture>
          <Styled.ContainerItemInfo>
            <Styled.ContainerItemInfoTitle>
              Додстер
            </Styled.ContainerItemInfoTitle>
            <Styled.ContainerItemInfoPrice>169 ₽</Styled.ContainerItemInfoPrice>
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
