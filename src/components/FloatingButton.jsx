import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import CloseIcon from '@mui/icons-material/Close';

export default function FloatingActionButtons({
  add,
  edit,
  favorite,
  navigation,
  close,
  action,
}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {add && (
        <Fab color='primary' aria-label='add' onClick={action}>
          <AddIcon />
        </Fab>
      )}

      {edit && (
        <Fab color='secondary' aria-label='edit' onClick={action}>
          <EditIcon />
        </Fab>
      )}
      {navigation && (
        <Fab variant='extended' onClick={action}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
      )}
      {favorite && (
        <Fab disabled aria-label='like' onClick={action}>
          <FavoriteIcon />
        </Fab>
      )}
      {close && (
        <Fab color='error' aria-label='close' onClick={action}>
          <CloseIcon />
        </Fab>
      )}
    </Box>
  );
}
