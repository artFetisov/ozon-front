export const getFirstCapitalLetter = (name?: string) => {
	return name ? name[0].toUpperCase() : 'U'
}

export const getNameWithInitials = (name: string, lastName: string) => {
	return name[0].toUpperCase() + name.slice(1, name.length) + ' ' + lastName[0].toUpperCase() + '.'
}
