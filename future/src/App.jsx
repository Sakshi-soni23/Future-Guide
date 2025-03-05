import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Query from "./components/Query";
import Videos from "./components/videos";
import FeedBAck from "./components/FeedBack";
import Field from "./components/Field";
import Home from "./components/Home";
import Loginpage from "./components/Loginpage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/Field",
      element: (
        <>
          <Field />
         
        </>
      ),
    },
    {
      path: "/Videos",
      element: (
        <>
        
          <Videos />
        </>
      ),
    },
    {
      path: "/Query",
      element: (
        <>
         
          <Query />
        </>
      ),
    },
    {
      path: "/FeedBack",
      element: (
        <>
        
          <FeedBAck />
        </>
      ),
    },
    {
      path: "/Loginpage",
      element: (
        <>
           <Loginpage/>
        </>
      ),
    },
  ]);
  return  <RouterProvider router={router} />
}

export default App;
