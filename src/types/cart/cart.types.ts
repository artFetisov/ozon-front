import { IProduct } from '../product/product.types'

export type ICartItem = IProduct & {
	checked: boolean
}
