'use client'

import { FC, ReactNode, useState } from 'react'
import styles from './NoticeBanner.module.scss'

interface INoticeBannerProps {
	Content?: ReactNode
}

export const NoticeBanner: FC<INoticeBannerProps> = ({ Content }) => {
	const [isShowBanner, setIsShowBanner] = useState(true)

	const handleSetIsShowBanner = (bool: boolean) => {
		setIsShowBanner(bool)
	}

	return <div className={styles.noticeBanner}>{Content && Content}</div>
}
