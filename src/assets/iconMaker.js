import iconMarker from '/logo.svg';
import L from 'leaflet';

const iconMaker = L.icon({
  iconUrl: iconMarker,
  iconRetinaUrl: iconMarker,
  iconAnchor: null,
  shadowAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  iconSize: [30, 30],
  className: 'leaflet-venue-icon',
});

export default iconMaker;
