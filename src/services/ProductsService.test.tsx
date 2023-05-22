import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { productsAPI } from './ProductsService'
import { renderHook } from '@testing-library/react-hooks'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { ReactNode } from 'react'
import { setupStore } from '../store/store'

const testStore = setupStore()

// Mock server
const server = setupServer(
  rest.get(
    'https://645b71d199b618d5f31b7212.mockapi.io/items',
    (req, res, ctx) => {
      return res(ctx.json([{ id: '1' /* more fields here */ }]))
    }
  )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// Wrapper component
const Wrapper: React.FC = ({ children }: { children?: ReactNode }) => (
  <Provider store={testStore}>
    <ApiProvider api={productsAPI}>{children}</ApiProvider>
  </Provider>
)

// Testing the API service
test('fetchAllProducts should fetch successfully', async () => {
  const { result, waitFor } = renderHook(
    () => productsAPI.endpoints.fetchAllProducts.useQuery({}),
    { wrapper: Wrapper }
  )

  expect(result.current.isLoading).toBe(true)

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data).toEqual([{ id: '1' }])
})
