// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

const renderHook = (callback: Function) => {
  let result: any

  act(() => {
    result = callback()
  })

  return {
    result,
    rerender: (newCallback: Function) => {
      act(() => {
        result = newCallback()
      })
    },
  }
}

const customRender = (ui: any, options?: any) => {
  return render(ui, { wrapper: options?.wrapper })
}

export { renderHook, act, customRender }
