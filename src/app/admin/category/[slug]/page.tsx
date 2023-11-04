import { NextPage } from 'next'

const CategoryAdminPage: NextPage = ({ params }) => {
	return <div>
		Category Admin Page --- {params.slug}
	</div>
}

export default CategoryAdminPage