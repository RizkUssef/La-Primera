// import { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'
// import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Powerd from './Components/Powerd/Powerd';


const router = createBrowserRouter([
  {path:"", element: <Layout/> , children:[
    {path: "", element: <Main/> },
    {path: "/about", element: <About/> },
    {path: "/powerd-by", element: <Powerd/> },
    // {path: "register", element: <Register/> },
    // {path: "login", element: <Login/> },
    // {path: "logout", element: <Logout/> },
    // {path: "nav", element: <Navbar/> },
  ]
},
{path:"*", element:<h1>ERROR</h1>}
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
