import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
	const [width, setWidth] = useState(0)

	const handleResize = () => setWidth(window.screen.width)

	useEffect(() => {
		handleResize()

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return width
}