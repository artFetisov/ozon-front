import { FC } from 'react'
import styles from './Questions.module.scss'
import { SendQuestionForm } from './send-question-form/SendQuestionForm'
import { IQuestion } from '@/types/question/question.types'
import { Question } from './question/Question'

interface IQuestionProps {
	questions: IQuestion[]
	productTitle: string
	productMainImage: string
}

export const Questions: FC<IQuestionProps> = ({ questions, productMainImage, productTitle }) => {
	return (
		<>
			<div className={styles.col}>
				<SendQuestionForm />
				<div className={styles.questionList}>
					{questions.map((q) => (
						<Question
							question={q}
							key={q.id + '-' + q.date}
							productMainImage={productMainImage}
							productTitle={productTitle}
						/>
					))}
				</div>
			</div>
		</>
	)
}
