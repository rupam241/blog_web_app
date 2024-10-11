import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import BlogContextProvider from './Context/BlogContextProvider';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  {/* Home route */}
          {/* Separate Signup route */}
      </Route>
      <Route>
      <Route path="login" element={<Login />} />  {/* Separate Login route */}
      <Route path="signup" element={<Signup />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogContextProvider> {/* Wrap RouterProvider with BlogContextProvider */}
      <RouterProvider router={router} />
    </BlogContextProvider>
  </StrictMode>
);
