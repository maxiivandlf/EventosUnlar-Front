import { MapView } from '../../components';
import { Typography, Box } from '@mui/material';

function Map() {
  return (
    <div>
      <Typography
        variant='h4'
        sx={{
          color: '#f5167e',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontWeight: 500,
          padding: '24px',
        }}
      >
        Mapa de la UNLaR
      </Typography>
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={2}
        sx={{
          margin: 5,
        }}
      >
        <img src='/logo.svg' alt='' style={{ width: 30 }} />
        <Typography variant='h6' component={'p'} color={'#f3f3f3'}>
          Lugares de interés de la Universidad Nacional de La Rioja
        </Typography>
      </Box>
      <MapView width={'100%'} />
    </div>
  );
}

export default Map;
