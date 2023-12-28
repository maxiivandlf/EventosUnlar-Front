import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventId } from '../../api/services/eventServices';
import { Box, Typography, CircularProgress } from '@mui/material';
import { MapView } from '../../components';
import formatDate from '../../utils/formatDate';
import svgCalendar from '../../assets/calendar.png';
import { set } from 'date-fns';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState([]);
  const [dateFormated, setDateFormated] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const image = event.imageURL ? event.imageURL : '/public/default.webp';

  const getEvent = async (id) => {
    setIsLoading(true);
    const response = await getEventId(id);
    setEvent(response.data);
    setDateFormated(formatDate(response.data.dateEvent));
    setIsLoading(false);
  };

  useEffect(() => {
    getEvent(eventId);
    window.scrollTo(0, 0);
  }, [eventId]);

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
      {isLoading ? (
        <Box
          sx={{
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant='h3' color={'white'}>
            {event.name}
          </Typography>
          <Box
            component={'section'}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '1rem',
              backgroundColor: 'var(--color-surface-600)',
              padding: '1rem',
              borderRadius: '10px',
              width: '100%',
              minHeight: '500px',
              overflowY: 'hidden',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img
                src={image}
                alt=''
                style={{
                  width: '70%',
                  paddingBottom: '1rem',
                  borderRadius: '10px',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: '1rem',
                  backgroundColor: 'var(--color-primary-600)',
                  padding: '1rem',
                  borderRadius: '10px',
                  width: '80%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100px',
                    height: '100px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${svgCalendar})`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='body1'
                    color={'white'}
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      color: 'var(--color-primary-200)',
                    }}
                    paddingTop={2}
                  >
                    {dateFormated.day}
                  </Typography>
                </Box>

                <Typography
                  variant='body1'
                  color={'white'}
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}
                >
                  {dateFormated.month}
                </Typography>
                <Typography
                  variant='h6'
                  color={'white'}
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}
                >
                  {dateFormated.year}
                </Typography>
              </Box>
              <Typography
                variant='body1'
                color={'white'}
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                }}
              >
                {`${dateFormated.hour} Hs`}
              </Typography>
              <Typography
                variant='body1'
                color={'white'}
                sx={{ fontWeight: 'bold' }}
              >
                {event.description}
              </Typography>
            </Box>
            <MapView
              width={'100%'}
              height={'500px'}
              lat={event.lat}
              lng={event.lng}
              marker={{ name: event.name, description: event.description }}
              styleComponent={{
                maxHeight: '500px',
                maxWidth: '500px',
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default EventDetails;
