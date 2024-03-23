import { ChangeEvent, FC, useState } from 'react'
import styles from './Textarea.module.scss'

const BASE_TEXTAREA_HEIGHT = 28
const PORTION_ADDITIONAL_TEXTAREA_HEIGHT = 18

interface ITextareaProps {
	value: string
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
	placeholder: string
	isTouched: boolean
	isDirty: boolean
}

export const Textarea: FC<ITextareaProps> = ({ placeholder, value, isTouched, isDirty, ...rest }) => {
	console.log(value)

	return (
		<div className={styles.txtBox}>
			<textarea className={styles.textarea} {...rest} style={{ height: `${BASE_TEXTAREA_HEIGHT}px` }} />
			{(value?.length === 0 || value === undefined) && <p>{placeholder}</p>}
		</div>
	)
}
