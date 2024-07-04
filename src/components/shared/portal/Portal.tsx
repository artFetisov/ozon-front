'use client'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FC, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
	children: ReactNode
}

export const Portal: FC<IPortalProps> = ({ children }) => {
	const [mounted, setMounted] = useState(false)

	const isInitialized = useTypedSelector((state) => state.app.isInitialized)

	useEffect(() => {
		setMounted(true)

		return () => setMounted(false)
	}, [])

	return isInitialized && mounted ? createPortal(children, document.querySelector('#portal') as HTMLElement) : null
}
