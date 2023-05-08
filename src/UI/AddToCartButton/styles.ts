import styled from 'styled-components'

export const AddToCartButton = styled.button`
  width: 100%;
  height: 48px;
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
