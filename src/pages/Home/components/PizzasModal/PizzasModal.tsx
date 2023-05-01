import React, { FC } from 'react'
import * as Styled from './styles'
import { Modal } from '../../../../UI/Modal'

interface PizzasModalProps {
  active: boolean
  setActive: (bool: boolean) => void
}

const PizzasModal: FC<PizzasModalProps> = ({ active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <Styled.Root>Pizzas Modal</Styled.Root>
    </Modal>
  )
}

export default PizzasModal
