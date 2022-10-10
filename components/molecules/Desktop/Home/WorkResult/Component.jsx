import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import SXHome from '../../../../../styles/sx/Home/SX';
import { HomeTheme } from '../../../../../styles/sx/Home/theme/Home/Theme';

const Component = () => {
  return (
    <div>
      <ThemeProvider theme={HomeTheme.bodyTheme.intro4}>
        <Box
          sx={{
            width: '100%',
            height: '77vh',
            backgroundColor: 'primary.main',
            display: 'flex'
          }}
          id='workResult'
        >
          <Box
            sx={{
              width: '80%',
              height: '100%',
              margin: '0 auto'
            }}
          >
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='h3' sx={{ alignSelf: 'center', textAlign: 'center' }}>
                Hasil Kerja
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', flexFlow: 'wrap' }}>
                <Box sx={SXHome.wr.items} onClick={() => { window.open('https://bridelima.id', '_blank') }}>
                  <Box className='lp__wrIconWrap'>
                    <img src='/images/delima.png' alt='delima' className='lp__wrIcon' />
                  </Box>
                  <Typography variant='body' className='lp__wrDesc'>
                    Delima
                  </Typography>
                </Box>
                <Box sx={SXHome.wr.items} onClick={() => window.open('https://homespot.id', '_blank')}>
                  <Box className='lp__wrIconWrap'>
                    <img src='/images/homespot.png' alt='homespot' className='lp__wrIcon' />
                  </Box>
                  <Typography variant='body' className='lp__wrDesc'>
                    Homespot
                  </Typography>
                </Box>
                <Box sx={SXHome.wr.items} onClick={() => window.open('https://simpedesumi.bri.co.id', '_blank')}>
                  <Box className='lp__wrIconWrap'>
                    <img src='/images/simpedes-umi.png' alt='homespot' className='lp__wrIcon' />
                  </Box>
                  <Typography variant='body' className='lp__wrDesc'>
                    Simpedes UMi
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={HomeTheme.bodyTheme.footer}>
        <Box
          sx={{
            width: '100%',
            height: '15vh',
            backgroundColor: 'primary.main',
            display: 'flex'
          }}
        >
          <Box
            sx={{
              width: '80%',
              height: '100%',
              margin: '0 auto',
              padding: 6
            }}
          >
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
              <Box className='lp__fsWrapper' onClick={() => window.open('https://wa.me/6289655246028', '_blank')}>
                <FaWhatsapp className='lp__fsIcon' />
                <Typography variant='body' className='lp__fsDesc'>
                  +62-896-5524-6028
                </Typography>
              </Box>
              <Box className='lp__fsWrapper' onClick={() => window.open('mailto:anandaningss@gmail.com', '_blank')}>
                <HiMail className='lp__fsIcon' />
                <Typography variant='body' className='lp__fsDesc'>
                  anandaningss@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Component;