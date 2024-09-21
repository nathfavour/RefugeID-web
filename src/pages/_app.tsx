// _app.tsx
import { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;












// // pages/_app.tsx
// import { AppProps } from 'next/app';
// import { Web3ReactProvider } from '@web3-react/core';
// import { Web3Provider } from '@ethersproject/providers';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#800080', // purple
//     },
//     secondary: {
//       main: '#4caf50', // green
//     },
//     background: {
//       default: '#f5f5f5',
//     },
//   },
// });

// function getLibrary(provider: any): Web3Provider {
//   return new Web3Provider(provider);
// }

// // interface Web3ReactProviderProps {
// //     getLibrary: () => Web3ReactType; // Replace with your library type
// //   }

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Web3ReactProvider getLibrary={getLibrary}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </Web3ReactProvider>
//   );
// }

// export default MyApp;