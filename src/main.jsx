import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home/Home';
import CollegeDetails from './Components/Home/Home/CollegeDetails';
import AllCollege from './Components/Home/Allcollege/AllCollege';
import Login from './Components/Shared/Login';
import SignUp from './Components/Shared/SignUp';
import AuthProviders from './Providers/AuthProviders';
import Admission from './Components/Home/Allcollege/Admission';
import Mycollege from './Components/Home/Allcollege/Mycollege';
import ErrorPage from './Components/Error/ErrorPage';
import PrivateRoute from './Components/Shared/PrivateRoute';
import Profile from './Components/Home/Allcollege/Profile';
import UpdateProfile from './Components/Home/Allcollege/UpdateProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allcollege',
        element: <AllCollege></AllCollege>
      },
      {
        path: '/allcollege/:id',
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/mycollege',
        element: <Mycollege></Mycollege>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/profile/:id',
        element: <UpdateProfile></UpdateProfile>,
        loader: ({params}) => fetch(`http://localhost:5000/profile/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
<RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
