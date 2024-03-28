import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: '1',
    title: 'Nice room with good view',
    type: 'Room',
    price: 60,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'img/room.jpg',
    description: 'Est. Pellentesque est. Amet imperdiet vel mattis vel odio. Efficitu.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Iron',
      'Dryer'
    ],
    host: {
      hostName: 'Alex',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/120'
    },
    images: [
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg'
    ],
    maxAdults: 2
  }, {
    id: '2',
    title: 'Luxury house with all amenities',
    type: 'House',
    price: 150,
    isPremium: true,
    isFavorite: true,
    rating: 5,
    bedrooms: 3,
    maxAdults: 4,
    previewImage: 'img/house.jpg',
    description: 'Sapien habitasse amet, mattis vitae dapibus cras mattis in orci.',
    images: [
      'img/house.jpg',
      'img/house.jpg',
      'img/house.jpg',
      'img/house.jpg',
      'img/house.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    host: {
      hostName: 'John',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/121'
    },
    goods: [
      'Wi-Fi',
      'Cable TV',
      'Coffee machine',
      'Balcony',
      'Jacuzzi',
      'Kitchen',
      'Washing machine'
    ]
  }, {
    id: '3',
    title: 'Hotel in the city center',
    type: 'Hotel',
    price: 100,
    isPremium: true,
    isFavorite: true,
    rating: 4,
    bedrooms: 2,
    maxAdults: 2,
    previewImage: 'img/hotel.jpg',
    description: 'Tortor, velit ultricies. Ornare augue accumsan elit. Malesuada integer pellentesqu.',
    images: [
      'img/hotel.jpg',
      'img/hotel.jpg',
      'img/hotel.jpg',
      'img/hotel.jpg',
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Ann',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/126'
    },
    goods: [
      'Wi-Fi',
      'Dryer',
      'Balcony',
      'Cable TV'
    ]
  }, {
    id: '4',
    title: 'Good apartments for travelers',
    type: 'Apartment',
    price: 110,
    isPremium: true,
    isFavorite: false,
    rating: 4,
    bedrooms: 2,
    maxAdults: 3,
    previewImage: 'img/apartment.jpg',
    description: 'Arcu eget vel mollis sit habitasse venenatis platea morbi molestie.',
    images: [
      'img/apartment.jpg',
      'img/apartment.jpg',
      'img/apartment.jpg',
      'img/apartment.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Bill',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/127'
    },
    goods: [
      'Wi-Fi',
      'Cable TV',
      'Coffee machine',
      'Balcony',
      'Washing machine'
    ]
  },
];
