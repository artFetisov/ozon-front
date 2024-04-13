import { Button } from '@/components/ui-kit/button/Button'
import { FC, useState } from 'react'
import styles from './CartQuantityButtonGroup.module.scss'
import { useRouter } from 'next/navigation'
import { PATHS } from '@/constants/paths'

interface ICartQuantityButtonGroupProps {
	setCartQuantity: (number: number) => void
	cartQuantity: number
}

export const CartQuantityButtonGroup: FC<ICartQuantityButtonGroupProps> = ({ setCartQuantity, cartQuantity }) => {
	const [isLiked, setIsLiked] = useState(false)

	const router = useRouter()

	const handleToCart = () => {
		router.push(PATHS.CART)
	}

	const handleSetIsLiked = () => {
		setIsLiked(!isLiked)
	}

	return (
		<>
			{!cartQuantity ? (
				<>
					<Button color='blue' variant='large' onClick={() => setCartQuantity(1)}>
						Добавить в корзину
					</Button>
					<Button
						color='lightBlue'
						variant='large'
						style={{ width: '56px' }}
						isIcon
						onClick={handleSetIsLiked}
						isLiked={isLiked}
					>
						<svg width={24} height={24}>
							<path
								fill='currentColor'
								d='M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.5 21.5 0 0 0 12 19.91a21.6 21.6 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5m5 17c-.316-.02-.56-.147-.848-.278a23.5 23.5 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.6 23.6 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278'
							></path>
						</svg>
					</Button>
				</>
			) : (
				<>
					<div className={styles.btnGroup}>
						<Button color='green' variant='large' isFullWidth={false} onClick={handleToCart}>
							Перейти в корзину
						</Button>
						<Button
							variant='large'
							color='lightBlue'
							style={{ marginLeft: '4px' }}
							isFullWidth={false}
							onClick={() => setCartQuantity(cartQuantity - 1)}
						>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
								<path fill='currentColor' d='M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z'></path>
							</svg>
						</Button>
						<span className={styles.counter}>{cartQuantity}</span>
						<Button
							variant='large'
							color='lightBlue'
							isFullWidth={false}
							onClick={() => setCartQuantity(cartQuantity + 1)}
						>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
								<path
									fill='currentColor'
									d='M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1'
								></path>
							</svg>
						</Button>
					</div>
					<Button variant='large' color='lightBlue' isFullWidth={false} onClick={handleSetIsLiked} isLiked={isLiked}>
						<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24}>
							<path
								fill='currentColor'
								d='M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.5 21.5 0 0 0 12 19.91a21.6 21.6 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5m5 17c-.316-.02-.56-.147-.848-.278a23.5 23.5 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.6 23.6 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278'
							></path>
						</svg>
					</Button>
				</>
			)}
		</>
	)
}
