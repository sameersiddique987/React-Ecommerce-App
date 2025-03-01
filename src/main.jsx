import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Pages/Product.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import SingleUser from './Pages/SingleUser.jsx'
import Layout from './Layout.jsx'
import AddToCart from './Pages/AddToCart.jsx'
import Success from './Pages/Success.jsx'
import Cancel from './Pages/Cancel.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import ProtectedRoutes from './component/ProtectedRoutes.jsx'

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"Login",
      element:<Login />
    },
    {
      path:"SignUp",
      element:<SignUp />
    },
    {
      path:"About",
      element:<About />
    },
    {
      path:"Contact",
      element:<Contact />
    },
    {
      path:"product",
      element:<Product />
    },
    {
      path:"AddToCart",
      element: <ProtectedRoutes component={<AddToCart/>}/>
      
    },
    {
      path:"success",
      element:<Success />
    },
    {
      path:"cancel",
      element:<Cancel />
    },
    {
      path:"SingleUser/:id",
      element:<SingleUser />
    },
  
    {
      path:"*",
      element: <h1>NOT FOUND</h1>
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>  
)
