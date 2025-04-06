import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './ui/button';
import { logout } from '@/slices/authSlice';
import { useLogoutMutation } from '@/slices/usersApiSlice';

export function Header() {
  const userInfo = useSelector((state) => state.auth.userInfo);

  const [logoutApi] = useLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav className="flex space-x-4">
          <Link to="/#!" className="hover:text-gray-400">
            Home
          </Link>
          {userInfo ? (
            <>
              <Link to="/profile" className="hover:text-gray-400">
                Hi, {userInfo.name}
              </Link>
              <Button
                onClick={logoutHandler}
                className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-400">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
