import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ShopContext } from './context/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { root } from './root/index.jsx'

createRoot(document.getElementById('root')).render(

  <ShopContext>
      <RouterProvider router={root}/>
  </ShopContext>
  
)
