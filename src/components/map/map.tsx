import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offer, Offers } from '../../types/offers';
import { CityMap } from '../../types/city-map';

type MapProps = {
  mapType: 'cities' | 'offer';
  city: CityMap;
  offers: Offers;
  cardHoverId: Offer['id'] | null;
}

function Map({ mapType, city, offers, cardHoverId }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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

  return (
    <section
      style={mapType === 'offer' ?
        {
          height: '100%',
          minHeight: '500px',
          width: '100%',
          minWidth: '1144px',
          margin: '0, auto'
        }
        : {
          height: '100%'
        }}
      className={`${mapType}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
