import { useEffect, useRef, useState } from 'react'

export const usePopup = <T>() => {
	const [coordinates, setCoordinates] = useState<DOMRect>()
	const [isHoveredElement, setIsHoveredElement] = useState(false)
	const [isHoveredPopup, setIsHoveredPopup] = useState(false)

	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const targetRef = useRef<T | null>(null)

	useEffect(() => {
		const handleGetElementRect = () => {
			const curTarget = targetRef.current as HTMLElement
			setCoordinates(curTarget.getBoundingClientRect())
		}

		handleGetElementRect()

		return () => clearTimeout(timerRef.current)
	}, [])

	const handleMouseEnterElement = () => {
		setIsHoveredElement(true)
	}

	const handleMouseLeaveElement = () => {
		// setIsHoveredElement(false)
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
