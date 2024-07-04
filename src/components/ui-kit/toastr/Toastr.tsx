'use client'

import styles from './Toastr.module.scss'
import cn from 'classnames'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import { useEffect, useRef } from 'react'

export const Toastr = () => {
	const isShowToastr = useTypedSelector((state) => state.app.isShowToastr)
	const text = useTypedSelector((state) => state.app.toastrText)

	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const { setIsShowToastr } = useActions()

	const handleClose = () => {
		setIsShowToastr({ bool: false, text: '' })
	}

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			handleClose()
		}, 5000)

		return () => clearTimeout(timerRef.current)
	}, [])

	return (
		<div
			className={cn(styles.toastr, {
				[styles.show]: isShowToastr,
				[styles.hide]: !isShowToastr,
			})}
		>
			<div className={styles.innerBox}>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' className={styles.remove} onClick={handleClose}>
					<path
						fill='currentColor'
						d='M8 16c4.964 0 8-3.036 8-8s-3.036-8-8-8-8 3.036-8 8 3.036 8 8 8M6.85 5.594 8 6.743l1.15-1.15a.889.889 0 1 1 1.256 1.258L9.257 8l1.15 1.15a.889.889 0 1 1-1.258 1.256L8 9.257l-1.15 1.15a.889.889 0 1 1-1.256-1.258L6.743 8l-1.15-1.15a.889.889 0 0 1 1.258-1.256'
					></path>
				</svg>
				<div className={styles.text}>{text}</div>
			</div>
		</div>
	)
}
