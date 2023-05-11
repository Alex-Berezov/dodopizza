type PizzaImages = Record<
  'main' | 'small' | 'medium' | 'large' | 'mediumT' | 'largeT',
  string
>

type PizzaSizes = Record<'small' | 'medium' | 'large', number>

type PizzaDough = Record<'traditional' | 'thin', string>

export interface IProducts {
  id: number
  title: string
  description?: string
  isPizza: boolean
  pizzasImages?: PizzaImages
  pizzaSizes?: PizzaSizes
  pizzaDough?: PizzaDough
  weight?: number
  image?: string
}