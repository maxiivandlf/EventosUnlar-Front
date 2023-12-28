import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import Landing from './pages/Landing/Landing';
import Map from './pages/Map/Map';
import Events from './pages/events/Events';
import EventDetails from './pages/events/EventDetails';
import EventEdit from './pages/events/EventEdit';
import Page404 from './pages/404/404';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/mapa' element={<Map />} />
        <Route path='/eventos' element={<Events />} />
        <Route path='/eventos/details/:eventId' element={<EventDetails />} />
        <Route path='/eventos/editar/:id' element={<EventEdit />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
