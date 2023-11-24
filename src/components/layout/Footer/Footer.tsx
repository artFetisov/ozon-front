import { FC } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import Image from 'next/image'
import { footerLinksFour, footerLinksOne, footerLinksThree, footerLinksTwo } from '@/mock/footer'
import { Button } from '@/components/ui-kit/button/Button'

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
				<div className={styles.barcodeBox}>
					<Image className={styles.barcode} height={190} width={190}
								 src={'https://ir.ozone.ru/s3/cms/28/t9c/qr-code_1.png'} />
					<p>Наведите камеру и скачайте бесплатное приложение Ozon</p>
					<div className={styles.icons}>
						<Image height={42} width={42} src={'https://ir.ozone.ru/s3/cms/0e/ta0/group_357649.png'} />
						<Image height={42} width={42} src={'https://ir.ozone.ru/s3/cms/9b/te1/group_357648.png'} />
						<Image height={42} width={42} src={'https://ir.ozone.ru/s3/cms/20/tcc/group_357647.png'} />
						<Image height={42} width={42} src={'https://ir.ozone.ru/s3/cms/f7/tb3/rustore_desk.svg'} />
					</div>
				</div>
				<div className={styles.infoBoxRightSide}>
					<div className={styles.links}>
						<div className={styles.linksList}>
							<span>{footerLinksOne.title}</span>
							{footerLinksOne.links.map((l) => <Link className={styles.link} key={l.title}
																										 href={l.link}>{l.title}</Link>)}
						</div>
						<div className={styles.linksList}>
							<span>{footerLinksTwo.title}</span>
							{footerLinksTwo.links.map((l) => <Link className={styles.link} key={l.title}
																										 href={l.link}>{l.title}</Link>)}
						</div>
						<div className={styles.linksList}>
							<span>{footerLinksThree.title}</span>
							{footerLinksThree.links.map((l) => <Link className={styles.link} key={l.title}
																											 href={l.link}>{l.title}</Link>)}
						</div>
						<div className={styles.linksList}>
							<span>{footerLinksFour.title}</span>
							{footerLinksFour.links.map((l) => <Link className={styles.link} key={l.title}
																											href={l.link}>{l.title}</Link>)}
						</div>
					</div>
					<div className={styles.footerEnd}>
						<div className={styles.icons}>
							<Link href={PATHS.HOME}>
								<svg width={24} height={24}>
									<path fill='currentColor'
												d='M12.893 18C6.06 18 2.163 13.495 2 6h3.423c.112 5.502 2.636 7.832 4.634 8.312V6h3.223v4.745c1.974-.204 4.048-2.367 4.748-4.745h3.223a8.976 8.976 0 0 1-1.544 3.43 9.383 9.383 0 0 1-2.841 2.552 9.813 9.813 0 0 1 3.238 2.48A9.365 9.365 0 0 1 22 18h-3.548a5.912 5.912 0 0 0-1.913-2.895 6.29 6.29 0 0 0-3.259-1.393V18h-.387Z'>

									</path>
								</svg>
							</Link>
							<Link href={PATHS.HOME}>
								<svg width={24} height={24}>
									<path fill='currentColor'
												d='M11.953 12.329A5.415 5.415 0 0 1 8.21 10.82 5.067 5.067 0 0 1 6.651 7.2a5.129 5.129 0 0 1 1.553-3.648A5.48 5.48 0 0 1 11.953 2 5.449 5.449 0 0 1 14 2.395a5.306 5.306 0 0 1 1.73 1.13 5.11 5.11 0 0 1 1.144 1.69c.262.63.39 1.305.38 1.985a4.921 4.921 0 0 1-.385 1.973 5.056 5.056 0 0 1-1.148 1.672 5.252 5.252 0 0 1-1.73 1.11 5.39 5.39 0 0 1-2.038.373Zm0-7.266a2.254 2.254 0 0 0-1.589.65 2.13 2.13 0 0 0-.474.718 2.075 2.075 0 0 0-.146.84c-.005.279.05.555.16.812.111.258.275.49.482.684.207.193.453.344.722.442.27.098.557.141.845.128.285.006.57-.042.836-.143.266-.1.51-.25.715-.443.205-.192.37-.422.482-.676.113-.254.173-.527.175-.804.01-.286-.04-.572-.146-.84a2.13 2.13 0 0 0-.474-.717 2.213 2.213 0 0 0-.726-.482 2.273 2.273 0 0 0-.862-.17Zm2.135 11.54 3.019 2.848c.14.136.251.297.327.474a1.42 1.42 0 0 1-.327 1.592c-.13.151-.294.273-.479.356a1.43 1.43 0 0 1-1.656-.356l-3.02-2.849-2.945 2.85a1.476 1.476 0 0 1-.505.326c-.19.073-.394.108-.599.1a1.8 1.8 0 0 1-1.104-.427 1.458 1.458 0 0 1-.328-.474 1.42 1.42 0 0 1 .328-1.591l3.092-2.85a15.575 15.575 0 0 1-3.166-1.353 1.555 1.555 0 0 1-.68-.934 1.509 1.509 0 0 1 .165-1.132c.112-.172.26-.32.433-.436a1.58 1.58 0 0 1 1.202-.233c.206.042.401.125.573.242a7.09 7.09 0 0 0 3.572.961 7.09 7.09 0 0 0 3.57-.961 1.582 1.582 0 0 1 1.2-.245c.206.04.402.12.576.236.174.115.321.264.433.436.21.335.28.734.198 1.117a1.55 1.55 0 0 1-.64.949 16.221 16.221 0 0 1-3.24 1.353Z'></path>
								</svg>
							</Link>
							<Link href={PATHS.HOME}>
								<svg width={24} height={24}>
									<path fill='currentColor'
												d='M3.375 10.888c5.369-2.258 8.949-3.747 10.74-4.466 5.114-2.053 6.177-2.41 6.87-2.422.152-.002.493.034.713.207a.74.74 0 0 1 .262.481c.025.139.055.454.031.7-.277 2.811-1.476 9.633-2.086 12.781-.259 1.333-.767 1.78-1.259 1.823-1.07.095-1.881-.682-2.917-1.338-1.621-1.025-2.537-1.664-4.11-2.665-1.818-1.156-.64-1.792.396-2.831.272-.272 4.984-4.41 5.075-4.785.011-.047.022-.221-.086-.314-.108-.092-.266-.06-.381-.036-.163.036-2.752 1.688-7.768 4.957-.735.487-1.4.724-1.997.712-.658-.014-1.923-.359-2.863-.654-1.153-.362-2.07-.553-1.99-1.168.041-.32.498-.647 1.37-.982Z'></path>
								</svg>
							</Link>
						</div>
						<div>
							<Link href={PATHS.HOME} className={styles.agreement}>
								© 1998 – 2023 ООО «Интернет Решения». Все права защищены.
							</Link>
							<Button variant={'large'}>
								<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style={{ marginRight: '6px' }}>
									<path fill='currentColor'
												d='M8 5a2.947 2.947 0 0 0-2.84 2.158l-.002.01-.908 3.147A4.989 4.989 0 0 1 6 10c1.494 0 2.834.655 3.75 1.693A3.983 3.983 0 0 1 12 11c.835 0 1.61.256 2.25.693A4.988 4.988 0 0 1 18 10c.463 0 .912.063 1.338.181L18.06 6.914v-.001A3 3 0 0 0 15.264 5H15a1 1 0 1 1 0-2h.264a5 5 0 0 1 4.66 3.187l2.707 6.924a5 5 0 1 1-9.382.326A1.99 1.99 0 0 0 12 13a1.99 1.99 0 0 0-1.25.438 5 5 0 1 1-9.406-.265l1.89-6.555A4.947 4.947 0 0 1 8 3a1 1 0 0 1 0 2Zm-2 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12 0a3 3 0 1 0-.002 6A3 3 0 0 0 18 12Z'></path>
								</svg>
								<span>Для слабовидящих</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
}