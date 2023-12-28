import { useEffect, useState } from 'react';
import { Header, ButtonComponent, MediaCard, Footer } from '../../components';
import styles from './Landing.module.css';
import * as EventsThunk from '../../redux/thunks/thunks';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  CircularProgress,
  Pagination,
  Grid,
  Typography,
} from '@mui/material';

const handleClick = () => {
  console.log('Ver mas detalles del evento');
};

function Landing() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { isLoading, events, totalPages } = useSelector(
    (state) => state.events
  );
  const handleChangePage = (event, value) => {
    setPage(value);
    dispatch(EventsThunk.getEvents(value, 4));
  };
  useEffect(() => {
    dispatch(EventsThunk.getEvents(1, 4));
  }, [dispatch]);
  return (
    <div className={styles.landingContainer}>
      <section className={styles.banner}>
        <div className={styles.blur}>
          {events.length > 0 && (
            <>
              <img
                className={styles.image}
                style={{ maxWidth: '500px' }}
                src={events[0].imageURL}
                alt=''
              />
              <div className={styles.contentText}>
                <h2>{events[0].name}</h2>
                <p>{events[0].description} </p>
                <ButtonComponent
                  width={'170px'}
                  type={'link'}
                  title={'Ver más'}
                  to={`/eventos/details/${events[0]._id}`}
                />
              </div>
            </>
          )}
        </div>
      </section>

      <Box component={'section'} className={styles.uncomingEvents}>
        <Typography
          variant='h4'
          component={'h2'}
          sx={{
            color: 'var(--color-primary-100)',
            textAlign: 'center',
            marginTop: '20px',

            fontWeight: 'bold',
            marginBottom: '20px',

            textTransform: 'uppercase',
          }}
          textAlign='center'
        >
          Proximos eventos
        </Typography>

        <Grid
          container
          gap={3}
          alignItems={'center'}
          justifyContent={'center'}
          margin={3}
          minHeight={'50vh'}
          width={'100%'}
        >
          {isLoading && (
            <Box
              sx={{
                display: 'flex',
                height: '50vh',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          )}
          {events.length === 0 && !isLoading && (
            <Typography
              sx={{
                color: 'var(--color-primary-100)',
                textAlign: 'center',
                marginTop: '20px',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '20px',
                fontFamily: 'Roboto',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                lineHeight: '1.5',
              }}
            >
              No hay eventos para mostrar
            </Typography>
          )}
          {events.map((event) => (
            <Grid key={event._id} item md={4} marginX={2}>
              <MediaCard
                description={event.description}
                title={event.name}
                imageURL={event.imageURL || '/default.jpg'}
                idEvent={event._id}
                dateValue={event.dateEvent}
              />
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={totalPages}
          color='secondary'
          sx={{ borderRadius: '50px', margin: 2 }}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </div>
  );
}

export default Landing;
