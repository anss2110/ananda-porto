import { ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { HomeTheme } from '../../../../pages/styles/theme/Home/Theme';
import { slide as Menu } from 'react-burger-menu';
import { HiMenu } from 'react-icons/hi';
import { SidebarMenuMobile } from '../../../atoms';

const Components = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log("[DEBUG] Menu Open : ", menuOpen);
  }, [menuOpen])
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
            width: '100%',
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            minHeight: '8vh'
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'row',
              gap: 4
            }}
          >
            <Menu
              isOpen={menuOpen}
              customBurgerIcon={<HiMenu style={{ color: '#fff' }} />}
              onStateChange={(state) => setMenuOpen(state.isOpen)}
            >
              {/* <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a className="menu-item" href="">Settings</a> */}
              <SidebarMenuMobile
                items={[
                  { name: 'Home', id: 'home', onClick: () => setMenuOpen(false) },
                  { name: 'Skill', id: 'mySkill', onClick: () => setMenuOpen(false) },
                  { name: 'Pengalaman', id: 'expWork', onClick: () => setMenuOpen(false) },
                  { name: 'Hasil Kerja', id: 'workResult', onClick: () => setMenuOpen(false) }
                ]}
              />
            </Menu>
            <Typography
              variant='h6'
              sx={{ alignSelf: 'center', marginLeft: '6vw' }}
              onClick={() => window.location.href = '/'}
            >
              Ananda&apos;s Portofolio
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Components;