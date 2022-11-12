import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SignIn from './components/SignIn';
import PublicCards from './components/PublicCards';
import PrivateCards from './components/PrivateCards';
import useAuthenticated from './hooks/useAuthenticated';

function App() {
  const {
    isAuthenticated
  } = useAuthenticated();

  if (!isAuthenticated) {
      return (
	<SignIn />
      );
  }

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, alignContent: "center"}}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
	<Toolbar>
          <Typography
            align="center" noWrap component="div"
            sx={{ flexGrow: 1 }}
          >
	    Happy Little Dinosaurs
	  </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" 
           sx={{ flexGrow: 1, p: 3, mt: 5 }}>
        <PublicCards />
        <PrivateCards />
      </Box>
    </Box>
  );
}

export default App;
