import { FC, useState } from 'react'
import styles from './Radio.module.scss'
import cn from 'classnames'
import { IRadioGroupItem } from '../radio-group/RadioGroup'
import { TypeUserGender } from '@/types/user/user.types'

interface IRadioGroup {
	item: IRadioGroupItem
	selectedItem: TypeUserGender
	onChange: (value: TypeUserGender) => void
}

export const Radio: FC<IRadioGroup> = ({ item, selectedItem, onChange }) => {
	const [hovered, setHovered] = useState(false)

	const handleMouseLeave = () => {
		setHovered(false)
	}

	const handleMouseEnter = () => {
		setHovered(true)
	}

	const handleChangeValue = () => {
		onChange(item.value)
	}

	return (
		<label
			className={styles.radio}
			onClick={handleChangeValue}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<input type='radio' className={styles.input} value={item.value} onChange={handleChangeValue} />
			<span
				className={cn(styles.circle, {
					[styles.selected]: item.value === selectedItem,
					[styles.hovered]: hovered && item.value !== selectedItem,
				})}
			></span>
			<div>{item.title}</div>
		</label>
	)
}
