import { MediaCard, Header } from '../../components';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import * as getEventsThunk from '../../redux/thunks/thunks';
import { useEffect } from 'react';

function Events() {
  const { events, isLoading } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventsThunk.getEvents());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Typography
        variant='h4'
        align='center'
        fontWeight={600}
        color={'#f5167e'}
        textTransform={'uppercase'}
        paddingY={3}
      >
        Eventos{' '}
      </Typography>

      <Grid container gap={3} alignItems={'center'} justifyContent={'center'}>
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          events.map((event) => (
            <Grid key={event._id}>
              <MediaCard
                description={event.description}
                title={event.name}
                idEvent={event._id}
                imageURl={event.imageURL || '/public/default.jpg'}
                dateValue={event.date}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default Events;
