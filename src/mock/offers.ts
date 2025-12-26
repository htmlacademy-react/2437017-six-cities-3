//интерфейс для пропсов
export interface Offer {
  id?: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  // city: {
  //   name: string;
  //   location: {
  //     latitude: number;
  //     longitude: number;
  //     zoom: number;
  //   };
  // };
  // location: {
  //   latitude: number;
  //   longitude: number;
  //   zoom: number;
  // };
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
}


const offers :Offer[] = [
  {
    id: 'b5dee896-9d51-4f8c-a877-8831d20d70ea',
    title: 'Wood and stone place',
    type: 'room',
    price: 182,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    // city: {
    //   name: 'Paris',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13
    //   }
    // },
    // location: {
    //   latitude: 48.868610000000004,
    //   longitude: 2.342499,
    //   zoom: 16
    // },
    isFavorite: false,
    isPremium: true,
    rating: 1.5
  },
  {
    id: '0682d4a1-8428-4765-b0d9-3f44c5c528cd',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 294,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    // city: {
    //   name: 'Paris',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13
    //   }
    // },
    // location: {
    //   latitude: 48.858610000000006,
    //   longitude: 2.330499,
    //   zoom: 16
    // },
    isFavorite: false,
    isPremium: false,
    rating: 1.1
  },
  {
    id: 'a3e35beb-863f-450c-954a-26d9c2589a49',
    title: 'The Joshua Tree House',
    type: 'house',
    price: 595,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    // city: {
    //   name: 'Paris',
    //   location: {
    //     latitude: 48.85661,
    //     longitude: 2.351499,
    //     zoom: 13
    //   }
    // },
    // location: {
    //   latitude: 48.834610000000005,
    //   longitude: 2.335499,
    //   zoom: 16
    // },
    isFavorite: false,
    isPremium: true,
    rating: 2.3
  },
];

export { offers };
