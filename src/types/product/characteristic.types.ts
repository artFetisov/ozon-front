export interface ICharacteristics {
	id: number
	about: ICharacteristic[]
}

export interface ICharacteristic {
	property: string | number
	value: string | number
}
