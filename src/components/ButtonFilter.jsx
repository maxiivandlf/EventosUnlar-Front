import { Box, TextField, Button } from '@mui/material';
import { ButtonComponent } from '../components';

function ButtomFilter({ filterCriteria, handleFilterChange, resetFilter }) {
  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        gap: 2,
        flexDirection: { xs: 'column', md: 'row' },
        marginY: 3,
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
      />
      <TextField
        type='date'
        placeholder='Filtrar por fecha (YYYY-MM-DD)'
        name='dateEvent'
        value={filterCriteria.dateEvent}
        onChange={handleFilterChange}
        fullWidth
        sx={{
          backgroundColor: 'var(--secondary)',
          borderRadius: 2,
          border: 'none',
        }}
      />
      <ButtonComponent type={'button'} title={'Limpiar'} action={resetFilter} />
    </Box>
  );
}

export default ButtomFilter;
