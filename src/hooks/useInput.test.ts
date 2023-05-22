import { renderHook, act } from '@testing-library/react-hooks'
import useInput from './useInput'

describe('useInput', () => {
  test('should initialize with the provided initial value', () => {
    const initialValue = 'initial'
    const { result } = renderHook(() => useInput(initialValue))

    expect(result.current.value).toBe(initialValue)
  })

  test('should update the value correctly when onChange is called', () => {
    const { result } = renderHook(() => useInput(''))

    act(() => {
      result.current.onChange({
        target: { value: 'new value' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.value).toBe('new value')
  })

  test('should set isTouched to true when onBlur is called', () => {
    const { result } = renderHook(() => useInput(''))

    act(() => {
      result.current.onBlur({} as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.isTouched).toBe(true)
  })

  test('should update the value correctly when setValue is called', () => {
    const { result } = renderHook(() => useInput(''))

    act(() => {
      result.current.setValue('new value')
    })

    expect(result.current.value).toBe('new value')
  })

  test('should return isTouched as false initially', () => {
    const { result } = renderHook(() => useInput(''))

    expect(result.current.isTouched).toBe(false)
  })
})
