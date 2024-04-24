import { useState } from 'react'

export const useField = (initialFocus: boolean) => {
	const [isFocused, setIsFocused] = useState(initialFocus)
	const [fieldValue, setFieldValue] = useState('')
	const [fieldError, setFieldError] = useState('')

	return { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused }
}
