import { FC } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import Image from 'next/image'

export const Footer: FC = () => {
	return <footer className={styles.footer}>
		<div className={styles.footerBox}>
			<div className={styles.jobBox}>
				<Link className={styles.logo} href={PATHS.HOME}>
					<Image width={140} height={23} alt={'Ozon Job'} src={'https://ir.ozone.ru/s3/cms/12/tdb/group_357672.png'} />
				</Link>
				<div className={styles.linksBox}>
					<Link href={PATHS.HOME} className={styles.link}>
					<span>
						<svg width={24} height={24} className={styles.icon}>
							<path fill='currentColor'
										d='M11 20v1H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-1a3 3 0 0 0-3-3H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4a1 1 0 1 0 0 2h4a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6a1 1 0 0 1 1 1Z'>

							</path>
						</svg>
					</span>
						<span>IT</span>
					</Link>
					<Link href={PATHS.HOME} className={styles.link}>
						<span>
						<svg width={24} height={24} className={styles.icon}>
							<path fill='currentColor'
										d='m21.867 15.127.244-.028a1 1 0 0 0 .889-.994V8a1 1 0 0 0-1-1h-3V6a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v1H2a1 1 0 0 0-1 1v6.105a1 1 0 0 0 .889.994l.244.028.437 3.493A5 5 0 0 0 7.53 23h8.938a5 5 0 0 0 4.961-4.38l.437-3.493ZM7 6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a1 1 0 0 0 1 1h3v4.211l-6 .67V13a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v.882l-6-.67V9h11a1 1 0 1 0 0-2H7V6Zm4 9.01a.8.8 0 0 0 0-.022V14h2v2h-2v-.99Zm-2 .884V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.106l4.823-.539-.377 3.017A3 3 0 0 1 16.469 21H7.53a3 3 0 0 1-2.977-2.628l-.377-3.017 4.823.54Z'>

							</path>
						</svg>
					</span>
						<span>Офис</span>
					</Link>
					<Link href={PATHS.HOME} className={styles.link}>
						<span>
						<svg width={24} height={24} className={styles.icon}>
							<path fill='currentColor' d='M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'></path>
							<path fill='currentColor'
										d='M23 14a2 2 0 0 1-2 2v3a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a2 2 0 0 1 2 2v4Zm-4 5v-3h-4a4 4 0 0 1 0-8h1a1 1 0 1 1 0 2h-1a2 2 0 1 0 0 4h6v-4h-1a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1Z'>

							</path>
						</svg>
					</span>
						<span>Финтех</span>
					</Link>
					<Link href={PATHS.HOME} className={styles.link}>
						<span>
						<svg width={24} height={24} className={styles.icon}>
							<path fill='currentColor'
										d='m1.427 8.18 10-7a1 1 0 0 1 1.146 0l10 7A1 1 0 0 1 23 9v13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 .427-.82ZM3 21h2v-4a1 1 0 0 1 1-1h2v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4h2a1 1 0 0 1 1 1v4h2V9.52l-9-6.3-9 6.3V21Zm10-3v3h4v-3h-1v1a1 1 0 1 1-2 0v-1h-1Zm-6 3h4v-3h-1v1a1 1 0 1 1-2 0v-1H7v3Zm3-8v3h4v-3h-1v1a1 1 0 1 1-2 0v-1h-1Z'>

							</path>
						</svg>
					</span>
						<span>Фулфилмент</span>
					</Link>
					<Link href={PATHS.HOME} className={styles.link}>
						<span>
						<svg width={24} height={24} className={styles.icon}>
							<path fill='currentColor'
										d='M8 14a1 1 0 0 1 1 1c0 .612.285 1.072.805 1.418.549.366 1.343.582 2.195.582a1 1 0 1 1 0 2c-1.148 0-2.354-.284-3.305-.918C7.715 17.428 7 16.388 7 15a1 1 0 0 1 1-1Z'>
							</path>
							<path fill='currentColor'
										d='M12 1c-1.384 0-2.5.277-3.28.56a7.76 7.76 0 0 0-.91.397 4.65 4.65 0 0 0-.326.186c-.485.31-.61.954-.308 1.426.053.082.163.244.335.457a7.81 7.81 0 0 0 1.03 1.05c.927.784 2.347 1.632 4.318 1.914a1 1 0 1 0 .283-1.98c-1.691-.241-2.835-1.013-3.517-1.646A7.696 7.696 0 0 1 12 3c1.365 0 2.659.32 3.577.922C16.457 4.498 17 5.327 17 6.5c0 1.238-.791 2.312-1.902 3.194a6.587 6.587 0 0 0-.761-.546C13.38 8.56 11.952 8 10 8c-4.052 0-7 2.948-7 7 0 2.63 1.331 4.664 3.237 6.005C8.121 22.331 10.581 23 13 23c2.432 0 4.426-.677 5.832-1.86A5.977 5.977 0 0 0 21 16.5c0-1.543-.625-2.646-1.253-3.352a5.097 5.097 0 0 0-.857-.769 3.9 3.9 0 0 0-.391-.246c-.49-.265-1.134-.099-1.393.42a1.001 1.001 0 0 0 .44 1.338s.085.047.189.12c.138.099.328.252.518.466.372.419.747 1.066.747 2.023 0 1.206-.496 2.3-1.457 3.11-.97.817-2.475 1.39-4.543 1.39-2.08 0-4.12-.581-5.612-1.63C5.919 18.336 5 16.87 5 15c0-2.948 2.052-5 5-5 1.548 0 2.619.44 3.288.852.592.364.89.721.918.756a1 1 0 0 0 1.349.224C17.115 10.792 19 9.031 19 6.5c0-1.933-.957-3.354-2.327-4.251C15.34 1.377 13.635 1 12 1Z'>
							</path>
						</svg>
					</span>
						<span>Fresh</span>
					</Link>
					<Link href={PATHS.HOME} className={styles.link}>
						<span>
						<svg width={24} height={24} className={styles.icon}>
							<path fill='currentColor'
										d='M1 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3v12h1.17a3.001 3.001 0 0 1 5.66 0H12V8a1 1 0 0 1 1-1h3.078a5 5 0 0 1 3.904 1.877l1.922 2.403A5 5 0 0 1 23 14.403V18a1 1 0 0 1-1 1h-1.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H2a1 1 0 0 1-1-1V4Zm13 13h1.17a3.001 3.001 0 0 1 5.66 0H21v-2.597a3 3 0 0 0-.657-1.874l-1.923-2.403A3 3 0 0 0 16.077 9H14v2h2a1 1 0 1 1 0 2h-2v4Zm-6 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm10-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'>

							</path>
						</svg>
					</span>
						<span>Логистика</span>
					</Link>
					<Link href={PATHS.HOME} className={styles.link}>
						<span>
						<svg width={24} height={24} className={styles.icon}>
							<path fill='currentColor'
										d='M13.447 2.101 8.256 4.673a.958.958 0 0 0-.434 1.29l1.725 3.44a.97.97 0 0 0 1.297.43l5.19-2.572a.958.958 0 0 0 .435-1.289l-1.726-3.44a.97.97 0 0 0-1.296-.43ZM9.984 5.965l3.46-1.715.863 1.72-3.46 1.715-.863-1.72Zm6.482 2.156-5.19 2.572a.958.958 0 0 0-.435 1.29l1.726 3.439a.97.97 0 0 0 1.296.431l5.191-2.572a.958.958 0 0 0 .434-1.289l-1.725-3.44a.97.97 0 0 0-1.297-.43Zm-3.463 3.864 3.46-1.715.863 1.72-3.46 1.715-.863-1.72Z'>
							</path>
							<path fill='currentColor'
										d='M4.555 4.159a1 1 0 0 1 1.34.447l6.552 13.066 9.106-4.54a1.001 1.001 0 0 1 1.341.446.996.996 0 0 1-.447 1.338l-9.45 4.71A2.497 2.497 0 0 1 10.5 22C9.12 22 8 20.884 8 19.508c0-1.177.817-2.162 1.916-2.424L4.553 6.389l-1.106.551a1.001 1.001 0 0 1-1.341-.446.996.996 0 0 1 .447-1.337l2.002-.998Z'>
							</path>
						</svg>
					</span>
						<span>Работа на складе</span>
					</Link>
				</div>
			</div>
			<div className={styles.infoBox}>
				<div className={styles.barcode}>
					barcode
				</div>
				<div>
					right side
				</div>
			</div>
		</div>
	</footer>
}