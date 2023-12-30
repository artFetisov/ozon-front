import { FC, MouseEvent, ReactNode } from 'react'
import styles from './LayoutModal.module.scss'

interface ILayoutModalProps {
	close: (event: MouseEvent<HTMLDivElement>) => void
	Content?: ReactNode
}

export const LayoutModal: FC<ILayoutModalProps> = ({ Content, close }) => {
	return (
		<div className={styles.modalContainer} onClick={close}>
			<div onClick={(e) => e.stopPropagation()}>{Content && Content}</div>
		</div>
	)
}
