import { useState, useRef, useEffect } from 'react'

export const useCounter = (initialValue = 20, cb: () => void) => {
	const [counter, setCounter] = useState(initialValue)
	const [counterNumber, setCounterNumber] = useState(1)

	const timerRef = useRef<ReturnType<typeof setInterval>>()

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setCounter((count) => {
				if (count === 0) {
					clearInterval(timerRef.current)
					return 0
				} else {
					return (count -= 1)
				}
			})
		}, 1000)

		return () => {
			clearInterval(timerRef.current)
		}
	}, [counterNumber])

	const handleGetNewCode = async () => {
		await cb()
		setCounterNumber((num) => num + 1)
		setCounter(59)
	}

	return { counter, handleGetNewCode }
}
