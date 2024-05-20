import { FC, useState } from 'react'
import styles from './Radio.module.scss'
import cn from 'classnames'
import { IRadioGroupItem } from '../radio-group/RadioGroup'

interface IRadioGroup {
	item: IRadioGroupItem
	selectedItem: IRadioGroupItem
	onChange: (item: IRadioGroupItem) => void
}

export const Radio: FC<IRadioGroup> = ({ item, selectedItem, onChange }) => {
	const [hovered, setHovered] = useState(false)

	const handleMouseLeave = () => {
		setHovered(false)
	}

	const handleMouseEnter = () => {
		setHovered(true)
	}

	return (
		<label
			className={styles.radio}
			onClick={() => onChange(item)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<input type='radio' className={styles.input} />
			<span
				className={cn(styles.circle, {
					[styles.selected]: item.value === selectedItem.value,
					[styles.hovered]: hovered && item.value !== selectedItem.value,
				})}
			></span>
			<div>{item.title}</div>
		</label>
	)
}
