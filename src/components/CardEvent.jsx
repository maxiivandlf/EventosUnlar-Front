import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ imageURl, title, description }) {
  return (
    <Card
      sx={{ maxWidth: 345, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
    >
      <CardMedia sx={{ height: 140 }} image={imageURl} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Compartir</Button>
        <Button size='small'>Ver más</Button>
      </CardActions>
    </Card>
  );
}
