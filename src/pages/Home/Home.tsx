import React, { FC } from 'react'
import * as Styled from './styles'
import { Header } from '../../components/Header'
import { OftenOrdered } from './components/OftenOrdered'

const Home: FC = () => {
  return (
    <Styled.Root>
      <Header />
      <OftenOrdered />
    </Styled.Root>
  )
}

export default Home
