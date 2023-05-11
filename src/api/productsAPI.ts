import axios from 'axios'
import { IProducts } from '../models/IProducts'

const instance = axios.create({
  baseURL: 'https://645b71d199b618d5f31b7212.mockapi.io',
})

export const productsAPI = {
  getAllProducts() {
    return instance.get<IProducts[]>('/items')
  },
}
