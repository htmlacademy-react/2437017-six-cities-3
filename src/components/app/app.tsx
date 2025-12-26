import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import { AppRoute } from '../../const.ts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = { AppRoute.MAIN }
          element = { <MainPage /> }
        />
        <Route
          path = { AppRoute.OFFER }
          element = { <OfferPage/ >}
        />
        <Route
          path = { AppRoute.FAVORITE }
          element = { <FavoritesPage/> }
        />
        <Route
          path = { AppRoute.LOGIN }
          element = { <LoginPage/> }
        />
        <Route
          path = '*'
          element = { <NotFoundPage/> }
        />
      </Routes>
    </BrowserRouter>
  );
}
