import styled from 'styled-components'
import { respondTo } from '../../utils/mediaQuerys'

interface ModalStylesProps {
  modalActive?: boolean
  contentActive?: boolean
}

export const Root = styled.div<ModalStylesProps>`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.overlay};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.modalActive ? '1' : '0')};
  pointer-events: ${(props) => (props.modalActive ? 'all' : 'none')};
  transition: 0.5s;
`

export const Content = styled.div<ModalStylesProps>`
  padding: 40px 20px;
  border-radius: 12px;
  background-color: white;
  transform: ${(props) => (props.contentActive ? 'scale(1)' : 'scale(0.5)')};
  transition: 0.4s all;
  position: relative;

  ${respondTo.sm} {
    width: 100%;
    height: auto;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
`
