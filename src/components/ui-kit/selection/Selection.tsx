'use client'

import { FC, useLayoutEffect, useRef, useState } from 'react'
import styles from './Selection.module.scss'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { SelectionItem } from '@/components/ui-kit/selection/SelectionItem'
import { IProduct } from '@/types/product/product.types'

interface ISelection {
	rowTotalItems: number
	items: IProduct[]
	headingText: string
}

export const Selection: FC<ISelection> = ({ headingText, items, rowTotalItems }) => {
	const [size, setSize] = useState(0)
	const parentRef = useRef<HTMLDivElement | null>(null)
	const itemWidth = 100 / rowTotalItems

	const handleResize = () => {
		if (parentRef.current) {
			setSize(Math.round(parentRef.current?.offsetWidth / 100) * (100 / rowTotalItems) - 16)
		}
	}

	// useEffect(() => {
	// 	if (parentRef.current) {
	// 		window.addEventListener('resize', handleResize)
	// 	}

	// 	return () => {
	// 		window.removeEventListener('resize', handleResize)
	// 	}
	// }, [parentRef])

	// useLayoutEffect(() => {
	// 	const handleResize = () => {
	// 		if (parentRef.current) setSize(Math.round(parentRef.current?.offsetWidth / 100) * (100 / rowTotalItems) - 16)
	// 	}
	// 	handleResize()
	// 	window.addEventListener('resize', handleResize)

	// 	return () => {
	// 		window.removeEventListener('resize', handleResize)
	// 	}
	// }, [parentRef])

	useLayoutEffect(() => {
		handleResize()
	}, [])

	return (
		<div className={styles.selectionWrapper}>
			<Heading text={headingText} />
			<div className={styles.itemsWrapper} ref={parentRef}>
				{items && items.map((i, ind) => <SelectionItem key={i.price + '---' + ind} size={size} item={i} />)}
			</div>
		</div>
	)
}
