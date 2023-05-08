import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  padding: 12px 16px;
  background: rgb(255, 255, 255);
  margin-bottom: 8px;
`

export const DeleteBtn = styled.button`
  margin: 0px;
  padding: 0px;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 24px;
  width: 16px;
  height: 16px;
`

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(226, 226, 233);
  padding-bottom: 12px;
`

export const Picture = styled.picture`
  width: 64px;
  height: 64px;
  margin: 0px 16px 0px 0px;
`

export const Img = styled.img``

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const OrderInfoTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: rgb(0, 0, 0);
  margin: 0px 0px 4px;
`

export const OrderInfoParam = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: rgb(92, 99, 112);
  margin: 0px;
  white-space: pre-wrap;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`

export const Price = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: rgb(0, 0, 0);
`

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Counter = styled.div`
  width: 96px;
  height: 32px;
  display: flex;
  background-color: rgb(243, 243, 247);
  box-sizing: border-box;
  border-radius: 9999px;
  justify-content: space-between;
`

export const MinusBtn = styled.button`
  margin: 0px;
  background: none;
  cursor: pointer;
  position: relative;
  vertical-align: top;
  height: 100%;
  padding: 0px 8px;
  width: 35.41%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Count = styled.div`
  height: 100%;
  color: rgb(92, 99, 112);
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`
export const PlusBtn = styled.button`
  margin: 0px;
  background: none;
  cursor: pointer;
  position: relative;
  vertical-align: top;
  height: 100%;
  padding: 0px 8px;
  width: 35.41%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
