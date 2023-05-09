import styled from 'styled-components'
import { respondTo } from '../../../../utils/mediaQuerys'

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding-left: 80px;
  padding-right: 80px;

  ${respondTo.md} {
    padding-left: 20px;
    padding-right: 20px;
  }
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

  ${respondTo.md} {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`

export const ContainerItem = styled.article`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  transition: box-shadow 150ms ease-out 0s;
  box-shadow: ${(props) => props.theme.shadows.oftenOrderedShadow};
  border-radius: 12px;
  cursor: pointer;
  width: 230px;
  min-width: 230px;
  padding: 16px;
  margin-right: 24px;
  margin-bottom: 20px;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.hoveredOftenOrderedShadow};
  }

  ${respondTo.md} {
    margin-right: 10px;
  }

  ${respondTo.sm} {
    padding-left: 10px;
    padding-right: 10px;
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
