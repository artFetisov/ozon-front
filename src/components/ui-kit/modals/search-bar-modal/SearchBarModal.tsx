import { FC, MouseEvent } from 'react'
import styles from './SearchBarModal.module.scss'
import { categoriesMock } from '@/mock/categories'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS } from '@/constants/paths'

export const SearchBarModal = ({
	close,
}: {
	close: (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
}) => {
	return (
		<div className={styles.searchBarModal}>
			<button className={styles.closeBtn} onClick={close}>
				<svg width={16} height={16}>
					<path
						fill='currentColor'
						d='M2.533 2.533a1.25 1.25 0 0 1 1.768 0l3.7 3.7 3.699-3.7A1.25 1.25 0 0 1 13.466 4.3L9.767 8l3.7 3.7a1.25 1.25 0 1 1-1.768 1.767L8 9.767l-3.7 3.7A1.25 1.25 0 1 1 2.534 11.7L6.233 8l-3.7-3.7a1.25 1.25 0 0 1 0-1.767Z'
					></path>
				</svg>
			</button>
			<div className={styles.modalContent}>
				<div className={styles.categoriesLinks}>
					<div className={styles.catsLink}>
						<div className={styles.iconWrapper}>
							<span>
								<Image
									src='https://ir.ozone.ru/s3/cms/29/tf0/ic_m_search_filled.svg'
									alt='search'
									height={24}
									width={24}
								/>
							</span>
						</div>
						<div className={styles.title}>Везде</div>
					</div>
				</div>

				<div className={styles.categoriesLinks}>
					{categoriesMock.map((c) => (
						<Link href={`${PATHS.CATEGORY}` + c.slug} key={c.id} className={styles.catsLink}>
							<div className={styles.iconWrapper}>
								<span>
									<Image
										src='https://ir.ozone.ru/s3/cms/29/tf0/ic_m_search_filled.svg'
										alt='search'
										height={24}
										width={24}
									/>
								</span>
							</div>
							<div className={styles.title}>{c.title}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
