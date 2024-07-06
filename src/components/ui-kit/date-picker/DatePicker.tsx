import { FC, useState, FocusEvent, ChangeEvent, MouseEvent } from 'react'
import styles from './DatePicker.module.scss'
import inpStyles from '../input/Input.module.scss'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'
import { getDateViewWithDots } from '@/utils/date/date'
import { createPortal } from 'react-dom'
import { LayoutModal } from '../modals/LayoutModal'
import { Calendar } from '../calendar/Calendar'

interface IDatePickerProps {
	value?: Date
	onChange: () => void
	placeholder: string
	error?: FieldError
}

export const DatePicker: FC<IDatePickerProps> = ({ value, placeholder, onChange, error, ...props }) => {
	const [isFocused, setIsFocused] = useState(false)
	const [isShowCalendar, setIsShowCalendar] = useState(false)

	const onFocus = () => {
		setIsFocused(true)
	}

	const handleCloseCalendar = () => {
		setIsShowCalendar(false)
	}

	const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
		if (event.relatedTarget?.id === 'remove') {
			return
		}
		setIsFocused(false)
	}

	const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {}

	const handleShowCalendar = (event: MouseEvent<HTMLSpanElement>) => {
		event.preventDefault()
		setIsShowCalendar(true)
	}

	return (
		<>
			{isShowCalendar &&
				createPortal(<LayoutModal variant='dark' close={handleCloseCalendar} Content={<Calendar />} />, document.body)}
			<div className={styles.datePicker}>
				<label
					className={cn(inpStyles.input, {
						[inpStyles.erroredBorder]: !!error?.message?.length,
					})}
				>
					<input
						type='text'
						{...props}
						onFocus={onFocus}
						onBlur={onBlur}
						value={getDateViewWithDots(value)}
						onChange={handleChangeDate}
					/>
					<p
						className={cn(inpStyles.placeholder, {
							[inpStyles.focusedP]: isFocused || !!value,
						})}
					>
						{placeholder}
					</p>
					<div className={styles.icon}>
						<span draggable tabIndex={0} id='date-picker' onClick={handleShowCalendar}>
							<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24}>
								<path
									fill='currentColor'
									d='M7 5c0-1.5 0-2 1-2s1 .5 1 2h6c0-1.5 0-2 1-2s1 .5 1 2c2.5 0 4 .5 4 3 0 1.016-.71 1.01-1.71 1.002L19 9H5C3.85 9 3 9 3 8c0-2.382 1.5-3 4-3m-3 5h16c.5 0 .875.39.927 1q.075.915.073 2c0 7-1 8-9 8s-9-1-9-8q-.002-1.085.073-2c.052-.61.427-1 .927-1m2.076 2.617C6 12.801 6 13.034 6 13.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541C9 14.199 9 13.966 9 13.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C8.199 12 7.966 12 7.5 12s-.699 0-.883.076a1 1 0 0 0-.54.541'
								></path>
							</svg>
						</span>
					</div>
				</label>
				{error?.message && <div className={inpStyles.error}>{error.message}</div>}
			</div>
		</>
	)
}
