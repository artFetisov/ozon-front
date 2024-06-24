'use client'

import styles from './NoticeBanner.module.scss'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import cn from 'classnames'

export const NoticeBanner = () => {
	const BannerContent = useTypedSelector((state) => state.app.BannerContent)
	const isShowBanner = useTypedSelector((state) => state.app.isShowBanner)

	return (
		<div
			className={cn(styles.noticeBanner, {
				[styles.show]: isShowBanner,
				[styles.hide]: !isShowBanner,
			})}
		>
			{BannerContent && BannerContent}
		</div>
	)
}
