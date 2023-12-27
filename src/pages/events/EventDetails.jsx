import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventId } from '../../api/services/eventServices';
import { Box, Typography } from '@mui/material';
import { MapView } from '../../components';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);

  const getEvent = async (id) => {
    const response = await getEventId(id);

    setEvent(response.data);
  };

  useEffect(() => {
    getEvent(eventId);
    window.scrollTo(0, 0);
  }, [eventId]);

  const date = new Date(event.dateEvent);

  return (
    <Box
      component={'main'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography variant='h3' color={'white'}>
        {event.name}
      </Typography>
      <Typography variant='body1' color={'white'}>
        {event.description}
      </Typography>
      <Typography variant='body1' color={'white'}>
        {` Fecha del Evento: ${date.toLocaleDateString('es-AR')}`}
      </Typography>
      <Typography variant='body1' color={'white'}>
        {` Hora del Evento: ${date.toLocaleTimeString('es-AR')}`}
      </Typography>
      <MapView
        width={'100%'}
        lat={event.lat}
        lng={event.lng}
        marker={{ name: event.name, description: event.description }}
      />
    </Box>
  );
}

export default EventDetails;
