import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
      dark:'black',
    },
  },
  components: {
    VideoContainer: {
      styleOverrides: {
        root: {
          color: 'darkslategray',
        },
        primary: {
          color: 'darkblue',
        },
        secondary: {
          color: 'darkred',
          backgroundColor: 'pink',
        },
      },
      variants: [
        {
          props: { variant: 'dashed', color: 'primary' },
          style: {
            border: '1px dashed darkblue',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: '1px dashed darkred',
          },
        },
      ],
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={customTheme}>
     <App />
  </ThemeProvider>
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
