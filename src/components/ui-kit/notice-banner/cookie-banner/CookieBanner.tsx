import { FC } from 'react'
import styles from './CookieBanner.module.scss'
import { Button } from '../../button/Button'
import { useActions } from '@/hooks/useActions'

export const CookieBanner: FC = () => {
	const { setIsShowBanner } = useActions()

	return (
		<div className={styles.container}>
			<div className={styles.heading}>Используем куки и рекомендательные технологии</div>
			<div className={styles.text}>
				<p>Это чтобы сайт работал лучше.</p>
				<p>Оставаясь с нами, вы&nbsp;соглашаетесь на&nbsp;использование файлов куки.</p>
			</div>
			<Button color='blue' variant='middle' onClick={() => setIsShowBanner(false)}>
				OK
			</Button>
		</div>
	)
}
