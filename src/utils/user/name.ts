export const getFirstCapitalLetter = (name?: string): string => {
	return name ? name[0].toUpperCase() : ''
}

export const getNameWithInitials = (name: string, lastName: string): string => {
	return name[0].toUpperCase() + name.slice(1, name.length) + ' ' + lastName[0].toUpperCase() + '.'
}

export const getWordWithFirstCapitalLetter = (word?: string): string => {
	return word ? `${word[0].toUpperCase()}${word.slice(1, word.length)}` : ''
}
