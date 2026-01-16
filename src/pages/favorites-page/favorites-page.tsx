// import FooterBlock from '../../components/layout/footer-block.tsx';
import CardBlock from '../../components/card-block/card-block.tsx';
import FavoritesBlock from './components/favorites-empty.tsx';

import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types-props.ts';

interface FavoritesScreenProps {
  offers: Offer[];
}

export default function FavoritesScreen ({offers}: FavoritesScreenProps) {

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  if (favoriteOffers.length === 0) {
    return <FavoritesBlock />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.map((offer) => (
                    <CardBlock
                      key = {offer.id}
                      offer={offer}
                    />
                  ))}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      {/* <FooterBlock/> */}
    </div>
  );
}

