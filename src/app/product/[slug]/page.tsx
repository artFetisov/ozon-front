import { Product } from '@/components/screens/product/Product'

export default function ProductPage({ params }) {
	return <><Product /> - {params.slug}</>
}