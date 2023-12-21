import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@mui/material';

import formatDate from '../utils/formatDate';
import { Link } from 'react-router-dom';

export default function MediaCard({
  idEvent,
  imageURL,
  title,
  description,
  dateValue,
}) {
  const newdate = formatDate(dateValue);

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 6, padding: 2 }}>
      <CardMedia sx={{ height: 140 }} image={imageURL} title='green iguana' />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h6'
            component={'p'}
            sx={{
              color: '#f5167e',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
          >
            {newdate.month}
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '1.5rem',
            }}
          >
            {newdate.day}
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ gap: 2 }}>
        <Button size='small'>Compartir</Button>
        <Link
          className='primary-btn'
          to={`/eventos/details/${idEvent}`}
          style={{ textDecoration: 'none' }}
        >
          Ver más
        </Link>
      </CardActions>
    </Card>
  );
}
