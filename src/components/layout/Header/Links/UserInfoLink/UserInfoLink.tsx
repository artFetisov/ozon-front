import { Button } from '@/components/ui-kit/button/Button'
import { Popup } from '@/components/ui-kit/popup/Popup'
import { PATHS } from '@/constants/paths'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useModal } from '@/hooks/useModal'
import { LayoutModal } from '@/components/ui-kit/modals/LayoutModal'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import styles from '../Links.module.scss'
import { LoginModal } from '@/components/ui-kit/modals/login-modal/LoginModal'
import { usePopup } from '@/hooks/usePopup'

interface IUserInfoLinkProps {
	isAuth: boolean
}

export const UserInfoLink: FC<IUserInfoLinkProps> = ({ isAuth }) => {
	const { isOpenModal, openModal, closeModal } = useModal()
	const {
		handleMouseLeavePopup,
		isHoveredElement,
		isHoveredPopup,
		handleMouseEnterPopup,
		handleMouseEnterElement,
		handleMouseLeaveElement,
		targetRef,
		coordinates,
	} = usePopup<HTMLDivElement>()

	const userName = useTypedSelector((state) => state.user.userData?.name)

	const router = useRouter()

	const handleShowModal = () => {
		openModal()
	}

	const handleLinkClick = () => {
		isAuth ? handleNavigateToMain() : handleShowModal()
	}

	const handleNavigateToMain = () => {
		router.push(PATHS.MY_MAIN)
		handleMouseLeavePopup()
	}

	return (
		<>
			{isOpenModal &&
				createPortal(
					<LayoutModal variant='dark' close={closeModal} Content={<LoginModal close={closeModal} />} />,
					document.body
				)}
			{(isHoveredElement || isHoveredPopup) &&
				createPortal(
					<Popup
						size={{ width: 274, max: 274 }}
						position='bottom-center'
						coordinates={coordinates}
						isShow={isHoveredElement}
						onMouseEnter={handleMouseEnterPopup}
						onMouseLeave={handleMouseLeavePopup}
					>
						<div>
							Войдите, чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и баллами.
						</div>
						<Button variant='small' color='blue' style={{ marginTop: '16px' }} isFullWidth onClick={handleShowModal}>
							Войти или зарегестрироваться
						</Button>
					</Popup>,
					document.body
				)}
			<div
				ref={targetRef}
				onClick={handleLinkClick}
				className={styles.link}
				onMouseEnter={handleMouseEnterElement}
				onMouseLeave={handleMouseLeaveElement}
			>
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8.3 4.286c.016.015.185.165.5.323.376.187.971.391 1.8.391.829 0 1.425-.204 1.8-.391.175-.088.355-.19.5-.323a1 1 0 0 1 1.407 1.421C15.587 16.827 14.357 18 12 18c-2.358 0-3.587-1.173-3.707-1.293A1 1 0 0 1 9.7 15.286Z'
					></path>
					<path
						fill='currentColor'
						d='M11 2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12a11 11 0 0 1 6.23-9.914 1 1 0 0 1 1.36.524c.292.72.69 1.565 1.362 2.233C10.592 5.481 11.524 6 13 6a1 1 0 1 1 0 2c-2.024 0-3.458-.743-4.459-1.74-.6-.596-1.027-1.267-1.34-1.875A9 9 0 1 0 12 3a1 1 0 0 1-1.001-1Z'
					></path>
				</svg>
				<span>{!isAuth ? 'Войти' : userName}</span>
			</div>
		</>
	)
}
