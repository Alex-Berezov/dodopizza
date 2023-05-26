import {
  render,
  RenderOptions,
  RenderResult,
  Queries,
} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { ReactElement, JSXElementConstructor } from 'react'

type CallbackFunction<
  Q extends Queries = typeof import('@testing-library/dom/types/queries')
> = () => RenderResult<Q>

const renderHook = <
  Q extends Queries = typeof import('@testing-library/dom/types/queries')
>(
  callback: CallbackFunction<Q>
) => {
  let result: RenderResult<Q> | undefined

  act(() => {
    result = callback()
  })

  return {
    result: result as RenderResult<Q>,
    rerender: (newCallback: CallbackFunction<Q>) => {
      act(() => {
        result = newCallback()
      })
    },
  }
}

type CustomRenderOptions<
  Q extends Queries = typeof import('@testing-library/dom/types/queries')
> = Omit<RenderOptions<Q, HTMLElement>, 'queries'>

const customRender = <
  Q extends Queries = typeof import('@testing-library/dom/types/queries')
>(
  ui: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  options?: CustomRenderOptions<Q>
): RenderResult<Q> => {
  return render<Q, HTMLElement>(ui, options as RenderOptions<Q, HTMLElement>)
}

export { renderHook, act, customRender }
