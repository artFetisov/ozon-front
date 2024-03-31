import { ChangeEvent, FC, useState, KeyboardEvent } from 'react'
import styles from './Textarea.module.scss'
import cn from 'classnames'

const BASE_TEXTAREA_HEIGHT = 28
const PORTION_ADDITIONAL_TEXTAREA_HEIGHT = 18
const ROW_TEXTAREA_LENGTH = 33
const MAX_TEXTAREA_LENGTH = ROW_TEXTAREA_LENGTH * 5

const getFinalHeight = (valueLength: number) => {
	valueLength =
		valueLength > ROW_TEXTAREA_LENGTH
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT
			: valueLength > ROW_TEXTAREA_LENGTH * 2
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT * 2
			: valueLength > ROW_TEXTAREA_LENGTH * 3
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT * 3
			: valueLength > ROW_TEXTAREA_LENGTH * 4
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT * 4
			: 0
	return valueLength + BASE_TEXTAREA_HEIGHT
}

interface ITextareaProps {
	value: string
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
	placeholder: string
	minHeight: 'small' | 'large'
}

export const Textarea: FC<ITextareaProps> = ({ placeholder, minHeight, value, ...rest }) => {
	const [isFocused, setISFocused] = useState(false)
	const [plusHeightOnKeyEnter, setPlusHeightOnKeyEnter] = useState(0)

	const handleSetFocus = (bool: boolean) => {
		setISFocused(bool)
	}

	const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		// if (value?.length + plusHeightOnKeyEnter >= MAX_TEXTAREA_LENGTH) {
		// 	return
		// }
		// if (event.key === 'Enter') {
		// 	event.preventDefault()
		// 	console.log('enter')
		// 	setPlusHeightOnKeyEnter((prev) => prev + PORTION_ADDITIONAL_TEXTAREA_HEIGHT)
		// }
		// if (event.key === 'Backspace') {
		// setPlusHeightOnKeyEnter((prev) =>
		// 	prev - PORTION_ADDITIONAL_TEXTAREA_HEIGHT > 0 ? prev - PORTION_ADDITIONAL_TEXTAREA_HEIGHT : 0
		// )
		// }
	}

	return (
		<div
			className={cn(styles.txtBox, {
				[styles.focused]: isFocused,
				[styles.small]: minHeight === 'small',
				[styles.large]: minHeight === 'large',
			})}
		>
			<textarea
				onFocus={(_) => handleSetFocus(true)}
				onBlur={(_) => handleSetFocus(false)}
				onKeyDown={handleKeyPress}
				className={styles.textarea}
				value={value}
				style={{ height: `${getFinalHeight(value?.length) + plusHeightOnKeyEnter}px` }}
				maxLength={ROW_TEXTAREA_LENGTH * 5}
				{...rest}
			/>
			{(value?.length === 0 || value === undefined) && <p>{placeholder}</p>}
		</div>
	)
}
