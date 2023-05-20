import styled from 'styled-components'
import { respondTo } from '../../../utils/mediaQuerys'

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`

export const ProductItem = styled.article`
  margin-bottom: 60px;
  cursor: pointer;
  width: 21%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 470px;

  ${respondTo.md} {
    width: 23%;
  }

  ${respondTo.sm} {
    width: 45%;
  }

  ${respondTo.xs} {
    width: 100%;
  }
`

export const Main = styled.div``

export const MainPicture = styled.div`
  width: 265px;
  height: 265px;

  ${respondTo.md} {
    width: 220px;
    height: 220px;
  }

  ${respondTo.sm} {
    width: 265px;
    height: 265px;
    margin: 0 auto;
  }
`

export const MainTitle = styled.h3``

export const MainDescription = styled.div``

export const Footer = styled.div``
