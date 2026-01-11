import {SITIES} from '../../../const.ts';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

interface TabsFragmentProps {
  activeCity: string;
  setactiveCity: (city: string) => void;
}

export default function TabsFragment (props:TabsFragmentProps): JSX.Element {

  const {activeCity, setactiveCity} = props;

  // const [activeCity, setactiveCity] = useState('Paris');

  function getActiveClass (city: string): string {
    return city === activeCity ? 'tabs__item--active' : '';
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {SITIES.map((city) => (
            <li className="locations__item" key={city}>
              <Link to = '' className= {`locations__item-link tabs__item ${getActiveClass(city)}`}
                onClick = {() => {
                  setactiveCity(city);
                }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
