import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
], {
  basename: '/mem08/'  // Add basename for GitHub Pages deployment
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{ backgroundColor: '#181818', color: '#ffffff', minHeight: '100vh', width: '100%' }}>
    <RouterProvider router={router} />
  </div>
)