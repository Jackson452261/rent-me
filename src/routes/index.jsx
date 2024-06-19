import { useRoutes } from "react-router-dom";
import {Home, ProductDetail,BannerDetail, NotFound, AddProduct, Login, Favorite, ProductList} from "@/pages"
 
export const SetRoutes = () =>
    
    {
     return useRoutes([
        {
        path: '/',
        element: <Home />
     },
     {
        path: '/productDetail/:id',
        element: <ProductDetail />
     },
     {
      path: '/bannerDetail/:id',
      element: <BannerDetail />
   },
     {
      path: '/addProduct',
      element: <AddProduct />
   },
   {
      path: '/login',
      element: <Login />
   },
   {
      path: '/favorite',
      element: <Favorite />
   },
   {
      path: '/productList',
      element: <ProductList />
   },
   {
        path: '/*',
        element: <NotFound/>
   }
    ])
}