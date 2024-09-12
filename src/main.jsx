
import { createRoot } from 'react-dom/client'

import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import About from './assets/pages/About.jsx'
import Contact from './assets/pages/contact.jsx'
import Services from './assets/pages/Services.jsx'
import SingleStudent from './assets/pages/SingleStudent.jsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout />,
  children: [
    {
      path:"",
      element: <Home />
    },
 
    {
      path:"About",
      element: <About />,
      children: [
        {
          path: "",
          element: <h1>Person 1</h1>
        },
        {
          path: "person2",
          element: <h1>Person 2</h1>
        },
        {
          path: "person3",
          element: <h1>Person 3</h1>
        },
      ]
    },
    {
      path:"Contact",
      element: <Contact />
    },
    {
      path:"Services",
      element: <Services />
    },
    {
      path :"SingleStudent/:id",
      element: <SingleStudent/>
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
