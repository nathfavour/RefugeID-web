import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, Card, CardContent, Grid, ListItemIcon, Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import { ArrowBack, Security, Code, School, AccountBalanceWallet, Info } from '@mui/icons-material';
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
      { icon: <AccountBalanceWallet />, title: 'Integrating with Wallets', description: 'How to integrate IDSafe with various crypto wallets.' },
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

const TutorialPage: React.FC = () => {
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
                IDSafe Tutorial
              </Typography>
            </Toolbar>
          </AppBar>
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

export default TutorialPage;






























// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Container, Box, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { ArrowBack, Security, Code, School, AccountBalanceWallet, Info } from '@mui/icons-material';
// import { useRouter } from 'next/router';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#673ab7', // deepPurple
//     },
//     secondary: {
//       main: '#4caf50', // green
//     },
//     background: {
//       default: '#f5f5f5',
//     },
//   },
// });

// const categories = [
//   {
//     title: 'Getting Started',
//     items: [
//       { icon: <School />, title: 'Introduction to IDSafe', description: 'Learn the basics of IDSafe and how it works.' },
//       { icon: <Code />, title: 'Setup and Installation', description: 'Step-by-step guide to set up and install IDSafe.' },
//     ],
//   },
//   {
//     title: 'Advanced Topics',
//     items: [
//       { icon: <Security />, title: 'Security Best Practices', description: 'Learn how to secure your IDSafe implementation.' },
//       { icon: <AccountBalanceWallet />, title: 'Integrating with Wallets', description: 'How to integrate IDSafe with various crypto wallets.' },
//     ],
//   },
//   {
//     title: 'Resources',
//     items: [
//       { icon: <Info />, title: 'Documentation', description: 'Find in-depth information about IDSafe features and API.' },
//       { icon: <Code />, title: 'Source Code', description: 'View the source code on GitHub.' },
//     ],
//   },
// ];

// const TutorialPage: React.FC = () => {
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   const renderCategory = (category: any) => (
//     <Box key={category.title} my={4}>
//       <Typography variant="h5" gutterBottom>
//         {category.title}
//       </Typography>
//       <Grid container spacing={2}>
//         {category.items.map((item: any, index: number) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card>
//               <CardContent>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <Typography variant="h6" component="div">
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );

//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Box my={4}>
//           <AppBar position="static" color="primary">
//             <Toolbar>
//               <IconButton edge="start" color="inherit" aria-label="back" onClick={handleBack}>
//                 <ArrowBack />
//               </IconButton>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 IDSafe Tutorial
//               </Typography>
//             </Toolbar>
//           </AppBar>
//           {categories.map(renderCategory)}
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default TutorialPage;