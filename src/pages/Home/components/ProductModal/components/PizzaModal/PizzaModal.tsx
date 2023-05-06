import React, { FC, useCallback, useState } from 'react'
import * as Styled from './styles'

const PizzaModal: FC = () => {
  const [selectedSize, setSelectedSize] = useState('medium')
  const [selectedDough, setSelectedDough] = useState('traditional')

  const pizzaSizes: Record<string, number> = {
    small: 25,
    medium: 30,
    large: 35,
  }

  const pizzaDough: Record<string, string> = {
    traditional: 'традиционное',
    thin: 'тонкое',
  }

  const handleSelectedSize = useCallback(
    (size: string) => {
      setSelectedSize(size)

      if (size === 'small') {
        setSelectedDough('traditional')
      } else if (selectedDough === 'thin') {
        setSelectedDough('thin')
      }
    },
    [selectedDough]
  )

  const handleSelectedDough = useCallback(
    (dough: string) => {
      if (selectedSize === 'small') {
        setSelectedDough('traditional')
      } else {
        setSelectedDough(dough)
      }
    },
    [selectedSize]
  )

  return (
    <Styled.Pizza>
      <Styled.PizzaImgBlock>
        <Styled.PizzaImgBlockCircleLarge />
        <Styled.PizzaImgBlockCircleMedium />
      </Styled.PizzaImgBlock>
      <Styled.PizzaInfoBlock>
        <Styled.PizzaTitle>Пепперони фреш</Styled.PizzaTitle>
        <Styled.Characteristics>
          {pizzaSizes[selectedSize]} см, {pizzaDough[selectedDough]} тесто
        </Styled.Characteristics>
        <Styled.Description>
          Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный
          томатный соус
        </Styled.Description>
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
            <Styled.DoughSRadio
              type='radio'
              id='traditional'
              value='1'
              checked={selectedDough === 'traditional'}
              onChange={() => handleSelectedDough('traditional')}
            />
            <Styled.DoughSLabel htmlFor='traditional'>
              Традиционное
            </Styled.DoughSLabel>
            <Styled.DoughSRadio
              type='radio'
              id='thin'
              value='1'
              checked={selectedDough === 'thin'}
              onChange={() => handleSelectedDough('thin')}
            />
            <Styled.DoughSLabel htmlFor='thin'>Тонкое</Styled.DoughSLabel>
          </Styled.DoughSelector>
        </Styled.DoughSelectorBlock>
      </Styled.PizzaInfoBlock>
    </Styled.Pizza>
  )
}

export default PizzaModal
