import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "../Providers/PrivateRoute"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddCamp from "../Pages/Dashboard/AddCamp/AddCamp";
import CampDetails from "../Pages/Home/Camp/CampDetails";
import JoinCamp from "../Pages/Home/Camp/JoinCamp";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/campDetails/:id',
        element: <CampDetails></CampDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/singleCamp/${params.id}`)
      },
      {
        path: '/joinCamp/:id',
        element: <JoinCamp></JoinCamp>,
        loader: ({params}) => fetch(`http://localhost:5000/joinCamp/${params.id}`)
      }
    ]
  },
  {
    path: 'dashboard',
    element:  <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
    // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // general user can access
      

      // Only Admin can access
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addCamp',
        element: <AddCamp></AddCamp>
      }
    

    ]
  }
]);