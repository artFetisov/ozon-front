import { FC } from 'react'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { selectionItemsArray } from '@/mock/selectionItems'
import styles from './Home.module.scss'


export const Home: FC = () => {
	return <div className={styles.homeWrapper}>
		<div className={styles.home}>
			<Selection items={selectionItemsArray} headingText={'Лучшие предложения'} />
			<Selection items={selectionItemsArray.slice(0, 5)} headingText={'Рекомендуем для вас'} />
			<Selection items={selectionItemsArray} headingText={'Лучшие предложения'} />
			<Selection items={selectionItemsArray.slice(0, 5)} headingText={'Рекомендуем для вас'} />
		</div>
	</div>
}