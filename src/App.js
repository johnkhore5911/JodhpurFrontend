import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import Hospital from './pages/Hospital';
import { LanguageProvider } from './LanguageContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },

  {
    path: '/patient',
    element: <Patient />
  },

  {
    path: '/doctor',
    element: <Doctor />
  },

  {
    path: '/hospital',
    element: <Hospital />
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <LanguageProvider>
      <GoogleOAuthProvider clientId="shubham2005garg@gmail.com">
      <RouterProvider router={router} />
      <Toaster />
    </GoogleOAuthProvider>
    </LanguageProvider>
    
  );
};

export default App;
