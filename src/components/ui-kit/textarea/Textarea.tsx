import { ChangeEvent, FC, useState } from 'react'
import styles from './Textarea.module.scss'

interface ITextareaProps {
	placeholder: string
	value: string
}

const TEXTAREA_HEIGHT = 28

export const Textarea: FC<ITextareaProps> = ({ placeholder, value }) => {
	const [fieldValue, setFieldValue] = useState('')

	const handleSetFieldValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setFieldValue(event.currentTarget.value)
	}

	return (
		<div className={styles.txtBox}>
			<textarea
				className={styles.textarea}
				style={{ height: `${TEXTAREA_HEIGHT}px` }}
				onChange={handleSetFieldValue}
				value={fieldValue}
			/>
			{fieldValue.length === 0 && <p>{placeholder}</p>}
		</div>
	)
}
