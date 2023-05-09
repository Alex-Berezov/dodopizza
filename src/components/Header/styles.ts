import styled from 'styled-components'

interface HeaderProps {
  visibleHeader: boolean
}

export const Root = styled.header`
  width: 1280px;
  min-width: 1024px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px 16px;
`

export const Logo = styled.a`
  text-decoration: none;
  color: inherit;
`

export const LogoImg = styled.img``

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const SearchImg = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 2px;
  left: 2px;
`

export const SearchInput = styled.input`
  outline: none;
  padding: 5px 5px 5px 30px;
  border-radius: 5px;
  border: 1px solid #000000;
  width: 250px;
`

export const EmptyBlock = styled.div<HeaderProps>`
  display: ${(props) => (props.visibleHeader ? 'none' : 'block')};
  height: 58px;
`

export const Nav = styled.nav<HeaderProps>`
  display: flex;
  align-items: center;
  width: 100%;
  position: ${(props) => (props.visibleHeader ? 'inherit' : 'fixed')};
  top: 0px;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 10;
  backdrop-filter: blur(20px);
`

export const NavLogo = styled.div`
  overflow: hidden;
  font-size: 0px;
  line-height: 0;
  position: relative;
  width: 52px;
  padding-right: 16px;
  height: 54px;
`

export const NavLogoImg = styled.img<HeaderProps>`
  transform: translateX(${(props) => (props.visibleHeader ? '-52px' : '0px')});
  transition: transform 0.25s ease 0s;
`

export const NavList = styled.ul<HeaderProps>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  transform: translateX(${(props) => (props.visibleHeader ? '-66px' : '0px')});
  transition: transform 0.25s ease 0s;
`

export const NavListItem = styled.li`
  margin-right: 20px;
  font-weight: 500;
  padding: 22px 0px;
  color: black;
  font-size: 14px;
  line-height: 1;
  transition: color 0.25s ease 0s, padding 0.25s ease 0s;
  cursor: pointer;

  &:hover {
    color: rgb(255, 105, 0);
  }
`
