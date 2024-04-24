import { useState } from 'react'

export const useField = () => {
	const [isFocused, setIsFocused] = useState(true)
	const [fieldValue, setFieldValue] = useState('')
	const [fieldError, setFieldError] = useState('')

	return { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused }
}
