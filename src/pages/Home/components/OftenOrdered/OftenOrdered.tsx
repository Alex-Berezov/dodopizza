import React, { FC } from 'react'
import * as Styled from './styles'

import peperoniFresh from '../../../../assets/images/peperoni-fresh.webp'

const OftenOrdered: FC = () => {
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
    </Styled.Root>
  )
}

export default OftenOrdered
