import { ActionCreator, ActionCreatorsMapObject, AsyncThunk, bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { allActions } from '@/store/rootActions'
import { AppDispatch } from '@/store'

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
	...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>

type BoundActions<Actions extends ActionCreatorsMapObject> = {
	[key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key]
}

type AllActions = typeof allActions

export const useActions = (): BoundActions<AllActions> => {
	const dispatch = useDispatch<AppDispatch>()

	// @ts-ignore
	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
