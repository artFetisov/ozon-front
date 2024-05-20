import { FC, useState } from 'react'
import styles from './RadioGroup.module.scss'
import { Radio } from '../Radio/Radio'
import { TypeUserGender } from '@/types/user/user.types'

export interface IRadioGroupItem {
	title: string
	value: TypeUserGender
}

interface IRadioGroupProps {
	label: string
	valuesArray: IRadioGroupItem[]
}

export const RadioGroup: FC<IRadioGroupProps> = ({ label, valuesArray }) => {
	const [selectedItem, setSelectedItem] = useState(valuesArray[0])

	const handleSetSelectedItem = (item: IRadioGroupItem) => {
		setSelectedItem(item)
	}

	return (
		<div className={styles.radioGroup}>
			<div className={styles.label}>{label}:</div>
			{valuesArray.map((item) => (
				<Radio key={item.title} item={item} selectedItem={selectedItem} onChange={handleSetSelectedItem} />
			))}
		</div>
	)
}
