import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, Card, CardContent, Grid, Button, Dialog, DialogContent, DialogActions, Paper, ListItemIcon } from '@mui/material';
import { AccountBalanceWallet, ArrowBack, Security, Code, School, AccountBalanceWallet as WalletIcon, Info } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800080', // deepPurple
    },
    secondary: {
      main: '#4caf50', // green
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const categories = [
  {
    title: 'Getting Started',
    items: [
      { icon: <School />, title: 'Introduction to IDSafe', description: 'Learn the basics of IDSafe and how it works.' },
      { icon: <Code />, title: 'Setup and Installation', description: 'Step-by-step guide to set up and install IDSafe.' },
    ],
  },
  {
    title: 'Advanced Topics',
    items: [
      { icon: <Security />, title: 'Security Best Practices', description: 'Learn how to secure your IDSafe implementation.' },
      { icon: <WalletIcon />, title: 'Integrating with Wallets', description: 'How to integrate IDSafe with various crypto wallets.' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { icon: <Info />, title: 'Documentation', description: 'Find in-depth information about IDSafe features and API.' },
      { icon: <Code />, title: 'Source Code', description: 'View the source code on GitHub.' },
    ],
  },
];

const CrossChainDaoHub: React.FC = () => {
  const router = useRouter();
  const [selectedTutorial, setSelectedTutorial] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleCardClick = (tutorial: any) => {
    setSelectedTutorial(tutorial);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTutorial(null);
  };

  const handleNext = () => {
    const currentIndex = categories.flatMap(category => category.items).indexOf(selectedTutorial);
    const nextIndex = (currentIndex + 1) % categories.flatMap(category => category.items).length;
    setSelectedTutorial(categories.flatMap(category => category.items)[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = categories.flatMap(category => category.items).indexOf(selectedTutorial);
    const previousIndex = (currentIndex - 1 + categories.flatMap(category => category.items).length) % categories.flatMap(category => category.items).length;
    setSelectedTutorial(categories.flatMap(category => category.items)[previousIndex]);
  };

  const renderCategory = (category: any) => (
    <Box key={category.title} my={4}>
      <Typography variant="h5" gutterBottom>
        {category.title}
      </Typography>
      <Grid container spacing={2}>
        {category.items.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={() => handleCardClick(item)}>
              <CardContent>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box my={4}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBack}>
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Cross-Chain Carbon Credit Marketplace
              </Typography>
              <Button color="inherit" onClick={() => router.push('/')}>
                Home
              </Button>
              <Button color="inherit" onClick={() => router.push('/crosschainmarketplace')}>
                Cross-Chain Marketplace
              </Button>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <AccountBalanceWallet />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Research and Problem Definition
            </Typography>
            <Typography variant="body1" paragraph>
              The carbon credit market is essential for addressing climate change, but current systems face challenges such as inefficiency, lack of transparency, and difficulty in verifying carbon credits across different blockchain networks. This project aims to create a cross-chain marketplace that allows users to buy and sell tokenized carbon credits seamlessly, leveraging Chainlink’s services for interoperability and real-time data.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Solution Aim
            </Typography>
            <Typography variant="body1" paragraph>
              The goal is to develop a blockchain-based carbon credit marketplace that integrates with multiple blockchains, provides real-time pricing, and ensures the authenticity of carbon credits using Chainlink’s Cross-Chain Interoperability Protocol (CCIP) and Price Feeds.
            </Typography>
          </Paper>
          {categories.map(renderCategory)}
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent>
          {selectedTutorial && (
            <>
              <Typography variant="h4" gutterBottom>
                {selectedTutorial.title}
              </Typography>
              <Typography variant="body1">
                {selectedTutorial.description}
              </Typography>
              {/* Add more detailed content here */}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrevious} color="primary">
            Previous
          </Button>
          <Button onClick={handleNext} color="primary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default CrossChainDaoHub;







































// import React from 'react';
// import { Container, Typography, Box, Paper } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     mode: 'light', // or 'dark' based on your current theme
//   },
// });

// const CrossChainDaoHub: React.FC = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Box my={4}>
//           <Typography variant="h3" component="h1" gutterBottom>
//             Cross-Chain Carbon Credit Marketplace
//           </Typography>
//           <Paper elevation={3} style={{ padding: '20px' }}>
//             <Typography variant="h5" component="h2" gutterBottom>
//               Research and Problem Definition
//             </Typography>
//             <Typography variant="body1" paragraph>
//               The carbon credit market is essential for addressing climate change, but current systems face challenges such as inefficiency, lack of transparency, and difficulty in verifying carbon credits across different blockchain networks. This project aims to create a cross-chain marketplace that allows users to buy and sell tokenized carbon credits seamlessly, leveraging Chainlink’s services for interoperability and real-time data.
//             </Typography>
//             <Typography variant="h5" component="h2" gutterBottom>
//               Solution Aim
//             </Typography>
//             <Typography variant="body1" paragraph>
//               The goal is to develop a blockchain-based carbon credit marketplace that integrates with multiple blockchains, provides real-time pricing, and ensures the authenticity of carbon credits using Chainlink’s Cross-Chain Interoperability Protocol (CCIP) and Price Feeds.
//             </Typography>
//             {/* Add more sections as needed */}
//           </Paper>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default CrossChainDaoHub;