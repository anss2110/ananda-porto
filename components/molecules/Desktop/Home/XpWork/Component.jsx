import React from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { HomeTheme } from '../../../../../pages/styles/theme/Home/Theme';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

const Component = () => {
  return (
    <ThemeProvider theme={HomeTheme.bodyTheme.intro3}>
      <Box
        sx={{
          width: '100%',
          height: '92vh',
          backgroundColor: 'primary.main',
          display: 'flex'
        }}
        id='expWork'
      >
        <Box
          sx={{
            width: '80%',
            height: '100%',
            margin: '0 auto',
            padding: 6
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, height: 'inherit', alignItems: 'center' }}>
            <Typography variant='h3' className='lp__xpRowItem'>
              Pengalaman Kerja
            </Typography>
            <Timeline
              className='lp__xpRowItem'
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant='body'>
                    CV Istana Rental (Internship SMK) <br />
                    <i>September 2017 - Desember 2017 <br /></i>
                    <ul>
                      <li>Mempelajari tentang hardware dan software komputer.</li>
                      <li>Instalasi Windows secara paralel dengan metode Ghosting.</li>
                      <li>Jaringan Dasar (Crimping kabel dan mengecek jaringan LAN dengan LAN Tester).</li>
                    </ul>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant='body'>
                    PT Satkomindo Mediyasa <br />
                    <i>September 2019 - September 2022 <br /></i>
                    <ul>
                      <li>Membantu dalam mengembangkan aplikasi BRI, seperti : Delima, Open BSA, Agrotama, dan Simpedes UMi</li>
                    </ul>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>

          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Component;