import { useEffect, useRef, useState } from 'react'

export const useScrollForHeader = () => {
	const [scrollPosition, setScrollPosition] = useState<number>(0)
	const [isHideContainer, setIsHideContainer] = useState<boolean>(false)

	const target = useRef<HTMLHeadingElement | null>(null)

	const handleScroll = (e: HTMLElementEventMap['scroll']) => {
		const eventTarget = e.target as HTMLElement

		if (!isHideContainer && target.current?.scrollHeight < scrollPosition) {
			setIsHideContainer(true)
		}
		if (isHideContainer && target.current?.scrollHeight > scrollPosition) {
			setIsHideContainer(false)
		}

		setScrollPosition(Math.floor(eventTarget.scrollTop))
	}

	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll)

		return () => {
			document.body.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	return { target, isHideContainer }
}
