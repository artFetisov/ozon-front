export const getCorrectPhoneNumberView = (value?: string, previousValue?: string): string => {
	if (!value) return ''

	previousValue = previousValue?.replace(/[^\d]/g, '')

	const currentValue = value.replace(/[^\d]/g, '')
	if (!previousValue || currentValue.length > previousValue.length) {
		if (currentValue.length < 4) {
			return currentValue
		}

		if (currentValue.length < 7) {
			return `${currentValue.slice(0, 3)} ${currentValue.slice(3)}`
		}

		if (currentValue.length < 9) {
			return `${currentValue.slice(0, 3)} ${currentValue.slice(3, 6)} ${currentValue.slice(6)}`
		}

		return `${currentValue.slice(0, 3)} ${currentValue.slice(3, 6)} ${currentValue.slice(6, 8)} ${currentValue.slice(
			8
		)}`
	}

	return value
}

export const getPhoneNumberForRequest = (phone: string) => {
	return `+7${phone.replaceAll(' ', '')}`
}
