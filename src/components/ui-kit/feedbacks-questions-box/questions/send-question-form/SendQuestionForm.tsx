import { Button } from '@/components/ui-kit/button/Button'
import { Textarea } from '@/components/ui-kit/textarea/Textarea'
import { currentAuthUser } from '@/mock/user'
import { getNameWithInitials } from '@/utils/user/name'
import { FC, useState, MouseEvent, MouseEventHandler } from 'react'
import styles from './SendQuestionForm.module.scss'

export const SendQuestionForm: FC = () => {
	const [textareaValue, setTextareaValue] = useState('')
	const [isShowFullForm, setIsShowFullForm] = useState(false)

	const handleSetValue = (value: string) => {
		setTextareaValue(value)
	}

	const submitForm = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		alert(textareaValue)
		setTextareaValue('')
	}

	const handleShowFullForm = () => {
		setIsShowFullForm(true)
	}

	const handleCloseFullForm = () => {
		setIsShowFullForm(false)
	}

	return (
		<form className={styles.form}>
			{isShowFullForm && (
				<svg width={24} height={24} className={styles.clsBtn} onClick={handleCloseFullForm}>
					<path
						fill='currentColor'
						d='m12 10.586 6.293-6.295a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.294a1 1 0 1 1-1.414 1.415L12 13.414 5.707 19.71a1 1 0 0 1-1.414-1.415L10.586 12 4.293 5.706A1 1 0 1 1 5.707 4.29z'
					></path>
				</svg>
			)}
			<div className={styles.heading}>Задайте вопрос о товаре</div>
			<div style={{ marginTop: '8px' }}>
				Вам ответит продавец, представитель бренда или пользователь, купивший этот товар. Пришлем уведомление, когда
				поступит ответ
			</div>
			<div className={styles.textareaBox} onClick={handleShowFullForm}>
				<Textarea
					placeholder='Напишите свой вопрос'
					value={textareaValue}
					setValue={handleSetValue}
					minHeight='small'
				/>
				{isShowFullForm && <div className={styles.lengthCounter}>Введено символов {textareaValue.length}/3000</div>}
			</div>
			{isShowFullForm && (
				<div className={styles.submitBtnBox}>
					<div className={styles.name}>
						Вы оставляете отзыв как:
						<span>{getNameWithInitials(currentAuthUser.name, currentAuthUser.lastName)}</span>
					</div>
					<Button variant='small' color='blue' isFullWidth={false} onClick={submitForm}>
						Отправить вопрос
					</Button>
				</div>
			)}
		</form>
	)
}
