import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeIndex from "@/views/home/HomeIndex.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeIndex />,
  },
  {
    path: '*',
    element: <div>This is 404 Page</div>
  },
])


export default router