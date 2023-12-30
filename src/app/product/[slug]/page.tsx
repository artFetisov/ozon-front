import { Product } from '@/components/screens/product/Product'

const ProductPage = ({ params }: { params: { slug: string } }) => {
	return (
		<>
			<Product /> - {params.slug}
		</>
	)
}

export default ProductPage
