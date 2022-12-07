import {createBrowserRouter} from 'react-router-dom';
import Feed from '../pages/Feed/Feed';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/cadastrar',
    element: <Register/>
  },
  {
    path:'/feed',
    element: <Feed/>
  }
])