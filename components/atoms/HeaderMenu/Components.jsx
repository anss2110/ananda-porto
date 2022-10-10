import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-scroll";
import { vhToPx } from '../../../helper/convertNumber';

const Components = ({ items }) => {
  return (
    <Box sx={{ marginLeft: 'auto', alignSelf: 'center' }}>
      {items.length > 0 ?
        items.map((items, key) => {
          return (
            <Box
              key={key}
              sx={{
                display: 'inline-flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: '0rem 1rem',
                cursor: 'pointer'
              }}
            >
              <Link
                activeClass="active"
                to={items.id}
                spy={true}
                smooth={true}
                offset={vhToPx(-8)}
                duration={100}
              >
                <Typography variant='body1' className='menuHeader'>
                  {items.name}
                </Typography>
              </Link>
            </Box>
          )
        })
        :
        <></>
      }
    </Box>
  );
};

export default Components;