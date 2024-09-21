import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, List, ListItem, ListItemText, Switch, Tab, Tabs, MenuItem, Select, Dialog, DialogTitle, DialogContent, ListItemButton, SelectChangeEvent } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';

import TabPanel from '@/components/TabPanel';

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

const Settings: React.FC<{ walletString?: string }> = ({ walletString }) => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedWallet, setSelectedWallet] = useState(walletString || 'default');
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (walletString) {
      setSelectedWallet(walletString);
    }
  }, [walletString]);

  const handleBack = () => {
    router.back();
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

//   const handleWalletChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     const newValue = event.target.value as string;
//     if (newValue === 'new wallet') {
//       setDialogOpen(true);
//     } else {
//       setSelectedWallet(newValue);
//     }
//   };

  const handleWalletChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value as string;
    if (newValue === 'new wallet') {
      setDialogOpen(true);
    } else {
      setSelectedWallet(newValue);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box my={4}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBack}>
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Settings
              </Typography>
              <Select
                value={selectedWallet}
                onChange={handleWalletChange}
                style={{ color: 'white' }}
              >
                <MenuItem value="default">default</MenuItem>
                <MenuItem value="new wallet">new wallet</MenuItem>
              </Select>
            </Toolbar>
            <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="inherit">
              <Tab label="Wallet" />
              <Tab label="NFT" />
              <Tab label="Backup" />
            </Tabs>
          </AppBar>
          <TabPanel value={tabIndex} index={0}>
            <WalletSettings />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <NFTSettings />
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            <BackupSettings />
          </TabPanel>
        </Box>
      </Container>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Wallet</DialogTitle>
        <DialogContent>
          <List>
            <ListItemButton onClick={() => { handleDialogClose(); /* Navigate to create wallet page */ }}>
              <ListItemText primary="Create Wallet" />
            </ListItemButton>
            <ListItemButton onClick={() => { handleDialogClose(); router.push('/'); }}>
              <ListItemText primary="Connect Wallet" />
            </ListItemButton>
          </List>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

// const TabPanel: React.FC<{ value: number; index: number }> = ({ value, index, children }) => {
//   return (
//     <div role="tabpanel" hidden={value !== index}>
//       {value === index && <Box p={3}>{children}</Box>}
//     </div>
//   );
// };

const WalletSettings: React.FC = () => {
  const [allowTestnets, setAllowTestnets] = useState(false);
  const [allowExternalConnections, setAllowExternalConnections] = useState(false);
  const [listenForConnectionRequests, setListenForConnectionRequests] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [biometricUnlock, setBiometricUnlock] = useState(false);
  const [expandAssets, setExpandAssets] = useState(false);

  return (
    <List>
      <ListItemButton onClick={() => { /* Navigate to chains/network page */ }}>
        <ListItemText primary="Choose Chains/Network" secondary="Default: Arbitrium" />
      </ListItemButton>
      <SwitchListItem
        title="Allow Testnets"
        checked={allowTestnets}
        onChange={(e) => setAllowTestnets(e.target.checked)}
      />
      <SwitchListItem
        title="Allow External Connections"
        checked={allowExternalConnections}
        onChange={(e) => setAllowExternalConnections(e.target.checked)}
      />
      <SwitchListItem
        title="Listen for Connection Requests"
        checked={listenForConnectionRequests}
        onChange={(e) => setListenForConnectionRequests(e.target.checked)}
      />
      <SwitchListItem
        title="Notifications"
        checked={notifications}
        onChange={(e) => setNotifications(e.target.checked)}
      />
      <ListItemButton onClick={() => { /* Navigate to language settings page */ }}>
        <ListItemText primary="Wallet Language" />
      </ListItemButton>
      <SwitchListItem
        title="Biometric Unlock"
        checked={biometricUnlock}
        onChange={(e) => setBiometricUnlock(e.target.checked)}
      />
      <ListItemButton onClick={() => { /* Navigate to add device passkey page */ }}>
        <ListItemText primary="Add Device Passkey" />
      </ListItemButton>
      <ListItemButton onClick={() => { /* Navigate to default currency page */ }}>
        <ListItemText primary="Default Currency" />
      </ListItemButton>
      <SwitchListItem
        title="Expand Assets"
        checked={expandAssets}
        onChange={(e) => setExpandAssets(e.target.checked)}
      />
      <ListItemButton onClick={() => { /* Navigate to FAQ page */ }}>
        <ListItemText primary="IDSafe FAQ" />
      </ListItemButton>
    </List>
  );
};

const NFTSettings: React.FC = () => {
  const [allowMintingNFTs, setAllowMintingNFTs] = useState(false);
  const [enableNFTScanning, setEnableNFTScanning] = useState(false);
  const [enableNFC, setEnableNFC] = useState(false);

  return (
    <List>
      <SwitchListItem
        title="Allow Minting NFTs"
        checked={allowMintingNFTs}
        onChange={(e) => setAllowMintingNFTs(e.target.checked)}
      />
      <SwitchListItem
        title="Enable NFT Scanning"
        checked={enableNFTScanning}
        onChange={(e) => setEnableNFTScanning(e.target.checked)}
      />
      <SwitchListItem
        title="Enable NFC"
        checked={enableNFC}
        onChange={(e) => setEnableNFC(e.target.checked)}
      />
    </List>
  );
};

const BackupSettings: React.FC = () => {
  const [turnOnBackup, setTurnOnBackup] = useState(false);

  return (
    <List>
      <SwitchListItem
        title="Turn on Backup"
        checked={turnOnBackup}
        onChange={(e) => setTurnOnBackup(e.target.checked)}
      />
      {turnOnBackup && (
        <>
          <ListItemButton onClick={() => { /* Navigate to local backup settings page */ }}>
            <ListItemText primary="Local Backup" />
          </ListItemButton>
          <ListItemButton onClick={() => { /* Navigate to Google Drive backup settings page */ }}>
            <ListItemText primary="Backup to Google Drive" />
          </ListItemButton>
        </>
      )}
    </List>
  );
};

const SwitchListItem: React.FC<{ title: string; checked: boolean; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ title, checked, onChange }) => (
  <ListItem>
    <ListItemText primary={title} />
    <Switch edge="end" checked={checked} onChange={onChange} />
  </ListItem>
);

export default Settings;