import { Reviews } from '../types/reviews';

export const reviews: Reviews = [
  {
    id: '1',
    comment: 'Ornare accumsan luctus vel urna sit dolor lectus lorem elit. Quis, adipiscing augue platea ha.',
    date: 'June 2020',
    rating: 5,
    user: {
      name: 'Tom',
      avatarUrl: 'https://i.pravatar.cc/101',
      isPro: true
    }
  },
  {
    id: '2',
    comment: 'Eleifend lectus arcu accumsan sit vel efficitur dictum vel sed dapibus non venenatis et. Ame.',
    date: 'May 2022',
    rating: 4,
    user: {
      name: 'Nancy',
      avatarUrl: 'https://i.pravatar.cc/102',
      isPro: false
    }
  },
  {
    id: '3',
    comment: 'Nunc interdum vulputate amet, dui quam, dolor dictum. Leo, et. Dictumst. Vulputate mattis integer pulvina.',
    date: 'August 2019',
    rating: 3,
    user: {
      name: 'Katy',
      avatarUrl: 'https://i.pravatar.cc/103',
      isPro: false
    }
  },
];
