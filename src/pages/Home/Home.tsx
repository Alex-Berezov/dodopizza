import React, { FC } from 'react'
import * as Styled from './styles'
import { Header } from '../../components/Header'
import { ProductsBlock } from './components/ProductsBlock'

const Home: FC = () => {
  return (
    <Styled.Root>
      <Header />
      <ProductsBlock />
    </Styled.Root>
  )
}

export default Home
