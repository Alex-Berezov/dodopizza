import { IProducts } from '../../models/IProducts'
import { productSlice, ProductsState } from './ProductsSlice'

describe('productSlice reducer', () => {
  let initialState: ProductsState

  beforeEach(() => {
    initialState = {
      products: [],
      isLoading: false,
      error: '',
    }
  })

  test('should handle productsFetching', () => {
    const actual = productSlice.reducer(
      initialState,
      productSlice.actions.productsFetching()
    )
    expect(actual.isLoading).toBeTruthy()
  })

  test('should handle productsFetchingSuccess', () => {
    const newProducts: IProducts[] = [
      {
        id: 0,
        category: 'pizzas',
        title: 'Пицца от шефа',
        description:
          'Пастрами из мраморной говядины, сладкий перец, томаты, красный лук, чеснок, соус ткемали, моцарелла, фирменный томатный соус',
        isPizza: true,
        pizzasImages: {
          main: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d7bbbc4c74af442e8b9b3ea2faf3c941_292x292.webp',
          small:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/5658a2fed8b94336a92a3c01ddd586ec_760x760.png',
          medium:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/d7bbbc4c74af442e8b9b3ea2faf3c941_760x760.png',
          large:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/7a1440b5ea68440b9ed689756f1f7572_760x760.png',
          mediumT:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/68a1af8828f24e59b5d0db06478ece25_760x760.png',
          largeT:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/12619b591aa24676857a64e6e46d36bc_760x760.png',
        },
        pizzaSizes: {
          small: 25,
          medium: 30,
          large: 35,
        },
        pizzaDough: {
          traditional: 'традиционное',
          thin: 'тонкое',
        },
        price: 689,
      },
      {
        id: 1,
        category: 'pizzas',
        title: 'Пепперони фреш',
        description:
          'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        isPizza: true,
        pizzasImages: {
          main: 'https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_292x292.webp',
          small:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/b549211e80a74f27858af0f61129708a_760x760.png',
          medium:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_760x760.png',
          large:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/29521e52aed84e3f9bc15336d112d3fb_760x760.png',
          mediumT:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/c146b4c09e824b20a72fb4010db9eb46_760x760.png',
          largeT:
            'https://dodopizza-a.akamaihd.net/static/Img/Products/5cc95da360d9483dbaa9b550731b5016_760x760.png',
        },
        pizzaSizes: {
          small: 25,
          medium: 30,
          large: 35,
        },
        pizzaDough: {
          traditional: 'традиционное',
          thin: 'тонкое',
        },
        price: 299,
      },
    ]
    const actual = productSlice.reducer(
      initialState,
      productSlice.actions.productsFetchingSuccess(newProducts)
    )
    expect(actual.isLoading).toBeFalsy()
    expect(actual.error).toBe('')
    expect(actual.products).toEqual(newProducts)
  })

  test('should handle productsFetchingError', () => {
    const error = 'Error fetching products'
    const actual = productSlice.reducer(
      initialState,
      productSlice.actions.productsFetchingError(error)
    )
    expect(actual.isLoading).toBeFalsy()
    expect(actual.error).toBe(error)
  })
})
