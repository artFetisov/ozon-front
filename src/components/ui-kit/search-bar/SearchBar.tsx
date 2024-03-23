import React, { ChangeEvent, MouseEvent, FC, useState } from 'react'
import styles from './SearchBar.module.scss'
import cn from 'classnames'
import { useModal } from '@/hooks/useModal'
import { LayoutModal } from '@/components/ui-kit/modals/LayoutModal'
import { requestHistoryMock } from '@/mock/requestHistoryMock'
import Link from 'next/link'
import { SearchBarModal } from '../modals/search-bar-modal/SearchBarModal'
import { Selection } from '../selection/Selection'
import { productsMock } from '@/mock/products'
import { Heading } from '../heading/Heading'

export const SearchBar: FC = () => {
	const { isOpenModal, openModal, closeModal } = useModal()
	const { isOpenModal: isOpenModal2, openModal: openModal2, closeModal: closeModal2 } = useModal()

	const [fieldValue, setFieldValue] = useState('')

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		setFieldValue(event.currentTarget.value)
	}

	const handleClearFieldValue = () => {
		setFieldValue('')
	}

	const handleCloseModals = (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
		event.stopPropagation()
		isOpenModal && closeModal()
		isOpenModal2 && closeModal2()
	}

	return (
		<>
			{isOpenModal2 && (
				<LayoutModal variant='dark' close={handleCloseModals} Content={<SearchBarModal close={handleCloseModals} />} />
			)}
			{isOpenModal && <LayoutModal variant='dark' close={handleCloseModals} />}
			<div
				className={cn(styles.searchContainer, {
					[styles.isOpenModal]: isOpenModal,
				})}
			>
				<div className={cn(styles.searchBarWrapper)}>
					<form className={styles.searchForm}>
						<div className={styles.leftSide}>
							<div className={styles.catButton} onClick={openModal2}>
								<span className={styles.title}>Везде</span>
								<span className={styles.arrowBox}>
									<svg width={16} height={16}>
										<path fill='currentColor' d='m4 6 4 5 4-5H4Z'></path>
									</svg>
								</span>
							</div>
							<div className={styles.inputWrapper}>
								<input
									placeholder={'Искать на Ozon'}
									className={styles.input}
									onClick={openModal}
									value={fieldValue}
									onChange={handleSetFieldValue}
								/>
								{fieldValue.length > 0 && (
									<div className={styles.removeButton} onClick={handleClearFieldValue}>
										<svg width={16} height={16}>
											<path
												fill='currentColor'
												d='M3.293 3.293a1 1 0 0 1 1.414 0L8 6.586l3.293-3.293a1 1 0 1 1 1.414 1.414L9.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 8 3.293 4.707a1 1 0 0 1 0-1.414Z'
											></path>
										</svg>
									</div>
								)}
							</div>
						</div>
						<div className={styles.rightSide}>
							<button className={styles.searchButton}>
								<span className={styles.searchIconWrapper}>
									<svg height={24} width={24}>
										<path
											fill='currentColor'
											d='M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.281 4.955l4.419 4.33a1 1 0 1 1-1.4 1.43l-4.444-4.357A8 8 0 0 1 3 11Z'
										></path>
									</svg>
								</span>
							</button>
						</div>
					</form>
				</div>
				{isOpenModal && (
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
				)}
			</div>
		</>
	)
}
