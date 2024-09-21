'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { AppBar, Toolbar, Typography, IconButton, Button, TextField, Card, CardContent, Container, Grid, Box, Fade } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import DrawerPage from '@/components/DrawerPage'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFF00', // Darker green
    },
    secondary: {
      main: '#0000FF', // Darker purple
    },
    background: {
      default: '#F5F5F5', // Light grey background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
})

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (index: number, path: string) => {
    router.push(path)
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              RefugeID
            </Typography>
          </Toolbar>
        </AppBar>

        <DrawerPage
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          handleNavigation={handleNavigation}
        />

        <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                <Image src="/logo3.png" alt="Logo" width={360} height={80} />
              </Box>

              <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                Connect Wallet
              </Typography>

              <TextField 
                label="Address" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                sx={{ 
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />

              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                size="large"
                sx={{ 
                  mt: 2, 
                  mb: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  },
                }}
              >
                Connect
              </Button>

              <Grid container spacing={3}>
                {[
                  { title: 'Learn', description: 'Learn how to protect your privacy with RefugeID in an interactive course with quizzes!', url: 'https://RefugeID.vercel.app/learn' },
                  { title: 'Deploy', description: 'Integrate RefugeID SDK for your app connections', url: 'https://github.com/Hackathonzx/RefugeID-SDK' },
                  { title: 'Socials', description: 'Connect with the RefugeID community.', url: 'https://discord.gg/uA5bW2pH' },
                ].map((link, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                          {link.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                          {link.description}
                        </Typography>
                        <Link href={link.url} passHref style={{ textDecoration: 'none' }}>
                          <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            sx={{
                              transition: 'all 0.2s',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                              },
                            }}
                          >
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Container>

        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: theme.palette.grey[200] }}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} RefugeID. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}












































// "use client"; // This marks the component as a Client Component

// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
// import Image from 'next/image';
// import Link from 'next/link';
// import { AppBar, Toolbar, Typography, IconButton, Button, TextField, Card, CardContent } from '@mui/material';

// // import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Button, TextField, Card, CardContent } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import DrawerPage from '../components/DrawerPage';

// import DrawerPage from '@/components/DrawerPage';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#4caf50', // Green color
//     },
//     secondary: {
//       // main: '#ff4081', // Pink color
//       main: '#800080', // Purple color      
//     },
//   },
// });

// // export default function Home() {
// //   // Wrap the return statement with ThemeProvider
// //   return (
// //     <ThemeProvider theme={theme}>
// //       {/* Existing code */}
// //     </ThemeProvider>
// //   );
// // }


// // const lightTheme = createTheme({
// //   palette: {
// //     mode: 'light',
// //     background: {
// //       default: '#ffffff',
// //     },
// //   },
// // });

// // const darkTheme = createTheme({
// //   palette: {
// //     mode: 'dark',
// //     background: {
// //       default: '#3e2723',
// //     },
// //   },
// // });


// export default function Home() {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const router = useRouter();


//   const handleNavigation = (index: number, path: string) => {
//     router.push(path);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <ThemeProvider theme={theme}>

//     <div>
//       <AppBar position="static" style={{ backgroundColor: 'green' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             RefugeID
//           </Typography>
//         </Toolbar>
//       </AppBar>


//       <DrawerPage
//         drawerOpen={drawerOpen}
//         toggleDrawer={toggleDrawer}
//         handleNavigation={handleNavigation}
//       />
//     {/* </div> */}

//       {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//         <List>

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
//       </Drawer> */}

//       <main style={{ padding: '16px' }}>
//         <div style={{ textAlign: 'center' }}>


//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//   <Image src="/logo2.png" alt="Logo" width={360} height={80} />
// </div>

//           <Typography variant="h4" gutterBottom>
//             Connect Wallet
//           </Typography>
//           <TextField label="Address" style={{ backgroundColor: 'white' }} variant="outlined" fullWidth margin="normal" />
//           <Button variant="contained" color="primary" style={{ backgroundColor: 'green' }} fullWidth>
//             Connect
//           </Button>
//           <div style={{ marginTop: '20px' }}>
//             {[
//               { title: 'Learn', description: 'Learn how to protect your privacy with RefugeID in an interactive course with quizzes!', url: 'https://9000-idx-RefugeID-web-1726061350597.cluster-blu4edcrfnajktuztkjzgyxzek.cloudworkstations.dev/learn' },
//               { title: 'Deploy', description: 'Integrate RefugeID SDK for your app connections', url: 'https://github.com/Hackathonzx/RefugeID-SDK' },
//               { title: 'Socials', description: ' Connect with the RefugeID community.', url: 'https://discord.gg/uA5bW2pH' },
//               // { title: 'Deploy', description: 'Instantly deploy your Application with RefugeID SDK.', url: 'https://vercel.com/new' },
//             ].map((link, index) => (
//               <Card key={index} style={{ margin: '10px 0' }}>
//                 <CardContent>
//                   <Typography variant="h5">{link.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {link.description}
//                   </Typography>
//                   <Link href={link.url} passHref>
//                     <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
//                       Learn More
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//       <footer style={{ textAlign: 'center', padding: '20px 0' }}>
//         <Typography variant="body2" color="textSecondary">
//           © 2024 RefugeID
//         </Typography>
//       </footer>
//     </div>

//     </ThemeProvider>


//   );




// }



























          {/* <ListItem component={Link} button onClick={() => handleNavigation(0, '/')}>
            <ListItemText primary="Connect" />
          </ListItem>
          <ListItem button component="a" onClick={() => handleNavigation(1, '/info')}>
            <ListItemText primary="Info" />
          </ListItem>
          <ListItem button component="a" onClick={() => handleNavigation(2, '/wallet')}>
            <ListItemText primary="Wallet" />
          </ListItem>
          <ListItem button component="a" onClick={() => handleNavigation(3, '/settings')}>
            <ListItemText primary="Settings" />
          </ListItem>
 */}
          {/* <Image src="/logo.png" alt="Logo" width={360} height={80} /> */}


  // const handleNavigation = (index, path) => {
  //   router.push(path);
  // };

// "use client"; // This marks the component as a Client Component

// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
// import Image from 'next/image';
// import Link from 'next/link';
// import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Button, TextField, Card, CardContent } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function Home() {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const router = useRouter();

//   const handleNavigation = (index, path) => {
//     setSelectedIndex(index);
//     router.push(path);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             RefugeID
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//         <List>
//           <ListItem button onClick={() => handleNavigation(0, '/')}>
//             <ListItemText primary="Connect" />
//           </ListItem>
//           <ListItem button onClick={() => handleNavigation(1, '/info')}>
//             <ListItemText primary="Info" />
//           </ListItem>
//           <ListItem button onClick={() => handleNavigation(2, '/wallet')}>
//             <ListItemText primary="Wallet" />
//           </ListItem>
//           <ListItem button onClick={() => handleNavigation(3, '/settings')}>
//             <ListItemText primary="Settings" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <main style={{ padding: '16px' }}>
//         <div style={{ textAlign: 'center' }}>
//           <Image src="/assets/logo.png" alt="Logo" width={720} height={160} />
//           <Typography variant="h4" gutterBottom>
//             Connect Wallet
//           </Typography>
//           <TextField label="Address" variant="outlined" fullWidth margin="normal" />
//           <Button variant="contained" color="primary" fullWidth>
//             Connect
//           </Button>
//           <div style={{ marginTop: '20px' }}>
//             {[
//               { title: 'Docs', description: 'Find in-depth information about RefugeID features and API.', url: 'https://nextjs.org/docs' },
//               { title: 'Learn', description: 'Learn how to protect your privacy with RefugeID in an interactive course with quizzes!', url: 'https://nextjs.org/learn' },
//               { title: 'Templates', description: 'Explore starter templates for RefugeID connections.', url: 'https://vercel.com/templates' },
//               { title: 'Deploy', description: 'Instantly deploy your Application with RefugeID SDK.', url: 'https://vercel.com/new' },
//             ].map((link, index) => (
//               <Card key={index} style={{ margin: '10px 0' }}>
//                 <CardContent>
//                   <Typography variant="h5">{link.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {link.description}
//                   </Typography>
//                   <Link href={link.url} passHref>
//                     <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
//                       Learn More
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//       <footer style={{ textAlign: 'center', padding: '20px 0' }}>
//         <Typography variant="body2" color="textSecondary">
//           © 2024 RefugeID
//         </Typography>
//       </footer>
//     </div>
//   );
// }

































// "use client"; // This marks the component as a Client Component


// // pages/index.js
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import Link from 'next/link';
// import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Button, TextField, Card, CardContent } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function Home() {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const router = useRouter();

//   const handleNavigation = (index, path) => {
//     setSelectedIndex(index);
//     router.push(path);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             RefugeID
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//         <List>
//           <ListItem button onClick={() => handleNavigation(0, '/')}>
//             <ListItemText primary="Connect" />
//           </ListItem>
//           <ListItem button onClick={() => handleNavigation(1, '/info')}>
//             <ListItemText primary="Info" />
//           </ListItem>
//           <ListItem button onClick={() => handleNavigation(2, '/wallet')}>
//             <ListItemText primary="Wallet" />
//           </ListItem>
//           <ListItem button onClick={() => handleNavigation(3, '/settings')}>
//             <ListItemText primary="Settings" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <main style={{ padding: '16px' }}>
//         <div style={{ textAlign: 'center' }}>
//           <Image src="/assets/logo.png" alt="Logo" width={720} height={160} />
//           <Typography variant="h4" gutterBottom>
//             Connect Wallet
//           </Typography>
//           <TextField label="Address" variant="outlined" fullWidth margin="normal" />
//           <Button variant="contained" color="primary" fullWidth>
//             Connect
//           </Button>
//           <div style={{ marginTop: '20px' }}>
//             {[
//               { title: 'Docs', description: 'Find in-depth information about RefugeID features and API.', url: 'https://nextjs.org/docs' },
//               { title: 'Learn', description: 'Learn how to protect your privacy with RefugeID in an interactive course with quizzes!', url: 'https://nextjs.org/learn' },
//               { title: 'Templates', description: 'Explore starter templates for RefugeID connections.', url: 'https://vercel.com/templates' },
//               { title: 'Deploy', description: 'Instantly deploy your Application with RefugeID SDK.', url: 'https://vercel.com/new' },
//             ].map((link, index) => (
//               <Card key={index} style={{ margin: '10px 0' }}>
//                 <CardContent>
//                   <Typography variant="h5">{link.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {link.description}
//                   </Typography>
//                   <Link href={link.url} passHref>
//                     <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
//                       Learn More
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>
//       <footer style={{ textAlign: 'center', padding: '20px 0' }}>
//         <Typography variant="body2" color="textSecondary">
//           © 2024 RefugeID
//         </Typography>
//       </footer>
//     </div>
//   );
// }





































// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
