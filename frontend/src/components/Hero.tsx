import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/slices/authSlice';
import { useLogoutMutation } from '@/slices/usersApiSlice';

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const userInfo = useSelector((state) => state.auth.userInfo);
  return (
    <div>
      <div className="h-screen mt-5 bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">
          MERN Authentication
        </h1>
        <p className="text-lg mb-8">
          A simple MERN stack application for user authentication.
        </p>
        <div className="flex space-x-4">
          {userInfo ? (
            <>
              <Link to="/profile">
                <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
                  Profile
                </Button>
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
              <Button
                variant="outline"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                <Link to="/login" className="hover:text-gray-400">
                  Login
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                <Link to="/register" className="hover:text-gray-400">
                  Register
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
