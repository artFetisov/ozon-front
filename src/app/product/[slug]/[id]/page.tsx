import { Product } from '@/components/screens/product/Product'
import { useRouter } from 'next/router'

interface IProps {
	params: { slug: string; id: number }
	searchParams?: { variant?: string }
}

const ProductPage = ({ params, searchParams }: IProps) => {
	const getInitialVariants = () => {}

	return (
		<>
			<Product id={params.id} slug={params.slug} />
		</>
	)
}

export default ProductPage
