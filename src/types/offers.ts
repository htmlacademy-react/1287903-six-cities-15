export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
      location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
  latitude: number;
  longitude: number;
  zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
  hostName: string;
  avatarUrl: string;
  isPro: boolean;
  };
  images: string[];
  maxAdults: number;
  previewImage: string;
  }

export type Offers = Offer[];
