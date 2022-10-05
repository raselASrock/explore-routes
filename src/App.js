
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Layout/Main';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';

function App() {
  const router = createBrowserRouter([
    {path: '/', 
    element: <Main></Main>, 
    children:[
      {path: '/',element: <Home></Home>},
      {path: '/home',element: <Home></Home>},
      {path: '/products', element: <Products></Products>},
      {path: 'friends',
      loader: async() => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element: <Friends></Friends>
    },
    {
      path: '/friend/:friendId',
      loader: async ({params}) => {
          // console.log(params.friendId);
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetails></FriendDetails>
    },
    {
      path: 'posts',
      loader: async() =>{
        return fetch('https://jsonplaceholder.typicode.com/posts')
      },
      element: <Posts></Posts>
    }
    ] 
  },
{path: '/about', element: <About></About>},
{path: '*', element: <div>This Route Not Found. 404</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
