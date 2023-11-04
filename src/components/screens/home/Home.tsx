import { FC } from 'react'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { productsMock } from '@/mock/products'
import styles from './Home.module.scss'

export const Home: FC = () => {
	return <div className={styles.homeWrapper}>
		<div className={styles.home}>
			<Selection items={productsMock} headingText={'Лучшие предложения'} />
			<Selection items={productsMock.slice(0, 5)} headingText={'Рекомендуем для вас'} />
			<Selection items={productsMock} headingText={'Лучшие предложения'} />
			<Selection items={productsMock.slice(0, 5)} headingText={'Рекомендуем для вас'} />
		</div>
	</div>
}