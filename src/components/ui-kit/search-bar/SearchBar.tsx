import React, { FC, useState } from 'react'
import styles from './SearchBar.module.scss'
import cn from 'classnames'
import { useModal } from '@/hooks/useModal'
import { LayoutModal } from '@/components/ui-kit/modals/LayoutModal'
import { requestHistoryMock } from '@/mock/requestHistoryMock'
import Link from 'next/link'
import { SearchBarModal } from '../modals/search-bar-modal/SearchBarModal'
import { Selection } from '../selection/Selection'
import { productsMock } from '@/mock/products'
import { createPortal } from 'react-dom'
import { InputSearch } from '../input-search/InputSearch'

export const SearchBar: FC = () => {
	const { isOpenModal, openModal, closeModal } = useModal()
	const { isOpenModal: isOpenModal2, openModal: openModal2, closeModal: closeModal2 } = useModal()

	const [fieldValue, setFieldValue] = useState('')

	const handleSetFieldValue = (value: string) => {
		setFieldValue(value)
	}

	const handleShowSearchBarModal = () => {
		isOpenModal && closeModal()
		openModal2()
	}

	return (
		<>
			{isOpenModal && createPortal(<LayoutModal variant='dark' close={closeModal} />, document.body)}
			{isOpenModal2 &&
				createPortal(
					<LayoutModal variant='dark' close={closeModal2} Content={<SearchBarModal close={closeModal2} />} />,
					document.body
				)}
			<div
				className={cn(styles.searchContainer, {
					[styles.isOpenModal]: isOpenModal,
				})}
			>
				<InputSearch
					showCategoryModal={handleShowSearchBarModal}
					showHistoryModal={openModal}
					value={fieldValue}
					onChange={handleSetFieldValue}
				/>
				{isOpenModal && (
					<div className={styles.requestHistoryWrapper}>
						<section className={styles.requestHistory}>
							<header className={styles.historyHeader}>
								<h4>История</h4>
								<span>Очистить</span>
							</header>
							<>
								{requestHistoryMock.map((r) => (
									<Link key={r.id} href={'/'} className={styles.requestHistoryItem}>
										<div className={styles.itemIcon}>
											<svg width={24} height={24}>
												<path
													fill='currentColor'
													d='M5 6.343V5a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H6.254a7 7 0 1 1-1.2 4.876 1 1 0 1 0-1.984.248A9 9 0 1 0 5 6.344Z'
												></path>
												<path
													fill='currentColor'
													d='M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414-1.414L13 11.586V8Z'
												></path>
											</svg>
										</div>
										<span className={styles.itemTitle}>{r.title}</span>
										<span className={styles.itemRemoveBtn}>
											<svg width={16} height={16}>
												<path
													fill='currentColor'
													d='M3.293 3.293a1 1 0 0 1 1.414 0L8 6.586l3.293-3.293a1 1 0 1 1 1.414 1.414L9.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 8 3.293 4.707a1 1 0 0 1 0-1.414Z'
												></path>
											</svg>
										</span>
									</Link>
								))}
								<Selection rowTotalItems={3} items={productsMock.slice(0, 12)} headingText='Рекомендуем для вас' />
							</>
						</section>
					</div>
				)}
			</div>
		</>
	)
}
