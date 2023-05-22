import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from './redux'
import { renderHook } from '@testing-library/react-hooks'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

describe('useAppDispatch', () => {
  test('calls useDispatch', () => {
    const mockDispatch = jest.fn() as jest.Mock
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
    const { result } = renderHook(() => useAppDispatch())

    expect(typeof result.current).toBe('function')
    expect(useDispatch).toHaveBeenCalled()
  })
})

describe('useAppSelector', () => {
  test('uses selector with correct state', () => {
    const mockState = 'someValue'
    ;(useSelector as jest.Mock).mockReturnValue(mockState)
    const { result } = renderHook(() =>
      useAppSelector((mockState) => mockState.productsAPI)
    )

    expect(result.current).toBe('someValue')
    expect(useSelector).toHaveBeenCalled()
  })
})
