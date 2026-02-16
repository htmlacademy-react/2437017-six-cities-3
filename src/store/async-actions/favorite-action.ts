import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../type-state';
import { Offer } from '../../types/offer-data';
import { APIRoute } from '../../const';

type ChangeFavoriteStatus = {
  offerId: string;
  status: number;
}

export const favoriteAction = createAsyncThunk<Offer, ChangeFavoriteStatus, {
state: State;
dispatch: AppDispatch;
extra: AxiosInstance;
}>(
  'card/favorite',
  async({offerId, status}, {extra:api }) => {
    const result = await api.post<Offer>(`${APIRoute.Favorites}/${offerId}/${status}`);

    return result.data;

  }
);
