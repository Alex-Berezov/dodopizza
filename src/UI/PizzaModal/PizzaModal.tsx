import React, { FC, useState } from 'react'
import * as Styled from './styles'
import { AddToCartButton } from '../AddToCartButton'
import { IProducts } from '../../models/IProducts'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cartSlice'
import usePizzaSelection from './hooks/usePizzaSelection'

export interface PizzaModalProps {
  product: IProducts
}

const PizzaModal: FC<PizzaModalProps> = ({ product }) => {
  const dispatch = useDispatch()
  const [isPizzaAdded, setPizzaAdded] = useState(false)

  const {
    selectedSize,
    selectedDough,
    disabledThin,
    pizzaSizes,
    pizzaDough,
    image,
    handleSelectedSize,
    handleSelectedDough,
  } = usePizzaSelection(product)

  const handleAddToCart = () => {
    const productToCart = {
      ...product,
      selectedSize,
      selectedDough,
    }

    dispatch(addToCart(productToCart))

    setPizzaAdded(true)
    setTimeout(() => setPizzaAdded(false), 3000)
  }

  return (
    <Styled.Pizza>
      <Styled.PizzaImgBlock>
        <Styled.PizzaImgBlockCircleLarge />
        <Styled.PizzaImgBlockCircleMedium />
        <Styled.PizzaImg src={image} sizeSelected={selectedSize} />
      </Styled.PizzaImgBlock>
      <Styled.PizzaInfoBlock>
        <Styled.PizzaTitle>{product.title}</Styled.PizzaTitle>
        <Styled.Characteristics>
          {pizzaSizes[selectedSize]} см, {pizzaDough[selectedDough]} тесто
        </Styled.Characteristics>
        <Styled.Description>{product.description}</Styled.Description>
        <Styled.SizeSelectorBlock>
          <Styled.SizeSelector>
            <Styled.SizeSelectButton sizeSelected={selectedSize} />
            <Styled.SizeRadio
              type="radio"
              id="small"
              value="1"
              checked={selectedSize === 'small'}
              onChange={() => handleSelectedSize('small')}
            />
            <Styled.SizeLabel htmlFor="small">Маленькая</Styled.SizeLabel>
            <Styled.SizeRadio
              type="radio"
              id="medium"
              value="2"
              checked={selectedSize === 'medium'}
              onChange={() => handleSelectedSize('medium')}
            />
            <Styled.SizeLabel htmlFor="medium">Средняя</Styled.SizeLabel>
            <Styled.SizeRadio
              type="radio"
              id="large"
              value="3"
              checked={selectedSize === 'large'}
              onChange={() => handleSelectedSize('large')}
            />
            <Styled.SizeLabel htmlFor="large">Большая</Styled.SizeLabel>
          </Styled.SizeSelector>
        </Styled.SizeSelectorBlock>
        <Styled.DoughSelectorBlock>
          <Styled.DoughSelector>
            <Styled.DoughSelectButton doughSelected={selectedDough} />
            <Styled.DoughRadio
              type="radio"
              id="traditional"
              value="1"
              checked={selectedDough === 'traditional'}
              onChange={() => handleSelectedDough('traditional')}
            />
            <Styled.DoughLabel htmlFor="traditional">Традиционное</Styled.DoughLabel>
            <Styled.DoughRadio
              type="radio"
              id="thin"
              value="1"
              checked={selectedDough === 'thin'}
              onChange={() => handleSelectedDough('thin')}
            />
            <Styled.DoughLabel htmlFor="thin" isDisabledThin={disabledThin}>
              Тонкое
            </Styled.DoughLabel>
          </Styled.DoughSelector>
        </Styled.DoughSelectorBlock>
        <AddToCartButton onClick={handleAddToCart}>
          {isPizzaAdded ? 'Пицца добавлена в корзину' : `Добавить в корзину за ${product.price} ₽`}
        </AddToCartButton>
      </Styled.PizzaInfoBlock>
    </Styled.Pizza>
  )
}

export default PizzaModal
