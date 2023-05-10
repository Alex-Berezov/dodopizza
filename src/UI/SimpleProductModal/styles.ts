import styled from 'styled-components'
import { respondTo } from '../../utils/mediaQuerys'

export const SimpleProduct = styled.div`
  display: flex;

  ${respondTo.sm} {
    flex-direction: column;
  }
`

export const SimpleProductImgBlock = styled.div`
  width: 29rem;
  height: 28rem;

  ${respondTo.sm} {
    width: 100%;
    height: 65vh;
  }
`

export const SimpleProductImg = styled.img`
  ${respondTo.sm} {
    display: flex;
    margin: 0 auto;
    width: 350px;
  }
`

export const SimpleProductInfoBlock = styled.div`
  width: 25rem;
  margin-left: 20px;

  ${respondTo.sm} {
    width: 100%;
    margin-left: 0;
  }
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

  ${respondTo.sm} {
    margin-bottom: 50px;
  }
`
