'use client'

import styles from './NoticeBanner.module.scss'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import cn from 'classnames'
import { CookieBanner } from './cookie-banner/CookieBanner'
import { NetworkErrorBanner } from './network-error-banner/NetworkErrorBanner'

export const NoticeBanner = () => {
	const bannerContent = useTypedSelector((state) => state.app.bannerContent)
	const isShowBanner = useTypedSelector((state) => state.app.isShowBanner)

	return (
		<div
			className={cn(styles.noticeBanner, {
				[styles.show]: isShowBanner,
				[styles.hide]: !isShowBanner,
			})}
		>
			{bannerContent === 'cookie' && <CookieBanner />}
			{bannerContent === 'network' && <NetworkErrorBanner />}
		</div>
	)
}
