import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Refresh, MoreVert, MonetizationOn } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // deepPurple
    },
    secondary: {
      main: '#4caf50', // green
    },
    mode: 'dark',
  },
});

const Wallet: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box my={4}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Account
              </Typography>
              <IconButton edge="end" color="inherit" aria-label="more options">
                <MoreVert />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box p={2}>
            <Typography variant="h4" gutterBottom>
              Total Balance
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="h3" component="div">
                $12,345.67
              </Typography>
              <IconButton color="primary" aria-label="refresh balance">
                <Refresh />
              </IconButton>
            </Box>
            <Box my={2} display="flex" justifyContent="space-evenly">
              <Button variant="contained" color="secondary" onClick={() => { /* Handle send */ }}>
                Send
              </Button>
              <Button variant="contained" color="secondary" onClick={() => { /* Handle add crypto */ }}>
                Add Crypto
              </Button>
              <Button variant="contained" color="secondary" onClick={() => { /* Handle exchange */ }}>
                Exchange
              </Button>
              <Button variant="contained" color="secondary" onClick={() => { /* Handle P2P market */ }}>
                P2P Market
              </Button>
            </Box>
            <Card sx={{ my: 2, backgroundColor: 'secondary.light' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Notifications
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  No new notifications
                </Typography>
              </CardContent>
            </Card>
            <Typography variant="h5" gutterBottom>
              Tokens
            </Typography>
            <List>
              {[...Array(10)].map((_, index) => (
                <Card key={index} sx={{ my: 1 }}>
                  <ListItem>
                    <ListItemIcon>
                      <MonetizationOn />
                    </ListItemIcon>
                    <ListItemText primary={`Coin ${index + 1}`} secondary="Balance: 123.45" />
                  </ListItem>
                </Card>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Wallet;



