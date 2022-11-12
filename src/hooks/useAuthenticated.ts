import { useReactiveVar } from '@apollo/client';
import {makeVar} from '@apollo/client';
import Constants from '../constants';

const {
  SESSION_AUTH_USER
} = Constants();

const initialUserValue: string|null =
  sessionStorage.getItem(SESSION_AUTH_USER);
const userVar = makeVar<string|null>(initialUserValue);
const isAuthenticatedVar = makeVar<boolean>(initialUserValue !== null);

const useAuthenticated = () => {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const user = useReactiveVar(userVar);

  // Store state in sessionStorage, to persist session across browser refresh
  const setIsAuthenticated = function(newUser: string) {
    if (newUser) {
      sessionStorage.setItem(SESSION_AUTH_USER, newUser);
      isAuthenticatedVar(true);
      userVar(newUser);
    } else {
      sessionStorage.removeItem(SESSION_AUTH_USER);
      isAuthenticatedVar(false);
      userVar(null);
    }
  }

  return {
    isAuthenticated,
    user,
    setIsAuthenticated
  }
}

export default useAuthenticated;
