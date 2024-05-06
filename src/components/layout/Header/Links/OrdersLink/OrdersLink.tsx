import { PATHS } from '@/constants/paths'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../Links.module.scss'
import { usePopup } from '@/hooks/usePopup'
import { Popup } from '@/components/ui-kit/popup/Popup'
import { createPortal } from 'react-dom'

interface IOrdersLinkProps {
	isAuth?: boolean
	countItems?: number
}

export const OrdersLink: FC<IOrdersLinkProps> = ({ isAuth, countItems }) => {
	const {
		handleMouseLeavePopup,
		isHoveredElement,
		isHoveredPopup,
		handleMouseEnterPopup,
		handleMouseEnterElement,
		handleMouseLeaveElement,
	} = usePopup()

	return (
		<>
			{(isHoveredElement || isHoveredPopup) &&
				createPortal(
					<Popup isShow={isHoveredElement} onMouseEnter={handleMouseEnterPopup} onMouseLeave={handleMouseLeavePopup}>
						<div>popup</div>
					</Popup>,
					document.body
				)}
			<Link
				className={styles.link}
				href={PATHS.MY_ORDER_LIST}
				onMouseEnter={handleMouseEnterElement}
				onMouseLeave={handleMouseLeaveElement}
			>
				{isAuth && <span className={styles.control}>{countItems}</span>}
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M12.486 1.126a1 1 0 0 0-.972 0l-9 5A1 1 0 0 0 2 7v9.98a1.003 1.003 0 0 0 .515.894l9 5a1 1 0 0 0 .989-.01l8.982-4.99A1 1 0 0 0 22 17V7a1 1 0 0 0-.514-.874l-9-5ZM11 20.3l-7-3.888V8.7l2 1.11V13a1 1 0 1 0 2 0v-2.078l3 1.666v7.713ZM7.5 8.356 5.06 7 12 3.144 14.441 4.5l-6.94 3.856ZM9.56 9.5l6.94-3.856L18.941 7l-6.94 3.856L9.558 9.5ZM13 20.3v-7.712L20 8.7v7.712L13 20.3Z'
					></path>
				</svg>
				<span>{'Заказы'}</span>
			</Link>
		</>
	)
}
