import React, { FC } from 'react'
import * as Styled from './styles'
import { AddToCartButton } from '../../../../../../UI/AddToCartButton'

import dodster from '../../../../../../assets/images/dodster.png'

const SimpleProductModal: FC = () => {
  const heandleClick = () => {
    console.log('Click')
  }

  return (
    <Styled.SimpleProduct>
      <Styled.SimpleProductImgBlock>
        <Styled.SimpleProductImg src={dodster} />
      </Styled.SimpleProductImgBlock>
      <Styled.SimpleProductInfoBlock>
        <Styled.SimpleProductTitle>Додстер</Styled.SimpleProductTitle>
        <Styled.Characteristics>200 г</Styled.Characteristics>
        <Styled.Description>
          Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом
          ранч в тонкой пшеничной лепешке
        </Styled.Description>
        <AddToCartButton onClick={heandleClick}>
          Добавить в корзину за 169 ₽
        </AddToCartButton>
      </Styled.SimpleProductInfoBlock>
    </Styled.SimpleProduct>
  )
}

export default SimpleProductModal
