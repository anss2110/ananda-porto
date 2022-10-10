import { green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


export const HomeTheme = {
  headerTheme: createTheme({
    palette: {
      primary: {
        main: grey[900]
      },
      secondary: {
        main: green[500],
      }
    },
    typography: {
      fontFamily: [
        'Abyssinica SIL',
        'serif'
      ].join(','),
      fontSize: 12
    },
  }),
  bodyTheme: {
    intro: createTheme({
      palette: {
        primary: {
          main: grey[900]
        }
      },
      typography: {
        fontFamily: [
          'Abyssinica SIL',
          'serif'
        ].join(','),
        fontSize: 12
      },
    }),
    intro2: createTheme({
      palette: {
        primary: {
          main: grey[100]
        }
      },
      typography: {
        fontFamily: [
          'Abyssinica SIL',
          'serif'
        ].join(','),
        fontSize: 12
      },
    }),
    intro3: createTheme({
      palette: {
        primary: {
          main: grey[500]
        }
      },
      typography: {
        fontFamily: [
          'Abyssinica SIL',
          'serif'
        ].join(','),
        fontSize: 12
      },
    }),
    intro4: createTheme({
      palette: {
        primary: {
          main: grey[100]
        }
      },
      typography: {
        fontFamily: [
          'Abyssinica SIL',
          'serif'
        ].join(','),
        fontSize: 12
      },
    }),
    footer: createTheme({
      palette: {
        primary: {
          main: grey[900]
        }
      },
      typography: {
        fontFamily: [
          'Abyssinica SIL',
          'serif'
        ].join(','),
        fontSize: 12
      },
    }) 
  },
}