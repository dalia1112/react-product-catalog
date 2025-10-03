import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Layout from "../Layout";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
const routes=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {index:true, element:<Home/>},
    {path:"/products", element:<Products/>},
    {path:"/products/:id", element:<ProductDetails/>},
    {path:"/about", element:<About/>},
    {path:"*", element:<NotFound/>}
  ]
}])

export default routes