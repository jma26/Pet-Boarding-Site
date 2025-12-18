import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Layout from './layouts/Layout.tsx';
import App from './App.tsx'

const router = createBrowserRouter([
  { 
    element: <Layout /> ,
    children: [
      {
        path: '/',
        element: <App />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
