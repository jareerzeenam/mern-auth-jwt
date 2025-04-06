export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Application</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Sign In
          </a>
          <a href="#" className="hover:text-gray-400">
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}
