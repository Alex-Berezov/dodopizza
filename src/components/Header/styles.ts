import styled from 'styled-components'
import { respondTo } from '../../utils/mediaQuerys'

interface HeaderProps {
  visibleHeader: boolean
}

export const Root = styled.header`
  margin: 0 auto;
  padding-left: 320px;
  padding-right: 320px;

  ${respondTo.max} {
    padding-left: 160px;
    padding-right: 160px;
  }

  ${respondTo.lg} {
    padding-left: 120px;
    padding-right: 120px;
  }

  ${respondTo.preLg} {
    padding-left: 80px;
    padding-right: 80px;
  }

  ${respondTo.mdXL} {
    padding-left: 60px;
    padding-right: 60px;
  }

  ${respondTo.md} {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${respondTo.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px 16px;

  ${respondTo.xs} {
    flex-direction: column;
  }
`

export const Logo = styled.a`
  text-decoration: none;
  color: inherit;

  ${respondTo.sm} {
    width: 130px;
  }

  ${respondTo.xs} {
    margin-bottom: 10px;
  }
`

export const LogoImg = styled.img``

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
  background-color: ${(props) => props.theme.colors.navBackground};
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

export const NavList = styled.div<HeaderProps>`
  display: flex;
  transform: translateX(${(props) => (props.visibleHeader ? '-66px' : '0px')});
  transition: transform 0.25s ease 0s;

  ${respondTo.xxs} {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`

export const NavListItem = styled.a`
  margin-right: 20px;
  font-weight: 500;
  padding: 22px 0px;
  color: black;
  font-size: 14px;
  line-height: 1;
  transition: color 0.25s ease 0s, padding 0.25s ease 0s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`
