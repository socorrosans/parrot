import {createBrowserRouter} from 'react-router-dom';
import Feed from '../pages/Feed';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

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
  },
  {
    path:'/user',
    element: <Profile/>
  }
])