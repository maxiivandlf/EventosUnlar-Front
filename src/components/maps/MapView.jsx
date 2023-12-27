import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';
import { marker } from 'leaflet';

function MapView({ width, lat = -29.430461, lng = -66.870191, marker }) {
  return (
    <MapContainer
      center={{ lat: lat, lng: lng }}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: '80vh', width: width }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Markers />
      <Marker position={{ lat: lat, lng: lng }}>
        <Popup>
          <span>{marker.name}</span>
          <br />
          <span>{marker.description}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;
