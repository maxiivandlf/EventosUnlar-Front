import {
  MediaCard,
  Header,
  ButtomFilter,
  FormCreateEvent,
  PopUp,
  Footer,
} from '../../components';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import * as EventsThunk from '../../redux/thunks/thunks';
import { useEffect } from 'react';
import useEventFilter from '../../hooks/useEventFilter';

function Events() {
  const { events, isLoading } = useSelector((state) => state.events);
  const { filteredEvents, filterCriteria, updateFilterCriteria, resetFilters } =
    useEventFilter(events);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    updateFilterCriteria(name, value);
  };

  const handlebutton = () => {
    console.log('Clikeando');
  };

  useEffect(() => {
    dispatch(EventsThunk.getEvents());
  }, [dispatch]);
  return (
    <Box component={'main'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <PopUp>
          <FormCreateEvent />
        </PopUp>
        <Typography
          variant='h4'
          align='center'
          fontWeight={600}
          color={'#f5167e'}
          textTransform={'uppercase'}
          paddingY={3}
          width={'100%'}
        >
          Eventos{' '}
        </Typography>
      </Box>
      <Box component={'section'}>
        <Box
          component={'header'}
          width={'100%'}
          display={'flex'}
          justifyContent={'end'}
          alignItems={'end'}
        >
          <ButtomFilter
            filterCriteria={filterCriteria}
            handleFilterChange={handleFilterChange}
            resetFilter={resetFilters}
          />
        </Box>

        <Grid container gap={3} alignItems={'center'} justifyContent={'center'}>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                minHeight: '50vh',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            filteredEvents.map((event) => (
              <Grid key={event._id}>
                <MediaCard
                  description={event.description}
                  title={event.name}
                  idEvent={event._id}
                  imageURL={event.imageURL || '/public/default.jpg'}
                  dateValue={event.dateEvent}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Events;
