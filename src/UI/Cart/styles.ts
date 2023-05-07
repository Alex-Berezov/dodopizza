import styled from 'styled-components'

export const Root = styled.div``

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
`

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: -5px;
  width: 20%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`

export const ModalContent = styled.div`
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  position: absolute;
  top: calc(50% - 12px);
  left: -48px;
  width: 25px;
  height: 25px;
  margin: 0px;
  padding: 0px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 500ms ease 0s;

  &:hover {
    transform: scale(1.1) rotate(180deg);
  }
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #f05f40;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f1806e;
  }
`

export const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #f05f40;
  }
`
