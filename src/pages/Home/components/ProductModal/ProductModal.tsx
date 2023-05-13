import React, { FC } from 'react'
import * as Styled from './styles'
import { Modal } from '../../../../UI/Modal'
import { PizzaModal } from '../../../../UI/PizzaModal'
import SimpleProductModal from '../../../../UI/SimpleProductModal/SimpleProductModal'
import { IProducts } from '../../../../models/IProducts'

interface ProductModalProps {
  active: boolean
  setActive: (bool: boolean) => void
  product: IProducts
}

const ProductModal: FC<ProductModalProps> = ({
  active,
  setActive,
  product,
}) => {
  return (
    <Modal active={active} setActive={setActive}>
      <Styled.Root>
        {product.isPizza ? (
          <PizzaModal product={product} />
        ) : (
          <SimpleProductModal product={product} />
        )}
      </Styled.Root>
    </Modal>
  )
}

export default ProductModal
