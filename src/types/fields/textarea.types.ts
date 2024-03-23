import { TextareaHTMLAttributes } from 'react'

interface ITextareaProps {
	placeholder: string
	value: string
}

export type TypeTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & ITextareaProps
