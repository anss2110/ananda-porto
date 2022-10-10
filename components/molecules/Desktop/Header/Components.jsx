import { ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { HomeTheme } from '../../../../pages/styles/theme/Home/Theme';
import { HeaderMenu } from '../../../atoms';

const Components = () => {
  return (
    <ThemeProvider theme={HomeTheme.headerTheme}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'primary.main',
          boxShadow: 2,
          position: 'fixed',
          top: 0,
          zIndex: 999,
          color: '#ffffff'
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            minHeight: '8vh',
            padding: '10px 15px'
          }}
        >
          <Typography
            variant='h6'
            sx={{ alignSelf: 'center' }}
            onClick={() => window.location.href = '/'}
          >
            Ananda&apos;s Portofolio
          </Typography>
          <HeaderMenu
            items={[
              { name: 'Home', id: 'home' },
              { name: 'Skill', id: 'mySkill' },
              { name: 'Pengalaman', id: 'expWork' },
              { name: 'Hasil Kerja', id: 'workResult' }
            ]}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Components;