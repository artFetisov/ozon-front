import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import styles from './CheckBox.module.scss'

type DefaultCheckBoxPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MyCheckBoxPropsType = DefaultCheckBoxPropsType & {
	text?: string
}

export const CheckBox: FC<MyCheckBoxPropsType> = ({ text }) => {
	return <label className={styles.label}>
		<input className={styles.input}/>
		{text && <div>{text}</div>}
	</label>
}