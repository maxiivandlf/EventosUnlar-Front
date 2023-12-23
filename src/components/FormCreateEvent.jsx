import { Box, TextField, FormControl, Grid, Button } from '@mui/material';
import * as EventThunks from '../redux/thunks/thunks';

import { createEvent } from '../api/services/eventServices';

const handleSubmit = async (event) => {
  event.preventDefault();
  const dateISO = new Date(event.target.dateEvent.value).toISOString();
  const evento = {
    name: event.target.name.value,
    type: event.target.type.value,
    dateEvent: dateISO,
    lat: event.target.lat.value,
    long: event.target.long.value,
    description: event.target.description.value,
    imageURL: event.target.image.files[0],
  };
  await createEvent(evento);
};

function FormCreateEvent() {
  return (
    <FormControl
      fullWidth
      sx={{
        backgroundColor: 'var(--color-primary-600)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        borderRadius: '10px',
        marginY: '20px',
      }}
    >
      <Box component={'form'} onSubmit={handleSubmit}>
        <Grid container direction={'row'} spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              id='name'
              label='Nombre'
              name='name'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              id='type'
              label='Tipo de evento'
              name='type'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              id='dateEvent'
              type='date'
              name='dateEvent'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              id='lat'
              label='Latitud'
              name='lat'
              type='number'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              id='long'
              label='Longitud'
              name='long'
              type='number'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              id='description'
              label='Descripcion'
              name='description'
              variant='outlined'
              multiline
              fullWidth
              minRows={4}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <label htmlFor='imageURL'>Imagen</label>
            <TextField
              id='imageURL'
              name='image'
              type='file'
              variant='outlined'
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type='submit' variant='contained' sx={{ marginY: 2 }}>
          Enviar
        </Button>
      </Box>
    </FormControl>
  );
}

export default FormCreateEvent;
