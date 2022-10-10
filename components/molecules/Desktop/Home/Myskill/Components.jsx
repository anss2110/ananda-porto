import { Box, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiCss3, SiElastic, SiFlutter, SiHtml5, SiJavascript, SiMaterialui, SiTailwindcss } from 'react-icons/si';
import SXHome from '../../../../../styles/sx/Home/SX';
import { HomeTheme } from '../../../../../styles/sx/Home/theme/Home/Theme';

const Components = () => {
  return (
    <ThemeProvider theme={HomeTheme.bodyTheme.intro2}>
      <Box
        sx={{
          width: '100%',
          height: '92vh',
          backgroundColor: 'primary.main',
          display: 'flex'
        }}
        id='mySkill'
      >
        <Box
          sx={{
            width: '80%',
            height: '100%',
            margin: '0 auto',
          }}
        >
          <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h3' sx={{ alignSelf: 'center', textAlign: 'center', marginBottom: 6 }}>
              Skill Saya
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', flexFlow: 'wrap' }}>
              <Box sx={SXHome.skill.items}>
                <FaReact className='lp__skillIcon' />
                <Typography variant='body'>
                  React JS
                </Typography>
              </Box>
              <Box sx={SXHome.skill.items}>
                <SiMaterialui className='lp__skillIcon' />
                <Typography variant='body'>
                  Material UI
                </Typography>
              </Box>
              <Box sx={SXHome.skill.items}>
                <SiTailwindcss className='lp__skillIcon' />
                <Typography variant='body'>
                  Tailwind CSS
                </Typography>
              </Box>
              <Box sx={SXHome.skill.items}>
                <SiElastic className='lp__skillIcon' />
                <Typography variant='body'>
                  Elastic UI
                </Typography>
              </Box>
              <Box sx={SXHome.skill.items}>
                <SiHtml5 className='lp__skillIcon' />
                <Typography variant='body'>
                  HTML5
                </Typography>
              </Box>
              <Box sx={SXHome.skill.items}>
                <SiCss3 className='lp__skillIcon' />
                <Typography variant='body'>
                  CSS
                </Typography>
              </Box>
              <Box sx={SXHome.skill.items}>
                <SiJavascript className='lp__skillIcon' />
                <Typography variant='body'>
                  JavaScript
                </Typography>
              </Box>
              <Box sx={SXHome.skill.items}>
                <SiFlutter className='lp__skillIcon' />
                <Typography variant='body'>
                  Flutter
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Components;