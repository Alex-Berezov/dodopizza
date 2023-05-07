import styled from 'styled-components'

export const SimpleProduct = styled.div`
  display: flex;
`

export const SimpleProductImgBlock = styled.div`
  width: 29rem;
  height: 28rem;
`

export const SimpleProductImg = styled.img``

export const SimpleProductInfoBlock = styled.div`
  width: 25rem;
  margin-left: 20px;
`

export const SimpleProductTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
`

export const Characteristics = styled.div`
  display: flex;
  color: rgb(92, 99, 112);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
`

export const Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`

export const AddToCartButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 280px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(255, 105, 0);
  color: rgb(255, 255, 255);
  outline: none;
  border: none;
  border-radius: 9999px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  &:hover {
    background-color: rgb(232, 97, 0);
  }
`
