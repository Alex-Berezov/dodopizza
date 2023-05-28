import React from 'react'
import * as Styled from './styles'
import Skeleton from 'react-loading-skeleton'

const OftenOrderedSkeleton = () => {
  return (
    <Styled.Container>
      <Styled.ContainerItem>
        <Styled.ContainerItemPicture>
          <Skeleton width='100%' height='100%' borderRadius='100%' />
        </Styled.ContainerItemPicture>
        <Styled.ContainerItemInfo>
          <Styled.ContainerItemInfoTitle>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoTitle>
          <Styled.ContainerItemInfoPrice>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoPrice>
        </Styled.ContainerItemInfo>
      </Styled.ContainerItem>

      <Styled.ContainerItem>
        <Styled.ContainerItemPicture>
          <Skeleton width='100%' height='100%' borderRadius='100%' />
        </Styled.ContainerItemPicture>
        <Styled.ContainerItemInfo>
          <Styled.ContainerItemInfoTitle>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoTitle>
          <Styled.ContainerItemInfoPrice>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoPrice>
        </Styled.ContainerItemInfo>
      </Styled.ContainerItem>

      <Styled.ContainerItem>
        <Styled.ContainerItemPicture>
          <Skeleton width='100%' height='100%' borderRadius='100%' />
        </Styled.ContainerItemPicture>
        <Styled.ContainerItemInfo>
          <Styled.ContainerItemInfoTitle>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoTitle>
          <Styled.ContainerItemInfoPrice>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoPrice>
        </Styled.ContainerItemInfo>
      </Styled.ContainerItem>

      <Styled.ContainerItem>
        <Styled.ContainerItemPicture>
          <Skeleton width='100%' height='100%' borderRadius='100%' />
        </Styled.ContainerItemPicture>
        <Styled.ContainerItemInfo>
          <Styled.ContainerItemInfoTitle>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoTitle>
          <Styled.ContainerItemInfoPrice>
            <Skeleton count={1} />
          </Styled.ContainerItemInfoPrice>
        </Styled.ContainerItemInfo>
      </Styled.ContainerItem>
    </Styled.Container>
  )
}

export default OftenOrderedSkeleton
