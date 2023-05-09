import styled from 'styled-components'

export const AddToCartButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
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
    background-color: ${(props) => props.theme.colors.hoveredOrange};
  }
`
