import { FC, MouseEvent } from 'react'
import styles from './SearchBarModal.module.scss'
import { categoriesMock } from '@/mock/categories'
import Link from 'next/link'
import Image from 'next/image'
import { PATHS } from '@/constants/paths'
import { CloseButton } from '../../close-button/CloseButton'

export const SearchBarModal = ({
	close,
}: {
	close: (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
}) => {
	return (
		<div className={styles.searchBarModal}>
			<CloseButton callback={close} />
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
