import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Header from './common/header';
import About from './pages/about';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './pages/courses';
import Error from './pages/error';

const root = ReactDOM.createRoot(document.getElementById('root'));
const allRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/course',
      element:<Courses/>
    },
    {
      path:'/*',
      element:<Error/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
