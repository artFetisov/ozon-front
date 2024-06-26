import styles from './NetworkErrorBanner.module.scss'

export const NetworkErrorBanner = () => {
	return (
		<div className={styles.container}>
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' className={styles.orange}>
				<path
					fill='currentColor'
					d='M4.376 14.56 9.35 5.557c1.147-2.077 4.155-2.077 5.302 0l4.973 9.001c1.104 2-.354 4.441-2.651 4.441H7.027c-2.297 0-3.755-2.442-2.65-4.44m7.62-6.588c-.552 0-1 .449-1 1.003v4.014a1.002 1.002 0 1 0 2.001 0V8.975c0-.554-.448-1.003-1-1.003m0 9.028c.553 0 1.001-.449 1.001-1.003a1.002 1.002 0 1 0-1 1.003'
				></path>
			</svg>
			<div>Не удалось загрузить данные. Проверьте подключение к сети или повторите попытку</div>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
				<path
					fill='currentColor'
					d='M8 16c4.964 0 8-3.036 8-8s-3.036-8-8-8-8 3.036-8 8 3.036 8 8 8M6.85 5.594 8 6.743l1.15-1.15a.889.889 0 1 1 1.256 1.258L9.257 8l1.15 1.15a.889.889 0 1 1-1.258 1.256L8 9.257l-1.15 1.15a.889.889 0 1 1-1.256-1.258L6.743 8l-1.15-1.15a.889.889 0 0 1 1.258-1.256'
				></path>
			</svg>
		</div>
	)
}
