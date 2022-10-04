import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <div>This is default page</div>},
    {path: '/home',element: <Home></Home>},
    {path: '/about', element: <About></About>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
