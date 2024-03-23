import { ChangeEvent, FC, useState } from 'react'
import styles from './Textarea.module.scss'

const BASE_TEXTAREA_HEIGHT = 28
const PORTION_ADDITIONAL_TEXTAREA_HEIGHT = 18
const ROW_TEXTAREA_LENGTH = 33

interface ITextareaProps {
	value: string
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
	placeholder: string
	isTouched: boolean
	isDirty: boolean
}

export const Textarea: FC<ITextareaProps> = ({ placeholder, value, isTouched, isDirty, ...rest }) => {
	const finalHeight =
		value?.length > ROW_TEXTAREA_LENGTH
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT
			: value?.length > ROW_TEXTAREA_LENGTH * 2
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT * 2
			: value?.length > ROW_TEXTAREA_LENGTH * 3
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT * 3
			: value?.length > ROW_TEXTAREA_LENGTH * 4
			? PORTION_ADDITIONAL_TEXTAREA_HEIGHT * 4
			: 0

	return (
		<div className={styles.txtBox}>
			<textarea
				className={styles.textarea}
				{...rest}
				style={{ height: `${BASE_TEXTAREA_HEIGHT + finalHeight}px` }}
				maxLength={ROW_TEXTAREA_LENGTH * 5}
			/>
			{(value?.length === 0 || value === undefined) && <p>{placeholder}</p>}
		</div>
	)
}
