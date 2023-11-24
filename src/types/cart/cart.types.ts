import { IProduct } from '@/types/product/product.types'

export type ICartItem = Pick<IProduct,
	'title' | 'id' | 'price' | 'discount' | 'images' | 'slug' | 'characteristics' | 'seller' | 'remains' | 'amount'>
