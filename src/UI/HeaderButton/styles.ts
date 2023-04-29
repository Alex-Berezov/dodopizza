import styled from 'styled-components'

export const Root = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 20px;
  font-size: 16px;
  line-height: 24px;
  background-color: rgb(255, 105, 0);
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 105, 0);
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background-color: rgb(232, 97, 0);
    color: rgb(255, 255, 255);
  }
`

export const Text = styled.p`
  color: inherit;
`

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0px 12px;
  background: rgb(255, 255, 255);
  opacity: 0.4;
`

export const Counter = styled.div`
  color: inherit;
  min-width: 15px;
  text-align: center;
`

export const ArrowImg = styled.img`
  max-width: 15px;
  color: rgb(255, 255, 255);
  margin-top: 7px;
`
