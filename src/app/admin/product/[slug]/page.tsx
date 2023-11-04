import { NextPage } from 'next'

const ProductAdminPage: NextPage = ({ params }) => {
	return <div>
		Product Admin Page --- {params.slug}
	</div>
}

export default ProductAdminPage
