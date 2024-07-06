import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppRootState, AppDispatch } from '.'
import { RedirectType } from 'next/navigation'

type ThunkApiConfig = {
	state: AppRootState
	extra: { redirect: (url: string, type?: RedirectType | undefined) => never }
	dispatch: AppDispatch
}

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>()
