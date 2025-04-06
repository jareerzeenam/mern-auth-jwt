import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
