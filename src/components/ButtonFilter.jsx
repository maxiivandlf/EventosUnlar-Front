import { Box, TextField, Button } from '@mui/material';
import { ButtonComponent } from '../components';

function ButtomFilter({ filterCriteria, handleFilterChange, resetFilter }) {
  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        width: { xs: '100%', sm: '80%', md: ' 70%' },
        justifyContent: 'space-between',
        gap: 2,
        flexDirection: { xs: 'column', sm: 'row' },
        marginY: 3,
        padding: 1,
        borderRadius: 2,
        backgroundColor: 'var(--color-primary-600)',
      }}
    >
      <TextField
        type='text'
        placeholder='Buscar eventos por nombre'
        label='Buscar eventos por nombre'
        name='name'
        value={filterCriteria.name}
        onChange={handleFilterChange}
        fullWidth
        color='secondary'
        size='small'
      />
      <TextField
        type='date'
        placeholder='Filtrar por fecha (YYYY-MM-DD)'
        name='dateEvent'
        value={filterCriteria.dateEvent}
        onChange={handleFilterChange}
        fullWidth
        color='secondary'
        size='small'
      />
      <ButtonComponent
        type={'button'}
        title={'Limpiar'}
        action={resetFilter}
        styleComponent={{ padding: '0.5rem 2rem' }}
      />
    </Box>
  );
}

export default ButtomFilter;
