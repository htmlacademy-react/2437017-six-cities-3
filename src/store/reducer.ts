import { createReducer } from '@reduxjs/toolkit';

import { fetchAllOffers } from './async-actions/offers-action';
import { toggleFavorite, requireAuthorization } from './action';

import { Offer } from '../types/types-props';
import { RequestStatus, AuthorizationStatus } from '../const';

type OffersState = {
  offers: Offer[];
  status: RequestStatus;
  authorizationStatus: AuthorizationStatus;
}

const initialState:OffersState = {
  offers: [],
  status: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
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

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(toggleFavorite, (state, action) => {
      const offer = state.offers.find((o) => o.id === action.payload);
      if (offer) {
        // Инвертируем isFavorite
        offer.isFavorite = !offer.isFavorite;
      }
    });
});
