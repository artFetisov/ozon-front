import { IProduct } from '@/types/product/product.types'

export interface ICartItem
	extends Pick<IProduct, 'title' | 'id' | 'price' | 'discount' | 'images' | 'slug' | 'characteristics' | 'seller' | 'remains' | 'amount' | 'category'> {
	checked: boolean
}
