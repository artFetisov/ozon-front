import { useState } from 'react'

export const useFocus = () => {
	const [isFocused, setIsFocused] = useState(false)

	const onFocus = () => {
		setIsFocused(true)
	}

	const onBlur = () => {
		setIsFocused(false)
	}

	return { onFocus, onBlur, isFocused }
}
