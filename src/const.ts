const Setting = {
  VALUE_CARD: 10,
};

const SITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

enum AppRoute {
  MAIN = '/',
  LOGIN = '/login',
  FAVORITE = '/favorites',
  OFFER = '/offer/:id',
}

export{Setting, SITIES, AppRoute};
