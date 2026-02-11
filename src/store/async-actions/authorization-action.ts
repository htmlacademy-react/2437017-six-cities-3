import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { State, AppDispatch } from '../type-state';
import { APIRoute, AuthorizationStatus } from '../../const';

import { requireAuthorization } from '../action';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance; // будет подставлен api
}>(
  'user/checkAuth',
  async (_age, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
