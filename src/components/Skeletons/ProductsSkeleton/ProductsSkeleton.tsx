import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as Styled from './styles'

const ProductsSkeleton: FC = () => {
  return (
    <Styled.ProductList>
      <Styled.ProductItem data-testid='skeleton1'>
        <Styled.Main>
          <Styled.MainPicture>
            <Skeleton width='100%' height='100%' borderRadius='100%' />
          </Styled.MainPicture>
          <Styled.MainTitle>
            <Skeleton count={1} />
          </Styled.MainTitle>
          <Styled.MainDescription>
            <Skeleton count={4} />
          </Styled.MainDescription>
        </Styled.Main>
        <Styled.Footer>
          <Skeleton count={1} />
        </Styled.Footer>
      </Styled.ProductItem>

      <Styled.ProductItem data-testid='skeleton2'>
        <Styled.Main>
          <Styled.MainPicture>
            <Skeleton width='100%' height='100%' borderRadius='100%' />
          </Styled.MainPicture>
          <Styled.MainTitle>
            <Skeleton count={1} />
          </Styled.MainTitle>
          <Styled.MainDescription>
            <Skeleton count={4} />
          </Styled.MainDescription>
        </Styled.Main>
        <Styled.Footer>
          <Skeleton count={1} />
        </Styled.Footer>
      </Styled.ProductItem>

      <Styled.ProductItem data-testid='skeleton3'>
        <Styled.Main>
          <Styled.MainPicture>
            <Skeleton width='100%' height='100%' borderRadius='100%' />
          </Styled.MainPicture>
          <Styled.MainTitle>
            <Skeleton count={1} />
          </Styled.MainTitle>
          <Styled.MainDescription>
            <Skeleton count={4} />
          </Styled.MainDescription>
        </Styled.Main>
        <Styled.Footer>
          <Skeleton count={1} />
        </Styled.Footer>
      </Styled.ProductItem>

      <Styled.ProductItem data-testid='skeleton4'>
        <Styled.Main>
          <Styled.MainPicture>
            <Skeleton width='100%' height='100%' borderRadius='100%' />
          </Styled.MainPicture>
          <Styled.MainTitle>
            <Skeleton count={1} />
          </Styled.MainTitle>
          <Styled.MainDescription>
            <Skeleton count={4} />
          </Styled.MainDescription>
        </Styled.Main>
        <Styled.Footer>
          <Skeleton count={1} />
        </Styled.Footer>
      </Styled.ProductItem>
    </Styled.ProductList>
  )
}

export default ProductsSkeleton
