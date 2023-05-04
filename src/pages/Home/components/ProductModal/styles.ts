import styled from 'styled-components'

export const Root = styled.div``

export const Pizza = styled.div`
  display: flex;
  position: relative;
`

export const PizzaImgBlock = styled.div`
  min-width: 29rem;
  height: 28rem;
  position: relative;
`

export const PizzaImgBlockCircleLarge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border: 1px dashed rgb(189 189 189);
  border-radius: 100%;
  width: 450px;
  height: 450px;
`

export const PizzaImgBlockCircleMedium = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 2;
  border: 1px dashed rgb(189 189 189);
  border-radius: 100%;
  width: 350px;
  height: 350px;
`

export const PizzaInfoBlock = styled.div`
  width: 25rem;
  margin-left: 20px;
`

export const PizzaTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin: 0px;
`

export const Characteristics = styled.div`
  display: flex;
  color: rgb(92, 99, 112);
  font-size: 14px;
  line-height: 20px;
`

export const Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

export const SimpleProduct = styled.div`
  display: flex;
`

export const SimpleProductImgBlock = styled.div`
  max-width: 450px;
`

export const SimpleProductInfoBlock = styled.div`
  max-width: 390px;
`
