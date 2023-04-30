import styled from 'styled-components'

export const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  min-width: 1024px;
  display: flex;
  margin: 0 auto;
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
`
