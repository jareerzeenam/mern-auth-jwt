import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav className="flex space-x-4">
          <Link to="/#!" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/login" className="hover:text-gray-400">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-400">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
