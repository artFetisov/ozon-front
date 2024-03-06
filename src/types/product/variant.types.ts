export interface IVariants {
	id: number
	title: string
	variants: IVariant[]
}

export interface IVariant {
	id: number
	title: string | number
}
