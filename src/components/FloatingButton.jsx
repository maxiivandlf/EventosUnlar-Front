import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FloatingActionButtons({ icon, action }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {icon === 'add' && (
        <Fab color='primary' aria-label='add' onClick={action}>
          <AddIcon />
        </Fab>
      )}

      {icon === 'edit' && (
        <Fab
          color='secondary'
          aria-label='edit'
          onClick={action}
          sx={{
            '&:hover': {
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <EditIcon />
        </Fab>
      )}
      {icon === 'navigation' && (
        <Fab variant='extended' onClick={action}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
      )}
      {icon === 'favorite' && (
        <Fab disabled aria-label='like' onClick={action}>
          <FavoriteIcon />
        </Fab>
      )}
      {icon === 'close' && (
        <Fab color='error' aria-label='close' onClick={action}>
          <CloseIcon />
        </Fab>
      )}
      {icon === 'delete' && (
        <Fab
          color='error'
          aria-label='delete'
          onClick={action}
          sx={{
            '&:hover': {
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <DeleteIcon />
        </Fab>
      )}
    </Box>
  );
}
