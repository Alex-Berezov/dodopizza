import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
`

export const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 4px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  padding: 0px 16px;
  margin-bottom: 15px;
`

export const Footer = styled.div`
  width: 88%;
  position: relative;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.cartFooterShadow};
  margin-top: auto;
`

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 30px;
`
