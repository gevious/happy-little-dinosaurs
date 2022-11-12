import { useState } from 'react';
import { Button, Container, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import useAuthenticated from '../../hooks/useAuthenticated';

const SignIn = () => {
  const {
    isAuthenticated,
    setIsAuthenticated
  } = useAuthenticated();

  const [user, setUser] = useState<string>(``);
  const [message, setMessage] = useState<string>(``);
  const isValid = user !== ``;

  const authenticate = async (username: string) => {
    if (username.toLowerCase() === 'hannah' ||
        username.toLowerCase() === 'daniel' ||
	username.toLowerCase() === 'admin') {
      setIsAuthenticated(username.toLowerCase());
      setMessage('');
    } else {
      alert("Invalid Username");
      setIsAuthenticated('');
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // If enter key is pressed, submit the form
    if (e.key === 'Enter') {
      const username: string = (e.target as HTMLInputElement).value;
      authenticate(username);
    }
  }

  return (
    <Container maxWidth="sm">
      <Dialog open={!isAuthenticated}>
	<DialogTitle>Sign In</DialogTitle>
	<DialogContent>
	  <DialogContentText>
	  Enter your name
	  </DialogContentText>
	  <TextField
	    autoFocus
	    name="user"
	    id="user_input"
	    label="name"
	    fullWidth
	    onKeyDown={(e) => handleKeyDown(e)}
	    onChange={(e) => setUser(e.target.value as string)}
	  />
	  <DialogContentText>
	    {message}
	  </DialogContentText>
	</DialogContent>
	<DialogActions>
	  <Button
	    onClick={() => authenticate(user)}
            name="sign-in"
	    disabled={!isValid}
	    >Sign In</Button>
	</DialogActions>
      </Dialog>
    </Container>
  );
}

export default SignIn;
