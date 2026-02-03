const Setting = {
  VALUE_CARD: 10,
};

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const RATING_STARS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' }
] as const;

const SORTINGS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth ='AUTH',
  NoAuth ='NO_AUTH',
  Unknown ='UNKNOWN',
}

export{Setting, CITIES, RATING_STARS, AppRoute, AuthorizationStatus, SORTINGS};
