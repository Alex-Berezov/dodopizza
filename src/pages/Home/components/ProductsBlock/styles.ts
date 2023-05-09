import styled from 'styled-components'
import { respondTo } from '../../../../utils/mediaQuerys'

export const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  padding-left: 80px;
  padding-right: 80px;

  ${respondTo.md} {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${respondTo.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const H2 = styled.h2`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 36px;
  margin: 32px 0px;
`

export const ProductList = styled.div`
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

  ${respondTo.preMd} {
    width: 31%;
  }

  ${respondTo.sm} {
    width: 45%;
  }

  ${respondTo.xs} {
    width: 100%;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainPicture = styled.img`
  ${respondTo.xs} {
    width: 70%;
    margin: 0 auto;
  }
`

export const MainTitle = styled.h3`
  margin: 5px 10px;
  color: ${(props) => props.theme.colors.black};
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`

export const MainDescription = styled.div`
  margin: 5px 10px;
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 10px;
`

export const FooterPrice = styled.div`
  padding-right: 4px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  line-height: 22px;
`

export const FooterButton = styled.button`
  outline: none;
  border: none;
  border-radius: 9999px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  transition-property: background-color, color;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  background-color: ${(props) => props.theme.colors.peach};
  color: ${(props) => props.theme.colors.hoveredOrange};
  padding: 8px 20px;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoveredPeach};
    color: ${(props) => props.theme.colors.hoveredOrange};
  }
`
