import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component={'footer'}
      sx={{
        display: 'flex',
        minHeight: '100px',
        width: '100%',
        backgroundColor: 'var(--color-surface-100)',
        color: 'var(--white)',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
        marginTop: 2,
      }}
    >
      <Box display={'flex'} flexDirection={'row'} gap={4}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img src='./logo.svg' className='logoIcon' alt='Logo eventos unlar' />
          <Typography variant='h5'>Eventos UNLaR</Typography>
        </Box>
        <Box
          width={400}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ width: '100%', textWrap: 'balance' }}
            variant='body1'
          >
            Web desarrollada por MaxiIvanDev
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <Link
          to={'https://github.com/maxiivandlf'}
          rel='noreferrer'
          style={{
            textDecoration: 'none',
            color: 'var(--color-primary-100)',
          }}
        >
          <GitHubIcon fontSize='large' />
        </Link>
        <Link
          to={'https://github.com/maxiivandlf'}
          rel='noreferrer'
          style={{
            textDecoration: 'none',
            color: 'var(--color-primary-100)',
          }}
        >
          <LinkedInIcon fontSize='large' />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
