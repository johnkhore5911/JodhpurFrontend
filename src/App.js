import React from 'react'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },

    {
      path: '/login',
      element: <Login />
    },

    {
      path: '*',
      element: <NotFound />
    },
  ]
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
      <GoogleOAuthProvider clientId="shubham2005garg@gmail.com">
      <Login />
      </GoogleOAuthProvider>
    </div>
  )
}

export default App