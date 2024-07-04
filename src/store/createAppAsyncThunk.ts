import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppRootState, AppDispatch } from '.'

type ThunkApiConfig = {
	state: AppRootState
	dispatch: AppDispatch
}

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>()
