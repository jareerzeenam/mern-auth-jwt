import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

const App = () => {
  return (
    <main className="relative bg-gray-100 py-7 dark:bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <Header />
      <Outlet />
    </main>
  );
};
export default App;
