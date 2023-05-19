import React, { FC, useCallback, useEffect, useState } from 'react'
import * as Styled from './styles'
import { AddToCartButton } from '../AddToCartButton'
import { IProducts } from '../../models/IProducts'

interface PizzaModalProps {
  product: IProducts
}

interface IPizzaSizes {
  [key: string]: number | undefined
}

interface IPizzaDough {
  [key: string]: string | undefined
}

const PizzaModal: FC<PizzaModalProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedDough, setSelectedDough] = useState('traditional')
  const [disabledThin, setDisabledThin] = useState(false)
  const [pizzaSizes, setPizzaSizes] = useState<IPizzaSizes>({
    ...product.pizzaSizes,
  })
  const [pizzaDough, setPizzaDough] = useState<IPizzaDough>({
    ...product.pizzaDough,
  })
  const [pizzaImages, setPizzaImages] = useState({ ...product.pizzasImages })
  const [image, setImage] = useState(pizzaImages.medium)

  useEffect(() => {
    setPizzaSizes({ ...product.pizzaSizes })
    setPizzaDough({ ...product.pizzaDough })
    setPizzaImages({ ...product.pizzasImages })
    setImage(pizzaImages.medium)

    return () => {
      setSelectedSize('medium')
      setSelectedDough('traditional')
      setDisabledThin(false)
      setPizzaSizes({})
      setPizzaDough({})
      setPizzaImages({})
      setImage('')
    }
  }, [product, pizzaImages.medium])

  const handleSelectedSize = useCallback(
    (size: string) => {
      setSelectedSize(size)

      if (size === 'small') {
        setSelectedDough('traditional')
        setDisabledThin(true)
      } else if (selectedDough === 'thin') {
        setSelectedDough('thin')
      } else {
        setDisabledThin(false)
      }

      if (size === 'small' && selectedDough === 'traditional') {
        setImage(pizzaImages.small)
      }
      if (size === 'medium' && selectedDough === 'traditional') {
        setImage(pizzaImages.medium)
      }
      if (size === 'large' && selectedDough === 'traditional') {
        setImage(pizzaImages.large)
      }

      if (size === 'small' && selectedDough === 'thin') {
        setImage(pizzaImages.small)
      }
      if (size === 'medium' && selectedDough === 'thin') {
        setImage(pizzaImages.mediumT)
      }
      if (size === 'large' && selectedDough === 'thin') {
        setImage(pizzaImages.largeT)
      }
    },
    [
      pizzaImages.large,
      pizzaImages.largeT,
      pizzaImages.medium,
      pizzaImages.mediumT,
      pizzaImages.small,
      selectedDough,
    ]
  )

  const handleSelectedDough = useCallback(
    (dough: string) => {
      if (selectedSize === 'small') {
        setSelectedDough('traditional')
      } else {
        setSelectedDough(dough)
      }

      if (selectedSize === 'medium' && dough === 'thin') {
        setImage(pizzaImages.mediumT)
      }
      if (selectedSize === 'large' && dough === 'thin') {
        setImage(pizzaImages.largeT)
      }
      if (selectedSize === 'medium' && dough === 'traditional') {
        setImage(pizzaImages.medium)
      }
      if (selectedSize === 'large' && dough === 'traditional') {
        setImage(pizzaImages.large)
      }
    },
    [
      pizzaImages.large,
      pizzaImages.largeT,
      pizzaImages.medium,
      pizzaImages.mediumT,
      selectedSize,
    ]
  )

  const heandleClick = () => {
    console.log('Click')
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
              type='radio'
              id='small'
              value='1'
              checked={selectedSize === 'small'}
              onChange={() => handleSelectedSize('small')}
            />
            <Styled.SizeLabel htmlFor='small'>Маленькая</Styled.SizeLabel>
            <Styled.SizeRadio
              type='radio'
              id='medium'
              value='2'
              checked={selectedSize === 'medium'}
              onChange={() => handleSelectedSize('medium')}
            />
            <Styled.SizeLabel htmlFor='medium'>Средняя</Styled.SizeLabel>
            <Styled.SizeRadio
              type='radio'
              id='large'
              value='3'
              checked={selectedSize === 'large'}
              onChange={() => handleSelectedSize('large')}
            />
            <Styled.SizeLabel htmlFor='large'>Большая</Styled.SizeLabel>
          </Styled.SizeSelector>
        </Styled.SizeSelectorBlock>
        <Styled.DoughSelectorBlock>
          <Styled.DoughSelector>
            <Styled.DoughSelectButton doughSelected={selectedDough} />
            <Styled.DoughRadio
              type='radio'
              id='traditional'
              value='1'
              checked={selectedDough === 'traditional'}
              onChange={() => handleSelectedDough('traditional')}
            />
            <Styled.DoughLabel htmlFor='traditional'>
              Традиционное
            </Styled.DoughLabel>
            <Styled.DoughRadio
              type='radio'
              id='thin'
              value='1'
              checked={selectedDough === 'thin'}
              onChange={() => handleSelectedDough('thin')}
            />
            <Styled.DoughLabel htmlFor='thin' isDisabledThin={disabledThin}>
              Тонкое
            </Styled.DoughLabel>
          </Styled.DoughSelector>
        </Styled.DoughSelectorBlock>
        <AddToCartButton onClick={heandleClick}>
          Добавить в корзину за {product.price} ₽
        </AddToCartButton>
      </Styled.PizzaInfoBlock>
    </Styled.Pizza>
  )
}

export default PizzaModal
