import React, { FC } from 'react'
import * as Styled from './styles'
import { AddToCartButton } from '../AddToCartButton'

import dodster from '../../assets/images/dodster.png'
import { IProducts } from '../../models/IProducts'

interface SimpleProductModalProps {
  product: IProducts
}

const SimpleProductModal: FC<SimpleProductModalProps> = ({ product }) => {
  const heandleClick = () => {
    console.log('Click')
  }

  return (
    <Styled.SimpleProduct>
      <Styled.SimpleProductImgBlock>
        <Styled.SimpleProductImg src={product.image} />
      </Styled.SimpleProductImgBlock>
      <Styled.SimpleProductInfoBlock>
        <Styled.SimpleProductTitle>{product.title}</Styled.SimpleProductTitle>
        <Styled.Characteristics>{product.weight} г</Styled.Characteristics>
        <Styled.Description>{product.description}</Styled.Description>
        <AddToCartButton onClick={heandleClick}>
          Добавить в корзину за {product.price} ₽
        </AddToCartButton>
      </Styled.SimpleProductInfoBlock>
    </Styled.SimpleProduct>
  )
}

export default SimpleProductModal
