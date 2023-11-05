import { useEffect, useRef, useState } from 'react'

export const useScrollForHeader = () => {
	const [scrollPosition, setScrollPosition] = useState<number>(0)
	const [isHideHeader, setIsHideHeader] = useState<boolean>(false)

	const target = useRef<HTMLHeadingElement | null>(null)

	const handleScroll = (e: HTMLElementEventMap['scroll']) => {
		const eventTarget = e.target as HTMLElement

		if (!isHideHeader && target.current?.scrollHeight < scrollPosition) {
			setIsHideHeader(true)
		}
		if (isHideHeader && target.current?.scrollHeight > scrollPosition) {
			setIsHideHeader(false)
		}

		setScrollPosition(Math.floor(eventTarget.scrollTop))
	}

	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll)

		return () => {
			document.body.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	return { scrollPosition, target, isHideHeader }
}
