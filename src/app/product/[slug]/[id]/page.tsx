import { Product } from '@/components/screens/product/Product'

interface IProps {
	params: { slug: string; id: number }
	searchParams?: { variant?: string }
}

const ProductPage = ({ params, searchParams }: IProps) => {
	return (
		<>
			<Product id={params.id} slug={params.slug} />
		</>
	)
}

export default ProductPage
