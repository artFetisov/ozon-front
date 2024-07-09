import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import styles from './InputAdminSearch.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedMyInputPropsType = Pick<DefaultInputPropsType, 'type'>

type InputAdminSearchPropsType = SelectedMyInputPropsType & {
	value: string
	onChange: (value: string) => void
}

export const InputAdminSearch: FC<InputAdminSearchPropsType> = ({ value, onChange, type, ...props }) => {
	const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.currentTarget.value)
	}

	return (
		<>
			<label className={styles.input}>
				<input type={type} {...props} value={value} onChange={handleChangeValue} />
				<span className={styles.searchIcon}>
					<svg height={24} width={24}>
						<path
							fill='currentColor'
							d='M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.281 4.955l4.419 4.33a1 1 0 1 1-1.4 1.43l-4.444-4.357A8 8 0 0 1 3 11Z'
						></path>
					</svg>
				</span>
				{value.length === 0 && <p className={styles.placeholder}>Поиск</p>}
			</label>
		</>
	)
}
