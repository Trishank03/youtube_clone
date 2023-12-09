import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Rootlayout from './components/rootlayout/Rootlayout';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
function App() {
  const routerObj =  createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'search',
          element:<SearchBar/>
        },
        {
          path:'login',
          element:<Login/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routerObj}/>
    </div>
  );
}

export default App;
