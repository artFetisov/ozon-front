import { DetailedHTMLProps, FC, InputHTMLAttributes, MouseEvent, FocusEvent, forwardRef, useState } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'
import { IUserEditNameAndGenderForm } from '@/types/user/user.types'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedMyInputPropsType = Pick<DefaultInputPropsType, 'type' | 'placeholder'>

type MyInputPropsType = SelectedMyInputPropsType & {
	onClear?: (name: keyof IUserEditNameAndGenderForm) => void
	removeName?: keyof IUserEditNameAndGenderForm
	value: string
	onChange: () => void
	error: FieldError | undefined
}

export const HookFormInput = forwardRef<HTMLInputElement, MyInputPropsType>(
	({ placeholder, type, error, value, onClear, removeName, ...props }, ref) => {
		const [isFocused, setIsFocused] = useState(false)

		const onFocus = () => {
			setIsFocused(true)
		}

		const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
			if (event.relatedTarget?.id === 'remove') {
				return
			}
			setIsFocused(false)
		}

		const handleClear = (event: MouseEvent<HTMLDivElement>) => {
			onClear && removeName && onClear(removeName)
		}

		return (
			<>
				<label
					className={cn(styles.input, {
						[styles.erroredBorder]: !!error?.message?.length,
					})}
				>
					<input type={type} {...props} onFocus={onFocus} onBlur={onBlur} value={value} />
					<p
						className={cn(styles.placeholder, {
							[styles.focusedP]: isFocused || !!value,
						})}
					>
						{placeholder}
					</p>

					{isFocused && !!value && (
						<div className={styles.removeBtn}>
							<span draggable onClick={handleClear} tabIndex={0} id='remove'>
								<svg width={16} height={16}>
									<path
										fill='currentColor'
										d='M2.533 2.533a1.25 1.25 0 0 1 1.768 0l3.7 3.7 3.699-3.7A1.25 1.25 0 0 1 13.467 4.3L9.767 8l3.7 3.7a1.25 1.25 0 1 1-1.767 1.767L8 9.767l-3.7 3.7A1.25 1.25 0 1 1 2.534 11.7l3.7-3.7-3.7-3.7a1.25 1.25 0 0 1 0-1.767'
									></path>
								</svg>
							</span>
						</div>
					)}
				</label>
				{error?.message && <div className={styles.error}>{error.message}</div>}
			</>
		)
	}
)

HookFormInput.displayName = 'Input'
