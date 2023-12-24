import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Components/Shered/Error";
import Home from "../Pages/FullHome/Home/Home";
import Details from './../Components/Details/Details';
import AddCart from './../Pages/AddCart/AddCart';
import Privet from './../Privet/Privet';



const myCreateRoutes= createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('/pizza.json')
        },
        {
            path:"/details/:id",
            element: <Details></Details>,
             loader: () => fetch('/pizza.json')
        },
        {
            path:"/addCarts",
            element: <Privet><AddCart></AddCart></Privet>,            
        },
      ]
    }
  ])

export default myCreateRoutes;