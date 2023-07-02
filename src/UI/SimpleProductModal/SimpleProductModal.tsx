import React, { FC } from 'react'
import * as Styled from './styles'
import { AddToCartButton } from '../AddToCartButton'

import { IProducts } from '../../models/IProducts'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cartSlice'

interface SimpleProductModalProps {
  product: IProducts
}

const SimpleProductModal: FC<SimpleProductModalProps> = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart  = () => {
    const productToCart = {
      ...product,
    }

    dispatch(addToCart(productToCart))
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
        <AddToCartButton onClick={handleAddToCart}>
          Добавить в корзину за {product.price} ₽
        </AddToCartButton>
      </Styled.SimpleProductInfoBlock>
    </Styled.SimpleProduct>
  )
}

export default SimpleProductModal
