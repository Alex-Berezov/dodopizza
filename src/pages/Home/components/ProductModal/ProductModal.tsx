import React, { FC } from 'react'
import * as Styled from './styles'
import { Modal } from '../../../../UI/Modal'
import { PizzaModal } from './components/PizzaModal'
import SimpleProductModal from './components/SimpleProductModal/SimpleProductModal'

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
        {isPizza ? <PizzaModal /> : <SimpleProductModal />}
      </Styled.Root>
    </Modal>
  )
}

export default ProductModal
