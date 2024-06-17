import { FC } from 'react'
import styles from './RadioGroup.module.scss'
import { TypeUserGender } from '@/types/user/user.types'
import { Radio } from '../radio/Radio'

export interface IRadioGroupItem {
	title: string
	value: TypeUserGender
}

interface IRadioGroupProps {
	label: string
	options: IRadioGroupItem[]

	value: TypeUserGender
	onChange: () => void
}

export const RadioGroup: FC<IRadioGroupProps> = ({ label, options, value, onChange }) => {
	return (
		<div className={styles.radioGroup}>
			<div className={styles.label}>{label}:</div>
			{options.map((item) => (
				<Radio key={item.title} item={item} selectedItem={value} onChange={onChange} />
			))}
		</div>
	)
}
