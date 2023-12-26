import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { FloatingButtons } from '../components';
import { Box } from '@mui/material';

export default function BasicPopover({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <FloatingButtons add action={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
          maxWidth: 1230,
        }}
      >
        {children}
        <Box position={'absolute'} right={20} bottom={10} zIndex={90}>
          <FloatingButtons close action={handleClose} />
        </Box>
      </Popover>
    </Box>
  );
}
