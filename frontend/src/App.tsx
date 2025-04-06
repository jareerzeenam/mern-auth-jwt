import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <main className="relative bg-gray-100 py-7 dark:bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <Header />
      <ToastContainer />
      <Outlet />
    </main>
  );
};
export default App;
