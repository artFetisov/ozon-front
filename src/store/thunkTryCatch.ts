// import { AppDispatch, AppRootStateType } from 'app/store';
// import { handleServerNetworkError } from 'common/utils/handle-server-network-error';
// import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
// import { appActions } from 'app/app.reducer';
// import { BaseResponseType} from 'common/types';

// export const thunkTryCatch = async <T>(
//   thunkAPI: BaseThunkAPI<AppRootStateType, unknown, AppDispatch, null | BaseResponseType>,
//   logic: () => Promise<T>
// ): Promise<T | ReturnType<typeof thunkAPI.rejectWithValue>> => {
//   const { dispatch, rejectWithValue } = thunkAPI;
//   dispatch(appActions.setAppStatus({ status: "loading" }));
//   try {
//     return await logic();
//   } catch (e) {
//     handleServerNetworkError(e, dispatch);
//     return rejectWithValue(null);
//   } finally {
//     dispatch(appActions.setAppStatus({ status: "idle" }));
//   }
// };

// пример санки

// const addTask = createAppAsyncThunk<{ task: TaskType }, AddTaskArgType>(
//    'tasks/addTask', (arg, thunkAPI) => {
//      const {dispatch, rejectWithValue} = thunkAPI
//      return thunkTryCatch(thunkAPI, async () => {
//        const res = await todolistsApi.createTask(arg)
//        if (res.data.resultCode === ResultCode.Success) {
//          const task = res.data.data.item
//          return {task}
//        } else {
//          handleServerAppError(res.data, dispatch);
//          return rejectWithValue(null)
//        }
//      })
//    }
//  )
