'use client'

import { FC, useEffect, useRef, useState } from 'react'
import styles from './Selection.module.scss'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { SelectionItem } from '@/components/ui-kit/selection/SelectionItem'
import { IProduct } from '@/types/product/product.types'

interface ISelection {
	items: IProduct[]
	headingText: string
}

export const Selection: FC<ISelection> = ({ headingText, items }) => {
	const [width, setWidth] = useState(0)
	const ref = useRef<HTMLDivElement>()

	const handleResize = () => setWidth((ref?.current?.clientWidth / 100 * (100 / items.length) - 16) | 0)

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return <div className={styles.selectionWrapper}>
		<Heading text={headingText} />
		<div className={styles.itemsWrapper} ref={ref}>
			{items && items.map((i, ind) =>
				<SelectionItem
					key={i.price + '---' + ind}
					size={width}
					item={i} />)}
		</div>
	</div>
}