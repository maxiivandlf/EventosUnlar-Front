import * as React from 'react';
import {
  Box,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material/';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

function AlertDialog({ handleClose, action, open, children }) {
  return (
    <React.Fragment>
      {children}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Eliminar Evento'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Estas seguro que deseas eliminar este registro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={action} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default function FloatingActionButtons({ icon = 'add', action }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {icon === 'add' && (
        <Fab color='primary' aria-label='add' onClick={action}>
          <AddIcon />
        </Fab>
      )}

      {icon === 'edit' && (
        <Fab color='secondary' aria-label='edit' onClick={action}>
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
        <AlertDialog
          action={action}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        >
          <Fab
            color='error'
            aria-label='delete'
            onClick={handleClickOpen}
            sx={{
              '&:hover': {
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
              },
            }}
          >
            <DeleteIcon />
          </Fab>
        </AlertDialog>
      )}
    </Box>
  );
}
