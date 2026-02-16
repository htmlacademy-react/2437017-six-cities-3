import { createReducer } from '@reduxjs/toolkit';

import { fetchAllOffers } from './async-actions/offers-action';
import { fetchOfferById } from './async-actions/offer-action';

import { toggleFavorite } from './action';
import { requireAuthorization } from './action';
import { loginAction } from './async-actions/login-action';

import { Offer } from '../types/offer-data';
import { RequestStatus, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';


type OffersState = {
  offers: Offer[];
  offer: Offer | null;
  status: RequestStatus;
  authStatus: AuthorizationStatus;
  userData: UserData | null;

}

const initialState:OffersState = {
  offers: [],
  offer: null,
  status: RequestStatus.Idle,
  authStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(fetchAllOffers.pending, (state) => {
      state.status = RequestStatus.Loading;
    })

    .addCase(fetchAllOffers.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.offers = action.payload;
    })

    .addCase(fetchAllOffers.rejected, (state) => {
      state.status = RequestStatus.Failed;
    })

    .addCase(fetchOfferById .pending, (state) => {
      state.status = RequestStatus.Loading;
    })

    .addCase(fetchOfferById.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.offer = action.payload;
    })

    .addCase(fetchOfferById .rejected, (state) => {
      state.status = RequestStatus.Failed;
      state.offer = null;
    })

    .addCase(loginAction.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.authStatus = AuthorizationStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.userData = null;
      state.authStatus = AuthorizationStatus.NoAuth;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })

    .addCase(toggleFavorite, (state, action) => {
      const offer = state.offers.find((o) => o.id === action.payload);
      if (offer) {
        // Инвертируем isFavorite
        offer.isFavorite = !offer.isFavorite;
      }
    });
});
