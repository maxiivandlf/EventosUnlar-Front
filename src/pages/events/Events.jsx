import {
  MediaCard,
  Header,
  FormCreateEvent,
  ButtomFilter,
} from '../../components';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import * as EventsThunk from '../../redux/thunks/thunks';
import { useEffect } from 'react';
import useEventFilter from '../../hooks/useEventFilter';

function Events() {
  const { events, isLoading } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const { filteredEvents, filterCriteria, updateFilterCriteria, resetFilters } =
    useEventFilter(events);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    updateFilterCriteria(name, value);
  };

  useEffect(() => {
    dispatch(EventsThunk.getEvents());
  }, [dispatch]);
  return (
    <Box component={'main'}>
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

      <ButtomFilter
        filterCriteria={filterCriteria}
        handleFilterChange={handleFilterChange}
        resetFilter={resetFilters}
      />

      <Grid container gap={3} alignItems={'center'} justifyContent={'center'}>
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
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
  );
}

export default Events;
