import React, { FC } from 'react'
import * as Styled from './styles'
import { Header } from '../../components/Header'
import { OftenOrdered } from './components/OftenOrdered'
import { ProductsBlock } from './components/ProductsBlock'
import { productsAPI } from '../../services/ProductsService'

const Home: FC = () => {
  const { data } = productsAPI.useFetchAllProductsQuery('')

  return (
    <Styled.Root>
      <Header />
      <OftenOrdered products={data} />
      <ProductsBlock products={data} />
    </Styled.Root>
  )
}

export default Home
