import HeaderScreen from '../../components/header-screen/header-screen.tsx';
import TabsScreen from './components/tabs-screen/tabs-screen.tsx';
import SortingScreen from './components/sorting-screen/sorting-screen.tsx';
import CardScreen from '../../components/card-screen/card-screen.tsx';
import MapScreen from '../../components/map-screen/map-screen.tsx';
import { Cards } from '../../mosk/offers.ts';

export default function MainScreen () {
  return (
    <div className="page page--gray page--main">
      <HeaderScreen/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsScreen/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortingScreen/>
              <div className="cities__places-list places__list tabs__content">
                { Cards.map((card) => (
                  <CardScreen
                    key = {card.id}
                    title = {card.title}
                    type = {card.type}
                    price = {card.price}
                    previewImage = {card.previewImage}
                    isPremium = {card.isPremium}
                    rating = {card.rating}
                  />
                ))};
              </div>
            </section>
            <MapScreen/>
          </div>
        </div>
      </main>
    </div>
  );
}


