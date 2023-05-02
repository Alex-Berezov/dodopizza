import React, { FC } from 'react'
import * as Styled from './styles'
import { Modal } from '../../../../UI/Modal'

interface ProductModalProps {
  active: boolean
  setActive: (bool: boolean) => void
  isPizza: boolean
}

const ProductModal: FC<ProductModalProps> = ({
  active,
  setActive,
  isPizza,
}) => {
  return (
    <Modal active={active} setActive={setActive}>
      <Styled.Root>
        {isPizza ? (
          <Styled.Pizza>
            <Styled.PizzaImgBlock>
              <Styled.PizzaImgBlockCircleLarge />
              <Styled.PizzaImgBlockCircleMedium />
            </Styled.PizzaImgBlock>
            <Styled.PizzaInfoBlock>Some info</Styled.PizzaInfoBlock>
          </Styled.Pizza>
        ) : (
          <Styled.Pizza>Simple Product Modal</Styled.Pizza>
        )}
      </Styled.Root>
    </Modal>
  )
}

export default ProductModal
