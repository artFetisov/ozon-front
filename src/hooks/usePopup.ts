import { useEffect, useRef, useState } from 'react'

export const usePopup = () => {
	const [coordinates, setCoordinates] = useState<DOMRect>()
	const [isHoveredElement, setIsHoveredElement] = useState(false)
	const [isHoveredPopup, setIsHoveredPopup] = useState(false)

	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const targetRef = useRef<HTMLDivElement | HTMLAnchorElement | null>(null)

	useEffect(() => {
		const handleGetElementRect = () => {
			setCoordinates(targetRef?.current?.getBoundingClientRect())
		}

		handleGetElementRect()
	}, [])

	useEffect(() => () => clearTimeout(timerRef.current), [])

	const handleMouseEnterElement = () => {
		timerRef.current = setTimeout(() => setIsHoveredElement(true), 400)
	}

	const handleMouseLeaveElement = () => {
		timerRef.current = setTimeout(() => setIsHoveredElement(false), 300)
	}

	const handleMouseEnterPopup = () => {
		clearTimeout(timerRef.current)
		setIsHoveredPopup(true)
	}

	const handleMouseLeavePopup = () => {
		setIsHoveredElement(false)
		setIsHoveredPopup(false)
	}

	return {
		handleMouseLeavePopup,
		isHoveredElement,
		isHoveredPopup,
		handleMouseEnterElement,
		handleMouseEnterPopup,
		handleMouseLeaveElement,
		targetRef,
		coordinates,
	}
}
