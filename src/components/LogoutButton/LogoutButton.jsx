import { useDispatch } from 'react-redux';
import { logout } from './redux/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Çıxış</button>;
};

export default LogoutButton;
