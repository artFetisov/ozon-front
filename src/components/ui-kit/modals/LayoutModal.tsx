import { FC } from 'react'
import styles from './LayoutModal.module.scss'

interface ILayoutModalProps {

}

export const LayoutModal: FC<ILayoutModalProps> = ({ children }) => {
	return <div className={styles.modalContainer}>
		{children}
	</div>
}