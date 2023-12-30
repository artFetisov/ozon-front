'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { Store } from '@reduxjs/toolkit'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<ToolkitStore>()
	if (storeRef && !storeRef.current) {
		storeRef.current = store
	}

	return <Provider store={storeRef?.current as Store}>{children}</Provider>
}
