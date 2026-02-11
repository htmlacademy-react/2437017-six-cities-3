// хранилище мы должны обновлять на основании действия.
import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUser = createAction(
  'user/set',
  (email: string, token: string) => ({
    payload: { email, token }
  })
);


export const toggleFavorite = createAction('card/Favorite', (id:string) => ({payload: id,}));


