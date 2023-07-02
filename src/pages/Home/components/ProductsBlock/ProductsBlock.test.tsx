import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductsBlock from './ProductsBlock'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../theme'
import { IProducts } from '../../../../models/IProducts'
import { mockProducts } from '../../../../mockapi'
import '@testing-library/jest-dom/extend-expect'

const renderProductsBlock = (products: IProducts[] | []) => {
  return render(
    <ThemeProvider theme={theme}>
      <ProductsBlock />
    </ThemeProvider>
  )
}

describe('Product Block tests', () => {
  test('render without data, should show skeleton', () => {
    renderProductsBlock([])

    const skeletons = screen.queryAllByTestId(/skeleton\d+/)

    expect(skeletons).toHaveLength(12)
  })

  test('render with data, pizzas must be displayed', () => {
    const pizzas = mockProducts?.filter((el) => el.category === 'pizzas')

    renderProductsBlock(pizzas)

    const pizzaElements = screen.queryAllByTestId('pizza-element')
    expect(pizzaElements).toHaveLength(pizzas.length)

    // Имитация клика на первую карточку пиццы
    fireEvent.click(pizzaElements[0])

    // Проверка открытия модального окна
    const modalElement = screen.getByTestId('modal')
    expect(modalElement).toBeTruthy()

    // Проверка наличия и содержимого элементов в модальном окне
    const pizzaTitle = pizzas[0].title
    const pizzaDescription = pizzas[0].description || ''
    const pizzaPrice = pizzas[0].price
    // и т.д.

    expect(modalElement).toHaveTextContent(pizzaTitle)
    expect(modalElement).toHaveTextContent(pizzaDescription)
    expect(modalElement).toHaveTextContent(pizzaPrice.toString())
  })

  test('render with data, snacks must be displayed', () => {
    const snacks = mockProducts?.filter((el) => el.category === 'snacks')

    renderProductsBlock(snacks)

    const snackElements = screen.queryAllByTestId('snack-element')
    expect(snackElements).toHaveLength(snacks.length)

    // Имитация клика на первую карточку закусок
    fireEvent.click(snackElements[0])

    // Проверка открытия модального окна
    const modalElement = screen.getByTestId('modal')
    expect(modalElement).toBeTruthy()

    // Проверка наличия и содержимого элементов в модальном окне
    const snacksTitle = snacks[0].title
    const snacksDescription = snacks[0].description || ''
    const snacksPrice = snacks[0].price
    // и т.д.

    expect(modalElement).toHaveTextContent(snacksTitle)
    expect(modalElement).toHaveTextContent(snacksDescription)
    expect(modalElement).toHaveTextContent(snacksPrice.toString())
  })

  test('render with data, drinks must be displayed', () => {
    const drinks = mockProducts?.filter((el) => el.category === 'drinks')

    renderProductsBlock(drinks)

    const drinkElements = screen.queryAllByTestId('drink-element')
    expect(drinkElements).toHaveLength(drinks.length)

    // Имитация клика на первую карточку напитков
    fireEvent.click(drinkElements[0])

    // Проверка открытия модального окна
    const modalElement = screen.getByTestId('modal')
    expect(modalElement).toBeTruthy()

    // Проверка наличия и содержимого элементов в модальном окне
    const drinksTitle = drinks[0].title
    const drinksPrice = drinks[0].price
    // и т.д.

    expect(modalElement).toHaveTextContent(drinksTitle)
    expect(modalElement).toHaveTextContent(drinksPrice.toString())
  })
})
