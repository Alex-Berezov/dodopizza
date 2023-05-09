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
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
`

export const Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 280px;
`
