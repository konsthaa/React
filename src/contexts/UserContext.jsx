import {createContext, useCallback, useEffect, useRef, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const postLogin = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  // login, logout and autologin functions are here instead of components
  const handleLogin = useCallback(async (credentials) => {
    try {
      const userInfo = await postLogin(credentials);
      console.log('context handleLogin', userInfo);
      localStorage.setItem('token', userInfo.token);
      setUser(userInfo.user);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }, [navigate, postLogin]);

  const handleLogout = useCallback(() => {
    try {
      localStorage.clear();
      setUser(null);
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }, [navigate]);

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('token not found');
      return;
    }
    try {
      const user = await getUserByToken(token);
      console.log('profile user', user);
      setUser(user);
      // tarvitseeko aina mennä kotisivulle tokenin tsekkaamisen jälkeen?
      //navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  }, [getUserByToken]);

  const didAutoLogin = useRef(false);

  useEffect(() => {
    if (didAutoLogin.current) return;
    didAutoLogin.current = true;
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <UserContext.Provider
      value={{user, handleAutoLogin, handleLogout, handleLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export {UserProvider, UserContext};
