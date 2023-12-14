import { MapView, Header } from '../../components';

function Map() {
  return (
    <div>
      <Header />
      <h2>Mapa de la UNLaR</h2>
      <MapView width={200} />
    </div>
  );
}

export default Map;
