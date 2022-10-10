import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { HomeTheme } from '../../../../../styles/sx/Home/theme/Home/Theme';

const Components = () => {
  return (
    <ThemeProvider theme={HomeTheme.bodyTheme.intro}>
      <Box
        sx={{
          width: '100%',
          height: '92vh',
          backgroundColor: 'primary.main',
          marginTop: '8vh',
          display: 'flex'
        }}
        id='home'
      >
        <Box
          sx={{
            width: 'max-content',
            margin: 'auto'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6
            }}
          >
            <Box sx={{ width: '10rem', height: '10rem', margin: 'auto' }}>
              <img className='lp__pp' alt='profile-pic' src='/images/profile-pic.jpg' />
            </Box>
            <Box
              sx={{
                width: 'min-content',
                height: 'min-content',
                color: '#ffffff',
                margin: 'auto 0',
                alignSelf: 'center',
                textAlign: 'center'
              }}
            >
              <Typography variant='h2'>
                ANANDA SAPUTRA
              </Typography>
              <Typography variant='h6' sx={{ marginBottom: '1rem' }}>
                <b>FRONT END DEVELOPER</b>
              </Typography>
              <Typography variant='body1' sx={{ textAlign: 'left' }}>
                Seorang Front End Developer dengan pengalaman 3 tahun di industri IT perbankan. <br />
                Mengembangkan aplikasi berbasis web dengan React JS, Next JS, dan Flutter Web. <br />
                Dan pernah membantu dalam mengembangkan aplikasi Perbankan. <br />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Components;