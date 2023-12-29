import eventIcon from '/iconEvent.svg';
import L from 'leaflet';

const iconEvent = L.icon({
  iconUrl: eventIcon,
  iconRetinaUrl: eventIcon,
  iconAnchor: null,
  shadowAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  iconSize: [30, 30],
  className: 'leaflet-venue-icon',
});

export default iconEvent;
