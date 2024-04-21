import { useCallback, useEffect, useRef, useState } from 'react'

export const useScroll = (startedBoxHeight?: number) => {
	const [scrollPosition, setScrollPosition] = useState<number>(0)
	const [isHideContainer, setIsHideContainer] = useState<boolean>(false)

	const target = useRef<HTMLHeadingElement | HTMLDivElement | null>(null)

	const handleScroll = useCallback(
		(event: HTMLElementEventMap['scroll']) => {
			const eventTarget = event.target as HTMLElement

			if (
				!isHideContainer &&
				((target.current?.scrollHeight as number) < scrollPosition ||
					(startedBoxHeight && startedBoxHeight < scrollPosition))
			) {
				setIsHideContainer(true)
			}

			if (
				(isHideContainer && (target.current?.scrollHeight as number) > scrollPosition) ||
				(startedBoxHeight && startedBoxHeight > scrollPosition)
			) {
				setIsHideContainer(false)
			}

			setScrollPosition(Math.floor(eventTarget.scrollTop))
			console.log(scrollPosition)
		},
		[isHideContainer, scrollPosition, startedBoxHeight]
	)

	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll)

		return () => {
			document.body.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	return { target, isHideContainer }
}
