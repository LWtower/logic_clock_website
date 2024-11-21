import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeIndex from "@/views/home/HomeIndex.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeIndex />,
  },
  {
    path: '*',
    element: <div>404 Website Illustration</div>
  },
])


export default router