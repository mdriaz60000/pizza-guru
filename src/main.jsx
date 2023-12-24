import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import myCreateRoutes from './Router/Routes'
import AuthProvider from './Provider/AuthProvider'
 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className=' max-w-[1280px] mx-auto'>
    <AuthProvider>
    <RouterProvider router={myCreateRoutes}></RouterProvider>
    </AuthProvider>
  </div>
  </React.StrictMode>,
)
