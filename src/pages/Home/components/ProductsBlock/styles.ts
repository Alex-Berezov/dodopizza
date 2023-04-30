import styled from 'styled-components'

export const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  width: 1280px;
  min-width: 1024px;
`

export const H2 = styled.h2`
  width: 100%;
  color: rgb(0, 0, 0);
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
  margin: 0 37px 60px 0;
  cursor: pointer;
  width: 20%;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainPicture = styled.img``

export const MainTitle = styled.h3`
  margin: 5px 10px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`

export const MainDescription = styled.div`
  margin: 5px 10px;
  color: rgb(0, 0, 0);
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
  color: rgb(0, 0, 0);
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
  background-color: rgb(255, 240, 230);
  color: rgb(209, 87, 0);
  padding: 8px 20px;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background-color: rgb(255, 210, 179);
    color: rgb(209, 87, 0);
  }
`
