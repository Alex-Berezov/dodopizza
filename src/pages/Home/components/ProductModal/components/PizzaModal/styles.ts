import styled from 'styled-components'

interface PizzaModalStylesProps {
  sizeSelected?: string
  doughSelected?: string
  isDisabledThin?: boolean
}

export const Pizza = styled.div`
  display: flex;
  position: relative;
`

export const PizzaImgBlock = styled.div`
  min-width: 29rem;
  height: 28rem;
  position: relative;
`

export const PizzaImgBlockCircleLarge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border: 1px dashed rgb(189 189 189);
  border-radius: 100%;
  width: 450px;
  height: 450px;
`

export const PizzaImgBlockCircleMedium = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 2;
  border: 1px dashed rgb(189 189 189);
  border-radius: 100%;
  width: 350px;
  height: 350px;
`

export const PizzaInfoBlock = styled.div`
  width: 25rem;
  margin-left: 20px;
`

export const PizzaTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
`

export const Characteristics = styled.div`
  display: flex;
  color: rgb(92, 99, 112);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
`

export const Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`

export const SizeSelectorBlock = styled.div`
  margin-top: 30px;
`

export const SizeSelector = styled.div`
  border-radius: 9999px;
  background-color: rgb(243, 243, 247);
  height: 32px;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 8px 0px;
`

export const SizeSelectButton = styled.div<PizzaModalStylesProps>`
  position: absolute;
  top: 0px;
  left: ${({ sizeSelected }) =>
    sizeSelected === 'small'
      ? '0%'
      : sizeSelected === 'medium'
      ? '33.3333%'
      : '31%'};
  bottom: 0px;
  width: calc(33.3333%);
  transform: translateX(
    ${({ sizeSelected }) =>
      sizeSelected === 'small'
        ? '0%'
        : sizeSelected === 'medium'
        ? '0%'
        : '100%'}
  );
  transition: transform 200ms ease-out 0s, left 200ms ease-out 0s, width;
  padding: 2px;

  &::before {
    content: ' ';
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgb(255, 255, 255);
    border-radius: 9999px;
    box-shadow: rgba(6, 5, 50, 0.19) 0px 6px 20px;
  }
`

export const SizeRadio = styled.input`
  position: absolute;
  display: none;
`

export const SizeLabel = styled.label`
  display: block;
  flex: 1 1 0%;
  position: relative;
  cursor: pointer;
  user-select: none;
  border-radius: 9999px;
  color: rgb(0, 0, 0);
  font-size: 12px;
  line-height: 32px;
  font-weight: normal;
  text-align: center;
  height: 32px;
  transition: color 150ms ease 0s;
`

export const DoughSelectorBlock = styled.div`
  margin-top: 15px;
`

export const DoughSelector = styled.div`
  border-radius: 9999px;
  background-color: rgb(243, 243, 247);
  height: 32px;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 8px 0px;
`

export const DoughSelectButton = styled.div<PizzaModalStylesProps>`
  position: absolute;
  top: 0px;
  left: ${({ doughSelected }) =>
    doughSelected === 'traditional' ? '0%' : '30%'};
  bottom: 0px;
  width: calc(50%);
  transform: translateX(
    ${({ doughSelected }) => (doughSelected === 'traditional' ? '0%' : '37%')}
  );
  transition: transform 200ms ease-out 0s, left 200ms ease-out 0s, width;
  padding: 2px;

  &::before {
    content: ' ';
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgb(255, 255, 255);
    border-radius: 9999px;
    box-shadow: rgba(6, 5, 50, 0.19) 0px 6px 20px;
  }
`

export const DoughSRadio = styled.input`
  position: absolute;
  display: none;
`

export const DoughSLabel = styled.label<PizzaModalStylesProps>`
  display: block;
  flex: 1 1 0%;
  position: relative;
  cursor: pointer;
  user-select: none;
  border-radius: 9999px;
  color: rgb(0, 0, 0);
  font-size: 12px;
  line-height: 32px;
  font-weight: normal;
  text-align: center;
  height: 32px;
  transition: color 150ms ease 0s;
`
