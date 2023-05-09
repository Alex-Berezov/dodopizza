import styled, { keyframes } from 'styled-components'

interface CartButtonProps {
  visible: boolean
}

export const Root = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 20px;
  font-size: 16px;
  line-height: 24px;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.orange};
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoveredOrange};
    color: ${(props) => props.theme.colors.white};
  }
`

export const Text = styled.p`
  color: inherit;
`

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  margin: 0px 12px;
  background: ${(props) => props.theme.colors.white};
  opacity: 0.4;
`

export const Counter = styled.div`
  color: inherit;
  min-width: 15px;
  text-align: center;
`

export const ArrowImg = styled.img<CartButtonProps>`
  max-width: 15px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 7px;
  animation: ${({ visible }) => visible && fadeIn} ease 0.3s;
  transform: translateX(5px);
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(0px);
  }

  to {
    opacity: 1;
    transform: translateX(5px);
  }
`
