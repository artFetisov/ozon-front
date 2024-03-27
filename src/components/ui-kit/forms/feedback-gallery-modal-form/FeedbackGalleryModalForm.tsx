import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IconButton } from '../../icon-button/IconButton'
import { Textarea } from '../../textarea/Textarea'
import { ISendingCommentForm } from '@/types/feedback/feedback.types'
import styles from './FeedbackGalleryModalForm.module.scss'
import { Button } from '../../button/Button'

export const FeedbackGalleryModalForm: FC = () => {
	const [textareaValue, setTextareaValue] = useState('')

	const { control, handleSubmit, watch, getValues, resetField } = useForm<ISendingCommentForm>()

	useEffect(() => {
		const subscription = watch((value) => setTextareaValue(value.comment || ''))
		return () => subscription.unsubscribe()
	}, [watch])

	const onSubmit: SubmitHandler<ISendingCommentForm> = async (data) => {
		alert(data.comment)
		resetField('comment')
	}

	return (
		<form className={styles.textareaForm} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				rules={{ maxLength: 100 }}
				name='comment'
				control={control}
				defaultValue={''}
				render={({ field: { value, onChange } }) => (
					<Textarea value={value} onChange={onChange} placeholder='Ваш комментарий к отзыву' minHeight='small' />
				)}
			/>
			<div className={styles.sendIcon}>
				<IconButton
					type='submit'
					// active={getValues().comment?.trim().length > 0}
					svgSize={24}
					style={{ borderRadius: '50%', padding: '4px' }}
					// disabled={getValues().comment?.trim().length === 0 || getValues().comment === undefined}
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
