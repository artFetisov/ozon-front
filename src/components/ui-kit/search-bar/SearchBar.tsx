import React, { FC } from 'react'
import styles from './SearchBar.module.scss'
import { useModal } from '@/hooks/useModal'
import { LayoutModal } from '@/components/ui-kit/modals/LayoutModal'
import { SearchBarModal } from '@/components/ui-kit/modals/search-bar-modal/SearchBarModal'

export const SearchBar: FC = () => {
	const { isOpenModal, openModal, closeModal } = useModal()

	const openModalHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		openModal()
	}

	const closeModalHandler = () => {
		closeModal()
	}

	return <div className={styles.searchBarWrapper}>
		<form className={styles.searchForm}>
			<div className={styles.leftSide}>
				<div className={styles.catButton}>
					<span className={styles.title}>Везде</span>
					<span className={styles.arrowBox}>
						<svg width={16} height={16}>
							<path fill='currentColor' d='m4 6 4 5 4-5H4Z'></path>
						</svg>
					</span>
				</div>
				<div className={styles.inputWrapper}>
					<input placeholder={'Искать на Ozon'} className={styles.input} />
				</div>
			</div>
			<div className={styles.rightSide}>
				<button className={styles.searchButton} onClick={openModalHandler}>
					    <span className={styles.searchIconWrapper}>
								   <svg height={24} width={24}>
		               <path fill='currentColor'
												 d='M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.281 4.955l4.419 4.33a1 1 0 1 1-1.4 1.43l-4.444-4.357A8 8 0 0 1 3 11Z'></path>
	            </svg>
          </span>
				</button>
			</div>
		</form>
		{isOpenModal && <LayoutModal>
			<SearchBarModal close={closeModalHandler} />
		</LayoutModal>}
	</div>
}
