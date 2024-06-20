import { getFirstCapitalLetter } from '@/utils/user/name'
import styles from './AvatarRound.module.scss'
import { FC, useRef } from 'react'
import cn from 'classnames'

interface IAvatarRoundProps {
	name?: string
	lastName?: string
	size?: 'small' | 'large'
}

export const AvatarRound: FC<IAvatarRoundProps> = ({ name, lastName, size = 'small' }) => {
	const inputFileRef = useRef<HTMLInputElement | null>(null)

	const handleClickFileInput = () => {
		inputFileRef?.current?.click()
	}

	return (
		<div
			className={cn(styles.circle, {
				[styles.small]: size === 'small',
				[styles.large]: size === 'large',
			})}
		>
			<span>{getFirstCapitalLetter(name)}</span>
			{lastName && <span>{getFirstCapitalLetter(lastName)}</span>}
			{size === 'large' && (
				<div className={styles.backdrop} onClick={handleClickFileInput}>
					<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24}>
						<path
							fill='currentColor'
							d='M12 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-6-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
						></path>
						<path
							fill='currentColor'
							d='M7.871 2.89A2 2 0 0 1 9.535 2h4.93a2 2 0 0 1 1.664.89L17.535 5H19a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h1.465zM21 9a2 2 0 0 0-2-2h-2a1 1 0 0 1-.832-.445L14.465 4h-4.93L7.832 6.555A1 1 0 0 1 7 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'
						></path>
					</svg>
					<input
						accept='.jpg, .jpeg, .png'
						name='Photo'
						type='file'
						style={{ display: 'none' }}
						ref={inputFileRef}
					></input>
				</div>
			)}
		</div>
	)
}
