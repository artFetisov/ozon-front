import { Product } from '@/components/screens/product/Product'

const ProductPage = ({ params }: { params: { slug: string; id: number } }) => {
	return (
		<>
			<Product id={params.id} slug={params.slug} />
		</>
	)
}

export default ProductPage
