import React, { FC, useEffect, useRef, useState } from 'react'
import * as Styled from './styles'
import useInput from '../../hooks/useInput'

import Logo from '../../assets/images/logo.svg'
import mobLogo from '../../assets/images/mobLogo.png'
import SearchIcon from '../../assets/images/searchIcon.svg'
import NavLogo from '../../assets/images/navLogo.png'
import { CartButton } from '../../UI/HeaderButton'
import { HeaderCart } from './components/HeaderCart'

const Header: FC = () => {
  let screenWidth = window.innerWidth
  const searchInput = useInput('')
  const headerRef = useRef<HTMLDivElement>(null)
  const [visibleHeader, setVisibleHeader] = useState(false)
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const openCart = () => {
    setCartIsOpen(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setVisibleHeader(true) : setVisibleHeader(false)
      })
    })

    headerRef.current && observer.observe(headerRef.current)

    return () => {
      headerRef.current && observer.unobserve(headerRef.current)
    }
  }, [])

  return (
    <Styled.Root>
      <Styled.Header ref={headerRef}>
        <Styled.Logo href='/'>
          <Styled.LogoImg
            src={screenWidth <= 768 ? mobLogo : Logo}
            alt='Logo'
          />
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
        <CartButton onClick={openCart} />
      </Styled.Header>

      <Styled.EmptyBlock visibleHeader={visibleHeader}></Styled.EmptyBlock>

      <Styled.Nav visibleHeader={visibleHeader}>
        <Styled.NavLogo>
          <Styled.NavLogoImg src={NavLogo} visibleHeader={visibleHeader} />
        </Styled.NavLogo>
        <Styled.NavList visibleHeader={visibleHeader}>
          <Styled.NavListItem>Пицца</Styled.NavListItem>
          <Styled.NavListItem>Комбо</Styled.NavListItem>
          <Styled.NavListItem>Закуски</Styled.NavListItem>
          <Styled.NavListItem>Десерты</Styled.NavListItem>
          <Styled.NavListItem>Напитки</Styled.NavListItem>
        </Styled.NavList>
      </Styled.Nav>
      <HeaderCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
    </Styled.Root>
  )
}

export default Header
