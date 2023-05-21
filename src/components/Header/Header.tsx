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

    let headerRefCurrent = headerRef.current

    headerRefCurrent && observer.observe(headerRefCurrent)

    return () => {
      headerRefCurrent && observer.unobserve(headerRefCurrent)
    }
  }, [])

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    offset: number
  ) => {
    event.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({
        behavior: 'smooth',
        top,
      })
    }
  }

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
          <Styled.NavListItem
            href='#pizzas'
            onClick={(e) => scrollToSection(e, 'pizzas', 100)}
          >
            Пицца
          </Styled.NavListItem>
          <Styled.NavListItem
            href='#snacks'
            onClick={(e) => scrollToSection(e, 'snacks', 100)}
          >
            Закуски
          </Styled.NavListItem>
          <Styled.NavListItem
            href='#drinks'
            onClick={(e) => scrollToSection(e, 'drinks', 100)}
          >
            Напитки
          </Styled.NavListItem>
        </Styled.NavList>
      </Styled.Nav>
      <HeaderCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
    </Styled.Root>
  )
}

export default Header
