import { ChangeEvent, FC } from 'react'
import styles from './InputSearch.module.scss'
import cn from 'classnames'

interface IInputSearchProps {
	showCategoryModal: () => void
	showHistoryModal: () => void
	value: string
	onChange: (value: string) => void
}

export const InputSearch: FC<IInputSearchProps> = ({ showCategoryModal, showHistoryModal, value, onChange }) => {
	const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value)
	}

	const handleClearValue = () => {
		onChange('')
	}

	return (
		<div className={cn(styles.inputSearchWrapper)}>
			<form className={styles.searchForm}>
				<div className={styles.leftSide}>
					<div className={styles.catButton} onClick={showCategoryModal}>
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
							onClick={showHistoryModal}
							value={value}
							onChange={handleChangeValue}
						/>
						{value.length > 0 && (
							<div className={styles.removeButton} onClick={handleClearValue}>
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
	)
}
