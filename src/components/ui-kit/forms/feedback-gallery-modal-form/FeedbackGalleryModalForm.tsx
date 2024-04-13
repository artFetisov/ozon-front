import { FC, useState, MouseEvent } from 'react'
import { IconButton } from '../../icon-button/IconButton'
import { Textarea } from '../../textarea/Textarea'
import styles from './FeedbackGalleryModalForm.module.scss'

export const FeedbackGalleryModalForm: FC = () => {
	const [textareaValue, setTextareaValue] = useState('')

	const handleSetValue = (value: string) => {
		setTextareaValue(value)
	}

	const submitForm = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		alert(textareaValue)
		setTextareaValue('')
	}

	return (
		<form className={styles.textareaForm}>
			<Textarea
				value={textareaValue}
				setValue={handleSetValue}
				placeholder='Ваш комментарий к отзыву'
				minHeight='small'
			/>

			<div className={styles.sendIcon}>
				<IconButton
					onClick={submitForm}
					// active={getValues().comment?.trim().length > 0}
					svgSize={24}
					// style={{ borderRadius: '50%', padding: '4px' }}
					disabled={textareaValue.trim().length === 0}
				>
					<path
						fill='currentColor'
						d='M4.361 2.23a1 1 0 0 1 1.086-.124l18 9a1 1 0 0 1 0 1.788l-18 9a1 1 0 0 1-1.409-1.169l2-7a1 1 0 0 1 .646-.674l6-2a1 1 0 0 1 .632 1.898l-5.5 1.833-1.23 4.307L20.764 12 6.586 4.911l1.376 4.814a1 1 0 1 1-1.924.55l-2-7a1 1 0 0 1 .323-1.044'
					></path>
				</IconButton>
			</div>
		</form>
	)
}
