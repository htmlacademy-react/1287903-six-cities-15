
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offer, Offers } from '../../types/offers';
import { City } from '../../types/city';
import './map.css';

type MapProps = {
  mapType: 'cities' | 'offer';
  city: City;
  offers: Offers;
  cardHoverId?: Offer['id'] | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

function Map({ mapType, city, offers, cardHoverId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: offer.id === cardHoverId ? currentCustomIcon : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, offers, cardHoverId]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return (
    <section
      className={`${mapType}__map map`}
      ref={mapRef}
      data-testid='map'
    >
    </section>
  );
}

export default Map;
