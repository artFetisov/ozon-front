import { FC } from 'react'
import styles from './Question.module.scss'
import { IQuestion } from '@/types/question/question.types'
import Image from 'next/image'
import { getCorrectDateView } from '@/utils/date/date'
import { getNameWithInitials } from '@/utils/user/name'
import { IconButton } from '@/components/ui-kit/icon-button/IconButton'
import { AvatarRound } from '@/components/ui-kit/user-data-round/AvatarRound'

interface IQuestionProps {
	question: IQuestion
	productTitle: string
	productMainImage: string
}

export const Question: FC<IQuestionProps> = ({ question, productMainImage, productTitle }) => {
	return (
		<div className={styles.question}>
			<div className={styles.questionInfo}>
				<div className={styles.imageBox}>
					<Image src={productMainImage} alt='product image' fill />
				</div>
				<div className={styles.info}>
					<div className={styles.titleAndDate}>
						<div className={styles.title}>{productTitle}</div>
						{/* <Link href={`${PATHS.PRODUCT}${productTitle}/${item.id}`} className={styles.title}>
							{productTitle}
						</Link> */}
						<div className={styles.date}>{getCorrectDateView(question.date)}</div>
					</div>
					<div>
						<div className={styles.qsTitle}>{question.title}</div>
						<div className={styles.authorName}>
							{getNameWithInitials(question.author.name, question.author.lastName)}
						</div>
						<div className={styles.btnBox}>
							<IconButton style={{ borderRadius: '16px' }} svgSize={16} text={`${question.benefitGrade.yes}`}>
								<svg width={16} height={16}>
									<path
										fill='currentColor'
										d='M10.707.293A1 1 0 0 0 9.22.375l-4 5A1 1 0 0 0 5 6v6H3V6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h10.155a2 2 0 0 0 1.972-1.665l.848-5A2 2 0 0 0 13.004 5H11.28l.346-1.385a3.5 3.5 0 0 0-.92-3.322M12.155 12H7V6.35l2.72-3.4a2 2 0 0 1-.033.18L9.03 5.756A1 1 0 0 0 10 7h3.004z'
									></path>
								</svg>
							</IconButton>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.answers}>
				{question.answers?.map((ans) => (
					<div className={styles.answer} key={ans.id + '-' + ans.title}>
						<div className={styles.nameAndDate}>
							<div className={styles.authorInfo}>
								<AvatarRound name={ans.author.name} />
								<span>{getNameWithInitials(ans.author.name, ans.author.lastName)}</span>
							</div>
							<div className={styles.date}>{getCorrectDateView(ans.date)}</div>
						</div>
						<div className={styles.answerInfo}>
							<div className={styles.title}>{ans.title}</div>
							<div className={styles.grade}>
								<div>Вам помог этот ответ?</div>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<IconButton style={{ borderRadius: '16px' }} svgSize={16} text={`Да ${ans.benefit.yes}`}></IconButton>
									<IconButton style={{ borderRadius: '16px' }} svgSize={16} text={`Нет ${ans.benefit.no}`}></IconButton>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
