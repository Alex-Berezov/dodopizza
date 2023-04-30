import styled from 'styled-components'

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 1280px;
  min-width: 1024px;
`

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin: 16px 0px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const ContainerItem = styled.article`
  display: flex;
  align-items: center;
  background: rgb(255, 255, 255);
  transition: box-shadow 150ms ease-out 0s;
  box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
  border-radius: 12px;
  cursor: pointer;
  width: 260px;
  padding: 16px;
  margin-right: 24px;

  &:hover {
    box-shadow: rgba(6, 5, 50, 0.15) 0px 0px 12px -4px;
  }
`

export const ContainerItemPicture = styled.picture`
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  pointer-events: none;
`

export const ContainerItemPictureImg = styled.img``

export const ContainerItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerItemInfoTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`

export const ContainerItemInfoPrice = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`
