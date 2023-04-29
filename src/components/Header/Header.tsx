import React, { FC } from 'react'
import * as Styled from './styles'
import useInput from '../../hooks/useInput'

import Logo from '../../assets/images/logo.svg'
import SearchIcon from '../../assets/images/searchIcon.svg'
import { CartButton } from '../../UI/HeaderButton'

const Header: FC = () => {
  const searchInput = useInput('')

  return (
    <Styled.Root>
      <Styled.Logo href='/'>
        <Styled.LogoImg src={Logo} alt='Logo' />
      </Styled.Logo>
      <Styled.Search>
        <Styled.SearchImg src={SearchIcon} />
        <Styled.SearchInput
          type='text'
          value={searchInput?.value}
          onChange={searchInput?.onChange}
          onBlur={searchInput?.onBlur}
        />
      </Styled.Search>
      <CartButton />
    </Styled.Root>
  )
}

export default Header
