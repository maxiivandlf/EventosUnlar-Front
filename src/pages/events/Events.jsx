import { useParams } from 'react-router-dom';

function Events() {
  const { eventId } = useParams();
  return (
    <div>
      <h1>Eventos </h1>
      {eventId}
    </div>
  );
}

export default Events;
