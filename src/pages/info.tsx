import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, Card, CardContent, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowBack, QuestionAnswer, PrivacyTip, Code } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';

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

const Info: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // const buildLinkCard = (title: string, description: string, p0?: string) => (
  //   <Card sx={{ my: 2 }}>
  //     <CardContent>
  //       <Typography variant="h6" component="div">
  //         {title}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         {description}
  //       </Typography>
  //     </CardContent>
  //   </Card>
  // );


  const buildLinkCard = (title: string, description: string, p0?: string) => (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {p0 && (
          <Typography variant="body2" color="text.secondary">
            {p0}
          </Typography>
        )}
      </CardContent>
    </Card>
  );



  const buildInfoCard = (title: string, description: string, icon: React.ReactNode) => (
    <Card sx={{ my: 2 }}>
      <ListItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} secondary={description} />
      </ListItem>
    </Card>
  );

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
                Info
              </Typography>
            </Toolbar>
          </AppBar>
          <Box p={2}>
            {buildLinkCard('Docs', 'Find in-depth information about IDSafe features and API.', 'https://nextjs.org/docs')}
            {buildLinkCard('Learn', 'Learn how to protect your privacy with IDSafe in an interactive course with quizzes!', 'https://nextjs.org/learn')}
            {buildLinkCard('Templates', 'Explore starter templates for IDSafe connections.', 'https://vercel.com/templates')}
            {buildLinkCard('Deploy', 'Instantly deploy your Application with IDSafe SDK.', 'https://vercel.com/new')}
            <Typography variant="h5" gutterBottom>
              Other Information
            </Typography>
            {buildInfoCard('FAQ', 'Frequently Asked Questions', <QuestionAnswer color="secondary" />)}
            {buildInfoCard('Privacy Policy', 'Read our privacy policy', <PrivacyTip color="secondary" />)}
            {buildInfoCard('Open Source Licenses', 'View open source licenses', <Code color="secondary" />)}
            {buildInfoCard('Source Code', 'View the source code on GitHub', <Code color="secondary" />)}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Info;