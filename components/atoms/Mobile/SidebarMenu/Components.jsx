import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-scroll";
import { vhToPx } from '../../../../helper/convertNumber';

const Components = ({ items }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.length > 0 ?
        items.map((items, key) => {
          return (
            <Box
              key={key}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
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
                onClick={items.onClick}
              >
                <div className='menu-item'>
                  {items.name}
                </div>
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