/* Отправляет email/password на сервер и получает данные пользователя.*/

import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { State, AppDispatch } from '../type-state';
import { AuthData } from '../../types/auth-data';
import { saveToken } from '../../services/token';
import { APIRoute } from '../../const';
import { UserData } from '../../types/user-data';

/*UserData - возвращаем данные пользователя*/
/*AuthData - принимаем email, password*/

export const loginAction = createAsyncThunk<UserData, AuthData, {
    state: State;
    dispatch: AppDispatch;
    extra: AxiosInstance; // будет подставлен api
}>(
  'user/login',
  async({email, password}, { extra: api}) => {

    /*1. Делаем POST запрос с email и password*/
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    /* 2. Сохраняем токен в localStorage*/
    saveToken(data.token);
    return data;
  },
);
