export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type CityList = {
  Paris: string;
  Cologne: string;
  Brussels: string;
  Amsterdam: string;
  Hamburg: string;
  Dusseldorf: string;
};
