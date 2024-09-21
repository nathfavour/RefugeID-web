'use client'

import React, { useState } from 'react'
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  ListItemButton,
  Switch, 
  Typography, 
  Box, 
  IconButton,
  useTheme
} from '@mui/material'
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { 
  Brightness4 as DarkModeIcon, 
  Brightness7 as LightModeIcon,
  Info as InfoIcon,
  AccountBalanceWallet as WalletIcon,
  Settings as SettingsIcon,
  Hub as HubIcon,
  School as LearnIcon,
  ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2E7D32',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4caf50',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
})

interface DrawerPageProps {
  drawerOpen: boolean
  toggleDrawer: () => void
  handleNavigation: (index: number, path: string) => void
}

const DrawerPage: React.FC<DrawerPageProps> = ({ drawerOpen, toggleDrawer, handleNavigation }) => {
  const [darkMode, setDarkMode] = useState(false)
  const theme = useTheme()

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
  }

  const currentTheme = darkMode ? darkTheme : lightTheme

  const menuItems = [
    { text: 'Info', icon: <InfoIcon />, path: '/info' },
    { text: 'Wallet', icon: <WalletIcon />, path: '/wallet' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'CrossChainDaoHub', icon: <HubIcon />, path: '/crosschaindaohub' },
    { text: 'Learn', icon: <LearnIcon />, path: '/learn' },
  ]

  return (
    <ThemeProvider theme={currentTheme}>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: 280,
            background: currentTheme.palette.background.paper,
            transition: theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem>
            <ListItemIcon>
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </ListItemIcon>
            <ListItemText 
              primary={
                <Typography variant="body1">
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
                </Typography>
              } 
            />
            <Switch 
              checked={darkMode} 
              onChange={handleThemeChange}
              color="primary"
            />
          </ListItem>
          {menuItems.map((item, index) => (









    <ListItemButton 
    key={item.text} 
    component={Link} 
    href={item.path}
    onClick={() => handleNavigation(index, item.path)}
    sx={{
      '&:hover': {
        backgroundColor: currentTheme.palette.action.hover,
      },
    }}
  >
    <ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText 
      primary={
        <Typography variant="body1">
          {item.text}
        </Typography>
      } 
    />
  </ListItemButton>





            

          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}

export default DrawerPage
































// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemText, Switch } from '@mui/material';
// import Link from 'next/link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// // import 

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     background: {
//       default: '#ffffff',
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#3e2723',
//     },
//   },
// });


// interface DrawerPageProps {
//   drawerOpen: boolean;
//   toggleDrawer: () => void;
//   handleNavigation: (index: number, path: string) => void;
// }

// const DrawerPage: React.FC<DrawerPageProps> = ({ drawerOpen, toggleDrawer, handleNavigation }) => {

//   const [darkMode, setDarkMode] = useState(false);

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer}
//         PaperProps={{
//           sx: {
//             transition: 'transform 0.5s',
//             transform: drawerOpen ? 'rotateY(0deg)' : 'rotateY(-90deg)',
//           },
//         }}
//       >
//         <List>
//           <ListItem>
//             <Switch checked={darkMode} onChange={handleThemeChange} />
//             <ListItemText primary="Dark Mode" />
//           </ListItem>

//           <ListItem component={Link} href="/info" onClick={() => handleNavigation(1, '/info')}>
//             <ListItemText primary="Info" />
//           </ListItem>
//           <ListItem component={Link} href="/wallet" onClick={() => handleNavigation(2, '/wallet')}>
//             <ListItemText primary="Wallet" />
//           </ListItem>
//           <ListItem component={Link} href="/settings" onClick={() => handleNavigation(3, '/settings')}>
//             <ListItemText primary="Settings" />
//           </ListItem>
//           <ListItem component={Link} href="/crosschaindaohub" onClick={() => handleNavigation(3, '/crosschaindaohub')}>
//             <ListItemText primary="CrossChainDaoHub" />
//           </ListItem>

//           <ListItem component={Link} href="/learn" onClick={() => handleNavigation(3, '/learn')}>
//             <ListItemText primary="Learn" />
//           </ListItem>

//         </List>
//       </Drawer>
//     </ThemeProvider>
//   );
// };

// export default DrawerPage;





























{/* <ListItem component={Link} href="/" onClick={() => handleNavigation(0, '/')}>
  <ListItemText primary="Connect" />
</ListItem> */}          {/* <ListItem component={Link} href="/" onClick={() => handleNavigation(0, '/')}>
  <ListItemText primary="Connect" />
</ListItem> */}

// const handleNavigation = (_index: any, _path: any) => {
//   // Your navigation logic here
//   // For example, you can use the router to navigate to the path
//   // router.push(path);
//   toggleDrawer(); // Close the drawer after navigation
// };

// const DrawerPage = ({ drawerOpen, toggleDrawer, handleNavigation }) => {



// function toggleDrawer() {
//   throw new Error('Function not implemented.');
// }




// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemText, Switch } from '@mui/material';
// import Link from 'next/link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import router from 'next/router';

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     background: {
//       default: '#ffffff',
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#3e2723',
//     },
//   },
// });

// const [drawerOpen, setDrawerOpen] = useState(false);
// //   const router = useRouter();


// const handleNavigation = (index: number, path: string) => {
//     router.push(path);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };


// const DrawerPage = ({ drawerOpen, toggleDrawer, handleNavigation }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer}
//         PaperProps={{
//           sx: {
//             transition: 'transform 0.5s',
//             transform: drawerOpen ? 'rotateY(0deg)' : 'rotateY(-90deg)',
//           },
//         }}
//       >
//         <List>
//           <ListItem>
//             <Switch checked={darkMode} onChange={handleThemeChange} />
//             <ListItemText primary="Dark Mode" />
//           </ListItem>
//           <ListItem component={Link} href="/" onClick={() => handleNavigation(0, '/')}>
//             <ListItemText primary="Connect" />
//           </ListItem>
//           <ListItem component={Link} href="/info" onClick={() => handleNavigation(1, '/info')}>
//             <ListItemText primary="Info" />
//           </ListItem>
//           <ListItem component={Link} href="/wallet" onClick={() => handleNavigation(2, '/wallet')}>
//             <ListItemText primary="Wallet" />
//           </ListItem>
//           <ListItem component={Link} href="/settings" onClick={() => handleNavigation(3, '/settings')}>
//             <ListItemText primary="Settings" />
//           </ListItem>
//           <ListItem component={Link} href="/settings" onClick={() => handleNavigation(3, '/settings')}>
//             <ListItemText primary="CrossChainDaoHub" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </ThemeProvider>
//   );
// };

// export default DrawerPage;