import { FC } from 'react'
import styles from './CookieBanner.module.scss'
import { Button } from '../../button/Button'

export const CookieBanner: FC = () => {
	return (
		<div className={styles.cookieBanner}>
			<div className={styles.heading}>Используем куки и рекомендательные технологии</div>
			<div className={styles.text}>
				<p>Это чтобы сайт работал лучше.</p>
				<p>Оставаясь с нами, вы&nbsp;соглашаетесь на&nbsp;использование файлов куки.</p>
			</div>
			<Button color='blue' variant='middle'>
				OK
			</Button>
		</div>
	)
}
