import { useState, useEffect, useCallback, FC } from 'react'
import { IProducts } from '../../../models/IProducts'

type PizzaSizesType = 'small' | 'medium' | 'large'
type PizzaDoughType = 'traditional' | 'thin'
interface IPizzaSizes {
  [key: string]: number | undefined
}
interface IPizzaDough {
  [key: string]: string | undefined
}

const usePizzaSelection = (product: IProducts) => {
  const [selectedSize, setSelectedSize] = useState<PizzaSizesType>('medium')
  const [selectedDough, setSelectedDough] = useState<PizzaDoughType>('traditional')
  const [disabledThin, setDisabledThin] = useState(false)
  const [pizzaSizes, setPizzaSizes] = useState<IPizzaSizes>({ ...product.pizzaSizes })
  const [pizzaDough, setPizzaDough] = useState<IPizzaDough>({ ...product.pizzaDough })
  const [pizzaImages, setPizzaImages] = useState({ ...product.pizzasImages })
  const [image, setImage] = useState(pizzaImages.medium)

  useEffect(() => {
    setPizzaSizes({ ...product.pizzaSizes })
    setPizzaDough({ ...product.pizzaDough })
    setPizzaImages({ ...product.pizzasImages })
    setImage(pizzaImages.medium)
    // Reset
    return () => {
      setSelectedSize('medium')
      setSelectedDough('traditional')
      setDisabledThin(false)
      setPizzaSizes({})
      setPizzaDough({})
      setPizzaImages({})
      setImage('')
    }
  }, [product, pizzaImages.medium])

  const handleSelectedSize = useCallback(
    (size: PizzaSizesType) => {
      setSelectedSize(size)

      if (size === 'small') {
        setSelectedDough('traditional')
        setDisabledThin(true)
      } else if (selectedDough === 'thin') {
        setSelectedDough('thin')
      } else {
        setDisabledThin(false)
      }

      if (size === 'small' && selectedDough === 'traditional') {
        setImage(pizzaImages.small)
      }
      if (size === 'medium' && selectedDough === 'traditional') {
        setImage(pizzaImages.medium)
      }
      if (size === 'large' && selectedDough === 'traditional') {
        setImage(pizzaImages.large)
      }

      if (size === 'small' && selectedDough === 'thin') {
        setImage(pizzaImages.small)
      }
      if (size === 'medium' && selectedDough === 'thin') {
        setImage(pizzaImages.mediumT)
      }
      if (size === 'large' && selectedDough === 'thin') {
        setImage(pizzaImages.largeT)
      }
    },
    [pizzaImages.large, pizzaImages.largeT, pizzaImages.medium, pizzaImages.mediumT, pizzaImages.small, selectedDough],
  )

  const handleSelectedDough = useCallback(
    (dough: PizzaDoughType) => {
      if (selectedSize === 'small') {
        setSelectedDough('traditional')
      } else {
        setSelectedDough(dough)
      }

      if (selectedSize === 'medium' && dough === 'thin') {
        setImage(pizzaImages.mediumT)
      }
      if (selectedSize === 'large' && dough === 'thin') {
        setImage(pizzaImages.largeT)
      }
      if (selectedSize === 'medium' && dough === 'traditional') {
        setImage(pizzaImages.medium)
      }
      if (selectedSize === 'large' && dough === 'traditional') {
        setImage(pizzaImages.large)
      }
    },
    [pizzaImages.large, pizzaImages.largeT, pizzaImages.medium, pizzaImages.mediumT, selectedSize],
  )

  return {
    selectedSize,
    selectedDough,
    disabledThin,
    pizzaSizes,
    pizzaDough,
    pizzaImages,
    image,
    handleSelectedSize,
    handleSelectedDough,
  }
}

export default usePizzaSelection
