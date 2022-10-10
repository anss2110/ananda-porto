export const SXHome = {
  skill: {
    items: {
      width: 'max-content',
      height: 'max-content',
      display: 'grid',
      flexDirection: 'column',
      gap: 2,
      placeItems: 'center'
    },
    itemsMobile: {
      width: 'max-content',
      height: 'max-content',
      display: 'grid',
      flexDirection: 'column',
      gap: 2,
      placeItems: 'center'
    }
  },
  wr: {
    items: {
      width: 'max-content',
      height: 'max-content',
      display: 'grid',
      flexDirection: 'column',
      placeItems: 'center',
      borderRadius: 2,
      bgcolor: '#fff',
      overflow: 'hidden',
      boxShadow: 1,
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: 3,
        cursor: 'pointer'
      },
    }
  }
}