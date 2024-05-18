import { Footer } from '@/components/layout/Footer/Footer'
import { Header } from '@/components/layout/Header/Header'
import { CategoriesCatalog } from '@/components/screens/home/CategoriesCatalog/CategoriesCatalog'

export default function FilledLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<CategoriesCatalog />
			<div className={'root-layout'}>{children}</div>
			<Footer />
		</>
	)
}
