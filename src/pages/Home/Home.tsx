import React, { FC } from 'react'
import * as Styled from './styles'
import { Header } from '../../components/Header'
import { OftenOrdered } from './components/OftenOrdered'
import { ProductsBlock } from './components/ProductsBlock'
import { productsAPI } from '../../api/productsAPI'

const Home: FC = () => {
  const response = productsAPI.getAllProducts().then((data) => {
    console.log('====================================')
    console.log('data >>', data.data[0].drinks)
    console.log('====================================')
  })

  return (
    <Styled.Root>
      <Header />
      <OftenOrdered />
      <ProductsBlock />
    </Styled.Root>
  )
}

export default Home
