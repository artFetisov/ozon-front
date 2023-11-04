import { NextPage } from 'next'

const CategoryPage: NextPage = ({ params }) => {
	return <div>Category Page --- {params.slug}</div>
}

export default CategoryPage