import { createAsyncThunk } from '@reduxjs/toolkit';
import { store} from '../../store/index';
import { setError } from '../action';
import { TIMEOUT_SHOW_ERROR } from '../../const';

/*асенхронное действие не связанное с сервером*/
export const clearErrorAction = createAsyncThunk(
  'six-cities/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

/*через 2 сек выполница ф-ция колбэк, которая будет
диспачить для сброса ошибок*/
