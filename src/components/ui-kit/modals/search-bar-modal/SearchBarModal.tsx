import { FC } from 'react'
import { SearchBar } from '@/components/ui-kit/search-bar/SearchBar'

interface ISearchBarModalProps {
	close: () => void
}

export const SearchBarModal: FC<ISearchBarModalProps> = ({ close }) => {
	return <div onClick={close}>
		<SearchBar />
	</div>
}