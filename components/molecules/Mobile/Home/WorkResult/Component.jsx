import React, { useRef } from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { HomeTheme } from '../../../../../pages/styles/theme/Home/Theme';
import { SXHome } from '../../../../../pages/styles/sx/Home/SX';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import Slider from "react-slick";

const Component = () => {

  function SliderArrows(props) {
    let arrow = <></>;
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " slideArrow";

    if (props.type === "next") {
      arrow = <AiFillRightCircle className='lp__sliderArrow' />
    } else if (props.type === "prev") {
      arrow = <AiFillLeftCircle className='lp__sliderArrow' />
    }
    return (
      <span className={className} onClick={props.onClick}>
        {arrow}
      </span>
    );
  }


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrows type='next' />,
    prevArrow: <SliderArrows type='prev' />,
  }

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
              width: '90%',
              height: '100%',
              margin: '0 auto'
            }}
          >
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 6, placeContent: 'center' }}>
              <Typography variant='h3' sx={{ alignSelf: 'center', textAlign: 'center' }}>
                Hasil Kerja
              </Typography>
              <Box>
                <Slider className='lp__wrSlideMobile' {...settings}>
                  <Box sx={SXHome.wr.items} onClick={() => { window.open('https://bridelima.id', '_blank') }}>
                    <Box className='lp__wrIconWrapMobile'>
                      <img src='/images/delima.png' alt='delima' className='lp__wrIconMobile' />
                    </Box>
                    <Box className='lp__wrDescMobile'>
                      <Typography variant='body'>
                        Delima
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={SXHome.wr.items} onClick={() => window.open('https://homespot.id', '_blank')}>
                    <Box className='lp__wrIconWrapMobile'>
                      <img src='/images/homespot.png' alt='homespot' className='lp__wrIconMobile' />
                    </Box>
                    <Box className='lp__wrDescMobile'>
                      <Typography variant='body'>
                        Homespot
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={SXHome.wr.items} onClick={() => window.open('https://simpedesumi.bri.co.id', '_blank')}>
                    <Box className='lp__wrIconWrapMobile'>
                      <img src='/images/simpedes-umi.png' alt='homespot' className='lp__wrIconMobile' />
                    </Box>
                    <Box className='lp__wrDescMobile'>
                      <Typography variant='body'>
                        Simpedes UMi
                      </Typography>
                    </Box>
                  </Box>
                </Slider>
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
            <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
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