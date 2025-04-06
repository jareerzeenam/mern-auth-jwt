import { Header } from './components/Header';
import { Button } from './components/ui/button';
import Home from './screens/Home';
const App = () => {
  return (
    <main className="relative bg-gray-100 py-7 dark:bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <Header />
      <Home />
    </main>
  );
};
export default App;
