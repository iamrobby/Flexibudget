import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingApp from './App.jsx'
import FrontendApp from './App2.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<LandingApp />,
  },
  {
    path: '/chat',
    element: <FrontendApp />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
