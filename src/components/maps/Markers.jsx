import { Marker, Popup } from 'react-leaflet';
import { markers } from '../../constants/makerMap';
import iconMarker from '../../assets/iconMaker';

function Markers() {
  return markers.map((marker) => {
    return (
      <Marker key={marker.name} position={marker.position} icon={iconMarker}>
        <Popup>{marker.name}</Popup>
      </Marker>
    );
  });
}

export default Markers;
