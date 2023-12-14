import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';

function MapView() {
  return (
    <MapContainer
      center={{ lat: -29.430461, lng: -66.870191 }}
      zoom={24}
      scrollWheelZoom={true}
      style={{ height: '90vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Markers />
    </MapContainer>
  );
}

export default MapView;
