import React, { FC, useState } from 'react'
import * as Styled from './styles'
import { ProductModal } from '../ProductModal'

import peperoniFresh from '../../../../assets/images/peperoni-fresh.webp'
import dodster from '../../../../assets/images/dodster.png'

const OftenOrdered: FC = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [isPizza, setIsActivePizza] = useState(true)

  const simpleProductSelected = (type: string) => {
    if (type === 'pizza') {
      setIsActivePizza(true)
      setActiveModal(true)
    } else {
      setIsActivePizza(false)
      setActiveModal(true)
    }
  }

  return (
    <Styled.Root>
      <Styled.H2>Часто заказывают</Styled.H2>

      <Styled.Container>
        <Styled.ContainerItem onClick={() => simpleProductSelected('pizza')}>
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

        <Styled.ContainerItem onClick={() => simpleProductSelected('simple')}>
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

      <ProductModal
        active={activeModal}
        setActive={setActiveModal}
        isPizza={isPizza}
      />
    </Styled.Root>
  )
}

export default OftenOrdered
