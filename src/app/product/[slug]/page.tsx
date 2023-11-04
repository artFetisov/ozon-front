import { Product } from '@/components/screens/product/Product'
import { NextPage } from 'next'

const ProductPage: NextPage = ({ params }) => {
	return <><Product /> - {params.slug}</>
}

export default ProductPage

