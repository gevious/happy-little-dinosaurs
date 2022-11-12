import { AppBar, Box, Toolbar, Typography } from '@mui/material';

function App() {
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
            variant="h2" align="center" noWrap component="div"
            sx={{ flexGrow: 1 }}
          >
	    Happy Little Dinosaurs
	  </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" 
           sx={{ flexGrow: 1, p: 3, mt: 5 }}>
    HLD
      </Box>
    </Box>
  );
}

export default App;
