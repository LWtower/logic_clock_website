import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeIndex from "@/views/home/HomeIndex.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeIndex />,
  },
  {
    path: '*', // 找不到路由显示的页面
    element: <div>这是404页面</div>
  },
])


export default router